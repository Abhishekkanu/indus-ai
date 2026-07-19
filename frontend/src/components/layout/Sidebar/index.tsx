import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUpload,
  FaRobot,
  FaProjectDiagram,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

const menu = [
  { name: "Dashboard", icon: FaHome, path: "/dashboard" },
  { name: "Upload", icon: FaUpload, path: "/upload" },
  { name: "AI Chat", icon: FaRobot, path: "/chat" },
  { name: "Knowledge Graph", icon: FaProjectDiagram, path: "/graph" },
  { name: "Reports", icon: FaFileAlt, path: "/reports" },
  { name: "Profile", icon: FaUser, path: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        INDUS AI
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive ? "bg-blue-600" : "hover:bg-slate-800"
                }`
              }
            >
              <Icon />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}