import type { ComponentType, ReactNode } from "react";
import CloudBank from "./CloudBank";
import { PlaneLine } from "./LineIcons";

type IconC = ComponentType<{ className?: string }>;

/** Small raised tile that holds a line icon. */
export function IconTile({ Icon, dark = false, className = "" }: { Icon: IconC; dark?: boolean; className?: string }) {
  return (
    <span className={`${dark ? "icon-tile-dark" : "icon-tile"} ${className}`}>
      <Icon className="h-[22px] w-[22px]" />
    </span>
  );
}

/** Italic accent word with a hand drawn pen stroke underneath. Keep it to one or two words. */
export function Accent({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`accent ${light ? "accent-light" : ""}`}>
      {children}
      <svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
        <path pathLength={1} d="M3 9.5C42 4.8 86 3.6 128 5.2c24 .9 46 2.6 69 5.6" />
      </svg>
    </span>
  );
}

/** Tiny paper plane on a dotted trail, used as a section ornament. */
export function PlaneTrail({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <svg viewBox="0 0 240 90" aria-hidden="true" className={`pointer-events-none ${className}`} fill="none">
      <path
        d="M4 78C40 76 62 58 92 52c34-7 52 14 82 4 20-7 32-22 44-38"
        stroke={light ? "rgba(191,224,250,0.55)" : "#9fc2de"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="1.5 6"
      />
      <g transform="translate(210 6) rotate(8)" stroke={light ? "#e6f3fd" : "#2f6fa6"} strokeWidth="1.4" strokeLinejoin="round">
        <path d="M0 14 24 2 15 24l-4-7-11-3Z" fill={light ? "rgba(255,255,255,0.12)" : "#fff"} />
        <path d="m11 17 6-9" />
      </g>
    </svg>
  );
}

/** Deep navy band with a quiet star field and glow, optionally ending in a cloud bank. */
export function NavyBand({
  children,
  className = "",
  clouds = false,
  labelledBy,
  as = "section",
}: {
  children: ReactNode;
  className?: string;
  clouds?: boolean;
  labelledBy?: string;
  as?: "section" | "div";
}) {
  const Tag = as;
  return (
    <Tag aria-labelledby={labelledBy} className={`navy-band relative isolate overflow-hidden text-white ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="starfield absolute inset-0" />
        <div className="starfield starfield-b absolute inset-0 animate-twinkle-slow" />
        <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(118,176,230,0.32),transparent)]" />
        <div className="absolute -bottom-40 -left-24 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(86,140,210,0.22),transparent)]" />
        {clouds ? (
          <>
            <CloudBank
              className="bottom-0 h-[calc(var(--cloud-h)*1.3)] [--cloud-h:clamp(110px,13vw,190px)] [mask-image:linear-gradient(180deg,transparent,#000_55%)]"
              layers={[
                { scale: 0.7, opacity: 0.32, seconds: 260, lift: "26%", reverse: true },
                { scale: 1, opacity: 0.55, seconds: 170, lift: "0%" },
              ]}
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#e6f1fa]" />
          </>
        ) : null}
      </div>
      {children}
    </Tag>
  );
}

export type FlightStep = { n: string; title: string; text: string; Icon?: IconC };

/**
 * Numbered steps joined by a dotted flight path. A small paper plane travels
 * along the path as the list scrolls through view (vertical on phones,
 * horizontal on desktop). Static when reduced motion is preferred.
 */
export function FlightSteps({
  steps,
  numerals = false,
  cols = 4,
  dark = false,
}: {
  steps: readonly FlightStep[];
  /** Large outlined numerals instead of icons, for problem style lists */
  numerals?: boolean;
  cols?: 1 | 2 | 3 | 4 | 5;
  dark?: boolean;
}) {
  const grid = { 1: "", 2: "sm:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" }[cols];
  const horizontal = cols >= 3;
  return (
    <div data-flight className="relative">
      <div aria-hidden="true" className={`flight-track-y absolute bottom-10 left-[23px] top-6 w-px ${horizontal ? "lg:hidden" : ""} ${dark ? "is-dark" : ""}`}>
        <span className="flight-fill" />
        <span data-flight-plane="y" className="flight-plane">
          <PlaneLine className="h-[15px] w-[15px] rotate-[135deg]" />
        </span>
      </div>
      {horizontal ? (
        <div aria-hidden="true" className={`flight-track-x absolute left-6 right-6 top-[23px] hidden h-px lg:block ${dark ? "is-dark" : ""}`}>
          <span className="flight-fill" />
          <span data-flight-plane="x" className="flight-plane">
            <PlaneLine className="h-[15px] w-[15px] rotate-45" />
          </span>
        </div>
      ) : null}
      <ol className={`relative grid gap-4 sm:gap-5 ${grid}`}>
        {steps.map(({ n, title, text, Icon }) => (
          <li key={n} className={`relative pl-[62px] ${horizontal ? "lg:pl-0" : ""}`}>
            <span className={`flight-node absolute left-0 top-0 ${horizontal ? "lg:relative" : ""} ${dark ? "is-dark" : ""}`}>
              {Icon && !numerals ? <Icon className="h-[20px] w-[20px]" /> : <span className="font-serif text-[15px] italic">{n}</span>}
            </span>
            <div className={`${dark ? "glass-dark" : "glass-card"} relative overflow-hidden rounded-[22px] p-5 sm:p-6 ${horizontal ? "lg:mt-5" : ""}`}>
              {numerals ? (
                <span aria-hidden="true" className={`numeral pointer-events-none absolute right-3 top-1 text-[64px] sm:text-[76px] ${dark ? "numeral-dark" : ""}`}>
                  {n}
                </span>
              ) : (
                <span className={`text-[11px] font-medium uppercase tracking-[0.18em] ${dark ? "text-[#a9cdea]" : "text-sky-ink"}`}>Step {n}</span>
              )}
              <h3 className={`relative font-serif text-[21px] font-medium leading-snug sm:text-[22px] ${numerals ? "max-w-[74%]" : "mt-2"} ${dark ? "text-white" : "text-navy"}`}>
                {title}
              </h3>
              <p className={`relative mt-2 text-[14.5px] leading-[1.65] ${dark ? "text-white/75" : "text-ink-muted"}`}>{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Section heading with an optional eyebrow. Pass the accent inside children. */
export function SectionHead({
  eyebrow,
  id,
  children,
  className = "",
  light = false,
  size = "md",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
  as?: "h2" | "h3";
}) {
  const sizes = {
    sm: "text-[28px] sm:text-[34px]",
    md: "text-[32px] sm:text-[40px]",
    lg: "text-[34px] sm:text-[44px]",
  }[size];
  return (
    <div className={className}>
      {eyebrow ? <p className={`eyebrow ${light ? "!text-[#a9cdea]" : ""}`}><span className="eyebrow-dot" />{eyebrow}</p> : null}
      <Tag
        id={id}
        className={`${eyebrow ? "mt-3" : ""} font-serif font-medium leading-[1.14] tracking-[-0.02em] ${sizes} ${light ? "text-white" : "text-navy"}`}
      >
        {children}
      </Tag>
    </div>
  );
}
