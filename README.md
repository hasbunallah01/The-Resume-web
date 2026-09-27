# Veylora

Homepage for Veylora, a professional resume-writing company.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- Writers: `data/writers.ts` (add a writer there and the card appears)
- Images: `public/images`
- Nav/CTA links point to `/resumes`, `/services`, `/about`, `/contact`, `/writers/[slug]` (pages still to build)

## Contact form

`/contact` posts to `/api/contact`, which emails each inquiry (with the optional resume attached) through [Resend](https://resend.com). Set these environment variables (see `.env.example`), locally and in Vercel project settings:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL` (where inquiries are delivered)
- `CONTACT_FROM_EMAIL` (a verified sender, e.g. `Veylora <hello@your-domain.com>`)

Until they are set, the form shows a friendly "not connected yet" message. The displayed business email lives in `data/site.ts`.

## Public review system

The Services page "What Our Clients Say" section is a real, database-backed review system — not static data.

**Architecture:**
- **Database:** Postgres, via Neon's serverless driver (`@neondatabase/serverless`). Attach a Postgres storage to the Vercel project (Storage tab → Postgres, which now runs on Neon) — this injects `DATABASE_URL` automatically. The `reviews` table is created automatically on first use (see `lib/db.ts`); there is no manual migration step, though `db/schema.sql` documents the schema if you'd rather run it by hand.
- **Photo storage:** Vercel Blob (`@vercel/blob`). Attach a Blob store (Storage tab → Blob) to auto-inject `BLOB_READ_WRITE_TOKEN`. Uploaded photos are resized to a 400×400 WebP with `sharp` before upload, so nothing large ever touches the database.
- **Moderation:** every submission is stored as `pending` and never shown publicly until approved at `/admin/reviews`, protected by a password (`ADMIN_REVIEWS_PASSWORD`) and a signed session cookie (`ADMIN_SESSION_SECRET`) — the project has no other auth system, so this is a minimal, self-contained one.
- **Notifications:** reuses the existing Resend setup (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`) to email an admin notification on each new submission.
- **Spam protection:** honeypot field, server-side validation (name/rating/comment length + type), and a per-IP (hashed, not stored raw) 10-minute rate limit on submissions.

Until `DATABASE_URL` is set, the section shows an empty state and the form shows a "not connected yet" message, the same pattern used by the contact and newsletter forms.
