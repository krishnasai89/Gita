"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Brain, ShieldAlert, Eye, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  {
    title: "Mastery of Mind",
    sanskrit: "मनोनिग्रह",
    translit: "Mano-nigraha",
    num: "०१",
    desc: "In an age of digital distraction, the Gita provides the blueprint to tighten the 'reins' of the mind, transforming it from your worst enemy into your greatest friend.",
    icon: <Brain className="w-8 h-8" />,
  },
  {
    title: "Fearless Action",
    sanskrit: "निष्काम कर्म",
    translit: "Nishkama Karma",
    num: "०२",
    desc: "By teaching focus on the process rather than the result, it eliminates the anxiety of failure and the burnout of modern 'hustle culture'.",
    icon: <ShieldAlert className="w-8 h-8" />,
  },
  {
    title: "Clarity in Chaos",
    sanskrit: "स्थितप्रज्ञ",
    translit: "Stithapragya",
    num: "०३",
    desc: "When life feels like a battlefield of choices, the Gita provides a framework for the Intellect to remain stable in both success and defeat.",
    icon: <Eye className="w-8 h-8" />,
  },
];

export default function WhyGita() {
  const container = useRef();

  useGSAP(
    () => {
      // Reveal Heading
      gsap.from(".why-header", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".why-header",
          start: "top 90%",
        },
      });

      // Staggered Card Entrance
      gsap.from(".reason-card", {
        opacity: 1,
        y: 60,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reasons-grid",
          start: "top 80%",
        },
      });

      // Constant slow rotation for background mandala
      gsap.to(".mandala-bg", {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: container },
  );

  const handleMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y / height - 0.5) * -12;
    const rotateY = (x / width - 0.5) * 12;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1200,
      duration: 0.5,
      ease: "power2.out",
    });

    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section
      ref={container}
      className="relative bg-[#080705] py-40 px-6 overflow-hidden"
    >
      {/* 1. SACRED GEOMETRY BACKGROUND */}
      <div className="mandala-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <svg
          width="1200"
          height="1200"
          viewBox="0 0 200 200"
          className="text-amber-500"
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
          />
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            strokeDasharray="2 2"
          />
          <path
            d="M100 10 L110 40 L140 40 L115 60 L125 90 L100 75 L75 90 L85 60 L60 40 L90 40 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.2"
            transform="translate(0, 50)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="why-header mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-amber-500/60 uppercase tracking-[0.5em] text-[10px] font-bold mb-6">
            <Sparkles size={14} /> The Timeless Relevance
          </div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            Why the <span className="italic text-amber-500">Gita?</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        </div>

        {/* REASONS GRID */}
        <div className="reasons-grid grid grid-cols-1 lg:grid-cols-3 gap-10">
          {reasons.map((reason, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="reason-card group relative bg-stone-900/10 backdrop-blur-md border border-white/5 p-12 h-[500px] flex flex-col justify-between overflow-hidden transition-all duration-700 hover:border-amber-500/30 rounded-[2rem]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Radial Hover Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--glow-x) var(--glow-y), rgba(245, 158, 11, 0.12), transparent 40%)`,
                }}
              />

              {/* Background Sanskrit Number */}
              <div className="absolute top-4 right-8 text-[12rem] font-serif text-white/[0.02] pointer-events-none select-none">
                {reason.num}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-10 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                  {reason.icon}
                </div>

                <div className="mb-6">
                  <h3 className="text-amber-500/50 text-[11px] font-black tracking-[0.4em] uppercase mb-2">
                    {reason.sanskrit}{" "}
                    <span className="ml-2 text-stone-600 italic">
                      ({reason.translit})
                    </span>
                  </h3>
                  <h4 className="text-3xl font-serif text-stone-100 group-hover:text-amber-400 transition-colors">
                    {reason.title}
                  </h4>
                </div>

                <p className="text-stone-400 leading-relaxed font-light text-lg">
                  {reason.desc}
                </p>
              </div>

              {/* Decorative Corner Detail */}
              <div className="relative z-10 pt-8 mt-auto flex items-center gap-4">
                <div className="h-px flex-1 bg-white/5 group-hover:bg-amber-500/20 transition-all" />
                <Sparkles
                  size={12}
                  className="text-stone-800 group-hover:text-amber-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER QUOTE */}
        <div className="mt-32 text-center flex flex-col items-center">
          <div className="w-px h-20 bg-gradient-to-b from-amber-500/50 to-transparent mb-10" />
          <p className="max-w-2xl text-stone-500 font-serif italic text-xl md:text-2xl leading-relaxed">
            "The Gita is not a book of commands, but a book of choices. It does
            not tell you what to do; it tells you{" "}
            <span className="text-stone-300">who you are</span>."
          </p>
        </div>
      </div>
    </section>
  );
}
