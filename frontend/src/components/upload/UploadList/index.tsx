import { deleteDocument } from "../../../api/documentApi";
import type { DocumentData } from "../../../types/document";

interface Props {
  files: DocumentData[];
  onDelete: () => void;
}

export default function UploadList({
  files,
  onDelete,
}: Props) {

  if (files.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
        No documents uploaded yet.
      </div>
    );
  }

  const handleDelete = async (id: string) => {

    if (!confirm("Delete this document?")) return;

    try {

      await deleteDocument(id);

      onDelete();

      alert("Document deleted.");

    } catch (e) {

      console.error(e);

      alert("Delete failed.");

    }

  };

  return (

    <div className="space-y-4">

      {files.map((file) => (

        <div
          key={file.id}
          className="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        >

          <div>

            <h3 className="font-semibold">
              {file.fileName}
            </h3>

            <p className="text-gray-500 text-sm">
              {file.status}
            </p>

          </div>

          <button
            onClick={() => handleDelete(file.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );

}