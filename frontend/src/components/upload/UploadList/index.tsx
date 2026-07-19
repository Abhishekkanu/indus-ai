interface Props {
  files: File[];
}

export default function UploadList({ files }: Props) {
  return (
    <div className="space-y-4">

      {files.map((file) => (
        <div
          key={file.name}
          className="bg-white rounded-lg shadow p-4 flex justify-between"
        >

          <div>

            <h3 className="font-semibold">
              {file.name}
            </h3>

            <p className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>

          </div>

          <span className="text-green-600">
            Selected
          </span>

        </div>
      ))}

    </div>
  );
}