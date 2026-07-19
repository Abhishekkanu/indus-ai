import FileCard from "../FileCard";

const files = [
  {
    name: "Pump_Manual.pdf",
    status: "Ready",
  },
  {
    name: "Inspection_Report.pdf",
    status: "OCR Running",
  },
  {
    name: "Safety_SOP.pdf",
    status: "Processing",
  },
];

export default function UploadList() {
  return (
    <div className="space-y-4">

      {files.map((file) => (
        <FileCard
          key={file.name}
          {...file}
        />
      ))}

    </div>
  );
}