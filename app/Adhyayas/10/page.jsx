"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Sun,
  Mountain,
  Zap,
  Crown,
  Waves,
  Flame,
  Wind,
  Star,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Infinity,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const manifestations = [
  {
    icon: <Sun size={32} />,
    title: "The Sun",
    category: "Among Lights",
    verse: "10.21",
  },
  {
    icon: <Mountain size={32} />,
    title: "Mount Meru",
    category: "Among Mountains",
    verse: "10.23",
  },
  {
    icon: <Zap size={32} />,
    title: "The Thunderbolt",
    category: "Among Weapons",
    verse: "10.28",
  },
  {
    icon: <Crown size={32} />,
    title: "The Monarch",
    category: "Among Men",
    verse: "10.27",
  },
  {
    icon: <Waves size={32} />,
    title: "The Ocean",
    category: "Among Waters",
    verse: "10.24",
  },
  {
    icon: <Flame size={32} />,
    title: "Agni (Fire)",
    category: "Among Vasus",
    verse: "10.23",
  },
  {
    icon: <Wind size={32} />,
    title: "The Wind",
    category: "Among Purifiers",
    verse: "10.31",
  },
  {
    icon: <Star size={32} />,
    title: "The Moon",
    category: "Among Stars",
    verse: "10.21",
  },
];

