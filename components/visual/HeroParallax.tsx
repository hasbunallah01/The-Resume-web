"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]"));

    let raf = 0;
    const apply = () => {
      if (reduce.matches) {
        layers.forEach((layer) => {
          layer.style.transform = "";
        });
        return;
      }
      const y = window.scrollY;
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        layer.style.transform = `translate3d(0, ${y * depth}px, 0)`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", apply);
    return () => {
      window.removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", apply);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden">
      {children}
    </div>
  );
}
