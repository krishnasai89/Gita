"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Eye,
  User,
  Layers,
  Brain,
  Wind,
  ArrowRight,
  ArrowLeft,
  Hexagon,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fieldComponents = [
  {
    id: "elements",
    name: "5 Gross Elements",
    desc: "Earth, Water, Fire, Air, and Space. The physical building blocks of the universe.",
    icon: <Hexagon size={20} />,
  },
  {
    id: "senses",
    name: "10 Senses",
    desc: "The five senses of perception (eyes, ears, etc.) and five organs of action.",
    icon: <Eye size={20} />,
  },
  {
    id: "mind",
    name: "Mind & Intellect",
    desc: "The internal instruments. The processor of data (mind) and the decision maker (intellect).",
    icon: <Brain size={20} />,
  },
  {
    id: "ego",
    name: "The Ego (Ahamkāra)",
    desc: "The false sense of 'I-ness' that claims ownership over the body and actions.",
    icon: <User size={20} />,
  },
];

const virtues = [
  "Amanitvam (Humility)",
  "Adambhitvam (Sincerity)",
  "Ahimsā (Non-violence)",
  "Kṣānti (Tolerance)",
  "Ārjavam (Honesty)",
  "Ācāryopāsanam (Service to Teacher)",
  "Śaucam (Purity)",
  "Sthairyam (Steadfastness)",
  "Ātma-vinigrahaḥ (Self-control)",
];

export default function Adhyaya13() {
  const container = useRef(null);
  const [activeLayer, setActiveLayer] = useState(null);

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        },
      );

      // 2. Holographic Scanline
      gsap.to(".scanline", {
        y: "100vh",
        duration: 8,
        repeat: -1,
        ease: "none",
      });

      // 3. Anatomy Cards Stagger
      gsap.from(".anatomy-card", {
        opacity: 1,
        x: 50,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".anatomy-grid",
          start: "top 70%",
        },
      });

      // 4. Floating Virtues Marquee
      gsap.to(".virtue-track", {
        xPercent: -50,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      // 5. Verse Grid
      gsap.fromTo(
        ".verse-node",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: { each: 0.02, from: "start" },
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: ".verse-grid", start: "top 80%" },
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#030605] min-h-screen selection:bg-emerald-500/30 overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION: THE HOLOGRAPHIC BLUEPRINT */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Blueprint Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
          <div className="scanline absolute top-0 left-0 w-full h-[2px] bg-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />

          <img
            src="/images/adhyaya1.jpg"
            alt="The Field of Nature"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030605]/50 via-transparent to-[#030605]" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-emerald-500/40" />
            <Layers size={14} className="text-emerald-500/80" />
            <span className="text-emerald-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 13
            </span>
            <div className="h-px w-10 bg-emerald-500/40" />
          </div>

          <h1 className="text-6xl md:text-[8rem] font-serif text-white mb-6 relative drop-shadow-2xl">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-emerald-500/10 text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              क्षेत्रक्षेत्रज्ञविभागयोग
            </span>
            Kṣetra <span className="italic text-emerald-400">Vibhāga</span>
          </h1>

          <p className="text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-3xl mx-auto leading-relaxed">
            "The Yoga of discriminating the Field from the Knower of the Field."
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE ANATOMY: THE 24 COMPONENTS (VERSES 13.6-7) */}
      <section className="py-40 px-6 anatomy-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-emerald-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              The Structure of Existence
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              The 24 Components of the Field
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-emerald-500/50 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* LEFT: The Holographic Diagram */}
            <div className="lg:col-span-5 relative aspect-square flex items-center justify-center p-8">
              {/* Outer Rings */}
              <div className="absolute inset-0 border border-emerald-500/10 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-8 border border-emerald-500/20 border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]" />

              {/* Core Body */}
              <div className="relative z-10 flex flex-col items-center">
                <User
                  size={180}
                  strokeWidth={1}
                  className={`transition-colors duration-700 ${activeLayer ? "text-emerald-500/30" : "text-stone-700"}`}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 rounded-full blur-3xl opacity-50" />
              </div>

              {/* Dynamic Highlights based on Hover */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${activeLayer === "mind" ? "opacity-100" : "opacity-0"}`}
              >
                <Brain
                  size={60}
                  className="absolute top-[20%] left-1/2 -translate-x-1/2 text-emerald-400 animate-pulse"
                />
              </div>
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${activeLayer === "ego" ? "opacity-100" : "opacity-0"}`}
              >
                <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-amber-500/50 rounded-full animate-ping" />
              </div>

              {/* The Knower (Observer Eye) */}
              <div className="absolute -top-4 -right-4 flex flex-col items-center group cursor-help">
                <div className="w-20 h-20 bg-[#030605] border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mb-3 shadow-[0_0_30px_rgba(16,185,129,0.2)] group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <Eye size={32} />
                </div>
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em]">
                  Kṣetrajña
                </span>
              </div>
            </div>

            {/* RIGHT: Component Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {fieldComponents.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveLayer(item.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`anatomy-card p-8 rounded-3xl border backdrop-blur-xl transition-all duration-500 cursor-crosshair flex flex-col ${
                    activeLayer === item.id
                      ? "bg-emerald-950/30 border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.15)] -translate-y-2"
                      : "bg-stone-900/30 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${activeLayer === item.id ? "bg-emerald-500 text-black" : "bg-emerald-500/10 text-emerald-500"}`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-serif text-2xl mb-3 text-white">
                    {item.name}
                  </h4>
                  <p className="text-stone-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DEFINITION OF KNOWLEDGE (VERSES 13.8-12) */}
      <section className="py-32 border-y border-white/5 bg-[#010302] overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
          <Sparkles className="text-emerald-500/40 mx-auto mb-8" size={32} />
          <h2 className="text-emerald-500 text-[10px] font-black tracking-[0.5em] uppercase mb-8">
            What is True Jñāna?
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-stone-200 leading-relaxed italic">
            "Knowledge is not the accumulation of facts. It is the purification
            of character. All else is ignorance."
          </p>
        </div>

        {/* Endless Marquee of Virtues */}
        <div className="relative w-full flex overflow-hidden py-10 opacity-70 hover:opacity-100 transition-opacity">
          <div className="virtue-track flex gap-8 whitespace-nowrap px-4">
            {[...virtues, ...virtues].map((v, i) => (
              <div
                key={i}
                className="px-8 py-4 bg-emerald-950/20 border border-emerald-500/20 rounded-full flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                <span className="text-stone-300 font-serif text-xl tracking-wide">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE DATA NODES (35 SHLOKAS) */}
      <section className="py-40 px-6 verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                35 Units of Analysis
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Deconstruct the illusion verse by verse.
              </p>
            </div>
            <div className="text-emerald-600/10 text-[12rem] font-black select-none leading-none">
              13
            </div>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-12 gap-3">
            {Array.from({ length: 35 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter13/verse${i + 1}`}
                className="verse-node aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-110 group rounded-lg"
              >
                <span className="text-stone-600 group-hover:text-black font-mono text-lg transition-colors">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <footer className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#030605] to-[#010a06] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-emerald-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/12"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Preceding Path
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Bhakti Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/14"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-emerald-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-emerald-400">
                Analyze the Matrix
              </span>
              <span className="font-serif italic text-3xl md:text-4xl text-white group-hover:text-emerald-400 transition-colors duration-700 mt-2">
                Guṇatraya Vibhāga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                Understanding the Three Modes of Nature.
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
