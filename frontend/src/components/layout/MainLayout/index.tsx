import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function MainLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-8 bg-gray-100 min-h-screen">
          <Outlet />
        </main>

      </div>

    </div>
  );
}