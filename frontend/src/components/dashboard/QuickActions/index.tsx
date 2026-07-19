import {
  FaUpload,
  FaRobot,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

const actions = [
  {
    title: "Upload Document",
    icon: FaUpload,
    color: "bg-blue-600",
  },
  {
    title: "Ask AI",
    icon: FaRobot,
    color: "bg-purple-600",
  },
  {
    title: "Generate Report",
    icon: FaFileAlt,
    color: "bg-green-600",
  },
  {
    title: "Compliance Check",
    icon: FaClipboardCheck,
    color: "bg-red-600",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className={`${action.color} text-white rounded-lg p-4 flex flex-col items-center gap-2 hover:opacity-90 transition`}
            >
              <Icon size={24} />
              <span>{action.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}