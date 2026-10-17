/**
 * Sample resumes shown on /samples. The page, filters, lightbox and home
 * teaser all read from this list, so adding a sample is just a new entry here
 * plus its images in public/samples. Every image must have contact details
 * removed before publishing.
 *
 * `image` is page one (also used when `images` is absent). Add an optional
 * `images` array to show more pages in the lightbox, in reading order.
 */
export type SampleLevel = "Early Career" | "Mid Level" | "Senior" | "Executive";

export type SampleImage = { src: string; width: number; height: number };

export type Sample = {
  slug: string;
  title: string;
  field: string;
  level: SampleLevel;
  pages: number;
  image: SampleImage;
  images?: SampleImage[];
  thumb: SampleImage;
  summary: string;
};

export const sampleLevels: SampleLevel[] = ["Early Career", "Mid Level", "Senior", "Executive"];

export const samples: Sample[] = [
  {
    slug: "electrical-estimator-senior",
    title: "Senior Electrical Estimator",
    field: "Construction & Engineering",
    level: "Senior",
    pages: 3,
    image: { src: "/samples/electrical-estimator-senior-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/electrical-estimator-senior-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/electrical-estimator-senior-p2.webp", width: 1400, height: 1812 },
      { src: "/samples/electrical-estimator-senior-p3.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/electrical-estimator-senior-thumb.webp", width: 480, height: 621 },
    summary:
      "A modern two column resume for an estimator with 15+ years in electrical construction, showing capital project estimates from $1K to $2B and quantified wins such as a 15% cut in material cost overruns.",
  },
  {
    slug: "human-resources-executive",
    title: "Director of Human Resources",
    field: "Human Resources",
    level: "Executive",
    pages: 2,
    image: { src: "/samples/human-resources-executive-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/human-resources-executive-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/human-resources-executive-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/human-resources-executive-thumb.webp", width: 480, height: 621 },
    summary:
      "An executive HR resume tracing two decades of director and VP roles, with results like HR leadership for 3K employees and a 42% reduction in claims.",
  },
  {
    slug: "materials-engineer-early-career",
    title: "Materials Engineer",
    field: "Engineering & Manufacturing",
    level: "Early Career",
    pages: 2,
    image: { src: "/samples/materials-engineer-early-career-p1.webp", width: 1400, height: 1981 },
    images: [
      { src: "/samples/materials-engineer-early-career-p1.webp", width: 1400, height: 1981 },
      { src: "/samples/materials-engineer-early-career-p2.webp", width: 1400, height: 1981 },
    ],
    thumb: { src: "/samples/materials-engineer-early-career-thumb.webp", width: 480, height: 679 },
    summary:
      "A designed sidebar resume for a recent MEng graduate in additive manufacturing, turning an internship and first engineering role into specific technical achievements.",
  },
  {
    slug: "scrum-master",
    title: "Scrum Master",
    field: "Information Technology",
    level: "Senior",
    pages: 2,
    image: { src: "/samples/scrum-master-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/scrum-master-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/scrum-master-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/scrum-master-thumb.webp", width: 480, height: 621 },
    summary:
      "An achievement led resume for a certified Scrum Master with 8+ years in enterprise IT delivery, opening with a highlights section of measurable team and delivery improvements.",
  },
  {
    slug: "saas-account-executive",
    title: "SaaS Account Executive",
    field: "Sales & Business Development",
    level: "Mid Level",
    pages: 1,
    image: { src: "/samples/saas-account-executive-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/saas-account-executive-p1.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/saas-account-executive-thumb.webp", width: 480, height: 621 },
    summary:
      "A one page sales resume showing progression from SDR to mid market Account Executive, backed by pipeline, quota and net revenue retention figures.",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    field: "Data & Analytics",
    level: "Mid Level",
    pages: 2,
    image: { src: "/samples/data-scientist-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/data-scientist-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/data-scientist-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/data-scientist-thumb.webp", width: 480, height: 621 },
    summary:
      "A clean, skills forward resume for a data scientist moving up from analyst roles, pairing a broad technical toolkit with forecasting, machine learning and data validation work.",
  },
  {
    slug: "sustainability-specialist",
    title: "Sustainability Specialist",
    field: "Environment & Sustainability",
    level: "Early Career",
    pages: 2,
    image: { src: "/samples/sustainability-specialist-p1.webp", width: 1400, height: 1982 },
    images: [
      { src: "/samples/sustainability-specialist-p1.webp", width: 1400, height: 1982 },
      { src: "/samples/sustainability-specialist-p2.webp", width: 1400, height: 1982 },
    ],
    thumb: { src: "/samples/sustainability-specialist-thumb.webp", width: 480, height: 680 },
    summary:
      "A modern timeline resume for a sustainability graduate, linking federal environmental protection work, city planning research and zero waste projects.",
  },
  {
    slug: "project-scheduler",
    title: "Project Scheduler & Planner",
    field: "Construction & Engineering",
    level: "Mid Level",
    pages: 2,
    image: { src: "/samples/project-scheduler-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/project-scheduler-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/project-scheduler-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/project-scheduler-thumb.webp", width: 480, height: 621 },
    summary:
      "A structured resume for a construction project scheduler, covering critical path planning, Primavera P6 scheduling and a $700 million infrastructure project delivered 3 months early.",
  },
  {
    slug: "xr-vfx-project-manager",
    title: "XR and VFX Project Manager",
    field: "Media & Technology",
    level: "Senior",
    pages: 2,
    image: { src: "/samples/xr-vfx-project-manager-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/xr-vfx-project-manager-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/xr-vfx-project-manager-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/xr-vfx-project-manager-thumb.webp", width: 480, height: 621 },
    summary:
      "A project management resume bridging extended reality product leadership and feature film VFX delivery, including 2,300 shots delivered on time and PMP certification.",
  },
  {
    slug: "edtech-nonprofit-executive",
    title: "EdTech Founder and Client Success Director",
    field: "Education & Nonprofit",
    level: "Executive",
    pages: 4,
    image: { src: "/samples/edtech-nonprofit-executive-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/edtech-nonprofit-executive-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/edtech-nonprofit-executive-p2.webp", width: 1400, height: 1812 },
      { src: "/samples/edtech-nonprofit-executive-p3.webp", width: 1400, height: 1812 },
      { src: "/samples/edtech-nonprofit-executive-p4.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/edtech-nonprofit-executive-thumb.webp", width: 480, height: 621 },
    summary:
      "A leadership resume for an EdTech founder and nonprofit program director, featuring $215,000 in non dilutive funding, program growth to 17 sites and a record of speaking engagements.",
  },
  {
    slug: "risk-analyst",
    title: "Risk Analyst",
    field: "Risk & Compliance",
    level: "Mid Level",
    pages: 2,
    image: { src: "/samples/risk-analyst-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/risk-analyst-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/risk-analyst-p2.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/risk-analyst-thumb.webp", width: 480, height: 621 },
    summary:
      "A risk and compliance resume opening with quantified key achievements, such as a 25% cut in potential financial losses, followed by risk analyst roles at major employers.",
  },
  {
    slug: "cybersecurity-analyst-career-change",
    title: "Cybersecurity Analyst",
    field: "Information Technology",
    level: "Early Career",
    pages: 3,
    image: { src: "/samples/cybersecurity-analyst-career-change-p1.webp", width: 1400, height: 1812 },
    images: [
      { src: "/samples/cybersecurity-analyst-career-change-p1.webp", width: 1400, height: 1812 },
      { src: "/samples/cybersecurity-analyst-career-change-p2.webp", width: 1400, height: 1812 },
      { src: "/samples/cybersecurity-analyst-career-change-p3.webp", width: 1400, height: 1812 },
    ],
    thumb: { src: "/samples/cybersecurity-analyst-career-change-thumb.webp", width: 480, height: 621 },
    summary:
      "A career change resume moving into cybersecurity, pairing current GRC training and CompTIA certifications with IT support, logistics and military experience.",
  },
];

/** Alt text that describes the role only, never a person. */
export function sampleAlt(sample: Sample) {
  const article = /^[aeiou]/i.test(sample.title) ? "an" : "a";
  return `Sample resume for ${article} ${sample.title}`;
}

/** All pages to show for a sample, page one first. */
export function samplePages(sample: Sample): SampleImage[] {
  return sample.images && sample.images.length > 0 ? sample.images : [sample.image];
}
