"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Microscope, Atom, Binary } from "lucide-react";

export default function Scientific({ commentary, onTermClick }) {
  // 1. Properly extract the perspective object
  const ScientificPerspective = commentary?.Scientific_Rational_Perspective;

  // 2. Define the sub-variables safely
  const intro = ScientificPerspective?.intro;
  const points = ScientificPerspective?.points || [];

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Only run animation if data actually exists
    if (!ScientificPerspective) return;

    const ctx = gsap.context(() => {
      gsap.from(".scientific-card", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(cardsRef.current, {
        opacity: 1,
        x: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [ScientificPerspective]);

  // 3. The Guard Clause using the defined variables
  if (!intro && points.length === 0) return null;

  return (
    <section ref={sectionRef} className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-stone-900 border border-white/10 rounded-xl text-amber-500 shadow-xl">
            <Microscope size={20} />
          </div>
          <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em]">
            Empirical Observation
          </h4>
        </div>

        {intro && (
          <p className="scientific-intro text-stone-300 font-serif text-xl italic leading-relaxed">
            {intro}
          </p>
        )}
      </div>

      {/* Points Mapping */}
      <div className="grid grid-cols-1 gap-4">
        {points.map((point, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative p-8 bg-stone-950 border border-white/5 rounded-[2rem] hover:border-amber-500/20 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
              {i % 2 === 0 ? <Atom size={40} /> : <Binary size={40} />}
            </div>

            <div className="relative z-10 space-y-3">
              <h5 className="text-stone-100 font-serif text-lg tracking-wide flex items-center gap-3">
                <span className="text-amber-500 text-xs font-mono">
                  0{i + 1}.
                </span>
                {point.heading}
              </h5>
              <p className="text-stone-400 text-base leading-relaxed font-light">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
