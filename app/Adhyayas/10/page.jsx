"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sun,
  Mountain,
  Zap,
  Crown,
  Waves,
  Flame,
  Wind,
  Star,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya10() {
  const container = useRef(null);
  const mosaicRef = useRef(null);

  const manifestations = [
    {
      icon: <Sun size={32} />,
      title: "The Sun",
      category: "Among Lights",
      verse: "10.21",
    },
    {
      icon: <Mountain size={32} />,
      title: "Meru",
      category: "Among Mountains",
      verse: "10.23",
    },
    {
      icon: <Zap size={32} />,
      title: "The Thunderbolt",
      category: "Among Weapons",
      verse: "10.28",
    },
    {
      icon: <Crown size={32} />,
      title: "The Monarch",
      category: "Among Men",
      verse: "10.27",
    },
    {
      icon: <Waves size={32} />,
      title: "The Ocean",
      category: "Among Waters",
      verse: "10.24",
    },
    {
      icon: <Flame size={32} />,
      title: "Fire",
      category: "Among Vasus",
      verse: "10.23",
    },
    {
      icon: <Wind size={32} />,
      title: "The Wind",
      category: "Among Purifiers",
      verse: "10.31",
    },
    {
      icon: <Star size={32} />,
      title: "The Moon",
      category: "Among Stars",
      verse: "10.21",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power4.out" }
    );

    gsap.from(".mosaic-item", {
      scale: 0.8,
      y: 30,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: mosaicRef.current,
        start: "top 75%",
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-amber-500/30"
    >
      {/* 1. HERO SECTION: THE INFINITE OPULENCE */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya10.jpg"
            alt="Divine Radiance"
            className="w-full h-full object-cover opacity-20 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-amber-950/10 to-stone-950" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center z-10 px-6">
          <div className="space-y-6">
            <p className="hero-text text-amber-500 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 10
            </p>
            <h1 className="hero-text text-6xl md:text-9xl font-serif text-stone-100">
              Vibhūti <span className="text-amber-500 italic">Yoga</span>
            </h1>
            <p className="hero-text text-stone-500 italic text-xl max-w-2xl mx-auto font-light leading-relaxed">
              "I am the beginning, the middle, and also the end of all beings."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY OF VIBHUTI */}
      <section className="py-32 px-6 border-y border-white/5 bg-stone-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-amber-600 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Glimpse of Greatness
          </h2>
          <p className="text-3xl font-serif text-stone-200 leading-relaxed italic mb-8">
            "Wherever you see glory, beauty, or power, know that it springs from
            but a spark of My splendor."
          </p>
          <div className="w-20 h-px bg-amber-500/30 mx-auto" />
          <p className="mt-8 text-stone-500 text-sm">Verse 10.41</p>
        </div>
      </section>

      {/* 3. THE MAJESTY MOSAIC */}
      <section ref={mosaicRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-stone-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
              Divine Manifestations
            </h3>
            <h2 className="text-4xl font-serif text-stone-100 italic">
              "I am the best of all categories..."
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {manifestations.map((item, i) => (
              <div
                key={i}
                className="mosaic-item group p-10 bg-stone-900/40 border border-white/5 rounded-2xl hover:border-amber-500/40 transition-all flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-stone-200 font-serif text-xl mb-1">
                  {item.title}
                </h4>
                <p className="text-amber-600 text-[9px] uppercase tracking-widest font-bold mb-4">
                  {item.category}
                </p>
                <span className="text-stone-700 text-[10px] font-mono">
                  {item.verse}
                </span>

                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FOUR SEED VERSES (CHATUR-SHLOKI) */}
      <section className="py-32 px-6 bg-amber-500/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6">
              Chatur-Shlokī
            </h3>
            <h4 className="text-4xl font-serif text-stone-100 mb-8 leading-tight">
              The Four <span className="text-amber-500 italic">Essences</span>
            </h4>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              Verses 8 through 11 are known as the "Chatur-Shloki Gita"—the
              entire Gita in just four verses. They describe the origin of all,
              the nature of true devotion, and how God removes the darkness of
              ignorance from the heart.
            </p>
          </div>
          <div className="p-10 bg-stone-900/60 border border-amber-500/20 rounded-3xl">
            <p className="text-amber-500/80 font-serif italic text-2xl leading-relaxed">
              "To them, out of compassion, I, dwelling in their hearts, destroy
              the darkness born of ignorance by the luminous lamp of wisdom."
            </p>
            <p className="mt-8 text-stone-600 text-[10px] tracking-[0.4em] uppercase font-bold text-right">
              Verse 10.11
            </p>
          </div>
        </div>
      </section>

      {/* 5. VERSE GRID (42 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">42 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                The Divine Opulence Index
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
            {Array.from({ length: 42 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/10/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER: THE CLIMAX */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-amber-950/20">
        <Link href="/Adhyayas/11" className="group">
          <span className="text-amber-600 text-xs uppercase tracking-[0.6em] mb-4 block animate-pulse">
            The Grand Transformation
          </span>
          <h4 className="text-5xl md:text-7xl font-serif text-stone-200 group-hover:text-amber-400 transition-all duration-700">
            Adhyāya 11: Viśvarūpa Darśana Yoga →
          </h4>
          <p className="text-stone-600 italic mt-6 text-xl">
            Behold the Universal Form.
          </p>
        </Link>
      </section>
    </main>
  );
}
