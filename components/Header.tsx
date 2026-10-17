"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowIcon } from "./visual/Marks";

const serviceLinks = [
  { label: "Resume writing", href: "/services" },
  { label: "Packages and pricing", href: "/services#pricing" },
  { label: "Our writers", href: "/writers" },
];

const links = [
  { label: "How It Works", href: "/#how-it-works", key: "How" },
  { label: "About Us", href: "/about", key: "About" },
  { label: "Pricing", href: "/services#pricing", key: "Pricing" },
];

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M2 4.2 6 8l4-3.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header({ active = "" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesActive = active === "Services" || active === "Our Writers";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[#d5e4f0]/80 bg-[#f4f9fc]/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 text-[15px] text-[#1c3554] lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
            }}
          >
            <a
              href="/services"
              aria-current={servicesActive ? "page" : undefined}
              className={`inline-flex items-center gap-1.5 py-2 transition-colors hover:text-navy ${
                servicesActive ? "text-navy" : ""
              }`}
              onFocus={() => setServicesOpen(true)}
            >
              Services
              <Chevron open={servicesOpen} />
            </a>
            <div
              id="services-menu"
              className={`absolute left-1/2 top-full z-20 w-60 -translate-x-1/2 pt-3 transition duration-150 ${
                servicesOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
              }`}
            >
              <div className="rounded-2xl bg-white/95 p-2 shadow-lift ring-1 ring-[#e4eef6] backdrop-blur">
                {serviceLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-[14px] text-[#1c3554] transition hover:bg-[#f3f8fc]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.key ? "page" : undefined}
              className={`py-2 transition-colors hover:text-navy ${
                active === link.key ? "text-navy" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/contact" className="btn-navy hidden h-11 px-5 text-[14px] lg:inline-flex">
          Start My Resume
          <ArrowIcon className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-navy shadow-sm ring-1 ring-[#d5e4f0] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3.5 6h13M3.5 10h13M3.5 14h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-[#d5e4f0] bg-[#f7fbfe]/95 px-5 pb-8 pt-2 backdrop-blur-md lg:hidden"
        >
          <a href="/services" className="block border-b border-[#e1ebf3] py-3.5 text-[17px] text-navy" onClick={() => setOpen(false)}>
            Services
          </a>
          <div className="border-b border-[#e1ebf3] py-2 pl-3">
            {serviceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-[14.5px] text-ink-body"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border-b border-[#e1ebf3] py-3.5 text-[17px] text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="block border-b border-[#e1ebf3] py-3.5 text-[17px] text-navy" onClick={() => setOpen(false)}>
            Contact
          </a>
          <a href="/contact" className="btn-navy mt-5 w-full" onClick={() => setOpen(false)}>
            Start My Resume
            <ArrowIcon className="h-3.5 w-3.5" />
          </a>
        </nav>
      )}
    </header>
  );
}
