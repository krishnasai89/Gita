"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Microscope, Atom, Binary, Network } from "lucide-react";

export default function Scientific({ commentary, onTermClick }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // 1. Gracefully handle both the new camelCase schema and the old schema
  const sciData =
    commentary?.scientificRational ||
    commentary?.Scientific_Rational_Perspective ||
    {};
  const intro = sciData.intro;
  const points = sciData.points || [];

  useEffect(() => {
    // Clear array to prevent memory leaks in React Strict Mode
    cardsRef.current = cardsRef.current.slice(0, points.length);

    if (!intro && points.length === 0) return;

    const ctx = gsap.context(() => {
      // Intro section fade-up
      gsap.from(".sci-intro", {
        opacity: 1,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      // FIXED: opacity is now 0 so it correctly fades INTO visibility
      gsap.from(cardsRef.current, {
        opacity: 1,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [intro, points.length]);

  // Guard Clause
  if (!intro && points.length === 0) return null;

  // Icon rotating logic for cards
  const icons = [Atom, Binary, Network];

  return (
    <section
      ref={containerRef}
      className="space-y-12 animate-in fade-in duration-700"
    >
      {/* 1. HEADER & INTRO (The Blueprint Card) */}
      <div className="sci-intro relative p-8 md:p-12 bg-[#050505] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden group">
        {/* CSS Grid Pattern for a "Scientific/Analytical" vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-stone-900 border border-amber-500/20 rounded-2xl text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Microscope size={24} />
            </div>
            <h4 className="text-amber-500/60 text-[10px] font-black uppercase tracking-[0.5em] flex items-center gap-3">
              Empirical Observation
              <div className="h-px w-12 bg-amber-500/30 hidden sm:block" />
            </h4>
          </div>

          {intro && (
            <p className="text-stone-300 font-serif text-xl md:text-2xl font-light italic leading-relaxed max-w-4xl">
              {intro}
            </p>
          )}
        </div>
      </div>

      {/* 2. POINTS MAPPING (Analytical Grid) */}
      {points.length > 0 && (
        <div
          className={`grid gap-6 ${points.length === 1 ? "grid-cols-1 max-w-4xl" : "grid-cols-1 lg:grid-cols-2"}`}
        >
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group relative p-8 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] hover:border-amber-500/30 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none text-amber-500">
                  <Icon size={80} strokeWidth={1} />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Data-Index Style Numbering */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/80 border border-white/5 rounded-md text-amber-500/80 font-mono text-[10px] tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    DATA.{(i + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="space-y-4">
                    <h5 className="text-stone-100 font-serif text-2xl tracking-wide group-hover:text-amber-400 transition-colors duration-500">
                      {point.title || point.heading}
                    </h5>

                    <div className="w-8 h-px bg-stone-800 group-hover:w-16 group-hover:bg-amber-500/50 transition-all duration-500" />

                    <p className="text-stone-400 text-base md:text-lg leading-relaxed font-light">
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
