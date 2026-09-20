export type Plan = {
  id: string;
  name: string;
  blurb: string;
  price: string;
  /** Shown above the feature list for the higher tiers */
  includes?: string;
  features: string[];
  cta: string;
  note: string;
  icon: "document" | "person" | "crown";
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "professional",
    name: "Professional Resume",
    blurb:
      "For professionals who want a stronger, clearer representation of their experience.",
    price: "$1,155 – $1,450",
    features: [
      "Comprehensive resume writing",
      "Career-focused positioning",
      "Achievement and impact-focused content",
      "ATS-conscious structure and keywords",
      "Professional formatting",
      "Industry-specific language",
      "Information gathering and consultation",
      "Revision and refinement",
    ],
    cta: "Start My Resume",
    note: "Built around your experience, goals and target opportunity.",
    icon: "document",
  },
  {
    id: "executive",
    name: "Executive Resume",
    blurb:
      "For experienced professionals, managers and senior-level candidates who need stronger strategic positioning.",
    price: "$1,424 – $1,795",
    includes: "Everything in Professional Resume, plus:",
    features: [
      "Executive-level positioning",
      "Leadership and strategic impact",
      "Career progression storytelling",
      "Executive branding",
      "Target-role alignment",
      "LinkedIn positioning guidance",
      "Senior-level accomplishment framing",
    ],
    cta: "Build My Executive Resume",
    note: "Positioned for senior roles and leadership growth.",
    icon: "person",
    featured: true,
  },
  {
    id: "csuite",
    name: "Executive / C-Suite Package",
    blurb:
      "For senior executives, directors, vice presidents, founders and C-suite professionals whose career story requires deeper strategic positioning.",
    price: "$2,495 – $2,995+",
    includes: "Everything in Executive Resume, plus:",
    features: [
      "Board and C-suite positioning",
      "Leadership narrative",
      "Complex career history refinement",
      "Executive LinkedIn positioning",
      "Executive cover letter",
      "Professional bio / leadership summary",
      "Target-role strategy",
      "Detailed consultation and comprehensive revisions",
    ],
    cta: "Build My Executive Profile",
    note: "Designed for leadership-level career positioning and high-impact professional presentation.",
    icon: "crown",
  },
];

export const storySteps = [
  {
    n: "01",
    title: "Understand",
    text: "We learn about your experience, achievements, career direction and goals.",
    icon: "person",
  },
  {
    n: "02",
    title: "Position",
    text: "We identify the strongest professional themes and communicate your value clearly.",
    icon: "target",
  },
  {
    n: "03",
    title: "Write",
    text: "We transform your experience into concise, achievement-focused career content.",
    icon: "document",
  },
  {
    n: "04",
    title: "Refine",
    text: "We review the document carefully and refine the final presentation.",
    icon: "check",
  },
] as const;

export const partnershipSteps = [
  {
    n: "01",
    title: "Strategy Session",
    text: "A focused conversation to determine if we're the right partner for your next career move.",
    icon: "chat",
  },
  {
    n: "02",
    title: "Perfect Match",
    text: "You're paired with a resume professional who understands your industry and career direction.",
    icon: "users",
  },
  {
    n: "03",
    title: "Executive Brand Excavation",
    text: "A strategic session to uncover the distinctive story that positions you for your target roles.",
    icon: "compass",
  },
  {
    n: "04",
    title: "Narrative Refinement",
    text: "We review your narrative together, refining how your achievements and expertise are positioned.",
    icon: "pencil",
  },
  {
    n: "05",
    title: "Go Forth & CONQUER",
    text: "Enter the market confidently, armed with your new resume and professional positioning.",
    icon: "flag",
  },
] as const;
