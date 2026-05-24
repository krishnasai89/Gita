"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Play,
  RotateCcw,
  Pause,
  Sparkles,
  Wind,
  Target,
  Eye,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya6() {
  const container = useRef(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isActive, setIsActive] = useState(false);
  const totalTime = 120;

  // Meditation Timer Logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(totalTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useGSAP(
    () => {
      // Hero Parallax
      gsap.from(".hero-content", {
        opacity: 1,
        y: 30,
        duration: 1.5,
        ease: "power3.out",
      });

      // Breathing Animation for Meditation Box
      gsap.to(".breath-ring", {
        scale: 1.2,
        opacity: 1,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Reveal Mirror Section
      gsap.from(".dual-card", {
        opacity: 1,
        scale: 0.9,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: ".dual-section",
          start: "top 70%",
        },
      });
    },
    { scope: container },
  );

  const dashOffset = (timeLeft / totalTime) * 283; // 283 is the circumference of r=45

  return (
    <main
      ref={container}
      className="bg-[#050505] min-h-screen selection:bg-blue-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE MONASTERY OF THE MIND */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya1.jpg"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-blue-500/30" />
            <span className="text-blue-500 tracking-[0.5em] text-[10px] font-black uppercase">
              Adhyāya 06
            </span>
            <div className="h-px w-10 bg-blue-500/30" />
          </div>
          <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-blue-500/10 text-[10rem] md:text-[18rem] whitespace-nowrap pointer-events-none select-none">
              ध्यानयोग
            </span>
            Dhyāna <span className="italic text-blue-500">Yoga</span>
          </h1>
          <p className="text-stone-500 italic text-xl md:text-2xl max-w-2xl mx-auto font-light tracking-wide">
            "The science of internal silence. Where the restless mind meets the
            infinite self."
          </p>
        </div>
      </section>

      {/* 2. THE STEADY FLAME (VERSE 6.19) */}
      <section className="py-40 px-6 relative overflow-hidden bg-blue-950/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 relative flex justify-center">
            {/* Windless Lamp Visual */}
            <div className="relative">
              <div className="w-1 h-12 bg-gradient-to-t from-blue-600 to-transparent rounded-full blur-[2px]" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full blur-xl opacity-50" />
            </div>
            <Wind
              className="absolute top-0 left-0 text-white/[0.03] rotate-12"
              size={120}
            />
          </div>

          <h2 className="text-stone-300 font-serif text-3xl md:text-5xl leading-tight italic mb-10 px-4">
            "As a lamp in a windless place does not flicker, even so is the Yogi
            of subdued mind..."
          </h2>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-blue-500/20" />
            <p className="text-blue-600 text-[10px] font-black tracking-[0.5em] uppercase">
              Verse 6.19
            </p>
            <div className="h-px w-8 bg-blue-500/20" />
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MEDITATION PORTAL */}
      <section className="py-40 px-6 relative meditation-section">
        {/* Breathing Ring Aura */}
        <div className="breath-ring absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/20 rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto meditation-box bg-stone-900/10 backdrop-blur-3xl border border-white/5 p-16 rounded-[60px] text-center shadow-2xl relative z-10">
          <div className="mb-12">
            <h3 className="text-stone-500 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
              Practice Pratyahara
            </h3>
            <p className="text-stone-600 text-xs italic">
              Withdraw the senses from the world.
            </p>
          </div>

          {/* SVG Circular Timer */}
          <div className="relative w-64 h-64 mx-auto mb-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-white/5"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="283"
                strokeDashoffset={283 - dashOffset}
                strokeLinecap="round"
                className="text-blue-500 transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-7xl font-serif text-white tabular-nums tracking-tighter">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button
              onClick={toggleTimer}
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                isActive
                  ? "bg-stone-800 text-blue-500 border border-blue-500/20"
                  : "bg-blue-600 text-stone-950 hover:bg-blue-400"
              }`}
            >
              {isActive ? (
                <Pause fill="currentColor" />
              ) : (
                <Play fill="currentColor" className="ml-1" />
              )}
            </button>
            <button
              onClick={resetTimer}
              className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-stone-500 hover:text-white hover:bg-white/5 transition-all"
            >
              <RotateCcw size={24} />
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-4 text-stone-600">
            <Target size={14} className="text-blue-500/40" />
            <p className="text-[10px] uppercase tracking-widest font-bold">
              Posture: Erect & Unmoving
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE DUALITY OF THE SELF (VERSE 6.5) */}
      <section className="py-40 px-6 dual-section bg-stone-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              The Internal Sovereign
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            {/* The Vertical Split Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5" />

            {/* Friend Card */}
            <div className="dual-card p-12 bg-blue-500/[0.02] border border-blue-500/10 rounded-[2.5rem] flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8">
                <Sparkles size={24} />
              </div>
              <h3 className="text-2xl font-serif text-blue-400 mb-4 italic">
                The Self as Friend
              </h3>
              <p className="text-stone-400 leading-relaxed font-light">
                "For the one who has conquered the mind, the mind is the best of
                friends."
              </p>
            </div>

            {/* Enemy Card */}
            <div className="dual-card p-12 bg-stone-900/20 border border-white/5 rounded-[2.5rem] flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-stone-800 flex items-center justify-center text-stone-600 mb-8">
                <Pause size={24} className="rotate-90" />
              </div>
              <h3 className="text-2xl font-serif text-stone-400 mb-4 italic">
                The Self as Enemy
              </h3>
              <p className="text-stone-500 leading-relaxed font-light">
                "For the one who has failed to conquer the mind, the self
                remains as the greatest enemy."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MODERATION (VERSE 6.16) */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center reveal-trigger">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full mb-8">
            <Eye size={14} className="text-blue-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              The Middle Way
            </span>
          </div>
          <h4 className="text-3xl font-serif text-white mb-8">
            Temperance in Living
          </h4>
          <p className="text-stone-400 text-lg leading-relaxed font-light mb-12">
            Yoga is not for the extreme. It is not for the one who eats too
            much, nor for the one who starves. It is found in the balance of
            work, rest, and play.
          </p>
        </div>
      </section>

      {/* 6. VERSE SELECTOR GRID */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                47 Illuminations
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-lg leading-relaxed">
                Navigating the architecture of internal awareness through 47
                verses.
              </p>
            </div>
            <div className="text-blue-600/10 text-[12rem] font-black select-none leading-none">
              06
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4">
            {Array.from({ length: 47 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter6/verse${i + 1}`}
                className="group relative aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Atman
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEXT CHAPTER NAVIGATION */}
      <footer className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-[#080c14]">
        <div className="w-px h-24 bg-blue-500/50 mx-auto mb-12" />
        <Link
          href="/Adhyayas/7"
          className="group inline-flex flex-col items-center"
        >
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.4em] mb-4 group-hover:text-blue-500 transition-colors">
            Ascending to Divine Knowledge
          </span>
          <h4 className="text-4xl md:text-7xl font-serif text-stone-400 group-hover:text-white transition-all duration-700">
            Adhyāya 07: <span className="italic">Jñāna Vijñāna</span>
          </h4>
        </Link>
      </footer>
    </main>
  );
}
