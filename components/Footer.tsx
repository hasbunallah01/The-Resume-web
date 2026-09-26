import Logo from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "./Icons";
import { navLinks } from "@/data/writers";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
];

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

        <ul className="mt-8 flex items-center gap-[20px] lg:absolute lg:right-[24px] lg:top-[24px] lg:mt-0 lg:gap-[19px]">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-colors hover:text-gold"
              >
                <Icon className="h-[18px] w-[18px] lg:h-[16px] lg:w-[16px]" />
              </a>
            </li>
          ))}
        </ul>

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
