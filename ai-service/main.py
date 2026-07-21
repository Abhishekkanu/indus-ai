import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel
from groq import Groq

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

app = FastAPI()

# ---------------- Load Environment ----------------

env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(dotenv_path=env_path, override=True)

key = os.getenv("GROQ_API_KEY")

print("Looking for:", env_path)
print("Exists:", env_path.exists())
print("Groq API Loaded:", key is not None)

if not key:
    raise Exception("GROQ_API_KEY not found in .env")

client = Groq(api_key=key)

# ---------------- PDF Settings ----------------

UPLOAD_FOLDER = Path("../backend/uploads")

embedding = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)

# Stores one FAISS index per document
vectorstores = {}

# ---------------- Request Model ----------------

class ChatRequest(BaseModel):
    message: str
    document: str


# ---------------- Build Vector Store ----------------

def build_vectorstore(pdf_path: Path):

    loader = PyPDFLoader(str(pdf_path))
    docs = loader.load()

    if not docs:
        return None

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100
    )

    chunks = splitter.split_documents(docs)

    if not chunks:
        return None

    return FAISS.from_documents(
        chunks,
        embedding
    )


# ---------------- Startup ----------------

@app.on_event("startup")
def startup():

    print("Loading PDFs...")

    if not UPLOAD_FOLDER.exists():
        return

    for pdf in UPLOAD_FOLDER.glob("*.pdf"):

        print("Loading:", pdf.name)

        db = build_vectorstore(pdf)

        if db is not None:
            vectorstores[pdf.name] = db

    print(f"Loaded {len(vectorstores)} documents")


# ---------------- Chat ----------------

@app.post("/chat")
def chat(request: ChatRequest):

    if request.document not in vectorstores:
        return {
            "reply": "This document could not be indexed. It may be a scanned PDF."
        }

    db = vectorstores[request.document]

    results = db.similarity_search(
        request.message,
        k=3
    )

    if not results:
        return {
            "reply": "No relevant information found in the selected document."
        }

    context = "\n\n".join(
        doc.page_content
        for doc in results
    )

    prompt = f"""
You are an Industrial AI Assistant.

Answer ONLY using the document context below.

If the answer is not available in the context, reply exactly:

I could not find this information in the selected document.

Document Context:
{context}

Question:
{request.message}
"""

    try:

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": "You are an industrial AI assistant. Answer ONLY from the provided document."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.2,
            max_tokens=1024
        )

        return {
            "reply": response.choices[0].message.content
        }

    except Exception as e:

        print("Groq Error:", e)

        return {
            "reply": str(e)
        }