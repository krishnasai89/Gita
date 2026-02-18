"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TreePine, Sun, Moon, Flame, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya15() {
  const container = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    // 1. Inverted Tree Animation (Breathing Roots)
    gsap.to(".tree-root", {
      strokeDashoffset: 0,
      duration: 3,
      stagger: 0.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: treeRef.current,
        start: "top 60%",
      },
    });

    gsap.to(".tree-leaf", {
      opacity: 0.6,
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: "sine.inOut",
    });

    // 2. Hero Entrance
    gsap.from(".hero-content", {
      opacity: 0,
      scale: 1.1,
      duration: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-amber-500/30"
    >
      {/* 1. HERO SECTION: THE SUPREME PERSON */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya15.jpg"
            alt="Cosmic Tree"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-amber-950/10 to-stone-950" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <p className="text-amber-600 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 15
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-stone-100 mb-8">
            Puruṣottama <span className="text-amber-500 italic">Yoga</span>
          </h1>
          <p className="text-stone-400 italic text-xl max-w-xl mx-auto font-light leading-relaxed">
            "They speak of an eternal Aśvattha tree with its roots above and its
            branches below..."
          </p>
        </div>
      </section>

      {/* 2. THE INVERTED BANYAN TREE (VERSE 15.1-3) */}
      <section
        ref={treeRef}
        className="py-32 px-6 relative overflow-hidden bg-stone-900/20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/*  */}
            <svg
              width="400"
              height="500"
              viewBox="0 0 400 600"
              fill="none"
              className="drop-shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              {/* Heaven (Roots Top) */}
              <circle
                cx="200"
                cy="50"
                r="40"
                className="fill-amber-500/10 stroke-amber-500/40"
                strokeWidth="1"
              />
              <path
                d="M200 90 L200 450"
                className="tree-root stroke-amber-600"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="500"
                strokeDashoffset="500"
              />

              {/* Branches (Staggered Down) */}
              {[150, 250, 350].map((y, i) => (
                <g key={i}>
                  <path
                    d={`M200 ${y} Q${100 - i * 20} ${y + 50} 50 ${y + 100}`}
                    className="tree-root stroke-amber-700/60"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                  />
                  <path
                    d={`M200 ${y} Q${300 + i * 20} ${y + 50} 350 ${y + 100}`}
                    className="tree-root stroke-amber-700/60"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeDashoffset="300"
                  />
                  <circle
                    cx="50"
                    cy={y + 100}
                    r="4"
                    className="tree-leaf fill-amber-500 opacity-0"
                  />
                  <circle
                    cx="350"
                    cy={y + 100}
                    r="4"
                    className="tree-leaf fill-amber-500 opacity-0"
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase">
              The Metaphor of Saṃsāra
            </h3>
            <h2 className="text-4xl font-serif text-stone-100 leading-tight">
              Cut down this tree with the{" "}
              <span className="text-amber-500 italic">Axe of Detachment</span>.
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              The roots are high up in Brahman, and the branches (human
              activities and senses) reach down. Its leaves are the Vedic hymns.
              One who knows this tree knows the Vedas. To go beyond the cycle of
              birth, one must cut this tree of attachment with the strong axe of
              non-attachment.
            </p>
            <div className="flex gap-6 mt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500">
                  <Sun size={20} />
                </div>
                <span className="text-[9px] uppercase tracking-tighter text-stone-600">
                  Spirit Roots
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-stone-500">
                  <TreePine size={20} />
                </div>
                <span className="text-[9px] uppercase tracking-tighter text-stone-600">
                  Matter Branches
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEYOND LIGHT: THE SUPREME ABODE (VERSE 15.6) */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-12 opacity-40">
            <Sun size={32} /> <Moon size={32} /> <Flame size={32} />
          </div>
          <p className="text-2xl md:text-3xl font-serif text-stone-200 leading-relaxed italic mb-8">
            "The sun does not illuminate it, nor the moon, nor fire. That is My
            Supreme Abode, reaching which they do not return."
          </p>
          <div className="w-20 h-px bg-amber-500/30 mx-auto mb-8" />
          <p className="text-amber-600 text-[10px] font-black tracking-[0.4em] uppercase">
            The Self-Luminous Goal
          </p>
        </div>
      </section>

      {/* 4. THE THREE ASPECTS: KSHARA, AKSHARA, PURUSHOTTAMA (VERSE 15.16-18) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-20">
            The Hierarchy of Being
          </h3>
          {/*  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kshara",
                sub: "The Perishable",
                desc: "All living beings and material forms that change and decay.",
              },
              {
                title: "Akshara",
                sub: "The Imperishable",
                desc: "The unchangeable, silent witness within all beings.",
              },
              {
                title: "Purushottama",
                sub: "The Supreme Person",
                desc: "Higher than both, the sustainer of the three worlds.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all text-center"
              >
                <h4 className="text-amber-500 font-serif text-2xl mb-2">
                  {item.title}
                </h4>
                <p className="text-[10px] text-stone-600 uppercase tracking-widest font-bold mb-6">
                  {item.sub}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERSE GRID (20 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">20 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                The Supreme Person Index
              </p>
            </div>
            <Heart className="text-amber-900/40" size={40} />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/15/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group rounded-xl"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-amber-950/20">
        <Link href="/Adhyayas/16" className="group">
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4 block">
            The Divine & The Demoniac
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-amber-500 transition-colors">
            Adhyāya 16: Daivāsura Sampad Vibhāga Yoga →
          </h4>
        </Link>
      </section>
    </main>
  );
}
