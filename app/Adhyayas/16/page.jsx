"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  ShieldCheck,
  Flame,
  Skull,
  Heart,
  HandMetal,
  EyeOff,
  Swords,
  ArrowRight,
  ArrowLeft,
  Scale,
  DoorOpen,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const traitData = {
  divine: {
    theme: "emerald",
    bg: "bg-emerald-950/10",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    text: "text-emerald-400",
    icon: <ShieldCheck size={32} />,
    items: [
      {
        trait: "Abhayam",
        mean: "Absolute Fearlessness",
        desc: "Trusting in the Supreme.",
      },
      {
        trait: "Ahimsā",
        mean: "Non-violence",
        desc: "Harmlessness in thought, word, and deed.",
      },
      {
        trait: "Satyam",
        mean: "Truthfulness",
        desc: "Unyielding alignment with reality.",
      },
      {
        trait: "Dānam",
        mean: "Charity",
        desc: "Giving without expectation of return.",
      },
      {
        trait: "Akrodhaḥ",
        mean: "Absence of Anger",
        desc: "Calmness even under provocation.",
      },
      {
        trait: "Hrīḥ",
        mean: "Modesty",
        desc: "Aversion to doing what is wrong.",
      },
    ],
  },
  demoniac: {
    theme: "red",
    bg: "bg-red-950/10",
    border: "border-red-500/30",
    glow: "shadow-[0_0_40px_rgba(220,38,38,0.15)]",
    text: "text-red-500",
    icon: <Flame size={32} />,
    items: [
      {
        trait: "Dambhaḥ",
        mean: "Hypocrisy",
        desc: "Pretending to be righteous.",
      },
      {
        trait: "Darpaḥ",
        mean: "Arrogance",
        desc: "Pride in wealth or learning.",
      },
      {
        trait: "Abhimānaḥ",
        mean: "Self-conceit",
        desc: "Demanding respect from others.",
      },
      {
        trait: "Krodhaḥ",
        mean: "Wrath",
        desc: "Destructive and uncontrolled anger.",
      },
      {
        trait: "Pāruṣyam",
        mean: "Harshness",
        desc: "Cruelty in speech and behavior.",
      },
      {
        trait: "Ajñānam",
        mean: "Ignorance",
        desc: "Inability to distinguish right from wrong.",
      },
    ],
  },
};

