"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Brain, Layers, Activity } from "lucide-react";

export default function Psychological({ commentary, onTermClick }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // 1. Properly define sub-variables first
  const context = commentary?.Psychological_context;
  const items = commentary?.Psychological || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for the intro text
      gsap.from(".psy-text", {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      // FIXED: opacity should be 0 in a 'from' tween to animate INTO visibility
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
  }, [commentary]);

  // 2. Guard Clause now works because variables are defined above
  if (!context && items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="space-y-16 animate-in fade-in duration-700"
    >
      {" "}
      {/* Header & Intro */}
      <div className="space-y-8 max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-stone-900/50 border border-white/5 rounded-2xl text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <Brain size={20} />
          </div>
          <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">
            Cognitive Analysis
          </h4>
        </div>

        {context && (
          <div className="relative pl-8 md:pl-10">
            {/* Elegant Left Accent Line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/10 to-transparent" />
            <p className="psy-text text-stone-300 leading-relaxed text-xl md:text-2xl font-serif font-light italic">
              {context}
            </p>
          </div>
        )}
      </div>
      {/* Psychological Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative p-8 md:p-10 bg-gradient-to-br from-stone-900/40 to-[#050505] border border-white/5 rounded-[2.5rem] hover:bg-stone-900/60 hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-500 shadow-xl overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-800 group-hover:bg-amber-500/50 group-hover:w-24 transition-all duration-500 rounded-b-full"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 text-stone-500 group-hover:text-amber-500/80 transition-colors duration-500">
                {index % 2 === 0 ? (
                  <Layers size={14} />
                ) : (
                  <Activity size={14} />
                )}
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">
                  Internal Layer {(index + 1).toString().padStart(2, "0")}{" "}
                </span>
              </div>
              <div className="space-y-4">
                <h5 className="text-stone-100 font-serif text-2xl tracking-wide group-hover:text-amber-400 transition-colors duration-500">
                  {item.title}
                </h5>
                <p className="text-stone-400 text-base leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
