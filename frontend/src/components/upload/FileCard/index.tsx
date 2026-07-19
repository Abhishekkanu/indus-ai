interface Props {
  name: string;
  status: string;
}

export default function FileCard({
  name,
  status,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex justify-between">

      <div>

        <h3 className="font-semibold">
          {name}
        </h3>

      </div>

      <span className="text-blue-600">
        {status}
      </span>

    </div>
  );
}