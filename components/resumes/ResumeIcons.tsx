import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

type P = SVGProps<SVGSVGElement>;

export const DocIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 3h8l4 4v13.5a.5.5 0 0 1-.5.5h-11.5a.5.5 0 0 1-.5-.5v-16.5a.5.5 0 0 1 .5-.5Z" />
    <path d="M14.5 3v4h4M9 12h6M9 15.5h6M9 8.5h2.5" />
  </svg>
);
export const PersonIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8.5" r="3.6" />
    <path d="M4.8 20.5c.8-3.6 3.6-5.4 7.2-5.4s6.4 1.8 7.2 5.4" />
  </svg>
);
export const CrownIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 8.5 7.6 12 12 5l4.4 7 4.1-3.5-1.7 9.5H5.2L3.5 8.5Z" />
    <path d="M5.6 20.5h12.8" />
  </svg>
);
export const TargetIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.6" />
    <circle cx="12" cy="12" r=".9" fill="currentColor" />
  </svg>
);
export const CheckCircleIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m8.2 12.3 2.6 2.6 5-5.4" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5.5h16v10.5H10.5L6.5 19.5V16H4V5.5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);
export const UsersIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.2 19.5c.6-3.2 2.9-4.8 5.8-4.8s5.2 1.6 5.8 4.8" />
    <path d="M15.6 5.6a3.2 3.2 0 0 1 0 5.8M17.4 15c2 .5 3.1 2 3.5 4.5" />
  </svg>
);
export const CompassIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2 5.2-2Z" />
  </svg>
);
export const PencilIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4.5 19.5 5.3 15 15.8 4.5a1.8 1.8 0 0 1 2.5 0l1.2 1.2a1.8 1.8 0 0 1 0 2.5L9 18.7l-4.5.8Z" />
    <path d="m14 6.4 3.6 3.6" />
  </svg>
);
export const FlagIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5.5 21V4M5.5 4.8c4.2-2 6.6 2 10.6 0 1.2-.6 2.2-.8 2.9-.7v8.4c-.7-.1-1.7.1-2.9.7-4 2-6.4-2-10.6 0" />
  </svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9L12 2.6Z" />
  </svg>
);
export const ThumbIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7.5 11v9H4.5v-9h3Zm0 0 3.2-6.2c1.5 0 2.4 1.2 2 2.7L12.4 10h5.3a1.9 1.9 0 0 1 1.9 2.3l-1.2 6a1.9 1.9 0 0 1-1.9 1.5H7.5" />
  </svg>
);
export const ShareIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="6.5" cy="12" r="2.2" />
    <circle cx="17.5" cy="6" r="2.2" />
    <circle cx="17.5" cy="18" r="2.2" />
    <path d="m8.4 10.9 7.2-3.8M8.4 13.1l7.2 3.8" />
  </svg>
);
export const TickIcon = (p: P) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="m3.6 8.4 2.9 2.9 5.9-6.2" />
  </svg>
);

export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const StarOutlineIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3.4 2.6 5.4 5.9.8-4.3 4.2 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.4Z" />
  </svg>
);

export const UploadIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 16V5M7.5 9.5 12 5l4.5 4.5" />
    <path d="M4.5 15.5v3a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-3" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.2l3.4 2" />
  </svg>
);
export const CalendarIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="4" y="5.5" width="16" height="14.5" rx="1.5" />
    <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    <path d="M8.5 14h.01M12 14h.01M15.5 14h.01M8.5 17h.01M12 17h.01" strokeWidth="2" />
  </svg>
);
export const PlusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const iconMap = {
  document: DocIcon,
  person: PersonIcon,
  crown: CrownIcon,
  target: TargetIcon,
  check: CheckCircleIcon,
  chat: ChatIcon,
  users: UsersIcon,
  compass: CompassIcon,
  pencil: PencilIcon,
  flag: FlagIcon,
} as const;
