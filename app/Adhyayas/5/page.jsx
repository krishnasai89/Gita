"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Droplets, Wind, Sparkles, ArrowRight, Eye, Sun } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  {
    title: "Equal Vision",
    sanskrit: "समदर्शन (Sama-darśana)",
    icon: <Eye className="text-teal-400" />,
    desc: "A realized soul sees the same divinity in a learned scholar, a cow, an elephant, and even an outcast. The external form is ignored; the inner essence is realized.",
    verse: "5.18",
  },
  {
    title: "Internal Renunciation",
    sanskrit: "नित्यसन्न्यासी (Nitya-sannyāsī)",
    icon: <Sun className="text-teal-400" />,
    desc: "True renunciation isn't about leaving society; it's about being free from the 'I-am-the-doer' attitude. One who neither hates nor desires is a perpetual seeker.",
    verse: "5.03",
  },
];

export default function Adhyaya5() {
  const container = useRef();
  const [ripples, setRipples] = useState([]);

  // Hydration-safe ambient animations
  useEffect(() => {
    setRipples(
      [...Array(10)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 4,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Entrance
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-content",
        { opacity: 0, scale: 0.95, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "sine.inOut",
        },
      );

      // 2. Lotus Image Floating
      gsap.to(".lotus-img", {
        y: -20,

        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Section Reveal Parallax
      gsap.from(".reveal-item", {
        opacity: 1,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".reveal-trigger",
          start: "top 80%",
        },
      });

      // 4. Verse Matrix Reveal
      gsap.from(".verse-stone", {
        opacity: 1,
        y: 20,
        stagger: 0.03,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".verse-matrix",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#050808] min-h-screen selection:bg-teal-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE SERENITY OF NON-ATTACHMENT */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.05)_0%,transparent_70%)]" />

          {/* Ambient Ripples */}
          {ripples.map((r) => (
            <div
              key={r.id}
              className="absolute border border-teal-500/10 rounded-full animate-ping pointer-events-none"
              style={{
                left: r.left,
                top: r.top,
                width: "100px",
                height: "100px",
                animationDuration: `${r.duration}s`,
              }}
            />
          ))}

          <img
            src="/images/adhyaya5.jpg"
            alt="The Meditative Mind"
            className="w-full h-full object-cover opacity-20 mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050808] via-transparent to-[#050808]" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-teal-500/30" />
            <span className="text-teal-500 tracking-[0.5em] text-[10px] font-black uppercase">
              Adhyāya 05
            </span>
            <div className="h-px w-10 bg-teal-500/30" />
          </div>
          <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-teal-500/5 text-[10rem] md:text-[18rem] whitespace-nowrap pointer-events-none select-none">
              कर्मसन्न्यासयोग
            </span>
            Karma <span className="italic text-teal-500">Sannyāsa</span>
          </h1>
          <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-2xl mx-auto">
            "The Yoga of Renunciation of Action — Finding peace in the heart of
            the storm."
          </p>
        </div>
      </section>

      {/* 2. THE ANALOGY: THE LOTUS LEAF (VERSE 5.10) */}

      <section className="py-40 px-6 relative border-y border-white/5 bg-stone-900/10 overflow-hidden reveal-trigger">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="w-full lg:w-1/2 reveal-item">
            <div className="flex items-center gap-3 mb-6">
              <Droplets size={20} className="text-teal-500/50" />
              <h3 className="text-teal-500 text-[10px] font-black tracking-[0.5em] uppercase">
                The Sacred Analogy
              </h3>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-stone-100 mb-8 leading-tight">
              Like a <span className="text-teal-500 italic">Lotus Leaf</span> in
              Water
            </h2>
            <p className="text-stone-400 text-xl leading-relaxed mb-10 font-light">
              Krishna reveals the most elegant secret: Just as a lotus leaf
              rests in water but is{" "}
              <span className="text-teal-200">never wetted by it</span>, the
              seeker remains in the world but is never stained by attachment.
            </p>
            <div className="p-8 rounded-2xl bg-teal-500/5 border-l-2 border-teal-500 backdrop-blur-sm">
              <p className="text-stone-200 font-serif italic text-2xl leading-snug">
                "Relinquish the 'doership'. Perform duty as an offering. This is
                the path to supreme tranquility."
              </p>
              <div className="mt-4 text-[10px] font-mono text-teal-500/40 tracking-widest">
                CHAPTER 05 • VERSE 10
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 reveal-item flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full" />
              <img
                src="/images/lotus-symbol.png"
                alt="Lotus leaf analogy"
                className="lotus-img w-full max-w-md relative z-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PILLARS OF SERENITY */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="group relative p-12 bg-teal-950/5 backdrop-blur-3xl border border-white/5 rounded-[3rem] overflow-hidden transition-all duration-700 hover:border-teal-500/30"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-10 text-teal-400/10 group-hover:bg-teal-500/30 group-hover:text-black transition-all duration-500">
                    {p.icon}
                  </div>
                  <h3 className="text-teal-500/40 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    {p.sanskrit}
                  </h3>
                  <h4 className="text-3xl font-serif text-stone-100 mb-6">
                    {p.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed font-light mb-10 text-lg group-hover:text-stone-300 transition-colors">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-600 font-mono tracking-widest border-t border-white/5 pt-8">
                    <Sparkles size={12} className="text-teal-500/40" />
                    VERSE {p.verse}
                  </div>
                </div>
                {/* Background Decor */}
                <div className="absolute -top-10 -right-10 text-[15rem] text-white/[0.01] font-serif group-hover:text-white/[0.03] transition-all pointer-events-none italic">
                  {i === 0 ? "E" : "R"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE STEPPING STONES */}
      <section className="py-40 px-6 bg-[#060a0a] verse-matrix">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                29 Gates to Stillness
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-lg leading-relaxed">
                A concise map of the mind's liberation from the chains of
                result.
              </p>
            </div>
            <div className="text-teal-600/10 text-[12rem] font-black select-none leading-none">
              05
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-4">
            {Array.from({ length: 29 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter5/verse${i + 1}`}
                className="verse-stone group relative aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-teal-600 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:-translate-y-1"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Zen
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NAVIGATION: INTO THE SILENCE */}
      <footer className="py-40 px-6 relative">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="w-px h-32 bg-gradient-to-b from-teal-500/50 to-transparent mb-16" />

          <Link href="/Adhyayas/6" className="group">
            <div className="flex flex-col items-center gap-6">
              <Wind
                className="text-teal-500 group-hover:animate-pulse"
                size={32}
              />
              <span className="text-[10px] uppercase tracking-[0.8em] font-black text-stone-600">
                The Ultimate Silence
              </span>
              <h4 className="text-5xl font-serif text-white group-hover:text-teal-400 transition-all duration-700">
                Adhyāya 06: <span className="italic">Dhyāna Yoga</span>
              </h4>
              <div className="mt-8 flex items-center gap-4 text-stone-500 group-hover:text-teal-500 transition-colors">
                <span className="text-sm italic">
                  Enter the heart of meditation
                </span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </div>
            </div>
          </Link>
        </div>
      </footer>
    </main>
  );
}
