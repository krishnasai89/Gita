"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Library,
  BookOpen,
  Compass,
  Sparkles,
  Layers,
  Anchor,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const lineageSteps = [
  {
    title: "The Mahābhārata",
    subtitle: "The Infinite Ocean",
    icon: <Library className="w-6 h-6" />,
    desc: "A sprawling epic of 100,000 verses. It represents the totality of human experience—politics, war, and family.",
    stat: "100K Verses",
  },
  {
    title: "Bhīṣma Parva",
    subtitle: "The Strategic Pause",
    icon: <BookOpen className="w-6 h-6" />,
    desc: "The 6th book of the epic. Amidst the movement of armies, the narrative stops to address the crisis of the soul.",
    stat: "Book 6",
  },
  {
    title: "Vyāsa Paramparā",
    subtitle: "The Seer's Vision",
    icon: <Compass className="w-6 h-6" />,
    desc: "Preserved through 'Smṛti' (divine memory), Maharshi Vyāsa distilled the Vedic essence into this 700-verse dialogue.",
    stat: "Oral Tradition",
  },
];

const philosophyItems = [
  {
    label: "Upaniṣads",
    note: "The Non-Dual Identity",
    icon: <Layers size={14} />,
  },
  {
    label: "Sāṅkhya",
    note: "Analysis of Nature & Soul",
    icon: <Anchor size={14} />,
  },
  {
    label: "Yoga",
    note: "The Science of Action",
    icon: <Sparkles size={14} />,
  },
  {
    label: "Bhakti",
    note: "The Path of Devotion",
    icon: <Sparkles size={14} />,
  },
  {
    label: "Dharma",
    note: "Personal & Social Order",
    icon: <Sparkles size={14} />,
  },
];

export default function DivineLineage() {
  const container = useRef();

  useGSAP(
    () => {
      // 1. Reveal Timeline Thread
      gsap.to(".timeline-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".lineage-container",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });

      // 2. Stagger Step Entrance
      gsap.from(".lineage-step", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lineage-container",
          start: "top 80%",
        },
      });

      // 3. Table Rows Reveal
      gsap.from(".phil-row", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".philosophy-matrix",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative bg-[#080705] py-40 px-6 overflow-hidden"
    >
      {/* BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-32 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-black text-white/[0.02] uppercase pointer-events-none">
            Paramparā
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 relative z-10">
            The <span className="text-amber-500 italic font-light">Sacred</span>{" "}
            Lineage
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500/30" />
            <Sparkles className="text-amber-500/50" size={16} />
            <div className="h-px w-12 bg-amber-500/30" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* LEFT: THE DESCENT (Timeline) */}
          <div className="lineage-container relative">
            <h3 className="text-amber-500/50 uppercase tracking-[0.4em] text-[10px] font-black mb-16 px-4">
              I. Literary Descent
            </h3>

            {/* The Dynamic Sūtra (Line) */}
            <div className="absolute left-[35px] top-24 bottom-10 w-px bg-white/5" />
            <div className="timeline-line absolute left-[35px] top-24 bottom-10 w-px bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent origin-top scale-y-0" />

            <div className="space-y-24">
              {lineageSteps.map((step, i) => (
                <div key={i} className="lineage-step group relative pl-20">
                  {/* Point Indicator */}
                  <div className="absolute left-0 top-0 w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-stone-950 border border-white/10 group-hover:border-amber-500 transition-all duration-500 z-10 shadow-2xl">
                    <div className="text-amber-500/40 group-hover:text-amber-500 transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h4 className="text-2xl font-serif text-stone-100 group-hover:text-amber-500 transition-colors">
                        {step.title}
                      </h4>
                      <span className="text-[10px] text-stone-600 font-mono italic uppercase tracking-widest">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-stone-400 font-light leading-relaxed mb-4 max-w-sm">
                      {step.desc}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-stone-500 text-[9px] uppercase tracking-tighter font-bold border border-white/5">
                      {step.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: THE UNIFICATION (Philosophy Matrix) */}
          <div className="philosophy-matrix relative">
            <h3 className="text-amber-500/50 uppercase tracking-[0.4em] text-[10px] font-black mb-16 px-4">
              II. Philosophical Unification
            </h3>

            <div className="bg-stone-900/10 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-amber-500 group-hover:opacity-10 transition-opacity duration-1000">
                <Layers size={200} />
              </div>

              <p className="text-stone-300 font-serif italic text-2xl mb-12 leading-relaxed">
                The Gita is the{" "}
                <span className="text-amber-500">Master Key</span>, bridging
                contradictory ancient traditions into a single path of action.
              </p>

              <div className="space-y-2">
                {philosophyItems.map((item, i) => (
                  <div
                    key={i}
                    className="phil-row flex items-center justify-between p-5 rounded-xl border border-transparent hover:border-amber-500/10 hover:bg-amber-500/[0.02] transition-all group/row"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-stone-950 text-stone-700 group-hover/row:text-amber-500 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-stone-200 font-serif text-lg tracking-wide group-hover/row:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-stone-600 text-xs font-light italic group-hover/row:text-stone-400 transition-colors">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>

              {/* SCHOLARLY CALLOUT */}
              <div className="mt-12 flex gap-6 p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500/50 font-serif italic">
                  i
                </div>
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest text-amber-500 font-black mb-2">
                    Chronological Context
                  </h5>
                  <p className="text-stone-400 text-xs leading-relaxed italic">
                    Composed between{" "}
                    <span className="text-stone-200 italic font-medium">
                      500 BCE – 200 BCE
                    </span>
                    , marking the pivotal transition from Vedic ritualism to
                    Classical Yoga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
