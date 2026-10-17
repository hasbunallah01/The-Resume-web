/**
 * Hand drawn line icons for the sky and paper airplane language. One stroke
 * weight, round caps and slightly loose curves so they read as drawn, not as
 * an icon pack. All are decorative (aria-hidden) unless a label is passed.
 */
type P = { className?: string };

function Svg({ className = "h-6 w-6", children }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export const PlaneLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M4.2 15.4 27.6 5.1c.4-.2.8.2.6.6L19.4 26.6c-.2.4-.7.4-.9 0l-3.4-6.9-6.6-3.2c-.4-.2-.4-.8.1-1.1Z" />
    <path d="m15.1 19.7 4.4-6.2" />
    <path d="M15.3 19.8 14 25.3l3-3.1" />
  </Svg>
);

export const CompassLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 3.6c6.9-.1 12.4 5.4 12.4 12.3 0 6.9-5.5 12.5-12.4 12.5S3.6 22.8 3.6 16C3.6 9.2 9.2 3.7 16 3.6Z" />
    <path d="m20.9 11.1-2.6 7.2-7.2 2.6 2.6-7.2 7.2-2.6Z" />
    <path d="M16 6.4v1.5M16 24.1v1.5M6.4 16h1.5M24.1 16h1.5" />
  </Svg>
);

export const LadderLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M10.2 28.4 12.6 3.6M21.8 28.4 19.4 3.6" />
    <path d="M11.9 9.9h8.3M11.3 15.6h9.5M10.8 21.4h10.6" />
    <path d="m23.6 5.2 2.6-2.1.5 3.2" />
  </Svg>
);

export const GlobeLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 3.7c6.8 0 12.3 5.5 12.3 12.3S22.8 28.3 16 28.3 3.7 22.8 3.7 16 9.2 3.7 16 3.7Z" />
    <path d="M16 3.9c-3.4 3.1-5.1 7.1-5.1 12.1s1.7 9 5.1 12.1M16 3.9c3.4 3.1 5.1 7.1 5.1 12.1s-1.7 9-5.1 12.1" />
    <path d="M4.6 12.1c7.4 1.6 15.4 1.6 22.8 0M4.6 19.9c7.4-1.6 15.4-1.6 22.8 0" />
  </Svg>
);

export const BriefcaseLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5.2 10.4h21.6c.8 0 1.4.6 1.4 1.4v12.8c0 .8-.6 1.4-1.4 1.4H5.2c-.8 0-1.4-.6-1.4-1.4V11.8c0-.8.6-1.4 1.4-1.4Z" />
    <path d="M11.6 10.2V7.6c0-.8.6-1.4 1.4-1.4h6c.8 0 1.4.6 1.4 1.4v2.6" />
    <path d="M3.9 16.6c7.8 2.6 16.4 2.6 24.2 0M14.4 18.1v1.8h3.2v-1.8" />
  </Svg>
);

export const PenNibLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="m16 28.2-6.6-9.6L12 9.4h8l2.6 9.2L16 28.2Z" />
    <path d="M16 28.2V19.6" />
    <circle cx="16" cy="17.8" r="1.6" />
    <path d="M12.4 9.3 13.5 4h5l1.1 5.3" />
  </Svg>
);

export const DocStackLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M9.6 6.2h11.1l4.6 4.6v15.4c0 .8-.6 1.4-1.4 1.4H9.6c-.8 0-1.4-.6-1.4-1.4V7.6c0-.8.6-1.4 1.4-1.4Z" />
    <path d="M20.6 6.3v4.6h4.6" />
    <path d="M5.2 9.6v16.6c0 1.9 1.5 3.4 3.4 3.4h12.2" />
    <path d="M12 15.2h8.6M12 19h8.6M12 22.8h5.4" />
  </Svg>
);

export const DocLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M8.6 3.8h10.6l5.4 5.4v17.6c0 .8-.6 1.4-1.4 1.4H8.6c-.8 0-1.4-.6-1.4-1.4V5.2c0-.8.6-1.4 1.4-1.4Z" />
    <path d="M19 3.9v5.4h5.4" />
    <path d="M11.4 14.4h9.4M11.4 18.4h9.4M11.4 22.4h6" />
  </Svg>
);

export const EnvelopeLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M5.4 8.2h21.2c.8 0 1.4.6 1.4 1.4v13c0 .8-.6 1.4-1.4 1.4H5.4c-.8 0-1.4-.6-1.4-1.4v-13c0-.8.6-1.4 1.4-1.4Z" />
    <path d="m4.6 9.2 10.6 8.2c.5.4 1.1.4 1.6 0l10.6-8.2" />
    <path d="m4.8 22.9 7.8-6.6M27.2 22.9l-7.8-6.6" />
  </Svg>
);

export const ProfileLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 5.4h20c.9 0 1.6.7 1.6 1.6v18c0 .9-.7 1.6-1.6 1.6H6c-.9 0-1.6-.7-1.6-1.6V7c0-.9.7-1.6 1.6-1.6Z" />
    <circle cx="12.2" cy="13.4" r="3" />
    <path d="M7.6 21.6c.8-2.6 2.5-3.9 4.6-3.9s3.8 1.3 4.6 3.9" />
    <path d="M19.4 12.2h4.6M19.4 16h4.6M19.4 19.8h3" />
  </Svg>
);

export const PersonLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 4.6c2.9 0 5.1 2.3 5.1 5.2 0 2.9-2.3 5.3-5.1 5.3s-5.1-2.4-5.1-5.3c0-2.9 2.2-5.2 5.1-5.2Z" />
    <path d="M6.6 27.4c.9-5.5 4.6-8.6 9.4-8.6s8.5 3.1 9.4 8.6" />
  </Svg>
);

