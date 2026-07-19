import { FaCloudUploadAlt } from "react-icons/fa";

interface Props {
  onFileSelect: (files: File[]) => void;
}

export default function DropZone({ onFileSelect }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    onFileSelect(Array.from(event.target.files));
  };

  return (
    <div className="border-2 border-dashed border-blue-400 rounded-xl p-16 bg-white text-center">

      <FaCloudUploadAlt
        className="mx-auto text-blue-600"
        size={70}
      />

      <h2 className="text-2xl font-bold mt-6">
        Drag & Drop Documents
      </h2>

      <p className="text-gray-500 mt-3">
        or choose your files
      </p>

      <label className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700">

        Choose File

        <input
          hidden
          multiple
          type="file"
          onChange={handleChange}
        />

      </label>

      <p className="mt-6 text-sm text-gray-400">
        PDF • DOCX • PNG • JPG
      </p>

    </div>
  );
}