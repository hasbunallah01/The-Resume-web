export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.2 13.15 9.4 21.6 12 13.15 14.6 12 22.8 10.85 14.6 2.4 12 10.85 9.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FeatherMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <path
        d="M7 25.5C14.2 24 21.2 17.2 24.6 8.2 17.8 9.2 12.2 13.4 9.2 19.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.2 25.2c4.2-3.2 8-5.6 12.6-6.8"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M15.2 20.6c1.5 1.15 1.7 2.5.35 3.6"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M18.6 16.8c1.2.7 1.5 1.7.5 2.6"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function DocMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 5.5h8.2L24 11.2V25a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 9 25V7A1.5 1.5 0 0 1 10.5 5.5H10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M18 5.6V11h5.2" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12.5 16.5h7M12.5 20h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function QuillMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 24.5c7.5-1 13.5-7.2 16.4-15.6C17.2 10 12 14.2 9.4 20.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M8.2 24.2C13 20.2 17.2 17.4 22 16"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16.2 19.2c1.4 1.3 1.3 2.8-.2 3.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CompassMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="9.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 8.2v1.6M16 22.2v1.6M8.2 16h1.6M22.2 16h1.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="m13.2 18.8 1.2-5.2 5.2-1.2-1.2 5.2-5.2 1.2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M16 5.5 24.5 8.6v7.2c0 5-3.4 8.6-8.5 10.7-5.1-2.1-8.5-5.7-8.5-10.7V8.6L16 5.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="m12.4 16.1 2.3 2.3 4.9-5.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
