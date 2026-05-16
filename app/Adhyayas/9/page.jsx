"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Leaf,
  Flower,
  Apple,
  Droplets,
  Sparkles,
  Crown,
  Infinity,
  ArrowRight,
  ArrowLeft,
  Eye,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const offerings = [
  {
    sanskrit: "Patram",
    english: "A Leaf",
    icon: <Leaf size={40} />,
    colorText: "text-emerald-400",
    colorBg: "bg-emerald-500/10",
    colorBorder: "border-emerald-500/20",
    shadow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
  },
  {
    sanskrit: "Puṣpam",
    english: "A Flower",
    icon: <Flower size={40} />,
    colorText: "text-pink-400",
    colorBg: "bg-pink-500/10",
    colorBorder: "border-pink-500/20",
    shadow: "hover:shadow-[0_0_40px_rgba(244,114,182,0.15)]",
  },
  {
    sanskrit: "Phalam",
    english: "A Fruit",
    icon: <Apple size={40} />,
    colorText: "text-amber-400",
    colorBg: "bg-amber-500/10",
    colorBorder: "border-amber-500/20",
    shadow: "hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]",
  },
  {
    sanskrit: "Toyam",
    english: "Water",
    icon: <Droplets size={40} />,
    colorText: "text-blue-400",
    colorBg: "bg-blue-500/10",
    colorBorder: "border-blue-500/20",
    shadow: "hover:shadow-[0_0_40px_rgba(96,165,250,0.15)]",
  },
];

