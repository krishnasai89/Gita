"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Flame,
  History,
  Shield,
  Sparkles,
  ArrowRight,
  BookOpen,
  Crown,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const revelations = [
  {
    title: "The Eternal Lineage",
    sanskrit: "परम्परा (Paramparā)",
    icon: <History className="text-indigo-400" />,
    desc: "Wisdom is not a new invention; it is a timeless transmission. Krishna reveals he taught this same truth at the dawn of time to the Sun-god.",
    verse: "4.01",
  },
  {
    title: "The Divine Descent",
    sanskrit: "अवतार (Avatāra)",
    icon: <Crown className="text-indigo-400" />,
    desc: "The Divine manifests whenever righteousness fails. This is the promise of cosmic balance—protection for the seeker and transformation for the world.",
    verse: "4.07",
  },
  {
    title: "The Fire of Wisdom",
    sanskrit: "ज्ञानअग्नि (Jñānāgni)",
    icon: <Flame className="text-indigo-400" />,
    desc: "Even the heaviest karma is reduced to ashes when touched by the fire of realization. Knowledge is the ultimate purifier of the human soul.",
    verse: "4.37",
  },
];

export default function Adhyaya4() {
  const container = useRef();
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    setSparks(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Text Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.3,
          ease: "power4.out",
        },
      );

      // 2. 3D Card Stagger
      gsap.from(".theory-card", {
        opacity: 1,
        scale: 0.9,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".theory-grid",
          start: "top 80%",
        },
      });

      // 3. Floating Animation for Hero Decor
      gsap.to(".hero-glow", {
        opacity: 0.4,
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
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
      className="bg-[#050505] min-h-screen selection:bg-indigo-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE DESCENT OF TRUTH */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)] opacity-20" />

          {/* Vertical Light Descent */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />

          {/* Wisdom Sparks */}
          {sparks.map((s) => (
            <div
              key={s.id}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full blur-[1px] animate-pulse"
              style={{
                left: s.left,
                top: s.top,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="hero-text flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-indigo-500/40" />
            <span className="text-indigo-400 tracking-[0.5em] text-[10px] font-black uppercase">
              Adhyāya 04
            </span>
            <div className="h-px w-10 bg-indigo-500/40" />
          </div>

          <h1 className="hero-text text-6xl md:text-[9rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-indigo-500/10 text-[10rem] md:text-[18rem] whitespace-nowrap pointer-events-none select-none">
              ज्ञानयोग
            </span>
            Jñāna Karma <span className="italic text-indigo-500">Sannyāsa</span>
          </h1>
          <p className="hero-text text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-2xl mx-auto">
            "The Yoga of Wisdom and the Renunciation of Action."
          </p>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold text-indigo-300">
            Listen
          </span>
          <div className="w-px h-12 bg-indigo-500/30" />
        </div>
      </section>

      {/* 2. THE THREE PHILOSOPHICAL REVELATIONS */}
      <section className="py-40 px-6 relative z-10 theory-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {revelations.map((rev, i) => (
              <div
                key={i}
                onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) =>
                  gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
                }
                className="theory-card group relative p-12 bg-indigo-950/10 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-indigo-500/30"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-10 text-indigo-400 group-hover:bg-indigo-500/30 group-hover:text-black transition-all duration-500">
                    {rev.icon}
                  </div>
                  <h3 className="text-indigo-500/40 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                    {rev.sanskrit}
                  </h3>
                  <h4 className="text-3xl font-serif text-stone-100 mb-6 group-hover:text-indigo-400 transition-colors">
                    {rev.title}
                  </h4>
                  <p className="text-stone-500 leading-relaxed font-light mb-10 text-lg group-hover:text-stone-300 transition-colors">
                    {rev.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-stone-600 font-mono tracking-widest border-t border-white/5 pt-8">
                    <Sparkles size={12} className="text-indigo-500/40" />
                    VERSE {rev.verse}
                  </div>
                </div>
                {/* Background Shadow Index */}
                <div className="absolute -bottom-10 -right-10 text-[12rem] text-white/[0.01] font-serif group-hover:text-white/[0.03] transition-all pointer-events-none">
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE AVATĀRA DECLARATION (VERSE 4.7-4.8) */}
      <section className="py-48 px-6 relative overflow-hidden bg-indigo-950/5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Shield
            className="text-indigo-500/30 mx-auto mb-12 animate-pulse"
            size={40}
          />

          <div className="space-y-6 mb-16">
            <h2 className="text-indigo-500 font-serif text-3xl md:text-4xl mb-4 leading-relaxed">
              यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |<br />
              अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||
            </h2>
            <div className="w-16 h-px bg-indigo-500/30 mx-auto" />
          </div>

          <blockquote className="text-3xl md:text-4xl font-serif text-stone-200 leading-[1.5] italic mb-12">
            "Whenever righteousness decays and unrighteousness prevails, then I
            manifest Myself to protect the good and re-establish the Dharma."
          </blockquote>

          <p className="text-indigo-600 font-bold tracking-[0.5em] text-xs uppercase">
            Adhyāya 04 • Verse 07
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      </section>

      {/* 4. VERSE MATRIX: THE NODES OF KNOWLEDGE */}
      <section className="py-40 px-6 bg-[#080705]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                The 42 Illuminations
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-lg leading-relaxed">
                Exploring how the fire of Jñāna burns the fruit of action.
              </p>
            </div>
            <div className="text-indigo-600/10 text-[12rem] font-black select-none leading-none">
              04
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4">
            {Array.from({ length: 42 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter4/verse${i + 1}`}
                className="group relative aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-indigo-600 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:-translate-y-2"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Shloka
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NAVIGATION: INTO RENUNCIATION */}
      <footer className="py-40 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="w-px h-32 bg-gradient-to-b from-indigo-500 to-transparent mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/3"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600 mb-2">
                Previous Realm
              </span>
              <span className="font-serif italic text-2xl text-stone-300">
                Karma Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/5"
              className="group flex flex-col items-center gap-4"
            >
              <span className="text-[10px] uppercase tracking-widest font-black text-indigo-500/60 mb-2">
                Next Stage
              </span>
              <span className="font-serif italic text-3xl text-white group-hover:text-indigo-400 transition-colors">
                Karma Sannyāsa Yoga
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
