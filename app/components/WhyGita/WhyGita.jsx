"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  {
    title: "Mastery of Mind",
    sanskrit: "मनोनिग्रह (Mano-nigraha)",
    desc: "In an age of digital distraction, the Gita provides the blueprint to tighten the 'reins' of the mind, transforming it from your worst enemy into your greatest friend.",
    icon: "🧘",
  },
  {
    title: "Fearless Action",
    sanskrit: "निष्काम कर्म (Nishkama Karma)",
    desc: "By teaching focus on the process rather than the result, it eliminates the anxiety of failure and the burnout of modern 'hustle culture'.",
    icon: "⚔️",
  },
  {
    title: "Clarity in Chaos",
    sanskrit: "स्थितप्रज्ञ (Stithapragya)",
    desc: "When life feels like a battlefield of difficult choices, the Gita provides a framework for the Intellect to remain stable in both success and defeat.",
    icon: "👁️",
  },
];

export default function WhyGita() {
  const container = useRef();

  useGSAP(
    () => {
      // Refresh to ensure ScrollTrigger has the right measurements
      ScrollTrigger.refresh();

      // We animate each card individually instead of using stagger
      // This ensures they align perfectly to y: 0 as soon as they enter
      const cards = gsap.utils.toArray(".reason-card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Starts slightly earlier
              toggleActions: "play none none reverse",
            },
            // Force clear transformations to prevent alignment and blur issues
            onComplete: () => {
              gsap.set(card, { clearProps: "all" });
            },
          }
        );
      });
    },
    { scope: container }
  );

  const handleMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -10;
    const rotateY = (x / width - 0.5) * 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      overwrite: true,
    });

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={container}
      className="bg-stone-950 py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-amber-500 mb-4">
            Why the Gita?
          </h2>
          <p className="text-stone-500 text-sm tracking-widest uppercase font-bold border-l border-amber-500/30 pl-4">
            Practical Wisdom for a Modern World
          </p>
        </div>

        {/* REASONS GRID - Changed to items-start to force top alignment */}
        <div className="reasons-grid grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {reasons.map((reason, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              /* will-change-transform and backface-visibility fix the blur issue */
              className="reason-card group relative bg-stone-900/20 border border-white/5 p-10 h-[450px] flex flex-col items-start justify-start overflow-hidden transition-all duration-500 hover:border-amber-500/20 will-change-transform backface-visibility-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(245, 158, 11, 0.08), transparent 40%)`,
                }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-6">{reason.icon}</div>
                <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                  {reason.sanskrit}
                </h3>
                <h4 className="text-3xl font-serif text-stone-100 mb-6">
                  {reason.title}
                </h4>
                <p className="text-stone-400 leading-relaxed font-light italic">
                  "{reason.desc}"
                </p>
              </div>

              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="w-12 h-12 border-t-2 border-r-2 border-amber-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center opacity-40 hover:opacity-100 transition-opacity duration-700">
          <p className="text-stone-500 font-serif italic text-lg">
            "The Gita is not a book of commands, but a book of choices."
          </p>
        </div>
      </div>
    </section>
  );
}
