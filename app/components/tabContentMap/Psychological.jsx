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
        ease: "power2.out",
      });

      // FIXED: opacity should be 0 in a 'from' tween to animate INTO visibility
      gsap.from(cardsRef.current, {
        opacity: 1,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [commentary]);

  // 2. Guard Clause now works because variables are defined above
  if (!context && items.length === 0) return null;

  return (
    <div ref={containerRef} className="space-y-16">
      {/* Header & Intro */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-stone-900 border border-white/10 rounded-xl text-amber-500">
            <Brain size={20} />
          </div>
          <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em]">
            Cognitive Analysis
          </h4>
        </div>

        {context && (
          <p className="psy-text text-stone-300 leading-relaxed text-xl font-serif italic">
            {context}
          </p>
        )}
      </div>

      {/* Psychological Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group relative p-10 bg-stone-950 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all duration-500"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-stone-800 group-hover:bg-amber-500/50 group-hover:w-24 transition-all duration-500 rounded-b-full"></div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-600">
                {index % 2 === 0 ? (
                  <Layers size={14} />
                ) : (
                  <Activity size={14} />
                )}
                <span className="text-[9px] font-black uppercase tracking-widest">
                  Internal Layer 0{index + 1}
                </span>
              </div>

              <h5 className="text-stone-100 font-serif text-2xl tracking-wide group-hover:text-amber-500 transition-colors">
                {item.title}
              </h5>

              <p className="text-stone-400 text-base leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
