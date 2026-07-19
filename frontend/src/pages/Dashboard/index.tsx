import StatsCard from "../../components/dashboard/StatsCard";
import QuickActions from "../../components/dashboard/QuickActions";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIInsights from "../../components/dashboard/AIInsights";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Welcome Back 👋
      </h1>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard title="Documents" value="124" color="border-blue-500" />
        <StatsCard title="Equipment" value="52" color="border-green-500" />
        <StatsCard title="AI Queries" value="983" color="border-purple-500" />
        <StatsCard title="Compliance" value="96%" color="border-red-500" />
      </div>

      <div className="grid grid-cols-3 gap-6">

        <div className="col-span-2">
          <RecentActivity />
        </div>

        <AIInsights />

      </div>

      <div className="mt-6">
        <QuickActions />
      </div>

    </div>
  );
}