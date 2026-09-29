import Logo from "./Logo";
import { navLinks } from "@/data/writers";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#71859a] bg-navy-footer text-white lg:h-[117px]">
      <div className="relative mx-auto w-[min(1232px,calc(100%-48px))] py-10 lg:h-full lg:py-0 lg:pl-[8px]">
        <div className="lg:absolute lg:left-[8px] lg:top-[13px]">
          <Logo variant="light" size="sm" />
        </div>

        <nav
          aria-label="Footer"
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-white/95 lg:absolute lg:left-[412px] lg:top-[22px] lg:mt-0 lg:gap-x-[26.5px] lg:text-[10px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-[12px] text-white/90 lg:absolute lg:left-[10px] lg:top-[86px] lg:mt-0 lg:text-[9.6px]">
          &copy; {new Date().getFullYear()} Veylora. All rights reserved.
        </p>
        <p className="mt-2 text-[12px] text-gold lg:absolute lg:right-[12px] lg:top-[86px] lg:mt-0 lg:text-[10px]">
          Your Goals. Our Expertise.
        </p>
      </div>
    </footer>
  );
}