export default function Adhyaya9() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.from(".hero-content", {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "power3.out",
      });

      // 2. Slow Mandala Rotation
      gsap.to(".royal-mandala", {
        rotation: 360,
        duration: 150,
        repeat: -1,
        ease: "none",
      });

      // 3. Floating Offerings Stagger
      gsap.from(".offering-card", {
        opacity: 1,
        y: 50,
        scale: 0.9,
        stagger: 0.15,
        duration: 1.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".offering-section",
          start: "top 75%",
        },
      });

      // 4. Subtle continuous float for offerings
      gsap.utils.toArray(".offering-card").forEach((card, i) => {
        gsap.to(card, {
          y: "-=15",
          duration: 2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // 5. Verse Grid Reveal
      gsap.from(".verse-node", {
        opacity: 1,
        scale: 0.8,
        stagger: 0.02,
        duration: 0.6,
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
      className="bg-[#050308] min-h-screen selection:bg-purple-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE SOVEREIGN SECRET */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.15)_0%,transparent_70%)]" />

          {/* Royal Mandala Background */}
          <div className="royal-mandala absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-[1.5]">
            <svg
              width="800"
              height="800"
              viewBox="0 0 200 200"
              className="text-purple-500"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              />
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M100 10 Q120 50 100 100 Q80 50 100 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
            </svg>
          </div>

          <img
            src="/images/adhyaya1.jpg"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            alt="The Cosmic Secret"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/50 via-transparent to-[#050308]" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-amber-500/40" />
            <Crown size={14} className="text-amber-500/80" />
            <span className="text-amber-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 09
            </span>
            <div className="h-px w-12 bg-amber-500/40" />
          </div>

          <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-white/[0.02] text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              राजविद्याराजगुह्ययोग
            </span>
            Rāja <span className="italic text-purple-400">Vidyā</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-3xl mx-auto leading-relaxed">
            "The King of Sciences, the King of Secrets, the Supreme Purifier."
          </p>
        </div>
      </section>

      {/* 2. THE DIRECT EXPERIENCE (VERSE 9.2) */}
      <section className="py-40 px-6 relative border-y border-white/5 bg-purple-950/5">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-10 text-purple-400">
            <Eye size={24} />
          </div>
          <h2 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            The Sovereign Science
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-200 leading-snug italic mb-12">
            "It is realized by direct perception, endowed with merit, very easy
            to perform, and imperishable."
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-purple-500/60">
            <div className="h-px w-8 bg-purple-500/20" />
            Verse 9.02
            <div className="h-px w-8 bg-purple-500/20" />
          </div>
        </div>
      </section>

      {/* 3. DIVINE OFFERING (VERSE 9.26) */}
      <section className="py-40 px-6 relative offering-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-stone-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              The Absolute Simplicity of Devotion
            </h3>
            <div className="w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {offerings.map((item, i) => (
              <div
                key={i}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
                }
                className={`offering-card p-10 rounded-[2.5rem] bg-stone-900/40 border border-white/5 backdrop-blur-xl flex flex-col items-center text-center transition-all duration-700 ${item.shadow}`}
              >
                <div
                  className={`w-28 h-28 rounded-full ${item.colorBg} ${item.colorBorder} border flex items-center justify-center ${item.colorText} mb-8`}
                >
                  {item.icon}
                </div>
                <h4 className="text-white font-serif text-2xl mb-2">
                  {item.sanskrit}
                </h4>
                <p className="text-stone-500 font-mono text-[10px] uppercase tracking-widest">
                  {item.english}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-purple-900/10 border border-purple-500/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <p className="text-2xl md:text-4xl font-serif text-stone-200 leading-relaxed italic mb-8">
              "If one offers Me with love and devotion a leaf, a flower, a
              fruit, or water, I will accept it."
            </p>
            <span className="text-purple-400/80 text-[10px] tracking-[0.5em] uppercase font-bold">
              Verse 9.26
            </span>
          </div>
        </div>
      </section>

      {/* 4. THE ALL-ENCOMPASSING DIVINE (VERSES 9.16-19) */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#030105]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-amber-500 to-purple-500 rounded-full opacity-20 hidden lg:block" />
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
              The Omnipresence
            </h3>
            <h4 className="text-5xl font-serif text-white leading-tight">
              I am the Ritual, the Sacrifice, and the Chant.
            </h4>
            <p className="text-stone-400 text-xl font-light leading-relaxed">
              Krishna unveils the staggering scope of His reality. He is not a
              distant deity, but the very fabric of existence. He is the Father,
              the Mother, the Supporter, and the Grandsire. He is the sacred
              syllable{" "}
              <span className="text-amber-400 font-serif italic">Om</span>.
            </p>
          </div>

          <div className="p-12 md:p-16 bg-purple-950/20 backdrop-blur-2xl border border-purple-500/20 rounded-[3rem] relative overflow-hidden group">
            <Sparkles className="absolute -top-10 -right-10 w-48 h-48 text-purple-500/5 group-hover:text-purple-500/10 group-hover:scale-110 transition-all duration-1000" />
            <Infinity className="text-amber-500/50 mb-8" size={32} />
            <p className="text-stone-200 italic text-2xl leading-relaxed relative z-10 font-serif">
              "I am the Goal, the Supporter, the Lord, the Witness, the Abode,
              the Shelter, the Friend, the Origin, the Dissolution, the
              Foundation, and the Imperishable Seed."
            </p>
            <div className="mt-10 pt-8 border-t border-white/10 text-[10px] text-purple-400 uppercase tracking-widest font-bold">
              Verses 9.16 — 9.18
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERSE MATRIX: THE ROYAL SEALS (34 SHLOKAS) */}
      <section className="py-40 px-6 verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                34 Sovereign Seals
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Unlock the supreme purifier verse by verse.
              </p>
            </div>
            <div className="text-purple-600/10 text-[12rem] font-black select-none leading-none">
              09
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            {Array.from({ length: 34 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter9/verse${i + 1}`}
                className="verse-node aspect-square bg-stone-900/30 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-purple-900/40 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1 group"
              >
                <span className="text-stone-500 group-hover:text-amber-400 font-serif text-xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[6px] text-stone-700 group-hover:text-amber-500/70 uppercase tracking-widest mt-1 font-bold">
                  Rāja
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER FOOTER */}
      <footer className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-[#050308] to-[#0a050f]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-purple-500/50 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/8"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Imperishable
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Akṣara Brahma Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/10"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-purple-400/80">
                To the Infinite Opulence
              </span>
              <span className="font-serif italic text-3xl text-white group-hover:text-amber-400 transition-colors">
                Vibhūti Yoga
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
