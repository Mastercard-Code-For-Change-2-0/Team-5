import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ email: "", password: "", name: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");
    alert(`${mode === "login" ? "Logged in" : "Registered"} successfully! ✅`);
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900/90 to-black/90 text-white relative overflow-hidden">
      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg p-8">
        {/* Tabs */}
        <div className="flex justify-around mb-8">
          <button
            onClick={() => setMode("login")}
            className={`px-6 py-2 font-semibold rounded-lg transition ${
              mode === "login"
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("register")}
            className={`px-6 py-2 font-semibold rounded-lg transition ${
              mode === "register"
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Animated Form */}
        <AnimatePresence mode="wait">
          <motion.form
            key={mode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {mode === "register" && (
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="youremail@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {error && <p className="text-green-400 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-green-600 hover:bg-green-700 transition text-white shadow-md"
            >
              {mode === "login" ? "Login" : "Register"}
            </button>
          </motion.form>
        </AnimatePresence>

        {/* Switch link */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          {mode === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-green-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-green-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
