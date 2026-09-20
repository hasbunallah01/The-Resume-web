export type PlanItem = { lead: string; text: string };

export type Plan = {
  id: string;
  name: string;
  blurb: string;
  perfectFor: string;
  /** Shown above the list for the higher tiers */
  includes?: string;
  items: PlanItem[];
  bonuses?: PlanItem[];
  price: string;
  paymentNote: string;
  cta: string;
  icon: "document" | "person" | "crown";
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "professional",
    name: "Professional Resume",
    blurb:
      "A brand-new resume that presents your value clearly, showcases your achievements and earns attention from hiring managers.",
    perfectFor:
      "professionals who want an expert to sharpen and strengthen their resume.",
    items: [
      {
        lead: "One-on-one strategy interview.",
        text: "A 60–90 minute conversation with an experienced, industry-aware resume writer who draws out the achievements you may be overlooking.",
      },
      {
        lead: "Brand-focused positioning.",
        text: "Your resume tells one clear story, so you stand apart from the stack.",
      },
      {
        lead: "Word, PDF and ATS-optimized versions.",
        text: "You're ready for any application portal, and far less likely to be filtered out by screening software.",
      },
      {
        lead: "Direct access to your writer.",
        text: "Email your writer whenever you need to, from start to finish.",
      },
      {
        lead: "Two rounds of revisions.",
        text: "So the final document sounds and feels like you.",
      },
      {
        lead: "3–5 business day turnaround.",
        text: "Start applying sooner.",
      },
    ],
    price: "$1,155 – $1,450",
    paymentNote: "Flexible monthly payment plans available",
    cta: "Start My Resume",
    icon: "document",
  },
  {
    id: "executive",
    name: "Executive Resume",
    blurb:
      "A brand-new resume, a matching cover letter and an optimized LinkedIn profile: a complete makeover of how you show up to employers.",
    perfectFor:
      "mid- to senior-level professionals investing in their next perfect-fit role.",
    includes: "Everything in Professional Resume, plus:",
    items: [
      {
        lead: "A writer matched to your industry.",
        text: "Your project is led by a certified executive resume writer with experience in your field.",
      },
      {
        lead: "SEO- and keyword-optimized LinkedIn profile.",
        text: "Written in a narrative voice to attract recruiters, lift profile views and engage employers.",
      },
      {
        lead: "Modern, customizable cover letter.",
        text: "Short enough to send as an email, and built to make a strong first impression.",
      },
      {
        lead: "One consistent personal brand.",
        text: "Every document reinforces the same message, so you stand out from the competition.",
      },
    ],
    bonuses: [
      {
        lead: "Hidden Job Market Guide 2026 (PDF).",
        text: "How to find and approach opportunities that are never advertised.",
      },
    ],
    price: "$1,424 – $1,795",
    paymentNote: "Flexible monthly payment plans available",
    cta: "Build My Executive Resume",
    icon: "person",
    featured: true,
  },
  {
    id: "csuite",
    name: "Executive / C-Suite Package",
    blurb:
      "A complete career-positioning program: your resume, your personal brand and hands-on search coaching, designed to put you in front of the right decision-makers.",
    perfectFor:
      "senior executives, directors, vice presidents and founders who want to catch the attention of major players in their industry.",
    includes: "Everything in Executive Resume, plus:",
    items: [
      {
        lead: "Rapid-response search coaching.",
        text: "Skip the long line with hidden-market, networking and advanced search strategies.",
      },
      {
        lead: "A writer with C-level hiring experience.",
        text: "They know what it takes to stand out among the very best candidates.",
      },
      {
        lead: "Thank-you letter.",
        text: "Thoughtfully written and customizable, to keep you top of mind while they decide.",
      },
      {
        lead: "Professional career biography.",
        text: "Presents your accomplishments in a persuasive, memorable way.",
      },
      {
        lead: "Value proposition letter.",
        text: "A brief, impactful account of what you achieve and the value you bring.",
      },
      {
        lead: "Personal-brand-rich documents.",
        text: "Employers see immediately what sets you apart.",
      },
    ],
    bonuses: [
      {
        lead: "Hidden Job Market Guide 2026 (PDF).",
        text: "How to find and approach opportunities that are never advertised.",
      },
      {
        lead: "Elevator pitch template and examples.",
        text: "Build a confident 30-second pitch with a step-by-step template and sample positioning statements.",
      },
    ],
    price: "$2,495 – $2,995+",
    paymentNote: "Flexible monthly payment plans available",
    cta: "Build My Executive Profile",
    icon: "crown",
  },
];

export const storySteps = [
  { n: "01", title: "Understand", text: "We learn about your experience, achievements, career direction and goals.", icon: "person" },
  { n: "02", title: "Position", text: "We identify the strongest professional themes and communicate your value clearly.", icon: "target" },
  { n: "03", title: "Write", text: "We transform your experience into concise, achievement-focused career content.", icon: "document" },
  { n: "04", title: "Refine", text: "We review the document carefully and refine the final presentation.", icon: "check" },
] as const;

export const partnershipSteps = [
  { n: "01", title: "Strategy Session", text: "A focused conversation to determine if we're the right partner for your next career move.", icon: "chat" },
  { n: "02", title: "Perfect Match", text: "You're paired with a resume professional who understands your industry and career direction.", icon: "users" },
  { n: "03", title: "Executive Brand Excavation", text: "A strategic session to uncover the distinctive story that positions you for your target roles.", icon: "compass" },
  { n: "04", title: "Narrative Refinement", text: "We review your narrative together, refining how your achievements and expertise are positioned.", icon: "pencil" },
  { n: "05", title: "Go Forth & CONQUER", text: "Enter the market confidently, armed with your new resume and professional positioning.", icon: "flag" },
] as const;
