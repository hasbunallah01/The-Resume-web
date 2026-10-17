"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setError(
        data.error === "not_configured"
          ? "Admin login isn't configured yet. Set ADMIN_REVIEWS_PASSWORD and ADMIN_SESSION_SECRET."
          : "Incorrect password.",
      );
    } catch {
      setStatus("error");
      setError("We couldn't reach the server. Please try again.");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="paper mx-auto mt-10 max-w-[380px] rounded-[28px] bg-white p-7 shadow-paper ring-1 ring-white"
    >
      <label htmlFor="admin-password" className="mb-2 block text-[13.5px] font-medium text-navy">
        Admin password
      </label>
      <input
        id="admin-password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 w-full rounded-2xl border border-[#d3e3f0] px-4 text-[15px] text-navy focus:border-[#8eb8d6] focus:outline-none focus:ring-4 focus:ring-[#d3e8f6]"
      />
      {error && (
        <p role="alert" className="mt-2 text-[13px] text-[#b4442f]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-navy mt-5 w-full disabled:opacity-70"
      >
        {status === "sending" ? "Checking..." : "Sign In"}
      </button>
    </form>
  );
}
