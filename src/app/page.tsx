"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Package, Eye, EyeOff } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const success = await login(email, password);
    if (!success) {
      setError("Invalid email or password");
      return;
    }

    router.replace("/home/products");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <div className="flex flex-col justify-center items-center w-1/2 px-16 bg-white shadow-lg">
        <div className="w-full max-w-xl">
          <section className="shadow-md border border-gray-200 rounded-lg p-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Sign in to access your commodity management dashboard
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 border border-gray-300 rounded-md px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <Label
                  htmlFor="password"
                  className="block mb-1 text-sm font-semibold text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 pr-12 border border-gray-300 rounded-md px-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <Alert
                  variant="destructive"
                  className="bg-red-50 border border-red-300"
                >
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin inline-block" />
                    Signing in...
                  </>
                ) : (
                  "Sign In to Dashboard"
                )}
              </Button>
            </form>

            <section className="mt-10 bg-indigo-50 rounded-lg p-5 border border-indigo-200">
              <p className="text-indigo-700 font-semibold flex items-center mb-3 text-sm">
                Demo Access Credentials
              </p>
              <div className="space-y-4 text-xs text-indigo-900">
                <div className="bg-white p-3 rounded-md border border-indigo-100">
                  <p className="font-semibold">Manager Account</p>
                  <p>manager@company.com / password</p>
                  <p className="text-indigo-600 mt-1 text-xs">
                    Full dashboard access
                  </p>
                </div>
                <div className="bg-white p-3 rounded-md border border-indigo-100">
                  <p className="font-semibold text-green-700">
                    Store Keeper Account
                  </p>
                  <p>keeper@company.com / password</p>
                  <p className="text-indigo-600 mt-1 text-xs">
                    Product management access
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>

      <div className="w-1/2 bg-gradient-to-tr from-indigo-700 via-purple-700 to-pink-600 text-white flex flex-col justify-center items-start px-16 py-12 space-y-8">
        <h2 className="text-4xl font-extrabold leading-tight max-w-lg">
          About
        </h2>

        <section className="max-w-lg space-y-4">
          <h3 className="text-2xl font-bold border-b border-white/40 pb-2">
            About Me
          </h3>
          <p className="text-lg font-bold text-white leading-snug ">
            Software Engineer{" "}
            <span className="text-md text-indigo-300 leading-relaxed">
              {" "}
              with 2 years of experience in
            </span>{" "}
            <br />
            <span className="font-bold text-white">
              {" "}
              Next.js{" "}
              <span className="text-md text-indigo-300 leading-relaxed">
                &
              </span>{" "}
              Spring Boot
            </span>
            .
          </p>
          <p className="text-md text-indigo-300 leading-relaxed">
            Led a dev team and awarded{" "}
            <span className="font-bold text-white ">
              Performer of the Quarter
            </span>{" "}
            for excellence in project delivery.
          </p>
          <p className="text-md font-medium text-indigo-200">
            Currently diving deep into{" "}
            <span className="italic">Generative AI, RAG, LangChain</span> —
            eager to build innovative AI-powered solutions.
          </p>
        </section>

        <section className="max-w-lg space-y-3">
          <h3 className="text-2xl font-semibold border-b border-white/40 pb-1">
            Project
          </h3>
          <p className="text-base leading-relaxed opacity-90">
            This project mainly focuses on the UI; only the login logic is
            handled using AuthContext and localStorage. The data in the project
            is dummy, sourced from LLM models.
          </p>
        </section>

        <section className="max-w-lg space-y-2 mt-6">
          <h4 className="text-lg font-medium text-white/70 border-b border-white/20 pb-1">
            Next Steps
          </h4>
          <p className="text-sm text-white/50 leading-snug">
            Connect to backend, and make proper authentication verification via
            mail, and fetching the data from the db.
          </p>
        </section>

        <section className="mt-6">
          <Link
            href="https://github.com/shirishjaiswal/slooze-assignment.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.53-3.88-1.53-.52-1.3-1.26-1.64-1.26-1.64-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.18 1.74 1.18 1.01 1.73 2.64 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.91 10.91 0 012.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.13-1.18 3.13-1.18.63 1.59.24 2.77.12 3.06.73.8 1.17 1.82 1.17 3.07 0 4.4-2.69 5.37-5.25 5.65.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A10.52 10.52 0 0023.5 12C23.5 5.74 18.27.5 12 .5z" />
            </svg>
            View on GitHub
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Login;
