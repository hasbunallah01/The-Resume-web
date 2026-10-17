import { useId } from "react";

function Cluster({
  id,
  className,
  blur = 12,
}: {
  id: string;
  className?: string;
  blur?: number;
}) {
  return (
    <svg viewBox="0 0 640 260" className={className} aria-hidden="true">
      <defs>
        <filter id={id} x="-25%" y="-40%" width="150%" height="180%">
          <feGaussianBlur stdDeviation={blur} />
        </filter>
      </defs>
      <g filter={`url(#${id})`} fill="#fff">
        <ellipse cx="210" cy="150" rx="150" ry="52" />
        <ellipse cx="330" cy="142" rx="130" ry="58" />
        <ellipse cx="450" cy="156" rx="120" ry="46" />
        <ellipse cx="250" cy="118" rx="78" ry="40" />
        <ellipse cx="360" cy="108" rx="90" ry="42" />
        <ellipse cx="150" cy="138" rx="70" ry="36" />
        <ellipse cx="500" cy="128" rx="64" ry="34" />
        <ellipse cx="300" cy="168" rx="180" ry="36" opacity="0.9" />
      </g>
    </svg>
  );
}

export default function CloudLayers({ dense = false }: { dense?: boolean }) {
  const raw = useId().replace(/:/g, "");
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(880px_420px_at_72%_18%,rgba(255,255,255,0.72),transparent_62%)]" />
      <div data-depth="0.22" className="absolute -left-[18%] -top-[8%] w-[68%] opacity-90">
        <div className="motion-safe:animate-drift-slow">
          <Cluster id={`${raw}-a`} blur={14} />
        </div>
      </div>
      <div data-depth="0.14" className="absolute -right-[20%] top-[6%] w-[58%] opacity-80">
        <div className="motion-safe:animate-drift-reverse">
          <Cluster id={`${raw}-b`} blur={16} />
        </div>
      </div>
      <div data-depth="0.08" className="absolute left-[-8%] top-[28%] w-[42%] opacity-70">
        <div className="motion-safe:animate-drift">
          <Cluster id={`${raw}-c`} blur={18} />
        </div>
      </div>
      {dense && (
        <div data-depth="0.05" className="absolute -left-[14%] bottom-[-8%] w-[130%] opacity-95">
          <div className="motion-safe:animate-drift-slow">
            <Cluster id={`${raw}-d`} blur={20} className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
