"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { StarIcon } from "../resumes/ResumeIcons";
import type { ReviewRow, ReviewStatus } from "@/lib/reviews";

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-[1px]" role="img" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <StarIcon
          key={i}
          className={`h-[13px] w-[13px] ${i <= value ? "text-[#f0a92e]" : "text-[#dcd6c6]"}`}
        />
      ))}
    </div>
  );
}

const TABS: { key: ReviewStatus; label: string }[] = [
  { key: "pending", label: "Pending" },
  { key: "approved", label: "Approved" },
  { key: "rejected", label: "Rejected" },
];

export default function AdminReviewsList() {
  const router = useRouter();
  const [reviews, setReviews] = useState<ReviewRow[] | null>(null);
  const [tab, setTab] = useState<ReviewStatus>("pending");
  const [busyId, setBusyId] = useState<number | null>(null);
  const [loadError, setLoadError] = useState("");

  const load = async () => {
    try {
      const res = await fetch("/api/admin/reviews", { cache: "no-store" });
      if (res.status === 401) {
        router.refresh();
        return;
      }
      const data = await res.json();
      setReviews(data.reviews ?? []);
    } catch {
      setLoadError("Couldn't load reviews. Please refresh the page.");
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const act = async (id: number, status: "approved" | "rejected") => {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setReviews((rs) => rs?.map((r) => (r.id === id ? { ...r, status } : r)) ?? null);
      }
    } finally {
      setBusyId(null);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  if (loadError) return <p className="mt-8 text-[#b4442f]">{loadError}</p>;
  if (!reviews) return <p className="mt-8 text-ink-muted">Loading reviews...</p>;

  const shown = reviews.filter((r) => r.status === tab);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {TABS.map((t) => {
            const count = reviews.filter((r) => r.status === t.key).length;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`h-[38px] rounded-full border px-5 text-[13.5px] transition-colors ${
                  tab === t.key
                    ? "border-navy-dark bg-navy-dark text-white"
                    : "border-[#d5dde3] bg-white text-navy hover:border-navy-dark"
                }`}
              >
                {t.label} ({count})
              </button>
            );
          })}
        </div>
        <button onClick={logout} className="text-[13px] text-ink-muted underline underline-offset-4 hover:text-navy">
          Sign out
        </button>
      </div>

      {shown.length === 0 ? (
        <p className="mt-8 text-ink-muted">No {tab} reviews.</p>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {shown.map((r) => (
            <li key={r.id} className="rounded-[6px] border border-[#e4dfd0] bg-white p-5">
              <div className="flex items-center gap-3">
                {r.photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.photo_url} alt="" className="h-[40px] w-[40px] rounded-full object-cover" />
                ) : (
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#e3ebf1] text-[13px] font-semibold text-navy">
                    {r.name.slice(0, 2).toUpperCase()}
                  </span>
                )}
                <div>
                  <p className="text-[14.5px] font-semibold text-navy">{r.name}</p>
                  <p className="text-[12px] text-ink-muted">
                    {new Date(r.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="mt-2.5">
                <Stars value={r.rating} />
              </div>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-ink-body">{r.comment}</p>
              <div className="mt-4 flex gap-3">
                <button
                  disabled={busyId === r.id || r.status === "approved"}
                  onClick={() => act(r.id, "approved")}
                  className="h-[38px] flex-1 rounded-[4px] bg-navy-dark text-[13.5px] font-medium text-white disabled:opacity-50"
                >
                  Approve
                </button>
                <button
                  disabled={busyId === r.id || r.status === "rejected"}
                  onClick={() => act(r.id, "rejected")}
                  className="h-[38px] flex-1 rounded-[4px] border border-[#b4442f] text-[13.5px] font-medium text-[#b4442f] disabled:opacity-50"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
