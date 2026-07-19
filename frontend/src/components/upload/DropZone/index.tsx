import { FaCloudUploadAlt } from "react-icons/fa";

export default function DropZone() {
  return (
    <div className="border-2 border-dashed border-blue-400 rounded-xl p-16 bg-white text-center hover:border-blue-600 transition">

      <FaCloudUploadAlt
        className="mx-auto text-blue-600"
        size={70}
      />

      <h2 className="text-2xl font-bold mt-6">
        Drag & Drop Documents
      </h2>

      <p className="text-gray-500 mt-3">
        or click to browse your files
      </p>

      <button
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Choose File
      </button>

      <p className="mt-6 text-sm text-gray-400">
        PDF • DOCX • PNG • JPG
      </p>

    </div>
  );
}