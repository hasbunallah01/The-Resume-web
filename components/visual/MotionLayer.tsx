"use client";

import { useEffect } from "react";

/**
 * Site wide motion, kept light: scroll reveal, hero parallax and desktop card tilt.
 * Everything uses transform and opacity only. When the visitor prefers reduced
 * motion the page stays alive in a calmer form: reveals are shorter and smaller and
 * the pointer and scroll parallax is off.
 */
export default function MotionLayer() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanups: Array<() => void> = [];
    const root = document.documentElement;
    root.classList.add("motion-ok");
    root.classList.toggle("motion-calm", reduce.matches);

    /* ---------- Scroll reveal ---------- */
    const main = document.getElementById("main");
    if (main && "IntersectionObserver" in window) {
      const skip = (el: Element) =>
        Boolean(el.closest('[aria-labelledby="hero-heading"], [data-noreveal], form, nav, article'));
      const targets = new Set<HTMLElement>();
      main.querySelectorAll<HTMLElement>("section").forEach((s) => {
        if (!skip(s) && !s.parentElement?.closest("section")) targets.add(s);
      });
      main.querySelectorAll<HTMLElement>("ul, ol, [data-stagger]").forEach((list) => {
        if (skip(list) || list.children.length < 3 || list.children.length > 9) return;
        Array.from(list.children).forEach((child, i) => {
          const el = child as HTMLElement;
          if (el.hasAttribute("data-tilt")) return;
          el.style.setProperty("--reveal-delay", `${(i % 4) * 70}ms`);
          targets.add(el);
        });
      });
      main.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => targets.add(el));

      // Only hide what is still below the fold, so nothing on screen flickers.
      const fold = window.innerHeight * 0.92;
      const pending: HTMLElement[] = [];
      targets.forEach((el) => {
        if (el.getBoundingClientRect().top > fold) {
          el.classList.add("reveal");
          pending.push(el);
        }
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      pending.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Flight paths: a paper plane travels along numbered steps ---------- */
    const flights = Array.from(document.querySelectorAll<HTMLElement>("[data-flight]"));
    let flightRaf = 0;
    const paintFlights = () => {
      flightRaf = 0;
      const vh = window.innerHeight;
      flights.forEach((f) => {
        const r = f.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = Math.min(1, Math.max(0, (vh * 0.72 - r.top) / Math.max(1, r.height * 0.9)));
        f.querySelectorAll<HTMLElement>("[data-flight-plane]").forEach((plane) => {
          const track = plane.parentElement as HTMLElement;
          if (!track.offsetParent) return; // hidden at this breakpoint
          track.style.setProperty("--flight-p", p.toFixed(3));
          if (plane.dataset.flightPlane === "x") {
            const len = track.clientWidth - plane.offsetWidth;
            plane.style.transform = `translate3d(${(p * len).toFixed(1)}px, -50%, 0)`;
          } else {
            const len = track.clientHeight - plane.offsetHeight;
            plane.style.transform = `translate3d(-50%, ${(p * len).toFixed(1)}px, 0)`;
          }
        });
      });
    };
    if (flights.length) {
      const queueFlights = () => {
        if (!flightRaf) flightRaf = requestAnimationFrame(paintFlights);
      };
      paintFlights();
      window.addEventListener("scroll", queueFlights, { passive: true });
      window.addEventListener("resize", queueFlights, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", queueFlights);
        window.removeEventListener("resize", queueFlights);
        if (flightRaf) cancelAnimationFrame(flightRaf);
      });
    }

    /* ---------- Hero parallax ---------- */
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const mouseLayers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-mouse]"));
    const scrollLayers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-scroll]"));
    let raf = 0;
    let mx = 0;
    let my = 0;
    const paint = () => {
      raf = 0;
      if (reduce.matches) return;
      const y = window.scrollY;
      mouseLayers.forEach((el) => {
        const d = Number(el.dataset.parallaxMouse || 0);
        el.style.transform = `translate3d(${(-mx * d).toFixed(2)}px, ${(-my * d + y * 0.05).toFixed(2)}px, 0)`;
      });
      if (y < window.innerHeight * 1.5) {
        scrollLayers.forEach((el) => {
          const f = Number(el.dataset.parallaxScroll || 0);
          el.style.transform = `translate3d(0, ${(y * f).toFixed(2)}px, 0)`;
        });
      }
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    if (mouseLayers.length || scrollLayers.length) {
      const onMove = (e: PointerEvent) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
        queue();
      };
      if (fine) window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("scroll", queue, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("scroll", queue);
        if (raf) cancelAnimationFrame(raf);
      });
    }

    /* ---------- Card tilt with glare (desktop pointers only) ---------- */
    if (fine) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const max = Number(el.dataset.tilt || 6);
        let frame = 0;
        let px = 0.5;
        let py = 0.5;
        const apply = () => {
          frame = 0;
          el.style.setProperty("--rx", `${((0.5 - py) * max).toFixed(2)}deg`);
          el.style.setProperty("--ry", `${((px - 0.5) * max).toFixed(2)}deg`);
          el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
        };
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          px = (e.clientX - r.left) / r.width;
          py = (e.clientY - r.top) / r.height;
          if (!frame) frame = requestAnimationFrame(apply);
        };
        const enter = () => el.classList.add("is-tilting");
        const leave = () => {
          el.classList.remove("is-tilting");
          px = 0.5;
          py = 0.5;
          if (frame) cancelAnimationFrame(frame);
          frame = 0;
          apply();
        };
        el.addEventListener("pointerenter", enter);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointerenter", enter);
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });
    }

    const onChange = () => {
      root.classList.toggle("motion-calm", reduce.matches);
      if (reduce.matches) {
        // Parallax stops; ambient drift and reveals carry on in their calmer form.
        [...mouseLayers, ...scrollLayers].forEach((el) => (el.style.transform = ""));
      } else {
        queue();
      }
    };
    reduce.addEventListener("change", onChange);
    cleanups.push(() => reduce.removeEventListener("change", onChange));

    return () => cleanups.forEach((c) => c());
  }, []);

  return null;
}
