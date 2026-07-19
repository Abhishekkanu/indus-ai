const insights = [
  "3 documents require review.",
  "Pump P203 has repeated maintenance issues.",
  "Compliance score improved by 4%.",
  "2 manuals are missing metadata.",
];

export default function AIInsights() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        AI Insights
      </h2>

      <ul className="space-y-4">
        {insights.map((item) => (
          <li
            key={item}
            className="bg-blue-50 p-3 rounded-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}