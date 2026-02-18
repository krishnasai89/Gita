"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const detailedReasons = [
  {
    id: "01",
    title: "Life Is Conflict",
    desc: "The Gita exists because being good is not enough when life becomes complex. It meets you at your breakdown.",
  },
  {
    id: "02",
    title: "Clarity, Not Comfort",
    desc: "Most teachings promise relief; the Gita gives vision. It doesn't say 'it will be fine,' it says 'see reality clearly.'",
  },
  {
    id: "03",
    title: "Inner Transformation",
    desc: "Krishna doesn't change the war; he changes Arjuna. When understanding changes, action becomes possible.",
  },
  {
    id: "04",
    title: "Action in the World",
    desc: "It doesn't ask you to renounce society, but to stand where you are, act rightly, and let go inwardly.",
  },
  {
    id: "05",
    title: "Total Integration",
    desc: "A complete manual that integrates your Thinking (Jnana), Acting (Karma), and Feeling (Bhakti).",
  },
  {
    id: "06",
    title: "Human Freedom",
    desc: "No coercion. Krishna’s final words: 'Reflect fully, then do as you choose.' It respects your intelligence.",
  },
  {
    id: "07",
    title: "Timeless Context",
    desc: "Kurukshetra is your office, your home, your mind. Arjuna is you. The problem is eternal.",
  },
  {
    id: "08",
    title: "Inquiry Over Belief",
    desc: "Belief is optional; inquiry is not. You can approach it as psychology, ethics, or pure philosophy.",
  },
];

export default function GitaManual() {
  const container = useRef();

  useGSAP(
    () => {
      // Reveal the left side text
      gsap.from(".manual-intro", {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: ".manual-section",
          start: "top 70%",
        },
      });

      // Reveal the list items
      gsap.from(".manual-item", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".manual-list",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="manual-section bg-stone-950 py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        {/* LEFT SIDE: The Core Problem */}
        <div className="manual-intro lg:w-1/3">
          <h3 className="text-amber-500 text-xs font-black tracking-[0.5em] uppercase mb-6">
            The Human Manual
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-8 leading-tight">
            Acting when every option{" "}
            <span className="text-amber-500 italic">hurts.</span>
          </h2>
          <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
            The Gita doesn't solve the world's problems. It solves the person
            facing them. It exists because human beings must act—even when they
            do not know what is right.
          </p>
          <div className="p-6 bg-amber-500/5 border-l-2 border-amber-500 rounded-r-lg">
            <p className="text-amber-500 font-serif italic text-xl">
              "Reflect fully, and then do as you choose."
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: The 8 Reasons List */}
        <div className="manual-list lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {detailedReasons.map((reason) => (
            <div
              key={reason.id}
              className="manual-item group border-b border-white/5 pb-8 hover:border-amber-500/30 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="text-amber-500/20 font-black text-4xl group-hover:text-amber-500/40 transition-colors">
                  {reason.id}
                </span>
                <div>
                  <h4 className="text-xl font-serif text-stone-200 mb-3 group-hover:text-amber-500 transition-colors">
                    {reason.title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-400 transition-colors">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final One-Line Truth */}
      <div className="mt-32 text-center max-w-3xl mx-auto border-t border-white/5 pt-20">
        <p className="text-stone-300 text-2xl font-serif italic leading-relaxed">
          "The Gita teaches how to act without losing oneself."
        </p>
      </div>
    </section>
  );
}
