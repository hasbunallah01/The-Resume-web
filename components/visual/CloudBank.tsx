/**
 * Layered cloud bank that drifts sideways on a seamless loop. Pure CSS
 * (transform only), decorative, and frozen when reduced motion is preferred.
 * Height comes from the --cloud-h custom property so one bank can size itself
 * for phone and desktop.
 */
type Layer = { scale: number; opacity: number; seconds: number; lift: string; reverse?: boolean };

const defaultLayers: Layer[] = [
  { scale: 0.72, opacity: 0.5, seconds: 260, lift: "34%", reverse: true },
  { scale: 1, opacity: 0.9, seconds: 170, lift: "0%" },
];

export default function CloudBank({
  className = "",
  layers = defaultLayers,
}: {
  className?: string;
  layers?: Layer[];
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 overflow-hidden ${className}`}>
      {layers.map((l, i) => (
        <div
          key={i}
          className="absolute left-0 bg-[url('/hero/cloud-loop.webp')] bg-[length:auto_100%] bg-repeat-x will-change-transform animate-cloud-loop"
          style={{
            bottom: l.lift,
            height: `calc(var(--cloud-h, 200px) * ${l.scale})`,
            width: `calc(var(--cloud-h, 200px) * ${l.scale} * 23.8)`,
            opacity: l.opacity,
            animationDuration: `${l.seconds}s`,
            animationDirection: l.reverse ? "reverse" : "normal",
          }}
        />
      ))}
    </div>
  );
}

/** A zero height seam between sections with a soft cloud bank sitting behind it. */
export function CloudSeam({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative -z-10 h-0 ${className}`}>
      <CloudBank
        className="-top-[calc(var(--cloud-h)*0.7)] h-[calc(var(--cloud-h)*1.4)] [--cloud-h:clamp(120px,14vw,200px)] [mask-image:linear-gradient(180deg,transparent,#000_30%,#000_75%,transparent)]"
        layers={[
          { scale: 0.7, opacity: 0.75, seconds: 240, lift: "30%", reverse: true },
          { scale: 1, opacity: 1, seconds: 160, lift: "4%" },
        ]}
      />
    </div>
  );
}
