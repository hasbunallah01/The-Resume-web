import { cookies } from "next/headers";
import type { Metadata } from "next";
import { ADMIN_COOKIE_NAME, verifySessionCookieValue } from "@/lib/adminAuth";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminReviewsList from "@/components/admin/AdminReviewsList";

export const metadata: Metadata = {
  title: "Review Moderation | Veylora",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminReviewsPage() {
  const jar = await cookies();
  const authed = verifySessionCookieValue(jar.get(ADMIN_COOKIE_NAME)?.value);

  return (
    <div className="min-h-screen bg-ivory">
      <div className="mx-auto w-[min(1000px,calc(100%-48px))] py-12">
        <h1 className="font-serif text-[28px] font-[520] text-navy">Review Moderation</h1>
        <p className="mt-1.5 text-[14px] text-ink-muted">
          Approve or reject reviews submitted through the public Services page.
        </p>
        {authed ? <AdminReviewsList /> : <AdminLogin />}
      </div>
    </div>
  );
}
