const activities = [
  "Pump_Manual.pdf uploaded",
  "Safety_Report.pdf processed",
  "Inspection_Report.pdf analyzed",
  "AI generated maintenance summary",
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Recent Activity
      </h2>

      <ul className="space-y-4">
        {activities.map((item) => (
          <li
            key={item}
            className="border-b pb-2 text-gray-700"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}