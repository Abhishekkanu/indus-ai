import { useState } from "react";

import { uploadFile } from "../../api/uploadApi";
import DropZone from "../../components/upload/DropZone";
import UploadList from "../../components/upload/UploadList";
import ProcessingTimeline from "../../components/upload/ProcessingTimeline";

export default function Upload() {

  const [files, setFiles] = useState<File[]>([]);

const handleFiles = async (selectedFiles: File[]) => {

    setFiles((prev) => [...prev, ...selectedFiles]);

    for (const file of selectedFiles) {

        try {

            const response = await uploadFile(file);

            console.log(response);

            alert(response.message);

        } catch (error) {

            console.error(error);

            alert("Upload Failed");

        }

    }

};

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Upload Documents
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <DropZone
            onFileSelect={handleFiles}
          />

          <div className="mt-6">

            <UploadList
              files={files}
            />

          </div>

        </div>

        <ProcessingTimeline />

      </div>

    </div>
  );
}