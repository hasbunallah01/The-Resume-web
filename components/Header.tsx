"use client";

import { useState } from "react";
import Logo from "./Logo";
import { navLinks } from "@/data/writers";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-ivory-nav">
      <div className="relative mx-auto flex h-[84px] w-[min(1232px,calc(100%-48px))] items-center justify-between lg:h-[108px]">
        <div className="origin-left scale-[0.72] lg:scale-100">
          <Logo />
        </div>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-[34px] text-[14.2px] text-[#12324f] lg:absolute lg:left-[451px] lg:top-1/2 lg:flex lg:-translate-y-1/2"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={i === 0 ? "page" : undefined}
              className={`relative py-1 transition-colors hover:text-navy-btn ${
                i === 0
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
          className="hidden h-[49px] w-[136px] items-center justify-center rounded-[4px] bg-gold text-[14px] font-medium tracking-[0.01em] text-white transition-colors hover:bg-[#a5895f] lg:inline-flex"
        >
          Get Started
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[#12324f]/25 text-[#12324f] lg:hidden"
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
          className="absolute inset-x-0 top-full border-t border-[#12324f]/10 bg-ivory-nav px-6 pb-6 pt-2 shadow-[0_12px_24px_rgba(11,42,70,0.08)] lg:hidden"
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
