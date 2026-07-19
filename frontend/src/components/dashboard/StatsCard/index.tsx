interface Props {
  title: string;
  value: string;
  color: string;
}

export default function StatsCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div
      className={`rounded-xl p-6 shadow bg-white border-l-4 ${color}`}
    >
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}