export default function Adhyaya16() {
  const container = useRef(null);
  const [filter, setFilter] = useState("divine");
  const active = traitData[filter];

  useGSAP(
    () => {
      // Hero Entrance
      gsap.fromTo(
        ".hero-element",
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

      // Gates Entrance
      gsap.from(".gate-pillar", {
        opacity: 1,
        y: 100,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gates-section",
          start: "top 75%",
        },
      });
    },
    { scope: container },
  );

  // Dynamic Trait Card Animation on Filter Change
  useGSAP(
    () => {
      gsap.fromTo(
        ".trait-card",
        { opacity: 0, rotateX: filter === "divine" ? -45 : 45, y: 30 },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.5)",
          transformPerspective: 1000,
        },
      );
    },
    { dependencies: [filter], scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#030303] min-h-screen selection:bg-red-500/30 overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION: THE GREAT DIVIDE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Diagonal Split Gradient */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.05)_50%,rgba(220,38,38,0.05)_50%)]" />

          <img
            src="/images/adhyaya1.jpg"
            alt="Light vs Shadow"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-[#030303]" />

          {/* Central Slash line */}
          <div className="absolute top-[-50%] left-1/2 w-px h-[200%] bg-gradient-to-b from-emerald-500/50 via-white/20 to-red-500/50 rotate-45 transform origin-center opacity-30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="hero-element flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-white/20" />
            <Scale size={16} className="text-white/60" />
            <span className="text-stone-400 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 16
            </span>
            <div className="h-px w-10 bg-white/20" />
          </div>

          <h1 className="hero-element text-6xl md:text-[8rem] font-serif text-white mb-6 drop-shadow-2xl leading-none">
            Daivāsura <br />
            <span className="italic text-red-500">Vibhāga</span>
          </h1>

          <p className="hero-element text-stone-400 italic text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            "The Divine properties are deemed to lead to liberation; the
            Demoniacal properties to bondage."
          </p>
        </div>
      </section>

      {/* 2. THE MIRROR OF THE SOUL (INTERACTIVE TRAITS) */}
      <section className="py-40 px-6 relative transition-colors duration-1000 ease-in-out">
        {/* Dynamic Ambient Background */}
        <div
          className={`absolute inset-0 opacity-30 transition-colors duration-1000 pointer-events-none ${filter === "divine" ? "bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1)_0%,transparent_70%)]" : "bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.1)_0%,transparent_70%)]"}`}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
            <div className="text-center lg:text-left">
              <h3
                className={`text-[10px] font-black tracking-[0.6em] uppercase mb-4 transition-colors duration-500 ${active.text}`}
              >
                Examine Your Nature
              </h3>
              <h2 className="text-4xl md:text-6xl font-serif text-white">
                The Mirror of the Self
              </h2>
            </div>

            {/* The Cosmic Scale Toggle */}
            <div className="flex p-2 bg-stone-900/40 rounded-full border border-white/5 backdrop-blur-md shadow-2xl">
              <button
                onClick={() => setFilter("divine")}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  filter === "divine"
                    ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    : "text-stone-500 hover:text-white"
                }`}
              >
                <ShieldCheck size={16} /> Divine
              </button>
              <button
                onClick={() => setFilter("demoniac")}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${
                  filter === "demoniac"
                    ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                    : "text-stone-500 hover:text-white"
                }`}
              >
                <Flame size={16} /> Demoniac
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
            {active.items.map((item, i) => (
              <div
                key={i}
                className={`trait-card p-10 bg-stone-900/30 backdrop-blur-xl border rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:${active.glow} ${active.border}`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 ${active.bg} ${active.text}`}
                >
                  {active.icon}
                </div>
                <h4 className="text-white font-serif text-3xl mb-2">
                  {item.trait}
                </h4>
                <p
                  className={`text-[10px] font-black uppercase tracking-widest mb-6 ${active.text}`}
                >
                  {item.mean}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE THREE GATES TO HELL (VERSE 16.21) */}
      <section className="py-40 px-6 gates-section relative bg-[#020101] border-y border-white/5 overflow-hidden">
        {/* Hellfire ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-900/10 blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <DoorOpen className="text-red-600/40 mx-auto mb-8" size={40} />
          <h3 className="text-red-600 text-[10px] font-black tracking-[0.6em] uppercase mb-6">
            The Triple Gate of Ruin
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-20 italic max-w-4xl mx-auto leading-tight">
            "Lust, Anger, and Greed—these are the three gates to hell,
            destructive of the self."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                sanskrit: "Kāma",
                english: "Lust / Desire",
                icon: <Heart className="text-red-500/50" />,
              },
              {
                sanskrit: "Krodha",
                english: "Anger / Wrath",
                icon: <Swords className="text-red-500/50" />,
              },
              {
                sanskrit: "Lobha",
                english: "Greed / Avarice",
                icon: <HandMetal className="text-red-500/50" />,
              },
            ].map((gate, i) => (
              <div
                key={i}
                className="gate-pillar p-12 border-x border-t border-red-900/30 border-b-4 border-b-red-600 rounded-t-[3rem] rounded-b-xl bg-gradient-to-b from-stone-900/40 to-[#1a0505] group hover:to-[#2a0808] transition-colors flex flex-col items-center"
              >
                <div className="mb-8 p-4 rounded-full bg-red-950/30 group-hover:scale-110 transition-transform">
                  {gate.icon}
                </div>
                <p className="text-white font-serif text-4xl mb-4 group-hover:text-red-400 transition-colors">
                  {gate.sanskrit}
                </p>
                <div className="w-8 h-px bg-red-900/50 mb-4" />
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">
                  {gate.english}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-16 text-stone-500 text-xs font-mono tracking-widest uppercase">
            Therefore, one should abandon these three. — Verse 16.21
          </p>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE BATTLEFIELD (24 SHLOKAS) */}
      <section className="py-40 px-6 bg-[#030303] verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                24 Razor Edges
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Navigate the battlefield of human nature.
              </p>
            </div>
            <div className="text-white/5 text-[12rem] font-black select-none leading-none">
              16
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            {Array.from({ length: 24 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter16/verse${i + 1}`}
                className="relative aspect-square bg-stone-900/30 border border-white/5 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:bg-red-950/40 hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:-translate-y-1 group"
                style={{
                  borderRadius: i % 2 === 0 ? "1rem 0 1rem 0" : "0 1rem 0 1rem",
                }} // Sharp, jagged edges
              >
                <span className="font-serif text-2xl relative z-10 transition-colors text-stone-500 group-hover:text-red-400">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <footer className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#030303] to-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/15"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Upside-Down Tree
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Puruṣottama Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/17"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-stone-300 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-stone-400">
                Restore the Balance
              </span>
              <span className="font-serif italic text-3xl md:text-5xl text-white group-hover:text-stone-300 transition-colors duration-700 mt-2">
                Śraddhātraya Vibhāga
              </span>
              <span className="text-stone-500 italic text-lg mt-4 group-hover:text-stone-300 transition-colors">
                The Threefold Divisions of Faith.
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
