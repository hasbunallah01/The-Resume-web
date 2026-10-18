"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { sampleAlt, samplePages, samples, sampleLevels, type Sample } from "@/data/samples";
import { ArrowIcon } from "../visual/Marks";


const levels = ["All", ...sampleLevels.filter((l) => samples.some((s) => s.level === l))] as const;

function LevelBadge({ level }: { level: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#e7f2fa] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#2f5f88] ring-1 ring-[#d3e5f3]">
      {level}
    </span>
  );
}

function Lightbox({ sample, onClose }: { sample: Sample; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const shown = samplePages(sample);
  const pageNote =
    sample.pages === 1
      ? "One page resume."
      : shown.length >= sample.pages
        ? `All ${sample.pages} pages shown.`
        : shown.length === 1
          ? `Page one of ${sample.pages}.`
          : `Pages 1 to ${shown.length} of ${sample.pages}.`;

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const prev = [html.style.overflow, document.body.style.overflow];
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    // Focus the close button that is actually visible at this screen size.
    const closes = dialogRef.current?.querySelectorAll<HTMLElement>("[data-close]") ?? [];
    Array.from(closes).find((el) => el.offsetParent !== null)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = prev[0];
      document.body.style.overflow = prev[1];
      opener?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-[#0e1c33]/55 backdrop-blur-sm animate-[fade-in_320ms_cubic-bezier(.22,1,.36,1)] sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-dialog-title"
        className="relative flex max-h-[100dvh] w-full max-w-[980px] flex-col overflow-hidden bg-[#f4f9fc] shadow-lift sm:max-h-[calc(100dvh-48px)] sm:rounded-[28px] lg:flex-row"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#dbe8f2] px-5 py-4 lg:hidden">
          <div>
            <p id="sample-dialog-title" className="font-serif text-[20px] font-medium leading-tight text-navy">
              {sample.title}
            </p>
            <p className="mt-1 text-[13px] text-ink-muted">{sample.field}</p>
          </div>
          <button
            data-close
            type="button"
            onClick={onClose}
            aria-label="Close sample"
            className="inline-flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full bg-white text-navy ring-1 ring-[#d5e4f0]"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-auto overscroll-contain bg-[#e3eef7] p-4 sm:p-6">
          <div className={`mx-auto transition-[max-width] duration-500 ease-sky ${zoomed ? "max-w-[1200px]" : "max-w-[620px]"}`}>
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              aria-pressed={zoomed}
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
              className={`block w-full overflow-hidden rounded-[6px] bg-white shadow-[0_24px_60px_rgba(20,56,92,0.18)] ring-1 ring-black/5 ${zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            >
              {shown.map((img, i) => (
                <span key={img.src} data-page={i + 1} className={`relative block ${i > 0 ? "border-t-[10px] border-[#e3eef7]" : ""}`}>
                {shown.length > 1 ? (
                  <span aria-hidden="true" className="absolute left-3 top-3 z-[1] rounded-full bg-navy/85 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-white shadow-sm">
                    Page {i + 1} of {shown.length}
                  </span>
                ) : null}
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={`${sampleAlt(sample)}, page ${i + 1}`}
                  sizes={zoomed ? "1200px" : "(min-width: 640px) 620px, 100vw"}
                  className="h-auto w-full"
                  priority={i === 0}
                />
                </span>
              ))}
            </button>
          </div>
        </div>

        <div className="shrink-0 border-t border-[#dbe8f2] bg-[#f4f9fc] px-5 py-4 lg:flex lg:w-[320px] lg:flex-col lg:border-l lg:border-t-0 lg:px-7 lg:py-7">
          <div className="hidden items-start justify-between gap-4 lg:flex">
            <LevelBadge level={sample.level} />
            <button
              data-close
              type="button"
              onClick={onClose}
              aria-label="Close sample"
              className="-mr-2 -mt-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy ring-1 ring-[#d5e4f0] transition hover:bg-[#eef5fb]"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="hidden font-serif text-[26px] font-medium leading-tight text-navy lg:mt-5 lg:block">{sample.title}</p>
          <p className="hidden text-[14px] text-ink-muted lg:mt-1.5 lg:block">{sample.field}</p>
          <p className="hidden text-[14.5px] leading-[1.65] text-ink-body lg:mt-5 lg:block">{sample.summary}</p>
          <p className="hidden text-[13px] text-ink-soft lg:mt-4 lg:block">
            {pageNote} Contact details removed.
          </p>
          <div className="flex items-center justify-between gap-3 lg:mt-auto lg:block lg:pt-6">
            <p className="text-[12.5px] text-ink-soft lg:hidden">Tap the page to zoom</p>
            <a href={`/contact?sample=${sample.slug}`} className="btn-navy h-11 shrink-0 px-5 text-[14px] lg:w-full">
              Get a Resume Like This
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SampleGallery() {
  const [level, setLevel] = useState<(typeof levels)[number]>("All");
  const [open, setOpen] = useState<Sample | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const shown = level === "All" ? samples : samples.filter((s) => s.level === level);

  return (
    <section aria-label="Sample resumes" data-noreveal className="wrap pb-10">
      <div role="group" aria-label="Filter by career level" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {levels.map((l) => {
          const active = l === level;
          return (
            <button
              key={l}
              type="button"
              aria-pressed={active}
              onClick={() => setLevel(l)}
              className={`h-10 shrink-0 touch-manipulation rounded-full px-5 text-[14px] font-medium transition duration-200 ${
                active
                  ? "bg-navy-btn text-white shadow-[0_8px_20px_rgba(16,36,64,0.18)]"
                  : "bg-white/80 text-navy ring-1 ring-[#d5e4f0] hover:bg-white"
              }`}
            >
              {l}
            </button>
          );
        })}
      </div>

      <ul key={level} className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
        {shown.map((s, i) => (
          <li
            key={s.slug}
            className="animate-[rise_750ms_cubic-bezier(.22,1,.36,1)_both]"
            style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
          >
            <button
              type="button"
              onClick={() => setOpen(s)}
              data-tilt="5"
              className="group relative block h-full w-full rounded-[26px] bg-white/75 p-4 text-left shadow-paper ring-1 ring-white backdrop-blur-sm transition duration-500 ease-sky hover:bg-white hover:shadow-lift sm:p-5"
              aria-label={`View ${sampleAlt(s).replace("Sample", "sample")}`}
            >
              <div className="relative overflow-hidden rounded-[18px] bg-[linear-gradient(160deg,#e9f3fb,#d7e8f6)] px-8 pt-8 [perspective:1200px] sm:px-10 sm:pt-9">
                <div className="mx-auto max-w-[260px] origin-bottom transition-transform duration-700 ease-sky [transform:rotateX(6deg)_rotateZ(-1.2deg)] group-hover:[transform:rotateX(0deg)_rotateZ(0deg)_translateY(-6px)]">
                  <Image
                    src={s.thumb.src}
                    width={s.thumb.width}
                    height={s.thumb.height}
                    alt={sampleAlt(s)}
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 80vw"
                    className="h-auto w-full rounded-t-[4px] bg-white shadow-[0_18px_40px_rgba(20,56,92,0.18),0_2px_6px_rgba(20,56,92,0.08)] ring-1 ring-black/5"
                    loading="lazy"
                  />
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#d7e8f6]/90" />
              </div>
              <div className="px-1 pb-1 pt-5">
                <div className="flex items-center justify-between gap-3">
                  <LevelBadge level={s.level} />
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-sky-ink transition group-hover:text-navy">
                    View sample
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-[22px] font-medium leading-tight text-navy">{s.title}</h2>
                <p className="mt-1 text-[13.5px] text-ink-muted">{s.field}</p>
                <p className="mt-3 line-clamp-2 text-[14.5px] leading-[1.6] text-ink-body">{s.summary}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center text-[13.5px] text-ink-soft">Contact details removed to protect client privacy.</p>

      {open && <Lightbox sample={open} onClose={close} />}
    </section>
  );
}
