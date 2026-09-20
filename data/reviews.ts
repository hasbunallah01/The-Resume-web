/**
 * SAMPLE DATA: placeholder reviews taken from the design mockup, used to
 * preview the layout. Replace every entry with real client reviews you
 * have permission to publish before launch. The average rating, total
 * count and year filters on the page are all calculated from this list.
 *
 * To show a reviewer photo, add `photo: "/images/reviews/name.jpg"` to an
 * entry (real photo, with the reviewer's permission). Without one, the
 * card shows the reviewer's initials.
 */
export type Review = {
  id: string;
  name: string;
  date: string; // ISO date
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  helpful: number;
  photo?: string;
};

export const reviews: Review[] = [
  { id: "r1", name: "Michael S.", date: "2026-01-15", rating: 5, helpful: 24, text: "Amazing service! The team was responsive, professional, and truly cared about my goals. Highly recommend!" },
  { id: "r2", name: "Sophia L.", date: "2026-02-03", rating: 5, helpful: 18, text: "I've worked with many teams, but this one stands out. They delivered exactly what they promised and more!" },
  { id: "r3", name: "James T.", date: "2026-03-12", rating: 5, helpful: 16, text: "Professional, efficient, and incredibly supportive throughout the entire process." },
  { id: "r4", name: "Amara O.", date: "2026-04-07", rating: 5, helpful: 21, text: "The team's attention to detail and commitment to excellence is unmatched. I'm beyond satisfied!" },
  { id: "r5", name: "Daniel W.", date: "2026-05-11", rating: 5, helpful: 17, text: "Great communication and fast turnaround. They made a complicated process simple and stress free." },
  { id: "r6", name: "Olivia B.", date: "2026-06-05", rating: 5, helpful: 20, text: "From start to finish, the experience was fantastic. The team is knowledgeable, responsive, and genuinely cares about your success." },
  { id: "r7", name: "Marcus L.", date: "2026-07-14", rating: 5, helpful: 15, text: "Highly professional and always available to answer my questions. I couldn't be happier with the results!" },
  { id: "r8", name: "Avery P.", date: "2026-08-22", rating: 5, helpful: 19, text: "They exceeded my expectations in every way. The process was smooth, and the outcome was better than I imagined." },
  { id: "r9", name: "Isabella R.", date: "2026-09-05", rating: 5, helpful: 22, text: "The entire process was seamless and professional. I felt supported at every step and highly recommend their services!" },
  { id: "r10", name: "Ethan K.", date: "2025-09-18", rating: 5, helpful: 14, text: "Incredible team, great results! They went above and beyond to make sure I was completely satisfied." },
  { id: "r11", name: "Grace M.", date: "2025-10-06", rating: 5, helpful: 18, text: "I appreciate the personalized approach and genuine care. It's rare to find a team that truly listens and delivers." },
  { id: "r12", name: "Lucas D.", date: "2025-11-12", rating: 5, helpful: 16, text: "Very professional, attentive to detail, and easy to work with. I'll definitely be using their services again!" },
  { id: "r13", name: "Ella R.", date: "2024-12-08", rating: 5, helpful: 20, text: "The team made the entire process so simple. Their expertise and friendly approach made a huge difference." },
  { id: "r14", name: "Noah J.", date: "2025-01-20", rating: 5, helpful: 17, text: "Excellent communication, top notch service, and a fantastic outcome. Couldn't ask for more!" },
  { id: "r15", name: "Mia C.", date: "2025-02-16", rating: 5, helpful: 15, text: "Truly a five star experience! They understood my needs and delivered beyond what I expected." },
  { id: "r16", name: "Benjamin F.", date: "2024-03-09", rating: 5, helpful: 14, text: "It was a pleasure working with this team. Their professionalism and knowledge made all the difference." },
  { id: "r17", name: "Charlotte T.", date: "2024-04-18", rating: 5, helpful: 19, text: "I felt valued, supported, and well informed throughout the entire process. Highly recommend!" },
  { id: "r18", name: "William P.", date: "2024-05-27", rating: 5, helpful: 16, text: "Great experience from start to finish. They are reliable, friendly, and truly know their stuff." },
  { id: "r19", name: "Sophie L.", date: "2024-06-14", rating: 5, helpful: 18, text: "The level of care and attention I received was outstanding. I'm so grateful for their support!" },
  { id: "r20", name: "Alexander B.", date: "2023-07-22", rating: 5, helpful: 13, text: "Professional, organized, and results driven. I highly recommend them to anyone looking for quality service." },
  { id: "r21", name: "Harper S.", date: "2023-08-11", rating: 5, helpful: 17, text: "The team was amazing! They made everything easy to understand and kept me informed at every stage." },
  { id: "r22", name: "Elijah R.", date: "2023-09-06", rating: 5, helpful: 15, text: "Fast, efficient, and professional. I couldn't have asked for a better experience!" },
  { id: "r23", name: "Lily W.", date: "2023-10-27", rating: 5, helpful: 20, text: "I'm beyond impressed with the level of service. They went above and beyond my expectations." },
  { id: "r24", name: "Jack M.", date: "2023-11-16", rating: 5, helpful: 16, text: "Excellent service, great results, and a team that truly cares. Highly recommend!" },
  { id: "r25", name: "Zoe F.", date: "2023-12-12", rating: 5, helpful: 14, text: "Professional, friendly, and incredibly helpful. I'll definitely work with them again!" },
];
