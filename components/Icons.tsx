import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ExpertIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 5h10" />
      <path d="M17 5v10.5L7.6 31.2A3.2 3.2 0 0 0 10.4 36h17.2a3.2 3.2 0 0 0 2.8-4.8L23 15.5V5" />
      <path d="M12.6 26.5h13" />
      <circle cx="27.5" cy="30.5" r="4.6" fill="currentColor" stroke="none" />
      <path d="M25.4 30.6l1.6 1.6 2.8-3" stroke="#ecf1f4" strokeWidth="1.5" />
    </svg>
  );
}

export function AtsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="4.5" width="24" height="31" rx="3" />
      <path d="M12.5 4.5v-1M25.5 4.5v-1" />
      <path d="M12.5 13h13M12.5 19h13M12.5 25h7" />
      <path d="M24.5 30.5l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="6.5" width="26" height="29" rx="3" />
      <rect x="14" y="3" width="12" height="7" rx="2" fill="#ecf1f4" />
      <path d="M12.5 17.5h15M12.5 23h15M12.5 28.5h8" />
      <path d="M25 30.5l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function HeartCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 35.5C11 29 4.5 23.6 4.5 16.2 4.5 11.4 8 8 12.2 8c3 0 5.6 1.6 7.8 4.6C22.2 9.6 24.8 8 27.8 8 32 8 35.5 11.4 35.5 16.2 35.5 23.6 29 29 20 35.5Z" />
      <path d="M13.5 20.5l4.8 4.8 8.6-9.6" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8.6h2.9l.5-3.4h-3.4V7.9c0-1 .4-1.8 1.9-1.8H17V3.2C16.6 3.1 15.6 3 14.5 3 12 3 10.2 4.5 10.2 7.5V10H7.3v3.4h2.9V22h3.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
