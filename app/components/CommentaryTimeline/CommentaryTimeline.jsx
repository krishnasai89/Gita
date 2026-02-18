"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const commentators = [
  {
    century: "8th CE",
    name: "Adi Shankaracharya",
    philosophy: "Advaita (Non-dualism)",
    essence:
      "The soul (Atman) and the Supreme (Brahman) are one. The world is an illusion (Maya) that hides this unity.",
    impact: "Oldest surviving commentary; established the standard 700 verses.",
  },
  {
    century: "11th CE",
    name: "Ramanujacharya",
    philosophy: "Vishishtadvaita",
    essence:
      "Qualified Non-dualism. The soul is a part of God, like a drop in the ocean, yet distinct in its devotion.",
    impact:
      "Bridged the path of knowledge with the path of intense devotion (Bhakti).",
  },
  {
    century: "13th CE",
    name: "Madhvacharya",
    philosophy: "Dvaita (Dualism)",
    essence:
      "God and the individual soul are eternally separate. Service and grace are the only paths to liberation.",
    impact:
      "Emphasized the supreme sovereignty of God and the reality of the material world.",
  },
  {
    century: "16th CE",
    name: "Vallabha & Chaitanya",
    philosophy: "Shuddha-Advaita / Acintya Bheda Abheda",
    essence:
      "Pure devotion and the 'unthinkable' simultaneous oneness and difference between God and Soul.",
    impact:
      "Transformed the Gita into a living movement of mass devotion and Kirtan.",
  },
];

export default function CommentaryTimeline() {
  const [active, setActive] = useState(0);
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".timeline-nav-item", {
        opacity: 400,
        y: 20,
        stagger: 0.2,
        scrollTrigger: {
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-stone-950 py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* LEFT: THE NAVIGATION (THE CENTURIES) */}
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="text-amber-500 text-xs font-black tracking-[0.4em] uppercase mb-10">
              Interpretation History
            </h3>
            {commentators.map((com, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`timeline-nav-item w-full text-left p-6 border-l-2 transition-all duration-500 ${
                  active === i
                    ? "border-amber-500 bg-amber-500/5 translate-x-2"
                    : "border-white/10 hover:border-amber-500/30 text-stone-600"
                }`}
              >
                <span
                  className={`block text-xs font-bold uppercase tracking-widest mb-1 ${
                    active === i ? "text-amber-500" : ""
                  }`}
                >
                  {com.century}
                </span>
                <span
                  className={`text-xl font-serif ${
                    active === i ? "text-stone-100" : "text-stone-500"
                  }`}
                >
                  {com.name}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT: THE PHILOSOPHY (DYNAMIC CONTENT) */}
          <div className="w-full md:w-2/3 bg-stone-900/10 p-12 rounded-3xl border border-white/5 relative min-h-[450px] flex flex-col justify-center">
            {/* Background Century Blur */}
            <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] select-none">
              {commentators[active].century.split(" ")[0]}
            </div>

            <div
              key={active}
              className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-700"
            >
              <span className="text-amber-500/60 uppercase text-[10px] font-bold tracking-[0.5em] block mb-4">
                Philosophy: {commentators[active].philosophy}
              </span>
              <h4 className="text-4xl font-serif text-stone-100 mb-8 leading-tight">
                {commentators[active].name}
              </h4>

              <div className="space-y-8">
                <div>
                  <h5 className="text-stone-500 text-xs uppercase tracking-widest mb-3">
                    Core Essence
                  </h5>
                  <p className="text-stone-300 text-xl font-light leading-relaxed font-serif italic">
                    "{commentators[active].essence}"
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <h5 className="text-stone-500 text-xs uppercase tracking-widest mb-3">
                    Historical Impact
                  </h5>
                  <p className="text-stone-400 text-sm leading-relaxed max-w-lg">
                    {commentators[active].impact}
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
