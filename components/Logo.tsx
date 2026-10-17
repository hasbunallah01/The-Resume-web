import { FeatherMark } from "./visual/Marks";

type LogoProps = {
  variant?: "dark" | "light";
  size?: "lg" | "sm";
};

export default function Logo({ variant = "dark", size = "lg" }: LogoProps) {
  const light = variant === "light";
  const sm = size === "sm";
  return (
    <a href="/" aria-label="Veylora home" className="group inline-flex items-center leading-none">
      <span
        className={`relative font-logo font-semibold tracking-[0.01em] ${
          light ? "text-white" : "text-[#142848]"
        } ${sm ? "text-[30px]" : "text-[32px] sm:text-[34px] lg:text-[clamp(34px,2.8vw,40px)]"}`}
      >
        Veylora
        <FeatherMark
          className={`absolute text-current ${
            sm
              ? "-top-[9px] left-[18px] h-[15px] w-[15px]"
              : "-top-[11px] left-[20px] h-[17px] w-[17px]"
          }`}
        />
      </span>
    </a>
  );
}
