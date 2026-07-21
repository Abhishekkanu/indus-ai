import api from "./api";

export const getDocuments = async () => {
  const response = await api.get("/api/documents");
  return response.data;
};

export async function deleteDocument(id: string) {
  const response = await api.delete(`/api/documents/${id}`);
  return response.data;
}

export async function getDocumentNames() {

    const response = await api.get("/api/document-names");

    return response.data;

}