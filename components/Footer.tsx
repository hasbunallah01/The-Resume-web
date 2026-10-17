import Logo from "./Logo";
import { ArrowIcon } from "./visual/Marks";

const explore = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Our writers", href: "/writers" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/services#pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-6 text-white">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-transparent to-[#102038]" aria-hidden="true" />
      <div className="bg-[#102038]">
        <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_auto] md:items-start">
          <div>
            <Logo variant="light" size="sm" />
            <p className="mt-5 max-w-xs font-serif text-[22px] font-medium italic leading-snug text-white/90">
              Let&rsquo;s tell your story. Let&rsquo;s build your future.
            </p>
            <p className="mt-4 text-[13px] tracking-[0.04em] text-[#d7c4a2]">Your Goals. Our Expertise.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3 text-[14.5px] text-white/80">
            {explore.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <div>
            <a href="/contact" className="btn-white h-11 px-5 text-[14px] text-navy">
              Start My Resume
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="wrap flex flex-col gap-3 py-5 text-[12.5px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Veylora. All rights reserved.</p>
            <nav aria-label="Legal" className="flex gap-5">
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
