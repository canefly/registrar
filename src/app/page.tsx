"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const inputClasses =
    "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";
  const labelClasses = "block text-sm font-semibold text-blue-700";

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const removeTimer = setTimeout(() => setShowSplash(false), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const { data, error } = await supabase
      .from("users")
      .select("user_id, username, role_id, password_hash, active")
      .eq("username", username)
      .eq("password_hash", password) // ⚠️ plain text match (for now)
      .eq("active", true)
      .single();

    if (error || !data) {
      setError("Invalid login credentials");
      return;
    }

    console.log("Logged in:", data);

    // redirect based on role
    if (data.role_id === 1) {
      router.push("/admin");
    } else if (data.role_id === 2) {
      router.push("/staff");
    } else if (data.role_id === 3) {
      router.push("/student");
    } else {
      router.push("/dashboard"); // fallback
    }
  }

  return (
    <main
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4"
      style={{ backgroundImage: "url('/img/bg1.jpg')" }}
    >
      {showSplash ? (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${fadeOut ? "pointer-events-none opacity-0" : ""}`}
        >
          <Image
            src="/img/bestlink logo.png"
            alt="School Logo"
            width={150}
            height={150}
            priority
            className="mb-6 w-36"
          />
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-center text-3xl font-semibold text-blue-600">
            Registrar
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className={labelClasses} htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your email"
                required
                className={inputClasses}
              />
            </div>

            <div className="space-y-2">
              <label className={labelClasses} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className={inputClasses}
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-red-500">{error}</p>
            )}

            <a
              href="#"
              className="block text-right text-sm font-medium text-sky-700 transition hover:text-sky-800 hover:underline"
            >
              Forgot Password?
            </a>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-red-500"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </main>
  );
}
