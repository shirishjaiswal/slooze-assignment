import { TrendingUp, Users, DollarSign, Eye } from "lucide-react";

const stats = [
  {
    title: "Total Earning",
    value: "$112,893.00",
    change: "+4.3%",
    trend: "up",
    icon: DollarSign,
    color: "blue",
  },
  {
    title: "Views",
    value: "112,893",
    change: "+18.2%",
    trend: "up",
    icon: Eye,
    color: "green",
  },
  {
    title: "Total Sales",
    value: "112,893",
    change: "+12.1%",
    trend: "up",
    icon: TrendingUp,
    color: "purple",
  },
  {
    title: "Subscriptions",
    value: "112,893",
    change: "+8.5%",
    trend: "up",
    icon: Users,
    color: "orange",
  },
];

const overviewData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 2000 },
  { month: "Apr", value: 2780 },
  { month: "May", value: 1890 },
  { month: "Jun", value: 2390 },
  { month: "Jul", value: 3490 },
  { month: "Aug", value: 2000 },
  { month: "Sep", value: 2780 },
  { month: "Oct", value: 1890 },
  { month: "Nov", value: 2390 },
  { month: "Dec", value: 3490 },
]; 

const earningsData = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 25000 },
  { month: "Apr", value: 40000 },
  { month: "May", value: 30000 },
  { month: "Jun", value: 25000 },
  { month: "Jul", value: 35000 },
  { month: "Aug", value: 45000 },
  { month: "Sep", value: 35000 },
  { month: "Oct", value: 30000 },
  { month: "Nov", value: 40000 },
  { month: "Dec", value: 45000 },
];

const weeklyData = [
  { day: "Mo", value: 250 },
  { day: "Tu", value: 200 },
  { day: "We", value: 300 },
  { day: "Th", value: 350 },
  { day: "Fr", value: 200 },
  { day: "Sa", value: 400 },
  { day: "Su", value: 300 },
];

const recentSales = [
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
  {
    name: "Indra Maulana",
    email: "indramaulana@gmail.com",
    amount: "$1500.00",
  },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "#3b82f6",
  },
};

export {
  stats,
  earningsData,
  overviewData,
  chartConfig,
  recentSales,
  weeklyData,
};
