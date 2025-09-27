"use client";

import { useEffect, useState } from "react";
import "./styles/LoginPage.css";

export default function LoginPage() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // start fade after 2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // remove splash from DOM after fade finishes (0.8s later)
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

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

          <form method="POST" action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />

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
