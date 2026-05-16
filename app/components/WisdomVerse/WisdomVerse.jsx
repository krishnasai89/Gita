"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function WisdomVerse({ slice }) {
  const container = useRef();
  const typingRef = useRef();
  const auraRef = useRef();

  // State to hold particles to avoid hydration mismatch
  const [particles, setParticles] = useState([]);

  const translation =
    slice?.primary?.translation ||
    "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.";

  const sanskrit =
    slice?.primary?.sanskrit_text || "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।";

  // 1. Particle Generation (Safe for SSR)
  useEffect(() => {
    const generated = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100 + 20}%`,
    }));
    setParticles(generated);
  }, []);

  useGSAP(
    () => {
      if (!slice || particles.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Aura Expansion
      tl.fromTo(
        auraRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, ease: "power2.out" },
      );

      // Meta & Sanskrit Reveal
      tl.fromTo(
        ".verse-meta",
        { opacity: 0, letterSpacing: "1em" },
        { opacity: 1, letterSpacing: "0.5em", duration: 1.5, ease: "expo.out" },
        "-=1.5",
      ).fromTo(
        ".sanskrit-text",
        { opacity: 0, y: 30, filter: "blur(15px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 2,
          ease: "power3.out",
        },
        "-=1",
      );

      // Character-by-character revelation
      tl.to(typingRef.current, {
        duration: 4,
        text: { value: translation, delimiter: "" },
        ease: "none",
        onUpdate: () => {
          gsap.to(".typing-cursor", { opacity: Math.random(), duration: 0.1 });
        },
      });

      // Ember Ascension
      gsap.to(".ember", {
        y: -100,
        opacity: 0,
        duration: "random(4, 7)",
        repeat: -1,
        stagger: 0.3,
        ease: "power1.out",
      });
    },
    { scope: container, dependencies: [slice, particles] },
  );

  if (!slice) return null;

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] px-6 overflow-hidden"
    >
      {/* ATMOSPHERIC AURA */}
      <div
        ref={auraRef}
        className="absolute w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] pointer-events-none"
      />

      {/* FLOATING EMBERS */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((pos, i) => (
          <div
            key={i}
            className="ember absolute w-1 h-1 bg-amber-500/20 rounded-full blur-[1px]"
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl text-center z-10">
        <div className="verse-meta opacity-0 mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/40" />
          <span className="text-amber-500/60 uppercase text-[10px] font-black tracking-widest">
            {slice.primary?.citation || "Chapter 2, Verse 47"}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/40" />
        </div>

        <h2 className="sanskrit-text opacity-0 text-4xl md:text-6xl font-serif mb-16 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 drop-shadow-2xl">
            {sanskrit}
          </span>
        </h2>

        <div className="relative mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mx-auto" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500/30 w-4 h-4" />
        </div>

        <div className="relative">
          <p className="text-2xl md:text-3xl text-stone-300 font-serif font-light italic leading-relaxed min-h-[120px]">
            “<span ref={typingRef}></span>”
            <span className="typing-cursor ml-2 inline-block w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_10px_#f59e0b]" />
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 opacity-20 flex flex-col items-center gap-4">
        <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">
          Contemplate
        </p>
        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500 to-transparent" />
      </div>
    </section>
  );
}
