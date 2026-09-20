/**
 * SAMPLE DATA — placeholder reviews used to preview the layout.
 * Replace every entry with real client reviews that you have permission
 * to publish before launch. The average rating, total count and year
 * filters on the page are all calculated from this list.
 */
export type Review = {
  id: string;
  name: string;
  date: string; // ISO date
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  helpful: number;
};

export const reviews: Review[] = [
  { id: "r1", name: "Michael S.", date: "2026-01-15", rating: 5, helpful: 24, text: "Amazing service! The team was responsive, professional, and truly cared about my goals. Highly recommend." },
  { id: "r2", name: "Sophia L.", date: "2026-02-03", rating: 5, helpful: 18, text: "They worked with many teams, but this one stands out. They delivered exactly what they promised and more." },
  { id: "r3", name: "James T.", date: "2025-11-12", rating: 5, helpful: 21, text: "Professional, efficient, and incredibly supportive throughout the entire process." },
  { id: "r4", name: "Amara O.", date: "2025-09-07", rating: 5, helpful: 21, text: "Great attention to detail and commitment to excellence. I'm beyond satisfied!" },
  { id: "r5", name: "Daniel W.", date: "2025-05-11", rating: 5, helpful: 16, text: "Great communication and fast turnaround. They made a complicated process simple and stress-free." },
  { id: "r6", name: "Olivia B.", date: "2024-10-05", rating: 5, helpful: 20, text: "From start to finish, the experience was fantastic. The team is knowledgeable, responsive, and genuinely cares about your success." },
  { id: "r7", name: "Marcus L.", date: "2024-07-16", rating: 5, helpful: 15, text: "Incredibly professional and always available to answer my questions. I couldn't be happier with the results." },
  { id: "r8", name: "Avery P.", date: "2023-08-22", rating: 4, helpful: 19, text: "Thoughtful approach and clear communication. They exceeded my expectations in every way." },
  { id: "r9", name: "Isabella R.", date: "2023-05-05", rating: 5, helpful: 22, text: "The process was seamless and I felt supported every step of the way. Would gladly recommend them." },
  { id: "r10", name: "Ethan K.", date: "2023-03-10", rating: 5, helpful: 14, text: "Incredibly helpful team. They went above and beyond to make sure I was fully satisfied." },
];