export default function Adhyaya10() {
  const container = useRef(null);
  const [sparks, setSparks] = useState([]);

  // Hydration-safe ambient golden sparks
  useEffect(() => {
    setSparks(
      [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
        },
      );

      // 2. Slow Sunburst Rotation
      gsap.to(".sunburst", {
        rotation: 360,
        duration: 100,
        repeat: -1,
        ease: "none",
      });

      // 3. Manifestations Stagger
      gsap.from(".mosaic-item", {
        opacity: 1,
        scale: 0.8,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".mosaic-section",
          start: "top 75%",
        },
      });

      // 4. Chatur-Shloki Glow
      gsap.fromTo(
        ".chatur-glow",
        { opacity: 0.3, scale: 0.9 },
        {
          opacity: 1,
          scale: 1.1,
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
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  return (
    <main
      ref={container}
      className="bg-[#050402] min-h-screen selection:bg-amber-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE INFINITE OPULENCE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.20)_0%,transparent_70%)]" />

          {/* Rotating Sunburst Mandala */}
          <div className="sunburst absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none scale-[1.5]">
            <svg
              width="800"
              height="800"
              viewBox="0 0 200 200"
              className="text-amber-500"
            >
              {[...Array(24)].map((_, i) => (
                <path
                  key={i}
                  d="M100 20 L105 50 L100 100 L95 50 Z"
                  fill="currentColor"
                  transform={`rotate(${i * 15} 100 100)`}
                />
              ))}
            </svg>
          </div>

          {/* Floating Divine Sparks */}
          {sparks.map((s) => (
            <div
              key={s.id}
              className="absolute bg-amber-400/40 rounded-full blur-[1px] animate-pulse"
              style={{
                left: s.left,
                top: s.top,
                width: `${s.scale * 4}px`,
                height: `${s.scale * 4}px`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}

          <img
            src="/images/adhyaya1.jpg"
            alt="Divine Radiance"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050402]/50 via-transparent to-[#050402]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="hero-text flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-500/40" />
            <Sparkles size={14} className="text-amber-500/80" />
            <span className="text-amber-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 10
            </span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>

          <h1 className="hero-text text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-amber-500/10 text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              विभूतियोग
            </span>
            Vibhūti <span className="italic text-amber-500">Yoga</span>
          </h1>
          <p className="hero-text text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-3xl mx-auto leading-relaxed">
            "The Yoga of Divine Manifestations — Recognizing the Infinite in the
            Finite."
          </p>
        </div>
      </section>

      {/* 2. THE GLIMPSE OF GREATNESS (VERSE 10.41) */}
      <section className="py-40 px-6 relative border-y border-white/5 bg-amber-950/5">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-10 text-amber-400">
            <Infinity size={24} />
          </div>
          <h2 className="text-amber-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-8">
            The Principle of Opulence
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-200 leading-snug italic mb-12">
            "Wherever you see glory, beauty, majesty, or power, know that it
            springs from but a single spark of My endless splendor."
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/60">
            <div className="h-px w-8 bg-amber-500/20" />
            Verse 10.41
            <div className="h-px w-8 bg-amber-500/20" />
          </div>
        </div>
      </section>

      {/* 3. THE MAJESTY MOSAIC */}
      <section className="py-40 px-6 relative mosaic-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-stone-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Divine Manifestations
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic">
              "I am the best of all categories..."
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {manifestations.map((item, i) => (
              <div
                key={i}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
                }
                className="mosaic-item group relative p-10 bg-stone-900/30 backdrop-blur-xl border border-white/5 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:bg-amber-950/20 hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
              >
                {/* Glowing Aura Ring */}
                <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 border border-amber-500/20 rounded-full group-hover:scale-110 group-hover:border-amber-500/50 transition-all duration-700" />
                  <div className="text-amber-500 group-hover:text-amber-400 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>

                <h4 className="text-white font-serif text-2xl mb-2">
                  {item.title}
                </h4>
                <p className="text-amber-500/60 text-[9px] uppercase tracking-widest font-black mb-6">
                  {item.category}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                  <span className="text-stone-600 text-[10px] font-mono tracking-widest uppercase">
                    Verse {item.verse}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FOUR SEED VERSES (CHATUR-SHLOKI) */}
      <section className="py-40 px-6 bg-[#030201] border-y border-white/5 relative overflow-hidden">
        {/* Luminous Lamp Background Glow */}
        <div className="chatur-glow absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-2">
              Chatur-Shlokī Gitā
            </h3>
            <h4 className="text-5xl md:text-6xl font-serif text-white leading-tight">
              The Four <span className="text-amber-500 italic">Essences</span>
            </h4>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              Verses 10.8 through 10.11 are known as the "Chatur-Shloki"—the
              entire Bhagavad Gita compressed into just four seed verses. They
              describe the origin of all existence, the nature of true devotion,
              and the mechanism of divine grace.
            </p>
          </div>

          <div className="p-12 md:p-16 bg-stone-900/40 backdrop-blur-2xl border border-amber-500/20 rounded-[3rem] relative group">
            <Lightbulb className="absolute -top-8 -right-8 w-32 h-32 text-amber-500/10 group-hover:text-amber-500/20 transition-colors duration-1000" />
            <p className="text-stone-200 font-serif italic text-3xl leading-relaxed relative z-10">
              "To them, out of profound compassion, I, dwelling within their
              hearts, destroy the darkness born of ignorance by the luminous
              lamp of wisdom."
            </p>
            <div className="mt-10 pt-8 border-t border-amber-500/20 flex items-center justify-between text-[10px] uppercase tracking-widest font-bold">
              <span className="text-amber-500/60">The Inner Light</span>
              <span className="text-stone-500">Verse 10.11</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERSE MATRIX: THE 42 SPARKS */}
      <section className="py-40 px-6 bg-[#050402]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                42 Sparks of Glory
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Explore the complete catalogue of Divine Manifestations.
              </p>
            </div>
            <div className="text-amber-600/10 text-[12rem] font-black select-none leading-none">
              10
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3">
            {Array.from({ length: 42 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter10/verse${i + 1}`}
                className="group relative aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-amber-600 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:-translate-y-2"
              >
                <span className="text-stone-500 group-hover:text-stone-950 font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[6px] text-stone-700 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Vibhūti
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE GRAND TRANSITION TO CHAPTER 11 */}
      <footer className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#050402] to-[#1a0f00] relative overflow-hidden">
        {/* Pulsing Climax Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-amber-600/20 blur-[150px] pointer-events-none animate-pulse" />

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-amber-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/09"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Sovereign Secret
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Rāja Vidyā Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/11"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-amber-500 animate-pulse">
                Prepare for the Climax
              </span>
              <span className="font-serif italic text-3xl md:text-5xl text-white group-hover:text-amber-400 transition-colors duration-700 mt-2">
                Viśvarūpa Darśana Yoga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                Behold the Universal Form.
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
