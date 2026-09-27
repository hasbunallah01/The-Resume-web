"use client";

import { useState } from "react";
import { StarIcon } from "../resumes/ResumeIcons";

export default function StarPicker({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (v: number) => void;
  error?: string;
}) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;

  return (
    <div>
      <span id="rating-label" className="mb-2 block text-[13.5px] font-medium text-navy">
        Rating<span className="ml-0.5 text-[#b4442f]">*</span>
      </span>
      <div
        role="radiogroup"
        aria-labelledby="rating-label"
        aria-describedby={error ? "rating-error" : undefined}
        className="flex items-center gap-1.5"
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            onMouseEnter={() => setHover(n)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(0)}
            onClick={() => onChange(n)}
            className="rounded-[3px] p-1 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-dark"
          >
            <StarIcon
              className={`h-[30px] w-[30px] transition-colors ${
                n <= shown ? "text-[#f0a92e]" : "text-[#dcd6c6]"
              }`}
            />
          </button>
        ))}
        {value > 0 && (
          <span className="ml-2 text-[13.5px] text-ink-muted">{value} out of 5</span>
        )}
      </div>
      {error && (
        <p id="rating-error" role="alert" className="mt-1.5 text-[12.5px] text-[#b4442f]">
          {error}
        </p>
      )}
    </div>
  );
}
