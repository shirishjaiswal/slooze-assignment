"use client";
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  AlertTriangle,
  Zap,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import {
  chartConfig,
  earningsData,
  overviewData,
  recentSales,
  stats,
  weeklyData,
} from "./data";

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (user?.role !== "Manager") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="pt-8 text-center">
            <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full w-fit mx-auto mb-4">
              <AlertTriangle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Access Restricted
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This dashboard is exclusively available to Managers only.
            </p>
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Current Role:{" "}
                <span className="font-semibold">{user?.role}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </div>
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div
                  className={`flex items-center space-x-1 text-xs ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <TrendIcon className="h-3 w-3" />
                  <span>{stat.change}</span>
                  <span className="text-gray-500">vs last month</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview Chart */}
        <Card className="lg:col-span-2 shadow-md border-0">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={overviewData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Recent Sales */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle className="text-lg">Recent Sales</CardTitle>
            <CardDescription>You Made 265 Sales This Week</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium">
                    {sale.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {sale.name}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{sale.email}</p>
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {sale.amount}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Additional Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earnings Chart */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Total Earning</CardTitle>
            <div className="text-2xl font-bold">$112,893.00</div>
            <div className="text-sm text-green-600">+4.3% vs last month</div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <AreaChart data={earningsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Weekly Chart */}
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Total Earning</CardTitle>
            <div className="text-2xl font-bold">$112,893.00</div>
            <div className="text-sm text-green-600">+4.3% vs last week</div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
