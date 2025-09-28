"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import "./styles/LoginPage.css";

export default function LoginPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

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

    const { data, error } = await supabase.auth.signInWithPassword({
      email: username, // if you want email login
      password: password,
    });

    if (error) {
      setError(error.message);
    } else {
      // later: fetch role (student/staff/admin)
      router.push("/dashboard");
    }
  }

  return (
    <main>
      {showSplash ? (
        <div id="splash" className={fadeOut ? "fade-out" : ""}>
          <img src="/img/bestlink logo.png" alt="School Logo" />
          <div className="loader"></div>
        </div>
      ) : (
        <div id="login-container">
          <h2>Registrar</h2>

          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <a href="#" className="forgot">
              Forgot Password?
            </a>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </main>
  );
}
