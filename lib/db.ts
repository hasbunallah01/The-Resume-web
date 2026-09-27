import { neon } from "@neondatabase/serverless";

/**
 * Reviews are stored in Postgres (Neon, attached to this Vercel project as
 * the "Postgres" storage integration — Vercel Postgres now runs on Neon).
 * The connection string Vercel injects is DATABASE_URL; POSTGRES_URL is
 * also accepted since some integration setups expose that name instead.
 */
export function databaseConfigured() {
  return Boolean(process.env.DATABASE_URL || process.env.POSTGRES_URL);
}

function connectionString() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("No database connection string configured.");
  return url;
}

let sqlClient: ReturnType<typeof neon> | null = null;
export function sql() {
  if (!sqlClient) sqlClient = neon(connectionString());
  return sqlClient;
}

let tableReady: Promise<void> | null = null;

/**
 * Creates the reviews table if it doesn't exist yet. Safe to call on every
 * request — this is how the project stays migration-free: there is no
 * separate migration step to run, the schema is created the first time the
 * database is used.
 */
export function ensureReviewsTable() {
  if (!tableReady) {
    const db = sql();
    tableReady = db`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
        comment TEXT NOT NULL,
        photo_url TEXT,
        status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
        ip_hash TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `.then(() => undefined);
  }
  return tableReady;
}
