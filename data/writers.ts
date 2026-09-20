export type Writer = {
  slug: string;
  name: string;
  credentials: string;
  summary: string;
  /** Line breaks used on desktop to match the reference mockup */
  lines: string[];
  photo: string;
  /** Column weight that reproduces the card widths in the reference mockup */
  weight: number;
};

export const writers: Writer[] = [
  {
    slug: "ericka-mingus",
    lines: ["Specializes in crafting", "high impact resumes,", "cover letters and career", "documents for 40+ industries."],
    name: "Ericka Mingus",
    credentials: "CPRW",
    summary:
      "Specializes in crafting high impact resumes, cover letters and career documents for 40+ industries.",
    photo: "/images/writer-ericka-mingus.jpg",
    weight: 143,
  },
  {
    slug: "alexis-binder",
    lines: ["Brings 11 years of resume", "writing experience and", "5 years in recruiting and", "HR, with an MBA and BA", "in English."],
    name: "Alexis Binder",
    credentials: "ACRW",
    summary:
      "Brings 11 years of resume writing experience and 5 years in recruiting and HR, with an MBA and BA in English.",
    photo: "/images/writer-alexis-binder.jpg",
    weight: 138,
  },
  {
    slug: "bethany-camasura",
    lines: ["Career strategist and executive", "resume writer with a proven", "track record of helping", "professionals reach their", "goals."],
    name: "Bethany Camasura",
    credentials: "MSOL, HRM, CPRW",
    summary:
      "Career strategist and executive resume writer with a proven track record of helping professionals reach their goals.",
    photo: "/images/writer-bethany-camasura.jpg",
    weight: 135,
  },
  {
    slug: "jonathan-nugent",
    lines: ["Over 21 years of experience", "in career services, with", "7 industry certifications", "and a strong recruiting", "background."],
    name: "Jonathan Nugent",
    credentials: "NCRW",
    summary:
      "Over 21 years of experience in career services, with 7 industry certifications and a strong recruiting background.",
    photo: "/images/writer-jonathan-nugent.jpg",
    weight: 134,
  },
  {
    slug: "jessica-coppens",
    lines: ["Combines 10 years of HR", "and recruiting experience", "with 7+ years in resume", "writing and career coaching."],
    name: "Jessica Coppens",
    credentials: "CPRW, M.Ed.",
    summary:
      "Combines 10 years of HR and recruiting experience with 7+ years in resume writing and career coaching.",
    photo: "/images/writer-jessica-coppens.jpg",
    weight: 134.5,
  },
  {
    slug: "suzanne-taylor",
    lines: ["Helps clients build stronger", "career documents and", "strategies, with a focus on", "personal and professional", "growth."],
    name: "Suzanne Taylor",
    credentials: "CPRW, GCDF",
    summary:
      "Helps clients build stronger career documents and strategies, with a focus on personal and professional growth.",
    photo: "/images/writer-suzanne-taylor.jpg",
    weight: 135,
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Writers", href: "/#writers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
