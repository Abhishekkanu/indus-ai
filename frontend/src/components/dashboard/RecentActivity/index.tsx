interface DocumentData {
  id: string;
  fileName: string;
  status: string;
}

interface Props {
  documents?: DocumentData[];
}

export default function RecentActivity({
  documents = [],
}: Props) {

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      {documents.length === 0 ? (

        <p className="text-gray-500">
          No recent activity.
        </p>

      ) : (

        <ul className="space-y-4">

          {documents.map((doc) => (

            <li
              key={doc.id}
              className="border-b pb-2 text-gray-700"
            >
              {doc.fileName} — {doc.status}
            </li>

          ))}

        </ul>

      )}

    </div>
  );
}