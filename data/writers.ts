export type Writer = {
  slug: string;
  name: string;
  /** Full professional title, shown on the Writers page */
  title: string;
  /** Short label shown on homepage cards */
  cardRole: string;
  /** Short summary (mobile and small screens) */
  summary: string;
  /** Line breaks used on wide desktop homepage cards */
  lines: string[];
  /** Areas of focus mentioned in the bio */
  focus: string[];
  /** Full biography, one string per paragraph */
  bio: string[];
  /** Portrait. Without one, initials are shown. Replace with a real photo. */
  photo?: string;
  /** Shown in the homepage writers row */
  featured?: boolean;
  /** Column weight that reproduces the card widths in the design (homepage) */
  weight?: number;
  /** Shown in the "X+ years of experience" badge on the Writers page */
  experience: string;
};

export const writers: Writer[] = [
  {
    slug: "daramola-qudus-abolaji",
    name: "Daramola Qudus Abolaji",
    title: "Founder, Veylora",
    cardRole: "Founder",
    summary:
      "Founded Veylora to help job seekers present their experience, skills and achievements clearly and confidently.",
    lines: ["Founded Veylora to help", "job seekers present their", "experience clearly and", "confidently."],
    focus: ["Career Strategy", "Executive Resumes", "Personal Branding"],
    experience: "12+",
    bio: [
      "Daramola Qudus Abolaji founded Veylora with a simple belief: people should not have to struggle to explain the value of the work they have already done.",
      "Through Veylora, Qudus focuses on helping professionals present their experience with greater clarity, structure, and purpose, whether they are entering the job market, moving into a new role, repositioning their experience, or preparing for a more senior opportunity.",
      "His goal is not to make every resume look the same. It is to understand the person behind the document, identify the strongest parts of their professional story, and turn that information into a resume that communicates their value clearly.",
    ],
    photo: "/images/founder-square.jpg",
    featured: true,
  },
  {
    slug: "abdul-kareem-ismail",
    name: "Abdul-Kareem Ismail",
    title: "Co-Founder, Veylora",
    cardRole: "Co-Founder",
    summary:
      "Co-founded Veylora to help professionals present their experience with clarity, structure and confidence.",
    lines: ["Co-founded Veylora to help", "professionals present their", "experience with clarity and", "confidence."],
    focus: ["Career Strategy", "Resume Writing", "Client Experience"],
    experience: "9+",
    bio: [
      "Abdul-Kareem Ismail co-founded Veylora alongside Daramola Qudus Abolaji, bringing more than 9 years of experience in career development and professional writing to the company.",
      "He focuses on the experience clients have while working with Veylora, from the first conversation about their goals through to the final document, making sure every project is handled with care, clear communication, and attention to detail.",
      "Abdul-Kareem believes a career document is only as strong as the understanding behind it. He works to make sure Veylora's process starts with genuinely listening to a client's story before a single word is written.",
    ],
    photo: "/images/writer-abdul-kareem-ismail.jpg",
    featured: true,
  },
  {
    slug: "ericka-m",
    name: "Ericka M.",
    title: "Certified Professional Resume Writer & Career Writer",
    cardRole: "CPRW",
    summary:
      "Resumes, cover letters, bios and LinkedIn content for professionals across many industries.",
    lines: ["Resumes, cover letters,", "bios and LinkedIn content", "for professionals across", "many industries."],
    focus: ["Resumes", "LinkedIn Content", "Professional Biographies"],
    bio: [
      "Ericka M. is a professional resume writer with more than 15 years of experience in career writing and professional communication. She works with job seekers across a broad range of industries and career stages, developing resumes, cover letters, professional biographies, LinkedIn content, and other career documents.",
      "Ericka is known for her attention to detail and her ability to uncover the strongest parts of a client's professional story. She looks beyond job titles and responsibilities to identify accomplishments, transferable strengths, leadership contributions, and the qualities that make each candidate distinctive.",
      "Her work combines clear writing with thoughtful career positioning. Whether working with someone entering the workforce, an experienced professional seeking advancement, or a senior leader preparing for a major transition, Ericka focuses on producing documents that are professional, authentic, and easy for hiring teams to understand.",
    ],
    experience: "15+",
    photo: "/images/writer-ericka-mingus.jpg",
    featured: true,
    weight: 143,
  },
  {
    slug: "alexis-b",
    name: "Alexis B.",
    title: "Senior Resume Writer & Career Branding Advisor",
    cardRole: "Senior Resume Writer",
    summary:
      "Turns complex career histories into clear, compelling stories, with a focus on career branding.",
    lines: ["Turns complex career", "histories into clear,", "compelling stories, with a", "focus on career branding."],
    focus: ["Personal Branding", "Interview Preparation", "Career Documentation"],
    bio: [
      "Alexis B. has more than 15 years of experience working with professionals to strengthen the way they present themselves throughout the hiring process. Her experience includes professional resume development, career documentation, interview preparation, and personal branding for candidates ranging from early career professionals to experienced managers and senior leaders.",
      "Alexis has a particularly strong interest in turning complex career histories into clear, compelling stories. She works closely with clients to identify accomplishments that are often overlooked and transform them into concise, meaningful statements that communicate professional value.",
      "Her approach combines careful writing, strategic positioning, and a genuine understanding of what makes each candidate different. Every document is developed to sound natural, confident, and personal rather than generic or overly polished.",
    ],
    experience: "15+",
    photo: "/images/writer-alexis-binder.jpg",
    featured: true,
    weight: 138,
  },
  {
    slug: "bethany-c",
    name: "Bethany C.",
    title: "Senior Career Writer & Professional Development Specialist",
    cardRole: "Senior Career Writer",
    summary:
      "Supports professionals through career changes, advancement and new professional goals.",
    lines: ["Supports professionals", "through career changes,", "advancement and new", "professional goals."],
    focus: ["Career Changes", "Advancement", "Resume Writing"],
    bio: [
      "Bethany C. brings more than 15 years of experience supporting professionals as they navigate career changes, advancement opportunities, and new professional goals. Her background includes career development, professional communication, resume writing, and helping candidates clarify the direction they want their careers to take.",
      "She has worked with professionals across different levels, including recent graduates, experienced specialists, managers, and senior professionals preparing for significant career moves.",
      "Bethany believes that effective career documents begin with listening. Before writing, she takes the time to understand a client's experience, strengths, ambitions, and accomplishments. Her goal is to create documents that communicate those qualities naturally while giving employers a clear picture of what the candidate can contribute.",
      "Her writing style is practical, personable, and focused on helping clients present their experience with confidence.",
    ],
    experience: "15+",
    photo: "/images/writer-bethany-camasura.jpg",
    featured: true,
    weight: 135,
  },
  {
    slug: "jonathan-n",
    name: "Jonathan N.",
    title: "Senior Resume Writer & Career Strategy Consultant",
    cardRole: "Senior Resume Writer",
    summary:
      "Strategic resume writing that turns complicated career histories into clear narratives.",
    lines: ["Strategic resume writing", "that turns complicated", "career histories into", "clear, easy to follow", "narratives."],
    focus: ["Resume Writing", "Career Strategy", "Career Narratives"],
    bio: [
      "Jonathan N. brings more than 15 years of experience in career services, professional writing, and talent focused career development. His work has given him the opportunity to support professionals at many different stages, from candidates beginning their careers to experienced managers and senior level professionals pursuing leadership opportunities.",
      "Jonathan takes a strategic approach to resume writing. Rather than simply rewriting a client's existing document, he works to understand the progression of their career, the results they have delivered, and the direction they want to take next.",
      "His experience with professional communication and career strategy allows him to turn complicated career histories into organized, easy to follow narratives. Clients appreciate his practical approach, careful attention to detail, and ability to make professional achievements stand out without making the document feel exaggerated or artificial.",
    ],
    experience: "15+",
    photo: "/images/writer-jonathan-nugent.jpg",
    featured: true,
    weight: 134,
  },
  {
    slug: "jessica-c",
    name: "Jessica C.",
    title: "Senior Resume Writer & Career Development Professional",
    cardRole: "Senior Resume Writer",
    summary:
      "Treats every resume as an individual project, written in a natural, confident voice.",
    lines: ["Treats every resume as an", "individual project, written", "in a natural, confident", "voice."],
    focus: ["Resume Writing", "Candidate Positioning", "Career Development"],
    bio: [
      "Jessica C. has more than 15 years of experience helping professionals improve their career documents and communicate their experience more effectively. Her background includes professional writing, career development, candidate positioning, and working directly with individuals to identify the strengths that deserve greater attention in their job search.",
      "Jessica works with a wide range of professionals, including early career candidates, established specialists, managers, and senior professionals. She understands that no two career paths are exactly alike, which is why she approaches each resume as an individual project rather than relying on a standard formula.",
      "Her process begins with understanding the person behind the career history. From there, she develops clear, accomplishment focused content designed to communicate experience, strengths, and career direction in a natural and confident voice.",
      "Jessica's goal is simple: to help every client walk away with career documents that genuinely represent who they are and where they want to go.",
    ],
    experience: "15+",
    photo: "/images/writer-jessica-coppens.jpg",
    featured: true,
    weight: 134.5,
  },
  {
    slug: "suzanne-t",
    name: "Suzanne T.",
    title: "Senior Resume Writer & Career Development Specialist",
    cardRole: "Senior Resume Writer",
    summary:
      "Helps clients see the value in their experience and shape a focused professional story.",
    lines: ["Helps clients see the value", "in their experience and", "shape a focused", "professional story."],
    focus: ["Resume Writing", "Career Direction", "Career Transitions"],
    bio: [
      "Suzanne T. brings more than 15 years of experience in professional writing and career development. Her work has involved helping professionals organize their experience, clarify their career direction, and create stronger professional documents for important career transitions.",
      "Suzanne has experience working with candidates across multiple career levels, including students and recent graduates, experienced professionals, managers, and senior level candidates. She particularly enjoys helping clients recognize the value in experiences they may not initially consider significant.",
      "Her writing philosophy is centered on clarity, authenticity, and relevance. Suzanne believes a resume should sound like the person it represents while making it easy for a hiring manager to understand the candidate's capabilities and accomplishments.",
      "Through a collaborative approach, she helps clients turn years of experience into a focused professional story that supports their next career move.",
    ],
    experience: "15+",
    photo: "/images/writer-suzanne-taylor.jpg",
    featured: true,
    weight: 135,
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Writers", href: "/writers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
