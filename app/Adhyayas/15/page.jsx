"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  TreePine,
  Sun,
  Moon,
  Flame,
  Heart,
  ArrowRight,
  ArrowLeft,
  Wind,
  Leaf,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya15() {
  const container = useRef(null);
  const treeRef = useRef(null);
  const [leaves, setLeaves] = useState([]);

  // Hydration-safe falling leaves
  useEffect(() => {
    setLeaves(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        scale: Math.random() * 0.5 + 0.5,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-reveal",
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

      // 2. The Inverted Tree Drawing Animation
      const treeTl = gsap.timeline({
        scrollTrigger: {
          trigger: treeRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1,
        },
      });

      treeTl
        .to(".tree-root-path", {
          strokeDashoffset: 0,
          duration: 2,
          ease: "none",
        })
        .to(
          ".tree-branch-path",
          { strokeDashoffset: 0, duration: 2, stagger: 0.2, ease: "none" },
          "-=1",
        )
        .to(
          ".tree-energy-node",
          { opacity: 1, scale: 1.5, duration: 1, stagger: 0.1 },
          "-=1",
        );

      // 3. Hierarchy Pillars Stagger
      gsap.from(".hierarchy-pillar", {
        opacity: 1,
        y: 50,
        duration: 1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".hierarchy-section",
          start: "top 75%",
        },
      });

      // 4. Verse Grid
      gsap.fromTo(
        ".verse-seed",
        { opacity: 0, scale: 0.5, y: -20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: { each: 0.05, from: "random" },
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".verse-grid", start: "top 80%" },
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#050402] min-h-screen selection:bg-amber-500/30 overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION: THE SUPREME PERSON */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.15)_0%,transparent_70%)]" />

          {/* Falling Golden Leaves */}
          {leaves.map((l) => (
            <div
              key={l.id}
              className="absolute text-amber-500/20 animate-[fallDown_linear_infinite]"
              style={{
                left: l.left,
                top: "-5%",
                transform: `scale(${l.scale})`,
                animationDelay: `${l.delay}s`,
                animationDuration: `${l.duration}s`,
              }}
            >
              <Leaf fill="currentColor" />
            </div>
          ))}

          <img
            src="/images/adhyaya1.jpg"
            alt="Cosmic Tree"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050402]/60 via-transparent to-[#050402]" />
        </div>

        <div className="hero-reveal relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-500/40" />
            <TreePine size={16} className="text-amber-500/80" />
            <span className="text-amber-500 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 15
            </span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>

          <h1 className="text-6xl md:text-[9rem] font-serif text-white mb-6 relative drop-shadow-2xl">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-amber-500/10 text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              पुरुषोत्तमयोग
            </span>
            Puruṣottama <span className="italic text-amber-500">Yoga</span>
          </h1>

          <p className="text-stone-400 text-xl md:text-3xl font-light italic tracking-widest leading-relaxed">
            "They speak of an eternal Aśvattha tree with its roots above and its
            branches below..."
          </p>
        </div>
      </section>

      {/* 2. THE INVERTED BANYAN TREE (VERSES 15.1-3) */}
      <section
        ref={treeRef}
        className="py-40 px-6 relative bg-gradient-to-b from-[#050402] to-[#0a0804] border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: The SVG Tree Drawing */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center h-[600px]">
            <div className="absolute inset-0 bg-amber-500/5 rounded-full blur-[100px]" />
            <svg
              viewBox="0 0 400 600"
              fill="none"
              className="w-full max-w-[400px] h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.3)] relative z-10"
            >
              {/* Spiritual Root (Top) */}
              <circle
                cx="200"
                cy="50"
                r="30"
                className="fill-amber-500/20 stroke-amber-500/60"
                strokeWidth="2"
              />
              <circle
                cx="200"
                cy="50"
                r="10"
                className="fill-amber-400 animate-pulse"
              />

              {/* Main Trunk */}
              <path
                d="M200 80 L200 550"
                className="tree-root-path stroke-amber-600/80"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="500"
                strokeDashoffset="500"
              />

              {/* Branches branching downwards */}
              {[150, 250, 350, 450].map((y, i) => {
                const width = 120 - i * 20; // Branches get shorter as they go down
                return (
                  <g key={i}>
                    {/* Left Branch */}
                    <path
                      d={`M200 ${y} Q${200 - width / 2} ${y + 30} ${200 - width} ${y + 80}`}
                      className="tree-branch-path stroke-amber-700/80"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                    />
                    <circle
                      cx={200 - width}
                      cy={y + 80}
                      r="4"
                      className="tree-energy-node fill-emerald-500 opacity-0"
                    />

                    {/* Right Branch */}
                    <path
                      d={`M200 ${y} Q${200 + width / 2} ${y + 30} ${200 + width} ${y + 80}`}
                      className="tree-branch-path stroke-amber-700/80"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="200"
                      strokeDashoffset="200"
                    />
                    <circle
                      cx={200 + width}
                      cy={y + 80}
                      r="4"
                      className="tree-energy-node fill-emerald-500 opacity-0"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* RIGHT: The Metaphor */}
          <div className="order-1 lg:order-2 space-y-10 relative z-10">
            <div>
              <h3 className="text-amber-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
                The Metaphor of Saṃsāra
              </h3>
              <h2 className="text-5xl font-serif text-white leading-tight">
                Cut down this tree with the <br />
                <span className="text-amber-500 italic">Axe of Detachment</span>
                .
              </h2>
            </div>

            <p className="text-stone-400 text-xl leading-relaxed font-light">
              The roots are high up in the Supreme (Brahman), and the branches
              (human activities and senses) reach down into the material world.
              Its leaves are the Vedic hymns.
            </p>

            <div className="p-8 border-l-2 border-amber-500 bg-amber-950/20 backdrop-blur-md">
              <p className="text-stone-200 font-serif italic text-2xl">
                "To go beyond the cycle of birth, one must cut this deep-rooted
                tree of attachment with the strong weapon of detachment."
              </p>
              <span className="block mt-6 text-amber-500/60 text-[10px] uppercase font-bold tracking-widest">
                Verse 15.03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEYOND LIGHT: THE SUPREME ABODE (VERSE 15.6) */}
      <section className="py-40 px-6 bg-[#020202] relative overflow-hidden">
        {/* Supreme Abode Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-12 mb-16 text-white/20">
            <Sun size={48} />
            <div className="w-px h-12 bg-white/10" />
            <Moon size={48} />
            <div className="w-px h-12 bg-white/10" />
            <Flame size={48} />
          </div>
          <h2 className="text-white/40 text-[10px] font-black tracking-[0.6em] uppercase mb-8">
            The Self-Luminous Goal
          </h2>
          <p className="text-4xl md:text-6xl font-serif text-white leading-snug italic mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            "The sun does not illuminate it, nor the moon, nor fire. That is My
            Supreme Abode, reaching which they do not return."
          </p>
          <div className="w-24 h-px bg-white/20 mx-auto" />
        </div>
      </section>

      {/* 4. THE TRINITY OF BEING (VERSES 15.16-18) */}
      <section className="py-40 px-6 hierarchy-section bg-[#050402]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-amber-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              The Hierarchy of Existence
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">
              Kshara, Akshara, and the Supreme
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kshara",
                sub: "The Perishable",
                desc: "All living beings and material forms that change, decay, and ultimately die in the material world.",
                color: "text-emerald-400",
                bg: "bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30",
              },
              {
                title: "Akshara",
                sub: "The Imperishable",
                desc: "The unchangeable, silent spiritual soul (Jiva) that sits as a witness within all beings.",
                color: "text-blue-400",
                bg: "bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/30",
              },
              {
                title: "Puruṣottama",
                sub: "The Supreme Person",
                desc: "Higher than both the perishable body and the imperishable soul. The sustainer of the three worlds.",
                color: "text-amber-400",
                bg: "bg-amber-500/5 hover:bg-amber-500/10 hover:border-amber-500/50",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`hierarchy-pillar p-12 backdrop-blur-xl border border-white/5 rounded-[2.5rem] transition-all duration-500 flex flex-col items-center text-center group hover:-translate-y-4 ${item.bg}`}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform ${item.color}`}
                >
                  {i === 0 ? <Wind /> : i === 1 ? <Sparkles /> : <Sun />}
                </div>
                <h4 className={`font-serif text-3xl mb-2 ${item.color}`}>
                  {item.title}
                </h4>
                <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-black mb-6">
                  {item.sub}
                </p>
                <p className="text-stone-400 text-base leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERSE MATRIX: THE SEEDS (20 SHLOKAS) */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#030201] verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                20 Seeds of Truth
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                The essence of the Vedas contained in twenty verses.
              </p>
            </div>
            <div className="text-amber-600/10 text-[12rem] font-black select-none leading-none">
              15
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter15/verse${i + 1}`}
                className="verse-seed relative aspect-square bg-[#0a0804]/80 backdrop-blur-md border border-amber-900/30 rounded-[2rem] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-amber-950/40 hover:border-amber-500/60 hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.4)] group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-stone-500 group-hover:text-amber-100 font-serif text-2xl relative z-10 transition-colors duration-500">
                  {i + 1}
                </span>
                <span className="absolute bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-[8px] tracking-[0.3em] text-amber-400 uppercase font-black transition-all duration-500">
                  Seed
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER FOOTER */}
      <footer className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#030201] to-[#0a0505] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-amber-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/14"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Three Threads
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Guṇatraya Vibhāga
              </span>
            </Link>

            <Link
              href="/Adhyayas/16"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-red-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-red-500/80">
                Face the Duality
              </span>
              <span className="font-serif italic text-3xl md:text-4xl text-white group-hover:text-red-400 transition-colors duration-700 mt-2">
                Daivāsura Sampad Vibhāga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                The Divine and Demoniac Natures.
              </span>
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
