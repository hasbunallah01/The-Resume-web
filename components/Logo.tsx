type LogoProps = {
  variant?: "dark" | "light";
  size?: "lg" | "sm";
};

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 12"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M1 11C1.6 5.6 6 1.6 15 1c-.4 5.6-4.6 9.8-14 10Z"
        fill="#b79a5f"
      />
      <path d="M1.2 10.6C5 8 8.5 5 12 2.6" stroke="#f7f6f1" strokeWidth=".6" />
    </svg>
  );
}

export default function Logo({ variant = "dark", size = "lg" }: LogoProps) {
  const isLight = variant === "light";
  const lg = size === "lg";
  return (
    <a
      href="/"
      aria-label="Veylora home"
      className="inline-flex flex-col items-start leading-none"
    >
      <span
        className={`relative font-logo font-bold ${
          isLight ? "text-white" : "text-[#0a2a48]"
        } ${lg ? "text-[60px] leading-[52px] tracking-[0.065em]" : "text-[35px] leading-[30px] tracking-[0.055em]"}`}
      >
        Veylora
        <Leaf
          className={`absolute ${
            lg
              ? "left-[36px] top-[-1px] h-[13px] w-[17px]"
              : "left-[20px] top-[-1px] h-[8px] w-[10px]"
          }`}
        />
      </span>
      <span
        className={`flex items-center whitespace-nowrap font-sans font-medium uppercase ${
          isLight ? "text-white/85" : "text-[#1a4a70]"
        } ${
          lg
            ? "ml-[12px] mt-[10px] gap-[9px] text-[10.5px] tracking-[0.1em]"
            : "ml-[7px] mt-[6px] gap-[5px] text-[6.6px] tracking-[0.13em]"
        }`}
      >
        <span>Resumes</span>
        <span className="text-[#b79a5f]" aria-hidden="true">
          •
        </span>
        <span>Career Documents</span>
        <span className="text-[#b79a5f]" aria-hidden="true">
          •
        </span>
        <span>Your Future</span>
      </span>
    </a>
  );
}
