import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  PieChart, 
  Pie,
  Cell
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  LayoutDashboard,
  CheckCircle,
  Download,
  PieChart as PieIcon
} from "lucide-react";

const recapData = [
  { name: "Mon", value: 20 },
  { name: "Tue", value: 45 },
  { name: "Wed", value: 30 },
  { name: "Thu", value: 60 },
  { name: "Fri", value: 40 },
  { name: "Sat", value: 70 },
  { name: "Sun", value: 50 },
];

const statsData = [
  { name: "Sep", value: 12 },
  { name: "Oct", value: 9 },
  { name: "Nov", value: 23 },
  { name: "Dec", value: 18 },
  { name: "Jan", value: 12 },
  { name: "Feb", value: 10 },
];

const comparisonData = [
  { name: "Jan", Sales: 400, Revenue: 240 },
  { name: "Feb", Sales: 300, Revenue: 139 },
  { name: "Mar", Sales: 200, Revenue: 980 },
  { name: "Apr", Sales: 278, Revenue: 390 },
  { name: "May", Sales: 189, Revenue: 480 },
  { name: "Jun", Sales: 239, Revenue: 380 },
  { name: "Jul", Sales: 349, Revenue: 430 },
];

const trafficData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const payments = [
  { name: "#3421", amount: "$129.00", time: "2 mins ago" },
  { name: "#3418", amount: "$89.00", time: "10 mins ago" },
  { name: "#3409", amount: "$300.00", time: "1 hr ago" },
];

const approvedQueue = [
  { title: "Stock margin payment", date: "14/04/2024", amount: "$122304" },
  { title: "Stock margin payment", date: "14/04/2024", amount: "$1004" },
];

const downloadStats = () => {
  const csvContent = ["Month,Value", ...statsData.map(d => `${d.name},${d.value}`)].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "statistics.csv";
  a.click();
  URL.revokeObjectURL(url);
};


