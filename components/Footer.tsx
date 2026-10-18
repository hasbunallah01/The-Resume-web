import Logo from "./Logo";
import { contactEmail } from "@/data/site";
import { ArrowIcon } from "./visual/Marks";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Resume writing", href: "/services#resume-writing" },
      { label: "Pricing", href: "/services#pricing" },
      { label: "How it works", href: "/services#how-it-works" },
      { label: "Executive partnership", href: "/services#executive-partnership" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "/samples" },
      { label: "Our Writers", href: "/writers" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 text-white">
      <div className="bg-[#102038]">
        <div className="wrap grid gap-10 py-14 lg:grid-cols-[1fr_2.4fr_auto] md:items-start">
          <div>
            <Logo variant="light" size="sm" />
            <p className="mt-5 max-w-xs font-serif text-[22px] font-medium italic leading-snug text-white/90">
              Let&rsquo;s tell your story. Let&rsquo;s build your future.
            </p>
            <p className="mt-4 text-[13px] tracking-[0.04em] text-[#a9cdea]">Your Goals. Our Expertise.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4 md:col-span-1">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#a9cdea]">{col.title}</p>
                <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/80">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href={`mailto:${contactEmail}`} className="transition hover:text-white">
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
