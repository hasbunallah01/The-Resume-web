export type ServiceItem = {
  title: string;
  text: string;
  icon: "document" | "crown" | "layers" | "mail" | "users" | "pencil";
  href: string;
};

export const homeServices: ServiceItem[] = [
  {
    title: "Professional Resumes",
    text: "A clear, achievement-focused resume that presents your experience with confidence.",
    icon: "document",
    href: "/services#pricing",
  },
  {
    title: "Executive Resumes",
    text: "Strategic positioning for managers, directors and senior leaders pursuing their next role.",
    icon: "crown",
    href: "/services#pricing",
  },
  {
    title: "CVs",
    text: "Comprehensive career documents for academic, research and international opportunities.",
    icon: "layers",
    href: "/services",
  },
  {
    title: "Cover Letters",
    text: "A focused, personal letter that connects your background to the opportunity you want.",
    icon: "mail",
    href: "/services#pricing",
  },
  {
    title: "LinkedIn Profiles",
    text: "A keyword-optimized profile written to attract recruiters and grow your visibility.",
    icon: "users",
    href: "/services#pricing",
  },
  {
    title: "Career Document Packages",
    text: "Resume, cover letter and LinkedIn profile developed together as one consistent story.",
    icon: "pencil",
    href: "/services",
  },
];
