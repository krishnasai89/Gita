"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Activity,
  Globe,
  Flame,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Heart,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const actionPillars = [
  {
    title: "Natural Compulsion",
    sanskrit: "प्रकृति (Prakṛti)",
    icon: <Activity className="text-orange-500" />,
    desc: "Nature forces every being into movement. Since action is inevitable, the Yoga lies in the quality of the intent, not the cessation of work.",
    verse: "3.05",
  },
  {
    title: "Global Welfare",
    sanskrit: "लोकसंग्रह (Loka-saṅgraha)",
    icon: <Globe className="text-orange-500" />,
    desc: "Leaders must act to set an example. Krishna, though having nothing to gain, acts continuously to sustain the cosmic order.",
    verse: "3.20",
  },
  {
    title: "Sacred Sacrifice",
    sanskrit: "यज्ञ (Yajña)",
    icon: <Flame className="text-orange-500" />,
    desc: "Work performed for the self is a shackle. Work performed as a contribution to the whole becomes a ladder to liberation.",
    verse: "3.09",
  },
];

export default function Adhyaya3() {
  const container = useRef();
  const [embers, setEmbers] = useState([]);

  // SSR-safe particle generation
  useEffect(() => {
    setEmbers(
      [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Title Parallax/Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { filter: "blur(20px)", opacity: 1, scale: 0.9 },
        {
          filter: "blur(0px)",
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
        },
      );

      // 2. Rotating Mandala (The Wheel of Karma)
      gsap.to(".karma-wheel", {
        opacity: 1,
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      });

      // 3. Pillar Reveal
      gsap.from(".pillar-card", {
        opacity: 1,
        x: -30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 75%",
        },
      });

      // 4. Quote Glow Effect
      gsap.fromTo(
        ".quote-bg-glow",
        { opacity: 1, scale: 0.8 },
        {
          opacity: 1,
          scale: 1.2,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    },
    { scope: container },
  );

  const onMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    gsap.to(card, {
      rotateY: (x - 0.5) * 20,
      rotateX: (y - 0.5) * -20,
      duration: 0.6,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  return (
    <main
      ref={container}
      className="bg-[#050505] min-h-screen selection:bg-orange-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE FIRE OF DUTY */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        {/* Atmospheric Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.1)_0%,transparent_70%)]" />

          {/* Karma Wheel (Mandala Watermark) */}
          <div className="karma-wheel absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-[1.8]">
            <svg
              width="600"
              height="600"
              viewBox="0 0 200 200"
              className="text-orange-500"
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
                r="10"
                fill="currentColor"
                opacity="0.5"
              />
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  transform={`rotate(${i * 45} 100 100)`}
                />
              ))}
            </svg>
          </div>

          {/* Floating Embers */}
          {embers.map((p) => (
            <div
              key={p.id}
              className="absolute bg-orange-500/10 rounded-full blur-[1px] animate-pulse"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="hero-title">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-orange-500/40" />
              <span className="text-orange-500 tracking-[0.5em] text-[10px] font-black uppercase">
                Adhyāya 03
              </span>
              <div className="h-px w-10 bg-orange-500/40" />
            </div>

            <h1 className="text-7xl md:text-9xl font-serif text-white mb-6 relative">
              <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-orange-400/10 text-[10rem] md:text-[15rem] whitespace-nowrap pointer-events-none select-none">
                कर्म योग
              </span>
              Karma <span className="italic text-orange-600">Yoga</span>
            </h1>
            <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-2xl mx-auto">
              "The discipline of action — Turning the mundane into the sacred."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE THREE LAWS OF ACTION */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-orange-500/50 text-[10px] font-black tracking-[0.6em] uppercase mb-6">
              The Trinity of Engagement
            </h2>
            <div className="h-16 w-px bg-gradient-to-b from-orange-500/50 to-transparent mx-auto" />
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {actionPillars.map((p, i) => (
              <div
                key={i}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
                }
                className="pillar-card group relative p-12 bg-stone-900/10 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-orange-500/40"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/5 flex items-center justify-center mb-10 group-hover:bg-orange-500/20 transition-all duration-500">
                    {p.icon}
                  </div>
                  <h3 className="text-orange-600/40 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    {p.sanskrit}
                  </h3>
                  <h4 className="text-3xl font-serif text-stone-100 mb-6 group-hover:text-orange-400 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed font-light mb-10 text-lg transition-colors group-hover:text-stone-300">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-600 font-mono tracking-widest border-t border-white/5 pt-8">
                    <Sparkles size={12} className="text-orange-500/40" />
                    VERSE {p.verse}
                  </div>
                </div>
                {/* Background Number */}
                <div className="absolute -bottom-10 -right-10 text-[12rem] text-white/[0.01] font-serif group-hover:text-white/[0.03] transition-all pointer-events-none">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIMACTIC QUOTE: VERSE 3.30 */}
      <section className="py-48 px-6 relative overflow-hidden">
        <div className="quote-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/50 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart
            className="text-orange-500/40 mx-auto mb-12 animate-pulse"
            size={40}
          />
          <h2 className="text-stone-500 text-[10px] font-black tracking-[0.6em] uppercase mb-16">
            The Master Directive
          </h2>

          <blockquote className="text-4xl md:text-5xl font-serif text-stone-100 leading-[1.4] italic mb-12">
            "Renouncing all actions in Me, with the mind centered on the Self,
            free from hope and selfishness, cured of mental fever...{" "}
            <span className="text-orange-500 not-italic">Fight!</span>"
          </blockquote>

          <div className="inline-flex items-center gap-4">
            <div className="h-px w-10 bg-orange-500/40" />
            <p className="text-orange-600 font-bold tracking-[0.4em] text-xs uppercase">
              Adhyāya 03 • Verse 30
            </p>
            <div className="h-px w-10 bg-orange-500/40" />
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX (THE ACTION NODES) */}
      <section className="py-40 px-6 bg-[#080705] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                43 Gates of Service
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-lg leading-relaxed">
                Transitioning from physical labor to spiritual sacrifice through
                43 sequential revelations.
              </p>
            </div>
            <div className="text-orange-600/10 text-[12rem] font-black select-none leading-none">
              03
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4">
            {Array.from({ length: 43 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter3/verse${i + 1}`}
                className="verse-node group relative aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:-translate-y-2"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Node
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NAVIGATION: THE NEXT STAGE */}
      <footer className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="w-px h-32 bg-gradient-to-b from-orange-500 to-transparent mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/2"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-orange-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Grounding
              </span>
              <span className="font-serif italic text-2xl text-stone-300">
                Sāṅkhya Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/4"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-orange-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-orange-500/60">
                The Integration
              </span>
              <span className="font-serif italic text-3xl text-white group-hover:text-orange-500 transition-colors">
                Jñāna Karma Sannyāsa
              </span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Global CSS for Animations */}
      <style jsx global>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
