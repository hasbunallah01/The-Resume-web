"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ArrowIcon } from "./visual/Marks";

const serviceLinks = [
  { label: "Resume writing", href: "/services" },
  { label: "Packages and pricing", href: "/services#pricing" },
  { label: "Our writers", href: "/writers" },
];

const links = [
  { label: "Our Work", href: "/samples", key: "Our Work" },
  { label: "Pricing", href: "/services#pricing", key: "Pricing" },
  { label: "About Us", href: "/about", key: "About" },
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const servicesActive = active === "Services" || active === "Our Writers";

  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Only the background changes after scrolling; the header itself never moves or hides.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close the mobile menu on Escape, a tap outside the header, or a same page hash jump.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, [open]);

  // Desktop Services dropdown: close on outside click or Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  useEffect(() => {
    if (!open) setMobileServicesOpen(false);
  }, [open]);

  // Lock page scroll behind the open menu and restore it afterwards.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prev = [html.style.overflow, document.body.style.overflow];
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev[0];
      document.body.style.overflow = prev[1];
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
    {/* Fixed, never hidden. Only the background fades in after the page scrolls. */}
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
        solid
          ? "border-[#d5e4f0] bg-[#f4f9fc]/95 shadow-[0_8px_24px_rgba(20,56,92,0.06)] supports-[backdrop-filter]:bg-[#f4f9fc]/[0.88] supports-[backdrop-filter]:backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <div className="head-wrap flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-[clamp(1.5rem,2.6vw,3rem)] whitespace-nowrap text-[clamp(15px,1.15vw,17px)] text-[#13254b] lg:flex">
          <a
            href="/"
            aria-current={active === "Home" ? "page" : undefined}
            className={`py-2 transition-colors hover:text-navy ${active === "Home" ? "text-navy" : ""}`}
          >
            Home
          </a>

          <div
            ref={servicesRef}
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
            }}
          >
            <button
              ref={servicesButtonRef}
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              className={`inline-flex items-center gap-1.5 py-2 transition-colors hover:text-navy ${
                servicesActive ? "text-navy" : ""
              }`}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <Chevron open={servicesOpen} />
            </button>
            <div
              id="services-menu"
              className={`absolute left-1/2 top-full z-20 w-60 -translate-x-1/2 pt-3 transition duration-150 ${
                servicesOpen ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="rounded-2xl bg-white/95 p-2 shadow-lift ring-1 ring-[#e4eef6] backdrop-blur">
                {serviceLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-[14px] text-[#1c3554] transition hover:bg-[#f3f8fc] focus-visible:bg-[#f3f8fc]"
                    onClick={() => setServicesOpen(false)}
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

        <a href="/contact" className="btn-navy hidden h-12 gap-3 px-7 text-[clamp(15px,1.1vw,16px)] lg:inline-flex">
          Start My Resume
          <ArrowIcon className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-white/80 text-navy shadow-sm ring-1 ring-[#d5e4f0] lg:hidden"
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
          className="max-h-[calc(100vh-77px)] overflow-y-auto animate-[menu-in_320ms_cubic-bezier(.22,1,.36,1)] overscroll-contain supports-[height:100dvh]:max-h-[calc(100dvh-77px)] border-t border-[#d5e4f0] bg-[#f7fbfe] px-5 pb-8 pt-2 lg:hidden"
        >
          <a href="/" className="block border-b border-[#e1ebf3] py-3.5 text-[17px] text-navy" onClick={() => setOpen(false)}>
            Home
          </a>
          <div className="border-b border-[#e1ebf3]">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services"
              className="flex w-full items-center justify-between py-3.5 text-left text-[17px] text-navy"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              Services
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3d6f96] ring-1 ring-[#d5e4f0]">
                <Chevron open={mobileServicesOpen} />
              </span>
            </button>
            <div
              id="mobile-services"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                mobileServicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden" inert={!mobileServicesOpen}>
                <div className="pb-3 pl-3">
                  {serviceLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-[15px] text-ink-body"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
    {/* Holds the header's space in the flow so content never slides under it. */}
    <div aria-hidden="true" className="h-[77px]" />
    </>
  );
}
