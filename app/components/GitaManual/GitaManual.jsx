"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Lightbulb,
  Compass,
  Shield,
  Users,
  Rocket,
  Brain,
  MessageSquare,
  History,
  Sparkles,
  Eye,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const detailedReasons = [
  {
    id: "01",
    title: "Life Is Conflict",
    icon: <Shield className="w-5 h-5" />,
    desc: "The Gita exists because being 'good' is not enough when life becomes a paradox. It meets you at your breakdown.",
  },
  {
    id: "02",
    title: "Clarity, Not Comfort",
    icon: <Eye className="w-5 h-5" />,
    desc: "Most teachings promise relief; the Gita gives vision. It doesn't say 'it will be fine,' it says 'see reality clearly.'",
  },
  {
    id: "03",
    title: "Inner Transformation",
    icon: <Brain className="w-5 h-5" />,
    desc: "Krishna doesn't change the war; he changes Arjuna. When the observer changes, the observed world shifts.",
  },
  {
    id: "04",
    title: "Action in the World",
    icon: <Rocket className="w-5 h-5" />,
    desc: "It doesn't ask you to renounce society, but to stand where you are, act rightly, and let go inwardly.",
  },
  {
    id: "05",
    title: "Total Integration",
    icon: <Compass className="w-5 h-5" />,
    desc: "A manual that integrates your Thinking (Jnana), Acting (Karma), and Feeling (Bhakti) into one force.",
  },
  {
    id: "06",
    title: "Human Freedom",
    icon: <MessageSquare className="w-5 h-5" />,
    desc: "No coercion. Krishna’s final words respect your intelligence: 'Reflect fully, then do as you choose.'",
  },
  {
    id: "07",
    title: "Timeless Context",
    icon: <History className="w-5 h-5" />,
    desc: "Kurukshetra is your office, your home, your mind. Arjuna is you. The problem of the soul is eternal.",
  },
  {
    id: "08",
    title: "Inquiry Over Belief",
    icon: <Lightbulb className="w-5 h-5" />,
    desc: "Belief is optional; inquiry is not. Approach it as psychology, ethics, or pure philosophy.",
  },
];

export default function GitaManual() {
  const container = useRef();

  useGSAP(
    () => {
      // Reveal the intro
      gsap.from(".manual-intro", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: ".manual-section", start: "top 70%" },
      });

      // Animate the items along the "Golden Thread"
      gsap.from(".manual-item", {
        opacity: 0,
        x: 30,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".manual-list", start: "top 80%" },
      });

      // Sticky Progress Line animation
      gsap.to(".progress-line", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".manual-list",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="manual-section relative bg-[#080705] py-40 px-6 overflow-hidden"
    >
      {/* Background Mandala Watermark */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none scale-150">
        <Sparkles size={800} className="text-amber-500" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
        {/* LEFT SIDE: THE CALL TO ACTION */}
        <div className="manual-intro lg:w-5/12 lg:sticky lg:top-40 h-fit">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-amber-500/50" />
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase">
              The Human Manual
            </h3>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-[1.1]">
            Acting when every option{" "}
            <span className="italic text-amber-500">hurts.</span>
          </h2>

          <p className="text-stone-400 text-xl font-light leading-relaxed mb-12 max-w-md">
            The Gita doesn't solve the world's problems. It solves the **person
            facing them**. It is the ultimate guide to remaining unmoved in the
            storm.
          </p>

          <div className="relative p-8 rounded-3xl bg-stone-900/40 border border-white/5 backdrop-blur-xl group overflow-hidden">
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-amber-200 font-serif italic text-2xl relative z-10">
              "Yathecchasi Tathā Kuru—Do as you choose."
            </p>
            <p className="text-[10px] text-amber-500/50 uppercase tracking-widest mt-4">
              Bhagavad Gita 18.63
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: THE GOLDEN THREAD LIST */}
        <div className="manual-list lg:w-7/12 relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-[26px] top-4 bottom-4 w-px bg-white/5" />
          <div className="progress-line absolute left-[26px] top-4 bottom-4 w-px bg-amber-500 origin-top scale-y-0" />

          <div className="space-y-16">
            {detailedReasons.map((reason) => (
              <div key={reason.id} className="manual-item group relative pl-16">
                {/* ID Point */}
                <div className="absolute left-0 top-1 w-[53px] h-[53px] flex items-center justify-center rounded-full bg-[#080705] border border-white/10 group-hover:border-amber-500 transition-all duration-500 z-10">
                  <span className="text-stone-600 group-hover:text-amber-500 font-mono text-sm transition-colors">
                    {reason.id}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-4 text-amber-500/40 group-hover:text-amber-500 transition-colors duration-500">
                    {reason.icon}
                    <h4 className="text-2xl font-serif text-stone-200 group-hover:text-white">
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-stone-500 text-lg leading-relaxed group-hover:text-stone-300 transition-colors duration-500 max-w-lg">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FINAL TRANSITION */}
      <div className="mt-40 text-center flex flex-col items-center">
        <div className="w-px h-24 bg-gradient-to-b from-amber-500/50 to-transparent mb-12" />
        <p className="max-w-4xl text-stone-400 text-3xl font-serif italic leading-snug px-6">
          "The Gita teaches how to act{" "}
          <span className="text-stone-100">without losing oneself</span> in the
          noise of the result."
        </p>
      </div>
    </section>
  );
}
