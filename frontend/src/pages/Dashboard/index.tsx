import { useEffect, useState } from "react";

import api from "../../api/api";
import { getDashboard } from "../../api/dashboardApi";

import StatsCard from "../../components/dashboard/StatsCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIInsights from "../../components/dashboard/AIInsights";

export default function Dashboard() {

  const [message, setMessage] = useState("");

  const [stats, setStats] = useState<any>({
    documents: 0,
    equipment: 0,
    aiQueries: 0,
    compliance: "0%",
    recent: [],
  });

  useEffect(() => {

    api.get("/hello")
      .then((response) => setMessage(response.data));

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    const data = await getDashboard();

    setStats(data);

  };

  return (

    <div>

      <h1 className="text-4xl font-bold mb-8">
        Industrial AI Dashboard
      </h1>

      <p className="text-green-600 mb-6">
        {message}
      </p>

      <div className="grid grid-cols-4 gap-6 mb-8">

        <StatsCard
          title="Documents"
          value={stats.documents.toString()}
          color="border-blue-500"
        />

        <StatsCard
          title="Equipment"
          value={stats.equipment.toString()}
          color="border-green-500"
        />

        <StatsCard
          title="AI Queries"
          value={stats.aiQueries.toString()}
          color="border-purple-500"
        />

        <StatsCard
          title="Compliance"
          value={stats.compliance}
          color="border-red-500"
        />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <RecentActivity
            documents={stats.recent}
          />

        </div>

        <AIInsights />
        

      </div>

      <div className="mt-6">
        <QuickActions />
      </div>

    </div>

    

  );

}