"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  History,
  Sparkles,
  BookOpen,
  ScrollText,
  AnchorIcon,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const commentators = [
  {
    century: "8th CE",
    name: "Adi Shankaracharya",
    philosophy: "Advaita (Non-dualism)",
    essence:
      "The soul and the Supreme are one. The world is an illusion (Maya) that hides this absolute unity.",
    impact:
      "Standardized the 700 verses; revived Vedic thought via pure logic.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    century: "11th CE",
    name: "Ramanujacharya",
    philosophy: "Vishishtadvaita",
    essence:
      "Qualified Non-dualism. The soul is a part of God, like a drop in the ocean, yet distinct in its devotion.",
    impact:
      "Democratized spirituality by bridging intellectual Vedānta with intense Bhakti.",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    century: "13th CE",
    name: "Madhvacharya",
    philosophy: "Dvaita (Dualism)",
    essence:
      "God and the individual soul are eternally separate. Service and grace are the only paths to liberation.",
    impact:
      "Emphasized the reality of the material world and the supreme sovereignty of God.",
    icon: <AnchorIcon className="w-5 h-5" />,
  },
  {
    century: "16th CE",
    name: "Vallabha & Chaitanya",
    philosophy: "Acintya Bheda Abheda",
    essence:
      "The 'unthinkable' simultaneous oneness and difference between God and Soul.",
    impact:
      "Transformed the Gita into a living movement of mass devotion and Kirtan.",
    icon: <ScrollText className="w-5 h-5" />,
  },
];

export default function CommentaryTimeline() {
  const [active, setActive] = useState(0);
  const container = useRef();
  const contentRef = useRef();

  useGSAP(
    () => {
      // Reveal Nav items correctly
      gsap.from(".timeline-nav-item", {
        opacity: 1,
        x: -20,
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  // Animation for content swap
  const changeTab = (index) => {
    gsap.to(contentRef.current, {
      opacity: 1,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setActive(index);
        gsap.to(contentRef.current, { opacity: 1, x: 0, duration: 0.5 });
      },
    });
  };

  return (
    <section
      ref={container}
      className="relative bg-[#080705] py-40 px-6 overflow-hidden border-t border-white/5"
    >
      {/* BACKGROUND MANDALA WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
        <svg
          width="800"
          height="800"
          viewBox="0 0 200 200"
          className="text-amber-500"
        >
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
          <path
            d="M100 5 L105 50 L150 55 L110 80 L120 125 L100 100 L80 125 L90 80 L50 55 L95 50 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
        {/* LEFT: THE SŪTRA NAVIGATION */}
        <div className="w-full lg:w-5/12">
          <div className="flex items-center gap-4 mb-12">
            <History className="text-amber-500/50" size={20} />
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase">
              The Commentary Lineage
            </h3>
          </div>

          <div className="relative space-y-2">
            {/* The Connecting Thread */}
            <div className="absolute left-[31px] top-6 bottom-6 w-[1px] bg-white/5" />

            {commentators.map((com, i) => (
              <button
                key={i}
                onClick={() => changeTab(i)}
                className={`timeline-nav-item group relative w-full text-left pl-16 py-6 transition-all duration-500 rounded-2xl ${
                  active === i ? "bg-amber-500/[0.03]" : "hover:bg-white/[0.02]"
                }`}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-[24px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 bg-[#080705] transition-all duration-500 z-10 ${
                    active === i
                      ? "border-amber-500 scale-125 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                      : "border-stone-800"
                  }`}
                />

                <span
                  className={`block text-[10px] font-bold uppercase tracking-[0.3em] mb-1 transition-colors ${
                    active === i ? "text-amber-500" : "text-stone-600"
                  }`}
                >
                  {com.century}
                </span>
                <span
                  className={`text-2xl font-serif transition-colors ${
                    active === i
                      ? "text-stone-100"
                      : "text-stone-500 group-hover:text-stone-400"
                  }`}
                >
                  {com.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: THE PHILOSOPHICAL CORE */}
        <div
          ref={contentRef}
          className="w-full lg:w-7/12 min-h-[500px] flex flex-col"
        >
          <div className="bg-stone-900/20 backdrop-blur-3xl p-12 lg:p-16 rounded-[2.5rem] border border-white/5 flex-1 relative overflow-hidden flex flex-col justify-center">
            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 text-[12rem] font-serif font-black text-white/[0.01] pointer-events-none select-none">
              {commentators[active].century.split(" ")[0]}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                  {commentators[active].icon}
                </div>
                <span className="text-amber-500/60 uppercase text-[10px] font-black tracking-[0.4em]">
                  {commentators[active].philosophy}
                </span>
              </div>

              <h4 className="text-5xl font-serif text-white mb-12 leading-tight">
                {commentators[active].name}
              </h4>

              <div className="space-y-12">
                <div className="relative pl-8 border-l border-amber-500/20">
                  <h5 className="text-stone-600 text-[10px] uppercase tracking-widest mb-4 font-bold">
                    The Essence
                  </h5>
                  <p className="text-stone-200 text-2xl font-serif italic leading-relaxed">
                    “{commentators[active].essence}”
                  </p>
                </div>

                <div className="pt-10 flex gap-6 border-t border-white/5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-amber-500/30">
                    <History size={20} />
                  </div>
                  <div>
                    <h5 className="text-stone-600 text-[10px] uppercase tracking-widest mb-2 font-bold">
                      Historical Legacy
                    </h5>
                    <p className="text-stone-400 text-base leading-relaxed max-w-md">
                      {commentators[active].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
