"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Safe layout effect for Next.js SSR
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function SmoothScroll({
  children,
  // --- SCROLL CUSTOMIZATION PROPS ---
  lerp = 0.08, // Scroll friction/smoothness (lower = smoother but slower)
  duration = 1.2, // Scroll duration
  smoothWheel = true, // Enable smooth scrolling for mouse wheels
  smoothTouch = false, // Native scroll on touch devices is usually better UX
  infinite = false, // Set to true for infinite looping scroll
}) {
  const lenisRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    // 1. Initialize Lenis with customizable props
    const lenis = new Lenis({
      duration,
      lerp,
      smoothWheel,
      smoothTouch,
      infinite,
    });

    lenisRef.current = lenis;

    // 2. Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 3. Connect Lenis `raf` to GSAP's ticker (Modern standard integration)
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);

    // 4. Prevent GSAP from lagging behind the smooth scroll
    gsap.ticker.lagSmoothing(0);

    // 5. Cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, [duration, lerp, smoothWheel, smoothTouch, infinite]);

  return <>{children}</>;
}
