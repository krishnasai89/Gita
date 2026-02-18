"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DivineLineage() {
  const container = useRef();

  useGSAP(
    () => {
      // Reveal the timeline path as the user scrolls
      gsap.from(".lineage-step", {
        opacity: 0,
        x: -30,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".lineage-container",
          start: "top 80%",
        },
      });

      // Animate the philosophy table
      gsap.from(".phil-row", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".philosophy-table",
          start: "top 85%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-stone-950 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-24 text-center">
          <h2 className="text-5xl font-serif text-amber-500 mb-4 tracking-tight">
            The Sacred Lineage
          </h2>
          <div className="w-20 h-px bg-amber-500/30 mx-auto mb-6" />
          <p className="text-stone-500 uppercase text-[10px] tracking-[0.5em] font-bold">
            From Epic to Eternal Truth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT: LITERARY & AUTHORIAL LINEAGE */}
          <div className="lineage-container space-y-12">
            <h3 className="text-stone-300 font-serif text-2xl mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-amber-500/50" /> Literary Origin
            </h3>

            <div className="relative pl-8 border-l border-white/5 space-y-16">
              <div className="lineage-step relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                <h4 className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-2">
                  Mahabharata
                </h4>
                <p className="text-stone-400 font-light">
                  The epic matrix containing 100,000 verses. The Gita is its
                  heartbeat.
                </p>
              </div>

              <div className="lineage-step relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-stone-800 border border-amber-500/30" />
                <h4 className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-2">
                  Bhishma Parva
                </h4>
                <p className="text-stone-400 font-light">
                  Book 6 of the epic. The moment where action pauses for divine
                  dialogue.
                </p>
              </div>

              <div className="lineage-step relative">
                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500" />
                <h4 className="text-amber-500 font-bold text-xs tracking-widest uppercase mb-2">
                  Vyasa Parampara
                </h4>
                <p className="text-stone-400 font-light">
                  Compiled by Maharshi Vyasa. Preserved via Smṛti (the oral
                  tradition of memory).
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE PHILOSOPHICAL BRIDGE */}
          <div className="philosophy-table bg-stone-900/20 p-8 rounded-2xl border border-white/5">
            <h3 className="text-stone-300 font-serif text-2xl mb-8">
              The Great Unification
            </h3>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed italic">
              The Gita is unique because it bridges multiple ancient traditions
              into a single path of action.
            </p>

            <div className="space-y-4">
              {[
                { label: "Upanishads", note: "Atman–Brahman Identity" },
                { label: "Sankhya", note: "Purusha & Prakriti (Nature)" },
                { label: "Yoga", note: "Karma & Dhyana (Meditation)" },
                { label: "Bhakti", note: "Personal Devotion to Krishna" },
                { label: "Vedic Dharma", note: "Societal & Personal Duty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="phil-row flex items-center justify-between py-4 border-b border-white/5"
                >
                  <span className="text-amber-500/80 font-bold text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-stone-400 text-sm font-light italic">
                    {item.note}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-amber-500/5 border border-amber-500/10 rounded-lg">
              <p className="text-stone-400 text-xs leading-relaxed">
                <strong className="text-amber-500 uppercase tracking-tighter mr-2">
                  Scholarly Note:
                </strong>
                Composed between c. 500 BCE – 200 BCE, placing it at the
                transition from Vedic ritualism to Classical Hinduism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
