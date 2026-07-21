# IndusAI

An AI-powered Industrial Document Assistant that allows users to upload industrial PDF documents, store them in MongoDB, and ask questions using Retrieval-Augmented Generation (RAG).

## Features

- Dashboard with document statistics
- PDF Upload & Management
- Delete Uploaded Documents
- AI Chat with Selected Document
- Retrieval-Augmented Generation (RAG)
- FAISS Vector Search
- Groq LLM Integration
- MongoDB Storage
- Spring Boot REST APIs
- React + TypeScript Frontend

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Spring Boot
- Java
- MongoDB

### AI Service
- FastAPI
- LangChain
- FAISS
- HuggingFace Embeddings
- Groq API

## Project Structure

```
INDUS-AI
│
├── frontend
├── backend
├── ai-service
```

## Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd INDUS-AI
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend

```bash
cd backend
./mvnw spring-boot:run
```

### 4. AI Service

```bash
cd ai-service

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload --port 8000
```

## Environment Variables

Create a file named `.env` inside the `ai-service` folder.

Example:

```env
GROQ_API_KEY=your_groq_api_key
```

A sample file (`.env.example`) is included in the repository.

## Developed By

**Abhishek Kanu**

B.Tech Information Technology

ABES Engineering College