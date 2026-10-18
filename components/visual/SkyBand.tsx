import Image from "next/image";
import HeroParallax from "./HeroParallax";
import CloudBank from "./CloudBank";

/**
 * Soft sky used behind the top of inner pages. It borrows the cloud bank from
 * the home hero art so every page opens in the same sky, just quieter.
 */
export default function SkyBand({
  children,
  className = "",
  dense = false,
}: {
  children: React.ReactNode;
  className?: string;
  dense?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_78%_0%,rgba(255,255,255,0.75),transparent_65%),linear-gradient(180deg,#e3f0fa_0%,#dcedf9_40%,rgba(234,244,251,0)_100%)]" />
        {/* High, thin cloud wisps near the top so the sky moves on every screen size */}
        <CloudBank
          className="top-0 h-[calc(var(--cloud-h)*1.2)] [--cloud-h:clamp(110px,12vw,180px)] [mask-image:linear-gradient(180deg,transparent,#000_35%,#000_60%,transparent)]"
          layers={[
            { scale: 0.6, opacity: 0.45, seconds: 280, lift: "40%" },
            { scale: 0.85, opacity: 0.6, seconds: 200, lift: "8%", reverse: true },
          ]}
        />
        <HeroParallax>
          <div
            data-depth="0.08"
            className={`absolute inset-x-0 bottom-0 ${dense ? "h-[300px] opacity-80" : "h-[220px] opacity-60"} [mask-image:linear-gradient(180deg,transparent,#000_45%,#000_70%,transparent)]`}
          >
            <div className="absolute inset-0 animate-drift-slow">
              <Image
                src="/hero/clouds-1920.webp"
                alt=""
                fill
                sizes="100vw"
                className="scale-110 object-cover object-bottom"
              />
            </div>
            <CloudBank className="inset-y-0 [--cloud-h:clamp(120px,14vw,210px)]" />
          </div>
        </HeroParallax>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
