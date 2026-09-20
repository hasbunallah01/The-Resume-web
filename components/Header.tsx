"use client";

import { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/data/writers";

export default function Header({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-ivory-nav">
      <div className="relative mx-auto flex h-[84px] w-[min(1232px,calc(100%-48px))] items-center justify-between lg:h-[108px]">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[12px] whitespace-nowrap text-[13.5px] text-[#12324f] md:flex lg:gap-[26px] lg:text-[14px] xl:absolute xl:left-[451px] xl:top-1/2 xl:-translate-y-1/2 xl:gap-[34px] xl:text-[14.2px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={link.label === active ? "page" : undefined}
              className={`relative py-1 transition-colors hover:text-navy-btn ${
                link.label === active
                  ? "after:absolute after:bottom-[-2px] after:left-0 after:h-[1.5px] after:w-full after:bg-[#12324f]"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden h-[42px] w-[104px] items-center justify-center rounded-[4px] bg-gold text-[14px] font-medium tracking-[0.01em] text-white transition-colors hover:bg-[#a5895f] md:inline-flex lg:h-[49px] lg:w-[136px]"
        >
          Get Started
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#12324f]/25 text-[#12324f] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-t border-[#12324f]/10 bg-ivory-nav px-6 pb-6 pt-2 shadow-[0_12px_24px_rgba(11,42,70,0.08)] md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block border-b border-[#12324f]/10 py-3.5 text-[15px] text-[#12324f]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/contact"
            className="mt-5 inline-flex h-[46px] w-full items-center justify-center rounded-[4px] bg-gold text-[14px] font-medium text-white"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
}