// const ApprovedCard = () => {
  

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("recap");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <link
      href="https://fonts.google.com/specimen/Inter"
      rel="stylesheet"
    />
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="flex flex-col md:flex-row min-h-screen font-sans bg-white text-black relative pb-24 md:pb-0">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 p-4 bg-black text-white space-y-4">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <nav className="space-y-2">
          <button
            className={`w-full text-left p-2 rounded flex items-center gap-2 ${
              activeTab === "recap" ? "bg-white text-black font-semibold" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("recap")}
          >
            <LayoutDashboard size={16} /> Weekly Recap
          </button>
          <button
            className={`w-full text-left p-2 rounded flex items-center gap-2 ${
              activeTab === "stats" ? "bg-white text-black font-semibold" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("stats")}
          >
            <PieIcon size={16} /> Statistics
          </button>
          <button
            className={`w-full text-left p-2 rounded flex items-center gap-2 ${
              activeTab === "approved" ? "bg-white text-black font-semibold" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("approved")}
          >
            <CheckCircle size={16} /> Approved
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 space-y-6 bg-white">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
{activeTab === "recap" && (
            <>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Weekly recap</h2>
                <p className="text-gray-500 text-sm">Statistics overview</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-green-800 bg-green-200 px-2 py-1 rounded-full">
                    +25%
                  </span>
                  <span className="text-3xl font-bold">98.5k</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Approved transactions</p>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={recapData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0f172a"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-yellow-300 rounded-xl p-4 flex items-center space-x-4 shadow">
                <div className="bg-black text-white p-2 rounded-full">
                  <FileText size={20} />
                </div>
                <p className="text-sm text-black">
                  Transactions and reporting are in compliance with regulations and policies
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <p className="font-bold text-xl">36.7k</p>
                  <p className="text-gray-500">Transactions</p>
                </div>
                <div>
                  <p className="font-bold text-xl">18.5k</p>
                  <p className="text-gray-500">Pending flow</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Recent Payments</h3>
                <div className="space-y-2">
                  {payments.map((p) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-100 p-3 rounded-lg shadow-sm flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-sm text-gray-500">{p.time}</p>
                      </div>
                      <p className="font-semibold">{p.amount}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "stats" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Statistics</h2>
              <button
                  onClick={downloadStats}
                  className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded shadow"
                >
                  <Download size={18} /> Download
                </button>
            </div>
              <p className="text-gray-500 text-sm">Comparison</p>
              <div className="bg-gray-100 p-4 rounded-xl shadow">
                <h3 className="font-semibold text-lg mb-1">Comparison</h3>
                <p className="text-sm text-gray-500 mb-4">Amount of fraud transactions</p>
                <ResponsiveContainer width="100%" height={200}>
                <LineChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Sales" stroke="#4F46E5" strokeWidth={3} />
                  <Line type="monotone" dataKey="Revenue" stroke="#10B981" strokeWidth={3} />
                </LineChart>

                </ResponsiveContainer>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl shadow">
                <h4 className="font-semibold mb-2">Traffic</h4>
                <p className="text-sm text-gray-500 mb-4">Q4 • 23</p>
                <ResponsiveContainer width="100%" height={160}>

                <PieChart>
    <Pie
      data={trafficData}
      cx="50%"
      cy="90%"
      startAngle={180}
      endAngle={0}
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
      label
    >
      {trafficData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}

    </Pie>
    <Tooltip />
    <Legend layout="horizontal" verticalAlign="bottom" align="center" />

  </PieChart>
              </ResponsiveContainer>

              </div>

              <div className="bg-gray-100 p-4 rounded-xl shadow">
                <h4 className="font-semibold mb-2">Distribution</h4>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-500">2fa/ Verification</p>
                  <p className="font-semibold">82.0%</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-gray-500">Source on stats</p>
                  <p className="font-semibold">80.1%</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "approved" && (
            <>
              <h2 className="text-2xl font-bold">Approved</h2>
              <div className="bg-yellow-300 p-6 rounded-xl shadow flex justify-between items-start">
                <div>
                  <p className="text-sm font-semibold">Q1 • 2024</p>
                  <p className="text-3xl font-bold mt-1">84%</p>
                  <p className="text-sm mt-2">
                    Secure online payment gateway, fraud detection systems
                  </p>
                </div>
                <button className="bg-black text-white px-3 py-1 rounded"           onClick={() => setShowModal(true)}
                >+</button>
              </div>
              <AnimatePresence>

        {showModal && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-2">Q1 2024 - Details</h3>
              <p className="text-sm mb-4">Payment systems have increased success rate by 84% in Q1 with secured gateway & improved fraud protection.</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 bg-black text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
              
              <div className="bg-gray-100 p-4 rounded-xl shadow mt-4">
                <h4 className="text-green-600 font-semibold mb-2">Queue</h4>
                <p className="text-sm text-gray-500 mb-4">Next to process</p>
                <div className="space-y-2">
                  {approvedQueue.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-xs text-gray-400">{item.date}</p>
                      </div>
                      <p className="font-semibold">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </main>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-around bg-zinc-900 text-white rounded-full px-6 py-3 w-11/12 max-w-sm shadow-md md:hidden">
        <button
          onClick={() => setActiveTab("recap")}
          className={`flex flex-col items-center text-xs transition-colors ${
            activeTab === "recap" ? "text-yellow-400" : "text-white"
          }`}
        >
          <LayoutDashboard size={20} />
          <span>Recap</span>
        </button>
        <button
          onClick={() => setActiveTab("stats")}
          className={`flex flex-col items-center text-xs transition-colors ${
            activeTab === "stats" ? "text-yellow-400" : "text-white"
          }`}
        >
          <PieIcon size={20} />
          <span>Stats</span>
        </button>
        <button
          onClick={() => setActiveTab("approved")}
          className={`flex flex-col items-center text-xs transition-colors ${
            activeTab === "approved" ? "text-yellow-400" : "text-white"
          }`}
        >
          <CheckCircle size={20} />
          <span>Approved</span>
        </button>
      </nav>
    </div>
    </>
  );
}
