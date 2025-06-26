import { useState, useEffect } from "react";
import {
  FiHome,
  FiPackage,
  FiGrid,
  FiShoppingCart,
  FiTruck,
  FiPieChart,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiBell,
  FiSun,
  FiMoon,
  FiPlus,
  FiAlertTriangle,
  FiChevronRight,
  FiTrendingUp,
  FiTrendingDown,
  FiRefreshCw,
  FiBarChart2,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const InventoryDashboard = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Default to light mode
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) return savedMode === "true";
      return false; // Default to light mode
    }
    return false;
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isLoading, setIsLoading] = useState(false);

  // Sample data
  const kpiData = [
    { title: "Total Items", value: "1,248", change: "+12%", trend: "up", icon: <FiPackage /> },
    { title: "Low Stock", value: "24", change: "+3%", trend: "down", icon: <FiAlertTriangle /> },
    { title: "Categories", value: "18", change: "+2%", trend: "up", icon: <FiGrid /> },
    { title: "Pending Orders", value: "7", change: "-1%", trend: "down", icon: <FiShoppingCart /> },
    { title: "Active Users", value: "42", change: "+8%", trend: "up", icon: <FiUsers /> },
    { title: "Monthly Revenue", value: "$24,589", change: "+15%", trend: "up", icon: <FiDollarSign /> },
  ];

  const recentActivities = [
    { id: 1, item: "Wireless Headphones", action: "Stock updated", quantity: "+50", time: "10 min ago", type: "in" },
    { id: 2, item: "Mechanical Keyboard", action: "New item added", quantity: "+1", time: "25 min ago", type: "add" },
    { id: 3, item: "Bluetooth Speaker", action: "Stock updated", quantity: "-12", time: "1 hour ago", type: "out" },
    { id: 4, item: "USB-C Cable", action: "Stock updated", quantity: "+100", time: "2 hours ago", type: "in" },
    { id: 5, item: "Wireless Mouse", action: "Stock updated", quantity: "-8", time: "3 hours ago", type: "out" },
    { id: 6, item: "Monitor Stand", action: "Stock adjustment", quantity: "+5", time: "5 hours ago", type: "adjust" },
  ];

  const lowStockItems = [
    { id: 1, name: "Wireless Mouse", stock: 3, threshold: 10, category: "Peripherals", daysLeft: 2 },
    { id: 2, name: "HDMI Cable", stock: 5, threshold: 15, category: "Cables", daysLeft: 4 },
    { id: 3, name: "Laptop Stand", stock: 2, threshold: 5, category: "Accessories", daysLeft: 1 },
    { id: 4, name: "USB Hub", stock: 4, threshold: 8, category: "Accessories", daysLeft: 3 },
    { id: 5, name: "Webcam", stock: 1, threshold: 5, category: "Electronics", daysLeft: 1 },
  ];

  const topSellingItems = [
    { id: 1, name: "Wireless Earbuds", sales: 142, revenue: "$8,520", stock: 56 },
    { id: 2, name: "Mechanical Keyboard", sales: 98, revenue: "$7,840", stock: 32 },
    { id: 3, name: "Power Bank", sales: 87, revenue: "$3,045", stock: 45 },
    { id: 4, name: "USB-C Hub", sales: 76, revenue: "$4,560", stock: 28 },
  ];

  // Chart data - Light theme colors
  const inventoryStatusData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "In Stock",
        data: [1200, 1100, 1300, 1250, 1400, 1450],
        backgroundColor: "rgba(74, 222, 128, 0.7)",
        borderColor: "rgba(74, 222, 128, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
      {
        label: "Low Stock",
        data: [15, 20, 18, 22, 25, 24],
        backgroundColor: "rgba(245, 158, 11, 0.7)",
        borderColor: "rgba(245, 158, 11, 1)",
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const categoryDistributionData = {
    labels: ["Electronics", "Accessories", "Cables", "Peripherals", "Other"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          "rgba(59, 130, 246, 0.7)",
          "rgba(139, 92, 246, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(99, 102, 241, 0.7)",
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(99, 102, 241, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const salesTrendData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 8, 15, 22, 18, 25],
        backgroundColor: "rgba(99, 102, 241, 0.7)",
        borderColor: "rgba(99, 102, 241, 1)",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const refreshData = () => {
    setIsLoading(true);
    // Simulate data refresh
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const navItems = [
    { icon: <FiHome />, label: "Dashboard" },
    { icon: <FiPackage />, label: "Items" },
    { icon: <FiGrid />, label: "Categories" },
    { icon: <FiShoppingCart />, label: "Orders" },
    { icon: <FiTruck />, label: "Suppliers" },
    { icon: <FiPieChart />, label: "Reports" },
    { icon: <FiSettings />, label: "Settings" },
    { icon: <FiLogOut />, label: "Logout" },
  ];

  return (
    <div className={`flex h-screen bg-gray-50 transition-colors duration-300 ${sidebarOpen ? "overflow-hidden" : ""}`}>
      {/* Sidebar */}
      <div
        className={`fixed md:relative z-30 w-72 h-full bg-white shadow-lg transition-all duration-300 ease-in-out border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {sidebarOpen ? (
            <h1 className="text-xl font-bold text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InventoryPro
            </h1>
          ) : (
            <h1 className="text-xl font-bold text-blue-600">IP</h1>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-gray-100 md:hidden transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center w-full p-3 rounded-lg transition-all duration-200 ${
                    activeTab === item.label
                      ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border border-blue-200 shadow-sm"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {sidebarOpen && <span className="ml-3">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {sidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-600">
                <span className="font-medium">Upgrade to Pro</span> for advanced analytics
              </p>
              <button className="mt-2 w-full py-1.5 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-opacity duration-200">
                Upgrade Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-20 border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="p-2 mr-2 rounded-md hover:bg-gray-100 hidden md:block transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search inventory..."
                  className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white placeholder-gray-400 transition-all duration-200"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={refreshData}
                disabled={isLoading}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Refresh data"
              >
                <FiRefreshCw
                  className={`text-gray-500 ${isLoading ? "animate-spin" : ""}`}
                />
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FiSun className="text-yellow-400 w-5 h-5" />
                ) : (
                  <FiMoon className="text-gray-600 w-5 h-5" />
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors duration-200">
                <FiBell className="text-gray-600 w-5 h-5" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium shadow-sm">
                  JD
                </div>
                {sidebarOpen && (
                  <span className="ml-2 text-gray-700 hidden md:inline text-sm font-medium">
                    John Doe
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
              <p className="text-gray-600">
                Welcome back! Here's what's happening with your inventory today.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center">
                <FiBarChart2 className="mr-2" /> Generate Report
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200 flex items-center">
                <FiPlus className="mr-2" /> Add Item
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-6">
            {kpiData.map((kpi, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-3">
                      {kpi.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-500">{kpi.title}</p>
                    <h3 className="text-xl font-bold mt-1 text-gray-800">{kpi.value}</h3>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
                      kpi.trend === "up"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {kpi.trend === "up" ? (
                      <FiTrendingUp className="mr-1" />
                    ) : (
                      <FiTrendingDown className="mr-1" />
                    )}
                    {kpi.change}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        kpi.trend === "up" ? "bg-gradient-to-r from-green-400 to-green-500" : "bg-gradient-to-r from-red-400 to-red-500"
                      }`}
                      style={{ width: `${Math.random() * 70 + 30}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            {/* Inventory Status Chart */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Inventory Status</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm bg-white border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                  <button className="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200">
                    <FiRefreshCw className="text-gray-500 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="h-72">
                <Bar
                  data={inventoryStatusData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "top",
                        labels: {
                          color: "#374151",
                        },
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: "rgba(0, 0, 0, 0.05)",
                        },
                        ticks: {
                          color: "#6B7280",
                        },
                      },
                      x: {
                        grid: {
                          color: "rgba(0, 0, 0, 0.05)",
                        },
                        ticks: {
                          color: "#6B7280",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>

            {/* Category Distribution Chart */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Category Distribution</h3>
                <button className="text-sm text-blue-600 hover:underline">View All</button>
              </div>
              <div className="h-72">
                <Pie
                  data={categoryDistributionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: "right",
                        labels: {
                          color: "#374151",
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === "in"
                          ? "bg-green-100 text-green-600"
                          : activity.type === "out"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      <FiPackage />
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-800 truncate">
                          {activity.item}
                        </h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {activity.action} •{" "}
                        <span
                          className={
                            activity.quantity.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {activity.quantity}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Widgets */}
            <div className="space-y-5">
              {/* Low Stock Alerts */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Low Stock Alerts</h3>
                  <button className="text-sm text-blue-600 hover:underline">View All</button>
                </div>
                <div className="space-y-3">
                  {lowStockItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FiAlertTriangle className="text-red-500 mr-2 flex-shrink-0" />
                          <h4 className="text-sm font-medium text-gray-800 truncate">
                            {item.name}
                          </h4>
                        </div>
                        <span className="text-xs font-medium text-red-600 whitespace-nowrap ml-2">
                          {item.stock}/{item.threshold}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-gray-600">{item.category}</span>
                        <span className="text-xs text-red-500">
                          {item.daysLeft} day{item.daysLeft !== 1 ? "s" : ""} left
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Selling Items */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Top Selling Items</h3>
                  <button className="text-sm text-blue-600 hover:underline">View All</button>
                </div>
                <div className="space-y-4">
                  {topSellingItems.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <div className="w-10 h-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <FiPackage />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 truncate">
                          {item.name}
                        </h4>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{item.sales} sold</span>
                          <span>{item.revenue}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sales Trend */}
              <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Sales Trend</h3>
                  <select className="text-sm bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                </div>
                <div className="h-40">
                  <Bar
                    data={salesTrendData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          grid: {
                            color: "rgba(0, 0, 0, 0.05)",
                          },
                          ticks: {
                            color: "#6B7280",
                          },
                        },
                        x: {
                          grid: {
                            color: "rgba(0, 0, 0, 0.05)",
                          },
                          ticks: {
                            color: "#6B7280",
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InventoryDashboard;