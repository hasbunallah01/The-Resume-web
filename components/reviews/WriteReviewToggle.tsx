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
        className="btn-line"
      >
        Share Your Experience
      </button>
    </div>
  );
}
