import { useId } from "react";

function ResumeSheet() {
  return (
    <div className="paper w-[86px] rounded-[4px] bg-white px-2 py-2 shadow-[0_14px_30px_rgba(28,72,112,0.16)] ring-1 ring-white sm:w-[104px] sm:px-2.5 sm:py-2.5">
      <div className="flex items-start justify-between">
        <div className="pt-0.5">
          <div className="h-[3px] w-8 rounded-full bg-[#1c3558]/75" />
          <div className="mt-1 h-[2px] w-6 rounded-full bg-[#9eb2c6]" />
        </div>
        <span className="h-5 w-5 rounded-full bg-[#e7f2fa] ring-1 ring-[#d5e4f0]" />
      </div>
      <div className="mt-2 space-y-[3px]">
        <div className="h-[2px] w-full rounded-full bg-[#d5e0ea]" />
        <div className="h-[2px] w-[90%] rounded-full bg-[#e1eaf2]" />
        <div className="h-[2px] w-[68%] rounded-full bg-[#e1eaf2]" />
      </div>
      <div className="mt-2 h-[2px] w-7 rounded-full bg-[#1c3558]/45" />
      <div className="mt-1.5 space-y-[3px]">
        <div className="h-[2px] w-full rounded-full bg-[#e7eef4]" />
        <div className="h-[2px] w-[78%] rounded-full bg-[#e7eef4]" />
      </div>
    </div>
  );
}

const trail = Array.from({ length: 26 }, (_, i) => {
  const t = (i / 26) * Math.PI * 2;
  return {
    left: 50 + Math.cos(t) * 40,
    top: 48 + Math.sin(t) * 30,
    star: i % 6 === 0,
    delay: `${(i % 7) * 0.35}s`,
  };
});

