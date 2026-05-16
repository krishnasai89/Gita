"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Utensils,
  Gift,
  MessageSquare,
  Leaf,
  Zap,
  Moon,
  Sparkles,
  Volume2,
  ArrowLeft,
  ArrowRight,
  Heart,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = {
  Food: [
    {
      mode: "Sattva",
      theme: "emerald",
      icon: <Leaf size={32} />,
      desc: "Juicy, fatty, wholesome, and pleasing to the heart.",
      effect: "Promotes longevity, purity, strength, health, and joy.",
    },
    {
      mode: "Rajas",
      theme: "amber",
      icon: <Zap size={32} />,
      desc: "Excessively bitter, sour, salty, hot, pungent, and dry.",
      effect: "Produces pain, grief, and disease.",
    },
    {
      mode: "Tamas",
      theme: "indigo",
      icon: <Moon size={32} />,
      desc: "Stale, tasteless, putrid, rotten, and impure leftovers.",
      effect: "Leads to darkness, lethargy, and ignorance.",
    },
  ],
  Austerity: [
    {
      mode: "Sattva",
      theme: "emerald",
      icon: <MessageSquare size={32} />,
      desc: "Words that are truthful, pleasant, beneficial, and not agitating.",
      effect: "The austerity of speech. Purifies the mind.",
    },
    {
      mode: "Rajas",
      theme: "amber",
      icon: <MessageSquare size={32} />,
      desc: "Practiced with ostentation, to gain respect, honor, and reverence.",
      effect: "Unstable, fleeting, and hypocritical.",
    },
    {
      mode: "Tamas",
      theme: "indigo",
      icon: <MessageSquare size={32} />,
      desc: "Performed out of foolish notions, with self-torture, or to destroy others.",
      effect: "Self-destructive and blinding.",
    },
  ],
  Charity: [
    {
      mode: "Sattva",
      theme: "emerald",
      icon: <Gift size={32} />,
      desc: "Given out of duty, to a worthy person, at the right time and place.",
      effect: "Pure giving without any expectation of return.",
    },
    {
      mode: "Rajas",
      theme: "amber",
      icon: <Gift size={32} />,
      desc: "Given with a view to receiving something in return, or seeking a reward.",
      effect: "Done grudgingly, lacking true generosity.",
    },
    {
      mode: "Tamas",
      theme: "indigo",
      icon: <Gift size={32} />,
      desc: "Given at the wrong place and time to unworthy persons, without respect.",
      effect: "Disrespectful, contemptuous, and wasteful.",
    },
  ],
};

