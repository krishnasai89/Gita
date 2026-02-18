"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function WisdomVerse({ slice }) {
  const container = useRef();
  const typingRef = useRef();

  const translation =
    slice?.primary?.translation ||
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.";

  useGSAP(
    () => {
      if (!slice) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%", // Starts when section is well into view
          toggleActions: "play none none reverse",
        },
      });

      // 1. Reveal Citation and Sanskrit first
      tl.fromTo(
        ".verse-header",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          ".sanskrit-text",
          { opacity: 0, filter: "blur(10px)" },
          { opacity: 1, filter: "blur(0px)", duration: 1.5 },
          "-=0.5"
        )
        // 2. THE TYPING EFFECT
        // We clear the text first, then type it
        .to(typingRef.current, {
          duration: 3,
          text: {
            value: translation,
            delimiter: "", // Types character by character
          },
          ease: "none",
        });
    },
    { scope: container, dependencies: [slice] }
  );

  if (!slice) return null;

  return (
    <section
      ref={container}
      className="min-h-screen flex flex-col items-center justify-center bg-stone-950 px-6"
    >
      <div className="max-w-4xl text-center">
        <div className="verse-header opacity-0 mb-8">
          <span className="text-amber-500/50 uppercase tracking-[0.5em] text-xs font-bold">
            {slice.primary?.citation}
          </span>
        </div>

        <h2 className="sanskrit-text opacity-0 text-3xl md:text-5xl font-serif text-stone-200 mb-12 italic leading-relaxed">
          {slice.primary?.sanskrit_text}
        </h2>

        <div className="w-16 h-px bg-amber-500/30 mx-auto mb-12" />

        {/* This span stays empty initially; GSAP will inject the text */}
        <p className="text-xl md:text-2xl text-amber-500/80 font-light tracking-wide leading-loose min-h-[100px]">
          <span ref={typingRef}></span>
          <span className="animate-pulse ml-1 inline-block w-1 h-6 bg-amber-500">
            |
          </span>
        </p>
      </div>
    </section>
  );
}
