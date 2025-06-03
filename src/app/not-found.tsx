import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/" passHref>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-200">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
