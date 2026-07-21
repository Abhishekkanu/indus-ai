import api from "./api";

export async function sendMessage(
  message: string,
  document: string
) {

  const response = await api.post("/api/chat", {
    message,
    document,
  });

  return response.data;

}