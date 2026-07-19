import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Chat from "../pages/Chat";
import KnowledgeGraph from "../pages/KnowledgeGraph";
import Reports from "../pages/Reports";
import Profile from "../pages/Profile";

import MainLayout from "../components/layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route element={<MainLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/graph" element={<KnowledgeGraph />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/profile" element={<Profile />} />

      </Route>

    </Routes>
  );
}