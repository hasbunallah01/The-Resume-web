"use client";

import { useEffect, useRef, useState, type ChangeEvent, type DragEvent, type FormEvent, type ReactNode } from "react";
import { writers } from "@/data/writers";
import { ArrowRight } from "../Icons";
import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  UploadIcon,
} from "../resumes/ResumeIcons";
import { contactEmail } from "@/data/site";

const LEVELS = [
  "Student / Recent Graduate",
  "Professional",
  "Manager",
  "Senior Professional",
  "Executive / C-Suite",
];
const SERVICES = [
  "Professional Resume",
  "Executive Resume",
  "Executive / C-Suite Package",
  "LinkedIn Profile",
  "Cover Letter",
  "Career Branding",
  "Not sure yet",
];
const SOURCES = [
  "Search engine",
  "LinkedIn",
  "Social media",
  "Referral from a friend or colleague",
  "Other",
];

const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = [".pdf", ".doc", ".docx"];
const writerSlugs = new Set(writers.map((w) => w.slug));

/** Writer slug from the profile link, only if it matches a known writer. */
function selectedWriterSlug() {
  if (typeof window === "undefined") return "";
  const raw = new URLSearchParams(window.location.search).get("writer") ?? "";
  return writerSlugs.has(raw) ? raw : "";
}

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  level: string;
  service: string;
  goals: string;
  source: string;
};
type Errors = Partial<Record<keyof Values | "resume", string>>;

const empty: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  level: "",
  service: "",
  goals: "",
  source: "",
};

const inputCls =
  "h-12 w-full rounded-2xl border border-[#d3e3f0] bg-white px-4 text-[15px] text-navy placeholder:text-[#8ea3b8] transition focus:border-[#8eb8d6] focus:outline-none focus:ring-4 focus:ring-[#d3e8f6] aria-[invalid=true]:border-[#b4442f] aria-[invalid=true]:ring-[#f6d9d2]";

function Field({
  id,
  label,
  required,
  optional,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-[13px] font-medium text-navy">
        {label}
        {required && <span className="ml-0.5 text-[#b4442f]">*</span>}
        {optional && <span className="ml-1 font-normal text-ink-muted">(Optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
          {error}
        </p>
      )}
    </div>
  );
}

function ChoiceGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  placeholder,
}: {
  name: string;
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder: string;
}) {
  const selectId = `${name}-select`;
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2.5 text-[13px] font-medium text-navy">
        {legend}
        <span className="ml-0.5 text-[#b4442f]">*</span>
      </legend>

      {/* Phones: compact dropdown */}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${inputCls} sm:hidden`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      {/* Larger screens: radio list */}
      <div className="hidden gap-[11px] sm:grid">
        {options.map((o) => (
          <label
            key={o}
            className="flex cursor-pointer items-center gap-3 text-[14.5px] text-ink-body"
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-full border border-[#b7c9d8] bg-white transition-all checked:border-[5px] checked:border-[#163056] focus-visible:ring-2 focus-visible:ring-[#8eb8d6]"
            />
            {o}
          </label>
        ))}
      </div>
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function ContactSection() {
  const [values, setValues] = useState<Values>(empty);
  const [writer, setWriter] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [dragging, setDragging] = useState(false);
  const goalsRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWriter(selectedWriterSlug());
  }, []);

  const set = (k: keyof Values) => (v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const onInput =
    (k: keyof Values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      set(k)(e.target.value);

  const pickFile = (f: File | undefined | null) => {
    if (!f) return;
    const ext = f.name.slice(f.name.lastIndexOf(".")).toLowerCase();
    if (!ALLOWED.includes(ext)) {
      setErrors((e) => ({ ...e, resume: "Please upload a PDF, DOC or DOCX file." }));
      return;
    }
    if (f.size > MAX_BYTES) {
      setErrors((e) => ({ ...e, resume: "That file is larger than 4 MB." }));
      return;
    }
    setErrors((e) => ({ ...e, resume: undefined }));
    setFile(f);
  };

  const onDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    pickFile(e.dataTransfer.files?.[0]);
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.firstName.trim()) e.firstName = "Please enter your first name.";
    if (!values.lastName.trim()) e.lastName = "Please enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!values.level) e.level = "Please choose your career level.";
    if (!values.service) e.service = "Please choose a service.";
    if (values.goals.trim().length < 10) e.goals = "Please tell us a little about your goals.";
    if (!values.source) e.source = "Please choose an option.";
    return e;
  };

  const submit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (status === "sending") return;
    const found = validate();
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      const el =
        document.getElementById(firstKey) ||
        document.getElementById(`${firstKey}-select`) ||
        document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const body = new FormData();
      (Object.keys(values) as (keyof Values)[]).forEach((k) => body.append(k, values[k].trim()));
      const writerSlug = writer || selectedWriterSlug();
      if (writerSlug) body.append("writer", writerSlug);
      body.append("website", website);
      if (file) body.append("resume", file);

      const res = await fetch("/api/contact", { method: "POST", body });
      if (res.ok) {
        setStatus("success");
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      setStatus("error");
      setMessage(
        data.error === "not_configured"
          ? `Our contact form isn't connected yet. Please email us directly at ${contactEmail}.`
          : `Something went wrong while sending your request. Please try again, or email us at ${contactEmail}.`,
      );
    } catch {
      setStatus("error");
      setMessage(`We couldn't reach the server. Please check your connection and try again, or email us at ${contactEmail}.`);
    }
  };

  const reset = () => {
    setValues(empty);
    setFile(null);
    setErrors({});
    setStatus("idle");
    setMessage("");
  };

  const helpMeChoose = () => {
    set("service")("Not sure yet");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => goalsRef.current?.focus({ preventScroll: true }), 450);
  };

  return (
    <section id="form" aria-labelledby="form-heading">
      <div className="wrap grid items-start gap-8 py-14 lg:grid-cols-[1.7fr_1fr] lg:gap-8 lg:py-20">
        {/* ---------- Form ---------- */}
        <div
          ref={formRef}
          className="paper rounded-[28px] bg-white/95 px-6 py-8 shadow-paper ring-1 ring-white sm:px-9 sm:py-10"
        >
          {status === "success" ? (
            <div className="py-10 text-center" role="status">
              <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f3fb] text-navy">
                <CheckCircleIcon className="h-[32px] w-[32px]" />
              </span>
              <h2 className="mt-6 font-serif text-[32px] font-medium leading-[1.15] text-navy">
                Thank you, {values.firstName.trim() || "and welcome"}.
              </h2>
              <p className="mx-auto mt-4 max-w-[460px] text-[15.5px] leading-[1.7] text-ink-body">
                We&rsquo;ve received your request and will be in touch soon to
                talk about your career goals and the best next step.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-7 text-[14px] font-medium text-navy underline decoration-[#9ec0da] decoration-2 underline-offset-[6px]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2
                id="form-heading"
                className="font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-navy sm:text-[34px]"
              >
                Tell Us About Your Career Goals
              </h2>

              <div className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                <Field id="firstName" label="First Name" required error={errors.firstName}>
                  <input
                    id="firstName"
                    name="firstName"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={onInput("firstName")}
                    placeholder="Enter your first name"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    className={inputCls}
                  />
                </Field>
                <Field id="lastName" label="Last Name" required error={errors.lastName}>
                  <input
                    id="lastName"
                    name="lastName"
                    autoComplete="family-name"
                    value={values.lastName}
                    onChange={onInput("lastName")}
                    placeholder="Enter your last name"
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    className={inputCls}
                  />
                </Field>
                <Field id="email" label="Email Address" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onInput("email")}
                    placeholder="Enter your email address"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputCls}
                  />
                </Field>
                <Field id="phone" label="Phone Number" optional>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={onInput("phone")}
                    placeholder="Enter your phone number"
                    className={inputCls}
                  />
                </Field>

                <ChoiceGroup
                  name="level"
                  legend="Current Career Level"
                  options={LEVELS}
                  value={values.level}
                  onChange={set("level")}
                  error={errors.level}
                  placeholder="Select your career level"
                />
                <ChoiceGroup
                  name="service"
                  legend="What service are you interested in?"
                  options={SERVICES}
                  value={values.service}
                  onChange={set("service")}
                  error={errors.service}
                  placeholder="Select a service"
                />

                <Field
                  id="goals"
                  label="Tell us about your career goals"
                  required
                  error={errors.goals}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="goals"
                    name="goals"
                    ref={goalsRef}
                    rows={5}
                    value={values.goals}
                    onChange={onInput("goals")}
                    maxLength={4000}
                    placeholder="Share a little about what you're looking for, your target role, industry, or any specific goals..."
                    aria-invalid={!!errors.goals}
                    aria-describedby={errors.goals ? "goals-error" : undefined}
                    className={`${inputCls} h-auto min-h-[130px] resize-y py-3 leading-[1.6]`}
                  />
                </Field>

                <Field id="source" label="How did you hear about Veylora?" required error={errors.source}>
                  <select
                    id="source"
                    name="source"
                    value={values.source}
                    onChange={onInput("source")}
                    aria-invalid={!!errors.source}
                    aria-describedby={errors.source ? "source-error" : undefined}
                    className={inputCls}
                  >
                    <option value="">Select an option</option>
                    {SOURCES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="resume" label="Upload Your Current Resume" optional error={errors.resume}>
                  <label
                    htmlFor="resume"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={onDrop}
                    className={`flex min-h-12 cursor-pointer items-center gap-3.5 rounded-2xl border border-dashed px-4 py-2.5 transition-colors ${
                      dragging
                        ? "border-[#163056] bg-[#eef6fb]"
                        : "border-[#c5d7e6] bg-[#f7fbfe] hover:border-[#163056]"
                    }`}
                  >
                    <UploadIcon className="h-[22px] w-[22px] shrink-0 text-navy" />
                    <span className="min-w-0 text-[13px] leading-[1.4] text-ink-muted">
                      {file ? (
                        <span className="block truncate font-medium text-navy">{file.name}</span>
                      ) : (
                        <>
                          <span className="font-medium text-navy">Choose file</span> or drag and
                          drop
                        </>
                      )}
                      <span className="block text-[11.5px]">PDF, DOC, DOCX (Max 4 MB)</span>
                    </span>
                    <input
                      ref={fileRef}
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(e) => pickFile(e.target.files?.[0])}
                      className="sr-only"
                    />
                  </label>
                  {file && (
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        if (fileRef.current) fileRef.current.value = "";
                      }}
                      className="mt-1.5 text-[12.5px] text-ink-muted underline underline-offset-4 hover:text-navy"
                    >
                      Remove file
                    </button>
                  )}
                </Field>
              </div>

              {/* Honeypot: hidden from people, visible to bots */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-6 rounded-[3px] border border-[#e6c3ba] bg-[#fbf1ee] px-4 py-3 text-[14px] leading-[1.55] text-[#8a3524]"
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-navy mt-8 h-[52px] w-full disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Submit My Request"}
                {status !== "sending" && <ArrowRight className="h-[16px] w-[16px]" />}
              </button>
              <p className="mt-4 text-center text-[12.5px] text-ink-muted">
                Your information is used only to respond to your request.
              </p>
              <p className="mt-2 text-center text-[12px] text-ink-soft">
                By submitting, you agree to our{" "}
                <a href="/terms" className="underline decoration-[#9ec0da] underline-offset-2 hover:text-navy">Terms</a> and{" "}
                <a href="/privacy" className="underline decoration-[#9ec0da] underline-offset-2 hover:text-navy">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>

        {/* ---------- Side panels ---------- */}
        <aside className="paper rounded-[28px] bg-white/70 px-6 py-8 shadow-paper ring-1 ring-white backdrop-blur-sm sm:px-9 sm:py-10 lg:sticky lg:top-24">
          <h2 className="font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.02em] text-navy">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-body">
            Not sure where to begin? No problem. Tell us a little about your
            career situation and what you&rsquo;re trying to accomplish.
            We&rsquo;ll help you identify the appropriate Veylora service.
          </p>
          <button
            type="button"
            onClick={helpMeChoose}
            className="btn-line mt-6"
          >
            Help Me Choose
            <ArrowRight className="h-[15px] w-[15px]" />
          </button>

          <div className="my-9 h-px bg-[#d5e4f0]" />

          <h3 className="font-serif text-[24px] font-medium text-navy">Get in Touch Directly</h3>
          <ul className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] text-[#3a7eb4]">
                <MailIcon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-navy">Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-0.5 block break-all text-[14.5px] text-ink-body underline decoration-[#9ec0da] decoration-2 underline-offset-4 hover:text-navy"
                >
                  {contactEmail}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] text-[#3a7eb4]">
                <ClockIcon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-navy">Response Time</p>
                <p className="mt-0.5 text-[14.5px] leading-[1.6] text-ink-muted">
                  We&rsquo;ll respond to your inquiry as soon as possible.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f3fb] text-[#3a7eb4]">
                <CalendarIcon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-navy">Availability</p>
                <p className="mt-0.5 text-[14.5px] leading-[1.6] text-ink-muted">
                  Career support for professionals, managers and executives.
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
