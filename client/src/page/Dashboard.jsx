import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 600 },
];

export default function Dashboard() {
  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <Header />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <StatsCard title="Total Products" value="23" />
        <StatsCard title="Total Sales" value="120" />
        <StatsCard title="Revenue" value="$5200" />
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded shadow mt-8">
        <h2 className="text-lg font-semibold mb-4">Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#facc15" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