export default function PaperFlight() {
  const raw = useId().replace(/:/g, "");
  const shadow = `${raw}-shadow`;
  const left = `${raw}-left`;
  const right = `${raw}-right`;

  return (
    <div className="relative mx-auto h-[300px] w-full max-w-[560px] sm:h-[380px] lg:h-[460px]">
      <div className="absolute inset-[6%] " aria-hidden="true">
        {trail.map((dot, i) => (
          <span
            key={i}
            className="absolute motion-safe:animate-twinkle"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animationDelay: dot.delay,
            }}
          >
            {dot.star ? (
              <svg viewBox="0 0 24 24" className="h-3 w-3 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] sm:h-3.5 sm:w-3.5">
                <path d="M12 1.2 13.2 9.6 22 12 13.2 14.4 12 22.8 10.8 14.4 2 12 10.8 9.6Z" fill="currentColor" />
              </svg>
            ) : (
              <span className="block h-[5px] w-[5px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.95)]" />
            )}
          </span>
        ))}
      </div>

      <div className="absolute left-[4%] top-[8%] motion-safe:animate-floaty" style={{ animationDelay: "0.2s" }}>
        <div className="-rotate-[14deg]">
          <ResumeSheet />
        </div>
      </div>
      <div className="absolute right-[2%] top-[4%] hidden motion-safe:animate-floaty-slow sm:block" style={{ animationDelay: "1.1s" }}>
        <div className="rotate-[12deg] scale-90">
          <ResumeSheet />
        </div>
      </div>
      <div className="absolute bottom-[10%] right-[6%] motion-safe:animate-floaty" style={{ animationDelay: "0.6s" }}>
        <div className="rotate-[8deg] scale-[0.92]">
          <ResumeSheet />
        </div>
      </div>
      <div className="absolute bottom-[18%] left-[0%] hidden motion-safe:animate-floaty-slow sm:block" style={{ animationDelay: "1.6s" }}>
        <div className="-rotate-[6deg] scale-[0.8]">
          <ResumeSheet />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 w-[86%] max-w-[460px] -translate-x-1/2 -translate-y-[46%] motion-safe:animate-floaty-slow">
        <svg viewBox="0 0 640 460" className="h-auto w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id={`${raw}-wl`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="58%" stopColor="#fbfcfe" />
              <stop offset="100%" stopColor="#e6eef6" />
            </linearGradient>
            <linearGradient id={`${raw}-wr`} x1="0.1" y1="0" x2="0.9" y2="1">
              <stop offset="0%" stopColor="#f8fbfd" />
              <stop offset="100%" stopColor="#d4e2ee" />
            </linearGradient>
            <filter id={shadow} x="-35%" y="-35%" width="170%" height="180%">
              <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="#1d4e74" floodOpacity="0.18" />
              <feDropShadow dx="0" dy="3" stdDeviation="1.5" floodColor="#1d4e74" floodOpacity="0.08" />
            </filter>
            <clipPath id={left}>
              <path d="M468 86 L86 176 L246 308 Z" />
            </clipPath>
            <clipPath id={right}>
              <path d="M468 86 L246 308 L412 392 Z" />
            </clipPath>
          </defs>

          <ellipse cx="320" cy="400" rx="150" ry="16" fill="#7eabc8" opacity="0.28" />

          <g filter={`url(#${shadow})`}>
            <path d="M468 86 L246 308 L412 392 Z" fill={`url(#${raw}-wr)`} />
            <path d="M468 86 L86 176 L246 308 Z" fill={`url(#${raw}-wl)`} />
            <path d="M246 308 L228 326 L268 338 Z" fill="#c9d8e6" />
            <path d="M468 86 L246 308" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.95" />
            <path d="M468 86 L246 308" stroke="#c3d3e2" strokeWidth="1.15" strokeLinecap="round" />
            <path d="M468 86 L168 198" stroke="#ffffff" strokeWidth="1.2" opacity="0.7" />
          </g>

          <g clipPath={`url(#${left})`}>
            <g transform="translate(148 150) rotate(-11)">
              <text
                fontFamily="Playfair Display, Georgia, serif"
                fontSize="15"
                letterSpacing="1.8"
                fill="#1b3358"
              >
                RESUME
              </text>
              <text y="16" fontFamily="Inter Variable, system-ui, sans-serif" fontSize="6.4" letterSpacing="0.7" fill="#7d93aa">
                PROFESSIONAL SUMMARY
              </text>
              <rect y="24" width="86" height="2.2" rx="1" fill="#d5e0ea" />
              <rect y="31" width="104" height="2.2" rx="1" fill="#e4ecf3" />
              <rect y="38" width="76" height="2.2" rx="1" fill="#e4ecf3" />
              <rect y="45" width="92" height="2.2" rx="1" fill="#e4ecf3" />
              <circle cx="138" cy="20" r="15" fill="#e7f2fa" stroke="#d3e3f0" />
              <circle cx="138" cy="16" r="4.2" fill="#b7cbe0" />
              <path d="M128 30c2.4-4.2 6.2-6.4 10-6.4s7.6 2.2 10 6.4" fill="#c5d7e8" />
            </g>
          </g>

          <g clipPath={`url(#${right})`}>
            <g transform="translate(292 188) rotate(32)">
              <text fontFamily="Inter Variable, system-ui, sans-serif" fontSize="7" letterSpacing="0.85" fill="#6d86a1">
                EXPERIENCE
              </text>
              <rect y="8" width="72" height="2.2" rx="1" fill="#d5e0ea" />
              <rect y="15" width="92" height="2.2" rx="1" fill="#e4ecf3" />
              <rect y="22" width="64" height="2.2" rx="1" fill="#e4ecf3" />
              <text y="42" fontFamily="Inter Variable, system-ui, sans-serif" fontSize="7" letterSpacing="0.85" fill="#6d86a1">
                SKILLS
              </text>
              <rect y="50" width="78" height="2.2" rx="1" fill="#d5e0ea" />
              <rect y="57" width="58" height="2.2" rx="1" fill="#e4ecf3" />
              <rect y="64" width="70" height="2.2" rx="1" fill="#e4ecf3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
