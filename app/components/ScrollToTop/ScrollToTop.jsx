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
  const buttonRef = useRef();

  useGSAP(() => {
    // 1. Hide/Show logic based on Scroll Position
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".verse-header", // Shows up once the user reaches the end of Chariot list
          start: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 2. Continuous Golden Pulse Animation
    gsap.to(".pulse-ring", {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: "sine.out",
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 z-[60] group pointer-events-auto"
    >
      {/* Animated Pulse Ring */}
      <div className="pulse-ring absolute inset-0 rounded-full border-2 border-amber-500/50" />

      {/* Main Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-stone-900 border border-amber-500/30 rounded-full text-amber-500 shadow-2xl transition-all duration-300 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:scale-110">
        <ArrowUp size={24} />
      </div>

      {/* Label revealed on hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Ascend
      </span>
    </button>
  );
}
