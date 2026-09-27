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
      className="mx-auto mt-10 max-w-[360px] rounded-[6px] border border-[#e4dfd0] bg-white p-7 shadow-[0_4px_24px_rgba(11,42,70,0.06)]"
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
        className="h-[46px] w-full rounded-[3px] border border-[#d6d0be] px-4 text-[15px] text-navy focus:border-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark/15"
      />
      {error && (
        <p role="alert" className="mt-2 text-[13px] text-[#b4442f]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 flex h-[46px] w-full items-center justify-center rounded-[4px] bg-navy-dark text-[14px] font-medium text-white transition-colors hover:bg-[#0a2a42] disabled:opacity-70"
      >
        {status === "sending" ? "Checking..." : "Sign In"}
      </button>
    </form>
  );
}
