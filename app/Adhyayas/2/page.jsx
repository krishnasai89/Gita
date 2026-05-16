"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Anchor,
  Eye,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    title: "The Eternal Soul",
    sanskrit: "आत्मा (Atman)",
    icon: <Zap className="text-amber-500" />,
    desc: "Krishna reveals that the soul is never born and never dies. Weapons cannot cut it; fire cannot burn it. It is the only unchanging reality.",
    verses: "2.11 — 2.30",
  },
  {
    title: "The Yoga of Action",
    sanskrit: "कर्मयोग (Karma Yoga)",
    icon: <Anchor className="text-amber-500" />,
    desc: "The secret of equanimity: You have a right to the work, but never to the results. Perform duty without attachment to success or failure.",
    verses: "2.47 — 2.53",
  },
  {
    title: "Steady Wisdom",
    sanskrit: "स्थितप्रज्ञ (Stithapragya)",
    icon: <Eye className="text-amber-500" />,
    desc: "A description of the perfected human: one whose mind is unshakeable, free from anxiety, and anchored in the supreme self.",
    verses: "2.54 — 2.72",
  },
];

export default function Adhyaya2() {
  const container = useRef();
  const [particles, setParticles] = useState([]);

  // Safe Particle Generation for Hydration
  useEffect(() => {
    setParticles(
      [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      })),
    );
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Hero Entrance
      tl.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" },
      );

      // Pillar Stagger
      gsap.from(".pillar-card", {
        opacity: 1,
        y: 40,
        duration: 1,
        scrollTrigger: {
          trigger: ".pillars-grid",
          start: "top 80%",
        },
      });

      // Verse Grid Fade-in
      gsap.from(".verse-node", {
        opacity: 1,
        scale: 0.9,
        stagger: 0.01,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".verse-grid",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  const onMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    gsap.to(card, {
      rotateY: (x - 0.5) * 15,
      rotateX: (y - 0.5) * -15,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  return (
    <main
      ref={container}
      className="bg-[#050505] min-h-screen selection:bg-amber-500/30"
    >
      {/* 1. HERO SECTION: DAWN OF WISDOM */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Sacred Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)]" />

          {/* Floating Embers */}
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/20 rounded-full blur-[1px] animate-pulse"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-amber-500/30" />
            <span className="text-amber-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 02
            </span>
            <div className="h-px w-12 bg-amber-500/30" />
          </div>

          <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-amber-500/10 text-8xl md:text-[12rem] whitespace-nowrap pointer-events-none select-none">
              सांख्य योग
            </span>
            Sāṅkhya <span className="italic text-amber-500">Yoga</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-wide max-w-2xl mx-auto">
            "The Yoga of Analytical Knowledge — Where the intellectual journey
            begins."
          </p>
        </div>
      </section>

      {/* 2. THE THREE PILLARS (CORE CONCEPTS) */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              The Triad of Wisdom
            </h2>
            <div className="h-12 w-px bg-gradient-to-b from-amber-500/50 to-transparent mx-auto" />
          </div>

          <div className="pillars-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
                }
                className="pillar-card group relative p-12 bg-stone-900/20 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-amber-500/30"
              >
                {/* Icon & Title */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {p.icon}
                  </div>
                  <h3 className="text-amber-500/50 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    {p.sanskrit}
                  </h3>
                  <h4 className="text-3xl font-serif text-stone-100 mb-6">
                    {p.title}
                  </h4>
                  <p className="text-stone-400 leading-relaxed font-light mb-8 italic text-sm">
                    "{p.desc}"
                  </p>
                  <div className="text-[10px] text-stone-600 font-mono tracking-widest border-t border-white/5 pt-6 uppercase">
                    Verses {p.verses}
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute -bottom-10 -right-10 text-9xl text-white/[0.02] font-serif group-hover:text-white/[0.04] transition-colors">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERSE NAVIGATOR (THE MANDALA GRID) */}
      <section className="py-40 px-6 border-y border-white/5 bg-stone-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-4">
                72 Steps to Reality
              </h2>
              <p className="text-stone-500 text-sm tracking-widest uppercase font-bold">
                A complete summary of Spiritual Science
              </p>
            </div>
            <div className="flex items-center gap-4 text-amber-500/60 text-[10px] font-black uppercase tracking-[0.3em]">
              <Sparkles size={14} /> Scroll to Explore
            </div>
          </div>

          <div className="verse-grid grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-3">
            {Array.from({ length: 72 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter2/verse${i + 1}`}
                className="verse-node group relative aspect-square bg-stone-950 border border-white/5 rounded-xl flex items-center justify-center transition-all duration-500 hover:bg-amber-500 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:-translate-y-1"
              >
                <span className="text-stone-600 group-hover:text-black font-serif text-2xl transition-colors duration-500">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOPHISTICATED NAVIGATION FOOTER */}
      <footer className="py-32 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent" />

          <div className="flex flex-col md:flex-row items-center gap-20">
            <Link
              href="/Adhyayas/1"
              className="group flex items-center gap-6 text-stone-500 hover:text-white transition-all"
            >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              <div className="text-left">
                <span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">
                  Previous
                </span>
                <span className="font-serif italic text-lg">
                  Arjuna Viṣāda Yoga
                </span>
              </div>
            </Link>

            <Link
              href="/Adhyayas/3"
              className="group flex items-center gap-6 text-stone-500 hover:text-amber-500 transition-all"
            >
              <div className="text-right">
                <span className="block text-[9px] uppercase tracking-widest text-stone-600 mb-1">
                  Up Next
                </span>
                <span className="font-serif italic text-lg">Karma Yoga</span>
              </div>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <p className="text-stone-600 font-serif italic text-sm mt-12">
            "Sāṅkhya Yoga is the intellect's attempt to map the unmappable."
          </p>
        </div>
      </footer>
    </main>
  );
}
