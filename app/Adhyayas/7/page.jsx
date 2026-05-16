"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Mountain,
  Droplets,
  Flame,
  Wind,
  Orbit,
  Brain,
  Zap,
  User,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import DevoteeCarousel from "@/app/components/DevoteeCarousel/DevoteeCarousel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const elements = [
  { name: "Earth", sanskrit: "Bhūmi", icon: <Mountain size={24} /> },
  { name: "Water", sanskrit: "Apaḥ", icon: <Droplets size={24} /> },
  { name: "Fire", sanskrit: "Analaḥ", icon: <Flame size={24} /> },
  { name: "Air", sanskrit: "Vāyuḥ", icon: <Wind size={24} /> },
  { name: "Space", sanskrit: "Kham", icon: <Orbit size={24} /> },
  { name: "Mind", sanskrit: "Manaḥ", icon: <Brain size={24} /> },
  { name: "Intellect", sanskrit: "Buddhi", icon: <Zap size={24} /> },
  { name: "Ego", sanskrit: "Ahankāra", icon: <User size={24} /> },
];

export default function Adhyaya7() {
  const container = useRef(null);
  const particleContainer = useRef(null);

  useGSAP(
    () => {
      // 1. Particle Creation
      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.className =
          "absolute w-1 h-1 bg-emerald-500/20 rounded-full blur-[1px]";
        particleContainer.current.appendChild(p);

        gsap.set(p, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 2,
        });

        gsap.to(p, {
          y: "-=100",
          x: `+=${Math.random() * 50 - 25}`,
          opacity: 0,
          duration: 5 + Math.random() * 5,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5,
        });
      }

      // 2. Hero Reveal
      gsap.from(".hero-content", {
        opacity: 1,
        y: 40,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "power4.out",
      });

      // 3. Elements Grid Stagger
      gsap.from(".element-card", {
        opacity: 1,
        scale: 0.8,
        y: 30,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".elements-grid",
          start: "top 80%",
        },
      });

      // 4. Thread Animation
      gsap.from(".pearl-thread", {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: ".analogy-section",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#050807] min-h-screen selection:bg-emerald-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE SOURCE OF ALL */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div
          ref={particleContainer}
          className="absolute inset-0 z-0 pointer-events-none"
        />

        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/adhyaya1.jpg"
            className="w-full h-full object-cover mix-blend-screen"
            alt="Cosmic Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050807] via-emerald-950/20 to-[#050807]" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-emerald-500/40" />
            <span className="text-emerald-500 tracking-[0.5em] text-[10px] font-black uppercase">
              Adhyāya 07
            </span>
            <div className="h-px w-10 bg-emerald-500/40" />
          </div>
          <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-emerald-500/10 text-[10rem] md:text-[18rem] whitespace-nowrap pointer-events-none select-none">
              ज्ञानविज्ञानयोग
            </span>
            Jñāna <span className="italic text-emerald-400">Vijñāna</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-3xl mx-auto leading-relaxed">
            "The Yoga of Knowledge and Wisdom — Where Science meets Spirit."
          </p>
        </div>
      </section>

      {/* 2. THE EIGHT-FOLD PRAKRITI (VERSE 7.4) */}
      <section className="py-40 px-6 relative elements-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-emerald-500 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              The Manifested Nature
            </h2>
            <h3 className="text-4xl font-serif text-white italic">
              The Eight Divisions
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((el, i) => (
              <div
                key={i}
                className="element-card group relative p-10 bg-emerald-950/5 border border-white/5 rounded-3xl transition-all duration-500 hover:border-emerald-500/30 hover:bg-emerald-950/10"
              >
                <div className="text-emerald-500/40 group-hover:text-emerald-400 mb-6 transition-colors duration-500">
                  {el.icon}
                </div>
                <h4 className="text-white text-xl font-serif mb-1">
                  {el.name}
                </h4>
                <p className="text-emerald-700 text-[10px] font-mono tracking-widest uppercase">
                  {el.sanskrit}
                </p>
                <div className="absolute top-4 right-6 text-stone-900 font-serif text-4xl group-hover:text-emerald-500/10 transition-colors">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE ANALOGY: PEARLS ON A THREAD (VERSE 7.7) */}
      <section className="py-40 px-6 relative analogy-section overflow-hidden">
        {/* Visual Pearl Thread Decor */}
        <div className="pearl-thread absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-emerald-500/20 hidden lg:block" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <h3 className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase mb-8">
              The Infinite Connector
            </h3>
            <h4 className="text-5xl md:text-6xl font-serif text-white mb-10 leading-tight">
              A Thread <br />
              <span className="text-emerald-400 italic">Between Worlds</span>
            </h4>
            <p className="text-stone-400 text-lg leading-relaxed font-light mb-10">
              Krishna explains that material nature is but His lower energy. The
              higher energy is the{" "}
              <span className="text-emerald-200">consciousness</span> that
              breathes life into the elements.
            </p>
            <div className="flex items-center gap-4 text-emerald-500/60 font-mono text-xs uppercase tracking-widest">
              <Sparkles size={16} /> Apara & Para Prakṛti
            </div>
          </div>

          <div className="relative p-12 bg-stone-900/30 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] group">
            <div className="absolute -top-10 -left-6 text-[12rem] text-emerald-500/5 font-serif pointer-events-none italic leading-none">
              “
            </div>
            <p className="text-2xl font-serif text-stone-200 leading-relaxed italic relative z-10 mb-10">
              "O Arjuna, there is nothing higher than Me. Everything in this
              world is strung on Me, like rows of pearls upon a thread."
            </p>
            <div className="flex items-center justify-between pt-8 border-t border-white/10">
              <span className="text-emerald-600 text-[10px] font-black tracking-[0.4em] uppercase">
                Verse 7.07
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-emerald-500/30"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DevoteeCarousel />

      {/* 4. VERSE MATRIX: THE JEWEL-CUT GRID */}
      <section className="py-40 px-6 bg-[#040606]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                30 Revelations
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Mapping the intersection of physical science and divine
                awareness.
              </p>
            </div>
            <div className="text-emerald-600/10 text-[12rem] font-black select-none leading-none">
              07
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-4">
            {Array.from({ length: 30 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter7/verse${i + 1}`}
                className="aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-emerald-600 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-2 group"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Vijñāna
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <footer className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-[#040606] to-[#061410]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-px h-24 bg-emerald-500/50 mb-12" />
          <Link href="/Adhyayas/8" className="group flex flex-col items-center">
            <span className="text-[10px] text-stone-600 uppercase tracking-[0.8em] mb-4 group-hover:text-emerald-500 transition-colors">
              Beyond the Imperishable
            </span>
            <h4 className="text-5xl md:text-7xl font-serif text-stone-400 group-hover:text-white transition-all duration-700">
              Adhyāya 08: <span className="italic">Akṣara Brahma</span>
            </h4>
            <div className="mt-10 flex items-center gap-4 text-stone-600 group-hover:text-emerald-400 transition-colors">
              <span className="text-sm italic">The path to the Absolute</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </div>
          </Link>
        </div>
      </footer>
    </main>
  );
}
