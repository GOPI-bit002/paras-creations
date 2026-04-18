"use client";

import { useEffect, useState } from "react";
import { isAuthenticated, login } from "@/lib/auth";
import { company } from "@/data/company";

// ----------------------------------------------------------------
// DEMO AUTH GATE
// This is client-side only and uses localStorage.
// Replace with NextAuth / JWT / real sessions before production.
// ----------------------------------------------------------------

export default function AdminAuthGate({
  children
}: {
  children: React.ReactNode;
}) {
  const [checked, setChecked] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthed(isAuthenticated());
    setChecked(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setAuthed(true);
      setError("");
    } else {
      setError("Invalid credentials. Try admin / admin123.");
    }
  };

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-soft">
        <div className="text-gray-500 text-sm">Loading admin panel…</div>
      </div>
    );
  }

  if (authed) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden p-4">
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
      />

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto h-14 w-14 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black font-extrabold text-2xl shadow-gold">
            P
          </div>
          <h1 className="mt-5 font-display font-bold text-2xl text-white">
            {company.name}
          </h1>
          <div className="text-xs uppercase tracking-[0.25em] text-brand-gold mt-1 font-semibold">
            Admin Login
          </div>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
              className="w-full bg-white/10 border border-white/20 text-white rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder-white/40"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 text-white rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder-white/40"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-300 bg-red-500/10 border border-red-500/30 rounded-md px-3 py-2 text-xs">
              {error}
            </div>
          )}

          <button type="submit" className="btn-primary w-full justify-center">
            Sign In →
          </button>

          <div className="text-center text-xs text-white/50 pt-4 border-t border-white/10">
            Demo credentials — <span className="text-brand-gold">admin</span> /{" "}
            <span className="text-brand-gold">admin123</span>
          </div>
        </form>

        <div className="text-center mt-6">
          <a href="/" className="text-xs text-white/50 hover:text-brand-gold">
            ← Back to main website
          </a>
        </div>
      </div>
    </div>
  );
}
