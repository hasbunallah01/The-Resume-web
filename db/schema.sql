-- Reviews table for the public review system.
-- This is applied automatically by lib/db.ts (ensureReviewsTable) on first
-- use, so running this file by hand is optional — it's kept here as
-- documentation and for anyone who prefers to run it manually in the
-- Neon/Vercel Postgres query editor.

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment TEXT NOT NULL,
  photo_url TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  ip_hash TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS reviews_status_created_at_idx ON reviews (status, created_at DESC);
