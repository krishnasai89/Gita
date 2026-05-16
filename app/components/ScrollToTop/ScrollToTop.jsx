"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollToTop() {
  const buttonRef = useRef(null);
  const pulseRef = useRef(null);

  useGSAP(() => {
    // 1. Initial hidden state
    // autoAlpha is better than opacity because it disables pointer-events when hidden!
    gsap.set(buttonRef.current, { autoAlpha: 0, scale: 0.5, y: 30 });

    // 2. Universal ScrollTrigger (Triggers after scrolling 400px down)
    ScrollTrigger.create({
      trigger: document.body,
      start: "top -400px",
      onEnter: () =>
        gsap.to(buttonRef.current, {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.5)",
        }),
      onLeaveBack: () =>
        gsap.to(buttonRef.current, {
          autoAlpha: 0,
          scale: 0.5,
          y: 30,
          duration: 0.3,
          ease: "power2.in",
        }),
    });

    // 3. Continuous Golden Pulse Animation
    gsap.to(pulseRef.current, {
      scale: 1.6,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: "power2.out",
    });
  }, []);

  const scrollToTop = () => {
    // Because you are using Lenis (from your SmoothScroll component),
    // this native window.scrollTo will automatically be intercepted and made beautifully smooth.
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[100] group outline-none"
    >
      {/* Animated Pulse Ring */}
      <div
        ref={pulseRef}
        className="absolute inset-0 rounded-full border border-amber-500/60 bg-amber-500/10 pointer-events-none"
      />

      {/* Main Button */}
      <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#050505]/80 backdrop-blur-md border border-amber-500/30 rounded-full text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 group-hover:bg-amber-500 group-hover:border-amber-400 group-hover:text-black group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
        <ArrowUp size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
      </div>

      {/* Label revealed on hover (Hidden on mobile to prevent stuck touch states) */}
      <div className="hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.5em] text-amber-500/60 font-black mb-1">
          Return to
        </span>
        <span className="text-sm font-serif text-stone-200 group-hover:text-amber-200 transition-colors duration-300 italic whitespace-nowrap">
          The Source
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-amber-500/50 to-transparent mt-1" />
      </div>
    </button>
  );
}
