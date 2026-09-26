"use client";

import { useState, type FormEvent } from "react";
import { contactEmail } from "@/data/site";
import { ArrowRight } from "../Icons";

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
    <section aria-labelledby="newsletter-heading" className="bg-[#f3efe4]">
      <div className="mx-auto w-[min(820px,calc(100%-48px))] py-14 text-center lg:py-[76px]">
        <h2
          id="newsletter-heading"
          className="font-serif text-[28px] font-[500] leading-[1.2] tracking-[-0.01em] text-navy sm:text-[34px]"
        >
          Stay Ahead of Your Career
        </h2>
        <p className="mx-auto mt-3.5 max-w-[460px] text-[15px] leading-[1.7] text-ink-body">
          Get occasional career insights, resume advice, and opportunities
          from Veylora.
        </p>

        {done ? (
          <p
            role="status"
            className="mx-auto mt-7 max-w-[420px] rounded-[4px] border border-[#d8c8a0] bg-white px-6 py-4 text-[14.5px] font-medium text-navy"
          >
            {status === "duplicate"
              ? "You're already subscribed. Thanks for being here."
              : "You're subscribed. Welcome to Veylora."}
          </p>
        ) : (
          <form
            onSubmit={submit}
            noValidate
            className="mx-auto mt-7 flex max-w-[460px] flex-col gap-3 sm:flex-row"
          >
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
              className="h-[48px] flex-1 rounded-[3px] border border-[#d6d0be] bg-white px-4 text-[15px] text-navy placeholder:text-[#9aa5af] focus:border-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark/15"
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
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex h-[48px] shrink-0 items-center justify-center gap-2 rounded-[3px] bg-navy-dark px-6 text-[14.5px] font-medium text-white transition-colors hover:bg-[#0a2a42] disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "Subscribing..." : "Subscribe"}
              {status !== "sending" && <ArrowRight className="h-[14px] w-[14px]" />}
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
