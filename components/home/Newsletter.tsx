"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/data/site";

type Status = "idle" | "sending" | "success" | "duplicate" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const body = new FormData();
      body.append("email", email.trim());
      body.append("company", company);
      const res = await fetch("/api/newsletter", { method: "POST", body });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus(data.duplicate ? "duplicate" : "success");
        return;
      }
      if (res.status === 422 && data.errors?.email) {
        setError(data.errors.email);
        setStatus("idle");
        return;
      }
      setStatus("error");
      setError(
        data.error === "not_configured"
          ? `Newsletter signup isn't connected yet. Please email us at ${contactEmail}.`
          : `Something went wrong. Please try again, or email us at ${contactEmail}.`,
      );
    } catch {
      setStatus("error");
      setError("We couldn't reach the server. Please check your connection and try again.");
    }
  };

  const done = status === "success" || status === "duplicate";

  return (
    <section aria-labelledby="newsletter-heading" className="wrap pb-20">
      <div className="paper mx-auto max-w-[720px] rounded-[28px] bg-white/80 px-6 py-10 text-center shadow-paper ring-1 ring-white sm:px-10">
        <h2
          id="newsletter-heading"
          className="font-serif text-[30px] font-medium leading-tight tracking-[-0.02em] text-navy sm:text-[36px]"
        >
          Stay Ahead of Your Career
        </h2>
        <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-[1.7] text-ink-body">
          Get occasional career insights, resume advice, and opportunities from Veylora.
        </p>

        {done ? (
          <p
            role="status"
            className="mx-auto mt-7 max-w-[420px] rounded-2xl bg-[#f3f8fc] px-6 py-4 text-[14.5px] font-medium text-navy ring-1 ring-[#d5e6f2]"
          >
            {status === "duplicate"
              ? "You're already subscribed. Thanks for being here."
              : "You're subscribed. Welcome to Veylora."}
          </p>
        ) : (
          <form onSubmit={submit} noValidate className="mx-auto mt-7 flex max-w-[480px] flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email address"
              aria-invalid={!!error}
              aria-describedby={error ? "newsletter-error" : undefined}
              className="h-12 flex-1 rounded-full border border-[#d3e3f0] bg-white px-5 text-[15px] text-navy placeholder:text-[#8ea3b8] focus:border-[#8eb8d6] focus:outline-none focus:ring-4 focus:ring-[#d3e8f6]"
            />
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Company
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-navy shrink-0 px-6 disabled:cursor-wait disabled:opacity-70">
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        )}

        {error && (
          <p id="newsletter-error" role="alert" className="mx-auto mt-3 max-w-[460px] text-[13px] text-[#b4442f]">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
