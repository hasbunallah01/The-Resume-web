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
