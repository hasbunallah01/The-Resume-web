import CloudLayers from "./CloudLayers";
import HeroParallax from "./HeroParallax";

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
    <div className={`relative overflow-hidden ${className}`}>
      <HeroParallax>
        <CloudLayers dense={dense} />
      </HeroParallax>
      <div className="relative">{children}</div>
    </div>
  );
}
