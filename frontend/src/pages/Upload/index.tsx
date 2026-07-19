import DropZone from "../../components/upload/DropZone";
import UploadList from "../../components/upload/UploadList";
import ProcessingTimeline from "../../components/upload/ProcessingTimeline";

export default function Upload() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Upload Documents
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">
          <DropZone />

          <div className="mt-6">
            <UploadList />
          </div>
        </div>

        <ProcessingTimeline />

      </div>

    </div>
  );
}