export default function Adhyaya17() {
  const container = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Food");

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        },
      );

      // 2. Om Tat Sat Breathing Glow
      gsap.to(".om-glow", {
        scale: 1.2,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  // Category Cards Transition
  useGSAP(
    () => {
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.2)",
        },
      );
    },
    { dependencies: [activeCategory], scope: container },
  );

  const getThemeClasses = (theme) => {
    switch (theme) {
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]";
      case "amber":
        return "text-amber-400 bg-amber-500/10 border-amber-500/30 hover:border-amber-500/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]";
      case "indigo":
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/30 hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]";
      default:
        return "text-stone-400 bg-stone-500/10 border-stone-500/30";
    }
  };

  return (
    <main
      ref={container}
      className="bg-[#050608] min-h-screen selection:bg-stone-500/30 overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION: THE THREEFOLD FAITH */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,113,108,0.1)_0%,transparent_70%)]" />
          <img
            src="/images/adhyaya1.jpg"
            alt="Faith and Nature"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-transparent to-[#050608]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="hero-element flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-stone-500/40" />
            <Heart size={16} className="text-stone-400" />
            <span className="text-stone-400 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 17
            </span>
            <div className="h-px w-10 bg-stone-500/40" />
          </div>

          <h1 className="hero-element text-5xl md:text-[7rem] font-serif text-white mb-6 drop-shadow-2xl leading-none">
            Śraddhātraya <br />
            <span className="italic text-stone-400">Vibhāga</span>
          </h1>

          <p className="hero-element text-stone-400 italic text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            "A man consists of his faith; as his faith is, so is he."
          </p>
        </div>
      </section>

      {/* 2. THE LIFESTYLE MATRIX (FOOD, AUSTERITY, CHARITY) */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-stone-500 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              The Science of Living
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Threefold{" "}
              <span className="italic text-stone-400">Manifestations</span>
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-stone-500/50 to-transparent mx-auto mt-8" />
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border backdrop-blur-sm ${
                  activeCategory === cat
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105"
                    : "bg-stone-900/30 text-stone-400 border-white/10 hover:border-white/30 hover:bg-stone-800/40"
                }`}
              >
                {cat === "Food" ? (
                  <Utensils size={16} />
                ) : cat === "Austerity" ? (
                  <MessageSquare size={16} />
                ) : (
                  <Gift size={16} />
                )}
                {cat}
              </button>
            ))}
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
            {categories[activeCategory].map((item, i) => {
              const themeClass = getThemeClasses(item.theme);
              return (
                <div
                  key={`${activeCategory}-${i}`}
                  className={`category-card p-10 md:p-12 backdrop-blur-xl border rounded-[2.5rem] transition-all duration-500 flex flex-col h-full ${themeClass}`}
                >
                  <div className="flex items-center justify-between mb-10">
                    <div className="p-4 rounded-full bg-black/20 mix-blend-overlay">
                      {item.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-60">
                      The Mode of {item.mode}
                    </span>
                  </div>

                  <h4 className="text-white font-serif text-4xl mb-6 tracking-tight">
                    {item.mode}
                  </h4>

                  <p className="text-stone-300 text-lg leading-relaxed font-light mb-12 flex-grow">
                    "{item.desc}"
                  </p>

                  <div className="pt-6 border-t border-current/10">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">
                      Ultimate Result
                    </p>
                    <p className="font-serif italic text-xl">{item.effect}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OM TAT SAT: THE FINAL PURIFIER (VERSES 17.23-28) */}
      <section className="py-48 px-6 bg-[#020203] border-y border-white/5 relative overflow-hidden flex items-center justify-center min-h-screen">
        {/* Acoustic Chamber Glow Effect */}
        <div className="om-glow absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020203_80%)]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Volume2 className="text-white/20 mx-auto mb-12" size={48} />
          <h2 className="text-stone-400 text-[10px] font-black tracking-[0.6em] uppercase mb-12">
            The Triple Designation of Brahman
          </h2>

          <h3 className="text-7xl md:text-[10rem] font-serif text-white mb-16 flex justify-center gap-6 md:gap-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <span>ॐ</span> <span className="opacity-80">तत्</span>{" "}
            <span className="opacity-60">सत्</span>
          </h3>

          <div className="space-y-8 max-w-3xl mx-auto">
            <p className="text-stone-200 text-2xl md:text-4xl font-serif italic leading-relaxed">
              "OM-TAT-SAT is declared to be the threefold designation of the
              Supreme."
            </p>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              Acts of sacrifice, charity, and penance are always begun with{" "}
              <strong>'OM'</strong>. They are performed with{" "}
              <strong>'TAT'</strong> (That) without seeking fruit. And{" "}
              <strong>'SAT'</strong> (Truth) is used to express the reality and
              goodness of the action.
            </p>
            <div className="p-6 mt-12 bg-white/5 border border-white/10 rounded-2xl inline-block">
              <p className="text-stone-300 text-sm font-mono tracking-wide uppercase">
                Whatever is done without faith is 'Asat' (unreal). It is of no
                value here or hereafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE MALA BEADS (28 SHLOKAS) */}
      <section className="py-40 px-6 bg-[#050608] verse-matrix">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                28 Beads of Faith
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Examine the practical manifestations of devotion.
              </p>
            </div>
            <div className="text-white/5 text-[12rem] font-black select-none leading-none">
              17
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-4">
            {Array.from({ length: 28 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter17/verse${i + 1}`}
                className="verse-bead relative aspect-square bg-[#0a0c10] border border-white/5 rounded-full flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-stone-800 hover:border-stone-400 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)] group shadow-inner shadow-white/5"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
                <span className="text-stone-500 group-hover:text-white font-serif text-2xl relative z-10 transition-colors duration-300">
                  {i + 1}
                </span>
                <span className="absolute bottom-3 opacity-0 group-hover:opacity-100 text-[8px] tracking-[0.3em] text-stone-400 uppercase font-black transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  Śraddhā
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER: THE GRAND FINALE */}
      <section className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#050608] to-[#020202] relative overflow-hidden">
        {/* Subtle glowing horizon line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-stone-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/16"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Dual Nature
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Daivāsura Vibhāga
              </span>
            </Link>

            <Link
              href="/Adhyayas/18"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-white group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-stone-400 animate-pulse">
                The Ultimate Conclusion
              </span>
              <span className="font-serif italic text-3xl md:text-5xl text-white group-hover:text-stone-300 transition-colors duration-700 mt-2">
                Mokṣa Sannyāsa Yoga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                Liberation through Renunciation.
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
