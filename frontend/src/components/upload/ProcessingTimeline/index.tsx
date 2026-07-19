const steps = [
  "Uploading",
  "OCR",
  "Chunking",
  "Embeddings",
  "Completed",
];

export default function ProcessingTimeline() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Processing Pipeline
      </h2>

      <div className="space-y-4">

        {steps.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              {index + 1}
            </div>

            <span>{step}</span>
          </div>
        ))}

      </div>

    </div>
  );
}