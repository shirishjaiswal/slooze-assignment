import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, Package, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  currentPage: string;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      link: "/home/dashboard",
      icon: LayoutDashboard,
      allowedRoles: ["Manager"],
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "products",
      label: "Products",
      icon: Package,
      link: "/home/products",
      allowedRoles: ["Manager", "Store Keeper"],
      color: "text-green-600 dark:text-green-400",
    },
    {
      id: "add-product",
      label: "Add Product",
      icon: Plus,
      link: "/home/add-new-product",
      allowedRoles: ["Manager", "Store Keeper"],
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  const { user } = useAuth();

  const filteredItems = menuItems.filter(
    (item) => user && item.allowedRoles.includes(user.role)
  );

  return (
    <aside
      className={`
      fixed inset-y-0 left-0 z-50 w-72
      bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
      transition-transform duration-300 ease-in-out
      flex flex-col shadow-xl lg:shadow-none
      ${!sidebarOpen ? "-translate-x-full" : "translate-x-0"}
      lg:translate-x-0 lg:static lg:inset-0
    `}
    >
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div>
            <h2 className="font-semibold text-gray-900 dark:text-white">
              Commodity Control
            </h2>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {filteredItems.map(({ id, link, label, icon: Icon, color }) => {
          const isActive = currentPage === id;
          return (
            <button
              key={id}
              onClick={() => {
                setSidebarOpen(false);
              }}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-xl
                transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              `}
            >
              <Icon className={`h-5 w-5 ${isActive ? "text-white" : color}`} />
              <Link href={link || ""}>{label}</Link>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
