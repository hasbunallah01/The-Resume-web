"use client";

import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function WriteReviewToggle() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="mt-8">
        <ReviewForm onSubmitted={() => undefined} />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-[48px] items-center gap-2.5 rounded-[4px] border border-navy-dark px-6 text-[14px] font-medium text-navy-dark transition-colors hover:bg-navy-dark hover:text-white"
      >
        Share Your Experience
      </button>
    </div>
  );
}
