import { useEffect, useState } from "react";
import { sendMessage } from "../../api/chatApi";
import { getDocumentNames } from "../../api/documentApi";

interface ChatMessage {
  role: "user" | "ai";
  text: string;
}

export default function Chat() {
  const [documents, setDocuments] = useState<string[]>([]);
  const [selectedDocument, setSelectedDocument] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const data = await getDocumentNames();

      setDocuments(data);

      if (data.length > 0) {
        setSelectedDocument(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    if (!selectedDocument) {
      alert("Please select a document.");
      return;
    }

    const question = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: question,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await sendMessage(
        question,
        selectedDocument
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: response.reply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Failed to contact AI service.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-2">
        Industrial AI Assistant
      </h1>

      <p className="text-gray-500 mb-6">
        Ask questions about your uploaded documents.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-600">
          Selected Document
        </p>

        <select
          className="mt-2 w-full border rounded-lg p-3 bg-white"
          value={selectedDocument}
          onChange={(e) =>
            setSelectedDocument(e.target.value)
          }
        >
          {documents.map((doc) => (
            <option key={doc} value={doc}>
              {doc}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="space-y-4 mb-6 max-h-[450px] overflow-y-auto">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`rounded-xl p-4 ${
                msg.role === "user"
                  ? "bg-blue-100 ml-20"
                  : "bg-gray-100 mr-20"
              }`}
            >

              <div className="flex justify-between items-center mb-2">

                <strong>
                  {msg.role === "user"
                    ? "👤 You"
                    : "🤖 AI"}
                </strong>

                {msg.role === "ai" && (
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        msg.text
                      )
                    }
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Copy
                  </button>
                )}

              </div>

              <p className="whitespace-pre-wrap">
                {msg.text}
              </p>

            </div>

          ))}

          {loading && (

            <div className="bg-yellow-50 rounded-lg p-4 mr-20 animate-pulse">

              <strong>🤖 AI</strong>

              <p className="mt-2">
                Thinking...
              </p>

            </div>

          )}

        </div>

        <textarea
          className="w-full border rounded-lg p-4 h-32 resize-none"
          placeholder="Ask anything about the selected document..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Send
        </button>

        <button
  onClick={() => setMessages([])}
  className="ml-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
>
  Clear Chat
</button>

      </div>

    </div>
  );
}