export const UsersLine = ({ className }: P) => (
  <Svg className={className}>
    <circle cx="12" cy="11.2" r="4.4" />
    <path d="M4 26.6c.8-4.8 3.9-7.5 8-7.5s7.2 2.7 8 7.5" />
    <path d="M20.6 7.2c2.4.2 4.2 2 4.2 4.3 0 2.2-1.7 4-3.9 4.3M23 19.4c2.6.8 4.4 3.1 5 6.6" />
  </Svg>
);

export const TargetLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M15.6 4.4c6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6S4 22.4 4 16" />
    <path d="M15.6 9.6c3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4-6.4-2.9-6.4-6.4" />
    <path d="m15.8 16 9.6-9.6M22.2 6.6l3.2-.2-.2 3.2" />
  </Svg>
);

export const CheckLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 3.8c6.7 0 12.2 5.5 12.2 12.2S22.7 28.2 16 28.2 3.8 22.7 3.8 16" />
    <path d="m10.2 15.8 4.2 4.2 11.4-12.6" />
  </Svg>
);

export const ChatLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M6 6.4h16.2c.9 0 1.6.7 1.6 1.6v9.8c0 .9-.7 1.6-1.6 1.6H13l-5.2 4.2v-4.2H6c-.9 0-1.6-.7-1.6-1.6V8c0-.9.7-1.6 1.6-1.6Z" />
    <path d="M24 11.4h2c.9 0 1.6.7 1.6 1.6v9.4c0 .9-.7 1.6-1.6 1.6h-1.4v3.6l-4.4-3.6h-5.4" />
    <path d="M9.4 11.6h9.4M9.4 15h6" />
  </Svg>
);

export const FlagLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M7.4 28.4V4.4" />
    <path d="M7.6 5.4c3.4-1.6 6.4-1 9.2.6 2.8 1.6 5.6 2 8.6.4v11c-3 1.6-5.8 1.2-8.6-.4-2.8-1.6-5.8-2.2-9.2-.6" />
  </Svg>
);

export const PencilLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M21.4 4.8 27.2 10.6 11.6 26.2l-7 1.2 1.2-7L21.4 4.8Z" />
    <path d="m18.4 7.8 5.8 5.8M5.8 20.4l5.8 5.8" />
  </Svg>
);

export const LensLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M13.6 4.4c5.1 0 9.2 4.1 9.2 9.2s-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2 4.1-9.2 9.2-9.2Z" />
    <path d="m20.4 20.4 7.2 7.2" />
    <path d="M9.4 11.2c.6-1.6 1.9-2.8 3.6-3.2" />
  </Svg>
);

export const HandshakeLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="m2.8 12.4 4.6-4.2 5 1.8 3.4-1.8c1.4-.7 3-.6 4.2.3l5.2 3.8 4-1.6" />
    <path d="m7.6 20.2 2.4 2.4c.7.7 1.8.7 2.5 0M11 17.6l3.6 3.6c.7.7 1.8.7 2.5 0M14.4 15.2l3.6 3.6c.7.7 1.8.7 2.5 0s.7-1.8 0-2.5l-6.2-6.2" />
    <path d="M3 12.6 7.6 20.2M29.2 11.2l-4.6 8.4-2.4-2.2" />
  </Svg>
);

export const ShieldLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 3.8 26 7.4v7.8c0 6.2-4.2 10.6-10 13-5.8-2.4-10-6.8-10-13V7.4l10-3.6Z" />
    <path d="m11.4 15.8 3.4 3.4 6.2-6.8" />
  </Svg>
);

export const SparkLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="M16 4.2c.6 5.8 2.6 9 9.6 11.8-7 2.6-9 6-9.6 11.8-.6-5.8-2.6-9.2-9.6-11.8 7-2.8 9-6 9.6-11.8Z" />
  </Svg>
);

export const MountainLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="m3.6 26.4 8.8-14.2 4.2 6.4 3.4-4.8 8.4 12.6H3.6Z" />
    <path d="M20 14V5.2M20.2 5.4c2-.9 3.6-.4 5.2.6v3.6c-1.6-.9-3.2-1.4-5.2-.6" />
  </Svg>
);

export const LayersLine = ({ className }: P) => (
  <Svg className={className}>
    <path d="m16 4.4 12 6.2-12 6.2-12-6.2 12-6.2Z" />
    <path d="m4.2 16.2 11.8 6 11.8-6M4.2 21.6l11.8 6 11.8-6" />
  </Svg>
);

export const QuoteMark = ({ className }: P) => (
  <svg viewBox="0 0 48 36" aria-hidden="true" className={className} fill="currentColor">
    <path d="M19.6 2.4C10.2 6 4 13.4 4 23.2 4 29.6 7.8 34 13 34c4.6 0 8-3.4 8-7.8 0-4.2-3-7.2-7-7.4 1-4.8 4.4-8.6 9.4-11.2L19.6 2.4Zm24 0C34.2 6 28 13.4 28 23.2c0 6.4 3.8 10.8 9 10.8 4.6 0 8-3.4 8-7.8 0-4.2-3-7.2-7-7.4 1-4.8 4.4-8.6 9.4-11.2l-3.8-5.2Z" />
  </svg>
);

export const lineIcons = {
  person: PersonLine,
  target: TargetLine,
  document: DocLine,
  check: CheckLine,
  chat: ChatLine,
  users: UsersLine,
  compass: CompassLine,
  pencil: PencilLine,
  flag: FlagLine,
} as const;

export type LineIconName = keyof typeof lineIcons;
