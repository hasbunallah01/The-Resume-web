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
  "h-[48px] w-full rounded-[3px] border border-[#d6d0be] bg-white px-4 text-[15px] text-navy placeholder:text-[#9aa5af] transition-colors focus:border-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark/15 aria-[invalid=true]:border-[#b4442f]";

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
      <label htmlFor={id} className="mb-2 block text-[13.5px] font-medium text-navy">
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
      <legend className="mb-2.5 text-[13.5px] font-medium text-navy">
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
              className="h-[17px] w-[17px] shrink-0 cursor-pointer appearance-none rounded-full border border-[#b5ae98] bg-white transition-all checked:border-[5px] checked:border-navy-dark focus-visible:ring-2 focus-visible:ring-navy-dark/30"
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
    <section id="form" aria-labelledby="form-heading" className="scroll-mt-6 bg-ivory">
      <div className="mx-auto grid w-[min(1232px,calc(100%-48px))] items-start gap-8 py-14 lg:grid-cols-[1.7fr_1fr] lg:gap-8 lg:py-[80px]">
        {/* ---------- Form ---------- */}
        <div
          ref={formRef}
          className="scroll-mt-6 rounded-[4px] border border-[#e4dfd0] bg-white px-6 py-8 shadow-[0_4px_24px_rgba(11,42,70,0.06)] sm:px-9 sm:py-10"
        >
          {status === "success" ? (
            <div className="py-10 text-center" role="status">
              <span className="mx-auto inline-flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#ddd5be] bg-[#faf8f2] text-navy">
                <CheckCircleIcon className="h-[32px] w-[32px]" />
              </span>
              <h2 className="mt-6 font-serif text-[32px] font-[500] leading-[1.15] text-navy">
                Thank you, {values.firstName.trim() || "and welcome"}.
              </h2>
              <p className="mx-auto mt-4 max-w-[460px] text-[15.5px] leading-[1.7] text-ink-body">
                We&rsquo;ve received your request and will be in touch soon to
                talk about your career goals and the best next step.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-7 text-[14px] font-medium text-navy underline decoration-gold decoration-[1.5px] underline-offset-[6px]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2
                id="form-heading"
                className="font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.01em] text-navy sm:text-[34px]"
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
                    className={`flex min-h-[48px] cursor-pointer items-center gap-3.5 rounded-[3px] border border-dashed px-4 py-2.5 transition-colors ${
                      dragging
                        ? "border-navy-dark bg-[#eef3f7]"
                        : "border-[#c9c2ac] bg-[#fbfaf6] hover:border-navy-dark"
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
                className="mt-8 flex h-[54px] w-full items-center justify-center gap-2.5 rounded-[4px] bg-navy-dark text-[15px] font-medium text-white transition-colors hover:bg-[#0a2a42] disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Submit My Request"}
                {status !== "sending" && <ArrowRight className="h-[16px] w-[16px]" />}
              </button>
              <p className="mt-4 text-center text-[12.5px] text-ink-muted">
                Your information is used only to respond to your request.
              </p>
            </form>
          )}
        </div>

        {/* ---------- Side panels ---------- */}
        <aside className="rounded-[4px] border border-[#e6dfcd] bg-[#f4efe4] px-6 py-8 sm:px-9 sm:py-10 lg:sticky lg:top-6">
          <h2 className="font-serif text-[30px] font-[500] leading-[1.15] tracking-[-0.01em] text-navy">
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
            className="mt-6 inline-flex h-[48px] items-center gap-2.5 rounded-[4px] border border-navy-dark px-6 text-[14px] font-medium text-navy-dark transition-colors hover:bg-navy-dark hover:text-white"
          >
            Help Me Choose
            <ArrowRight className="h-[15px] w-[15px]" />
          </button>

          <div className="my-9 h-px bg-[#dfd7c1]" />

          <h3 className="font-serif text-[24px] font-[500] text-navy">Get in Touch Directly</h3>
          <ul className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#d9d0b8] bg-white text-navy">
                <MailIcon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="text-[14px] font-semibold text-navy">Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-0.5 block break-all text-[14.5px] text-ink-body underline decoration-gold decoration-[1.5px] underline-offset-4 hover:text-navy"
                >
                  {contactEmail}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#d9d0b8] bg-white text-navy">
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
              <span className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#d9d0b8] bg-white text-navy">
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
