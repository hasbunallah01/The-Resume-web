/**
 * Sample resumes shown on /samples. Images are page one only, with all
 * personal details removed before publishing.
 */
export type SampleLevel = "Early Career" | "Mid Level" | "Senior" | "Executive";

export type Sample = {
  slug: string;
  title: string;
  field: string;
  level: SampleLevel;
  pages: number;
  image: { src: string; width: number; height: number };
  thumb: { src: string; width: number; height: number };
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
    image: { src: "/samples/electrical-estimator-senior-p1.webp", width: 1200, height: 1553 },
    thumb: { src: "/samples/electrical-estimator-senior-thumb.webp", width: 600, height: 776 },
    summary:
      "A modern two column resume for an estimator with 15+ years in electrical construction, showing capital project estimates from $1K to $2B and quantified wins such as a 15% cut in material cost overruns.",
  },
  {
    slug: "human-resources-executive",
    title: "Director of Human Resources",
    field: "Human Resources",
    level: "Executive",
    pages: 2,
    image: { src: "/samples/human-resources-executive-p1.webp", width: 1200, height: 1553 },
    thumb: { src: "/samples/human-resources-executive-thumb.webp", width: 600, height: 776 },
    summary:
      "An executive HR resume tracing two decades of director and VP roles, with results like HR leadership for 3K employees and a 42% reduction in claims.",
  },
  {
    slug: "materials-engineer-early-career",
    title: "Materials Engineer",
    field: "Engineering & Manufacturing",
    level: "Early Career",
    pages: 2,
    image: { src: "/samples/materials-engineer-early-career-p1.webp", width: 1200, height: 1697 },
    thumb: { src: "/samples/materials-engineer-early-career-thumb.webp", width: 600, height: 848 },
    summary:
      "A designed sidebar resume for a recent MEng graduate in additive manufacturing, turning an internship and first engineering role into specific technical achievements.",
  },
  {
    slug: "saas-account-executive",
    title: "SaaS Account Executive",
    field: "Sales & Business Development",
    level: "Mid Level",
    pages: 1,
    image: { src: "/samples/saas-account-executive-p1.webp", width: 1200, height: 1553 },
    thumb: { src: "/samples/saas-account-executive-thumb.webp", width: 600, height: 776 },
    summary:
      "A one page sales resume showing progression from SDR to mid market Account Executive, backed by pipeline, quota and net revenue retention figures.",
  },
  {
    slug: "scrum-master",
    title: "Scrum Master",
    field: "Information Technology",
    level: "Senior",
    pages: 2,
    image: { src: "/samples/scrum-master-p1.webp", width: 1200, height: 1553 },
    thumb: { src: "/samples/scrum-master-thumb.webp", width: 600, height: 776 },
    summary:
      "An achievement led resume for a certified Scrum Master with 8+ years in enterprise IT delivery, opening with a highlights section of measurable team and delivery improvements.",
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    field: "Data & Analytics",
    level: "Mid Level",
    pages: 2,
    image: { src: "/samples/data-scientist-p1.webp", width: 1200, height: 1553 },
    thumb: { src: "/samples/data-scientist-thumb.webp", width: 600, height: 776 },
    summary:
      "A clean, skills forward resume for a data scientist moving up from analyst roles, pairing a broad technical toolkit with forecasting, machine learning and data validation work.",
  },
];

/** Alt text that describes the role only, never a person. */
export function sampleAlt(sample: Sample) {
  const article = /^[aeiou]/i.test(sample.title) ? "an" : "a";
  return `Sample resume for ${article} ${sample.title}`;
}
