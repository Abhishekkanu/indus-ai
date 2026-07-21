import { useEffect, useState } from "react";
import type { DocumentData } from "../../types/document";

import { uploadFile } from "../../api/uploadApi";
import { getDocuments } from "../../api/documentApi";

import DropZone from "../../components/upload/DropZone";
import UploadList from "../../components/upload/UploadList";
import ProcessingTimeline from "../../components/upload/ProcessingTimeline";

export default function Upload() {

  const [files, setFiles] = useState<DocumentData[]>([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      const documents = await getDocuments();
      setFiles(documents);
    } catch (error) {
      console.error("Failed to load documents:", error);
    }
  };

  const handleFiles = async (selectedFiles: File[]) => {

    for (const file of selectedFiles) {

      try {

        const response = await uploadFile(file);

        console.log(response);

        await loadDocuments();

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
              onDelete={loadDocuments}
            />

          </div>

        </div>

        <ProcessingTimeline />

      </div>

    </div>

  );

}