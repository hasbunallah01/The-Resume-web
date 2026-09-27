import { ensureReviewsTable, sql } from "./db";

export type ReviewStatus = "pending" | "approved" | "rejected";

export type ReviewRow = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  photo_url: string | null;
  status: ReviewStatus;
  created_at: string;
};

export async function insertReview(input: {
  name: string;
  rating: number;
  comment: string;
  photoUrl: string | null;
  ipHash: string | null;
}) {
  await ensureReviewsTable();
  const db = sql();
  const rows = (await db`
    INSERT INTO reviews (name, rating, comment, photo_url, ip_hash)
    VALUES (${input.name}, ${input.rating}, ${input.comment}, ${input.photoUrl}, ${input.ipHash})
    RETURNING id, created_at
  `) as { id: number; created_at: string }[];
  return rows[0];
}

/** Returns true if this IP hash submitted a review within the last `minutes`. */
export async function hasRecentSubmission(ipHash: string, minutes = 10) {
  await ensureReviewsTable();
  const db = sql();
  const rows = (await db`
    SELECT id FROM reviews
    WHERE ip_hash = ${ipHash}
      AND created_at > now() - (${minutes} * interval '1 minute')
    LIMIT 1
  `) as { id: number }[];
  return rows.length > 0;
}

export async function listApprovedReviews(): Promise<ReviewRow[]> {
  await ensureReviewsTable();
  const db = sql();
  return (await db`
    SELECT id, name, rating, comment, photo_url, status, created_at
    FROM reviews
    WHERE status = 'approved'
    ORDER BY created_at DESC
  `) as ReviewRow[];
}

export async function listAllReviews(): Promise<ReviewRow[]> {
  await ensureReviewsTable();
  const db = sql();
  return (await db`
    SELECT id, name, rating, comment, photo_url, status, created_at
    FROM reviews
    ORDER BY created_at DESC
  `) as ReviewRow[];
}

export async function setReviewStatus(id: number, status: "approved" | "rejected") {
  await ensureReviewsTable();
  const db = sql();
  await db`UPDATE reviews SET status = ${status} WHERE id = ${id}`;
}
