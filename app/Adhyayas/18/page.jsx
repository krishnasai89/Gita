"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  BookOpen,
  Heart,
  Anchor,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya18() {
  const container = useRef(null);
  const mapRef = useRef(null);

  const paths = [
    {
      id: "karma",
      title: "Karma Yoga",
      icon: <Anchor />,
      desc: "Acting without attachment to fruits.",
      verse: "18.46",
      color: "text-orange-500",
    },
    {
      id: "jnana",
      title: "Jñāna Yoga",
      icon: <BookOpen />,
      desc: "Discriminating between Self and Matter.",
      verse: "18.55",
      color: "text-emerald-500",
    },
    {
      id: "bhakti",
      title: "Bhakti Yoga",
      icon: <Heart />,
      desc: "Total devotion and love for the Supreme.",
      verse: "18.65",
      color: "text-rose-500",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 2, ease: "power4.out" }
    );

    // Animate Summary Map
    gsap.from(".path-card", {
      opacity: 1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 70%",
      },
    });

    // Final Verse Glow
    gsap.to(".final-verse", {
      textShadow: "0 0 20px rgba(245, 158, 11, 0.5)",
      duration: 2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-amber-500/30"
    >
      {/* 1. HERO SECTION: THE ULTIMATE CONCLUSION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya18.jpg"
            alt="Final Liberation"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-title text-amber-500 tracking-[1em] text-[10px] font-black uppercase mb-6">
            Adhyāya 18
          </p>
          <h1 className="hero-title text-6xl md:text-9xl font-serif text-stone-100 mb-8">
            Mokṣa <span className="text-amber-500 italic">Sannyāsa</span>
          </h1>
          <p className="hero-title text-stone-400 italic text-xl max-w-2xl mx-auto font-light">
            "The Yoga of Liberation through Renunciation—The Final Synthesis."
          </p>
        </div>
      </section>

      {/* 2. THE FIVE FACTORS OF ACTION (VERSE 18.14) */}
      <section className="py-32 px-6 border-y border-white/5 bg-stone-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-16">
            Understanding Action
          </h3>
          <h2 className="text-4xl font-serif text-stone-100 mb-12 italic">
            The 5 Factors of Every Accomplishment
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "The Body",
              "The Doer",
              "The Senses",
              "The Effort",
              "The Divine",
            ].map((factor, i) => (
              <div
                key={i}
                className="p-6 bg-stone-900 border border-white/5 rounded-xl"
              >
                <span className="text-amber-500/20 font-serif text-3xl block mb-2">
                  {i + 1}
                </span>
                <p className="text-stone-300 text-xs uppercase tracking-widest font-bold">
                  {factor}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-stone-500 text-sm italic max-w-2xl mx-auto">
            "Since these five are the causes, one who sees only himself as the
            sole doer, due to untrained intellect, does not truly see."
          </p>
        </div>
      </section>

      {/* 3. THE GITA SUMMARY MAP */}
      <section ref={mapRef} className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif text-stone-100 mb-6">
              The Converging{" "}
              <span className="text-amber-500 italic">Paths</span>
            </h2>
            <p className="text-stone-500 tracking-widest uppercase text-xs">
              All streams lead to the same ocean
            </p>
          </div>
          [Image showing the convergence of Karma Yoga, Jnana Yoga, and Bhakti
          Yoga into Prapatti (surrender)]
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {paths.map((path) => (
              <div
                key={path.id}
                className="path-card p-12 bg-stone-900/40 border border-white/5 rounded-[3rem] hover:bg-stone-900 transition-all flex flex-col items-center text-center group"
              >
                <div
                  className={`${path.color} mb-8 transform group-hover:scale-110 transition-transform duration-500`}
                >
                  {path.icon}
                </div>
                <h4 className="text-stone-100 font-serif text-3xl mb-4">
                  {path.title}
                </h4>
                <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
                  {path.desc}
                </p>
                <span className="mt-auto text-stone-600 font-mono text-xs tracking-widest">
                  {path.verse}
                </span>
              </div>
            ))}
          </div>
          {/* Central Connector Arrow to Final Secret */}
          <div className="flex justify-center py-20">
            <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* 4. THE ULTIMATE SECRET (VERSE 18.66) */}
      <section className="py-40 px-6 bg-amber-500/[0.03] relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ShieldCheck className="text-amber-500 mx-auto mb-12" size={48} />
          <h2 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-16">
            The Charama Shloka
          </h2>

          <p className="final-verse text-3xl md:text-5xl font-serif text-stone-100 leading-tight mb-12">
            "Abandon all varieties of religion and just surrender unto Me. I
            shall deliver you from all sinful reactions; do not fear."
          </p>

          <p className="text-stone-400 italic text-xl font-light">
            Sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja...
          </p>
          <div className="mt-12 w-20 h-px bg-amber-500/30 mx-auto" />
          <p className="mt-8 text-stone-600 text-xs font-bold tracking-widest uppercase">
            Verse 18.66
          </p>
        </div>

        {/* Divine Light Burst */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      </section>

      {/* 5. VERSE GRID (78 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">78 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                The Final Synthesis Index
              </p>
            </div>
            <Compass className="text-amber-900/20" size={40} />
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-13 gap-3">
            {Array.from({ length: 78 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/18/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group rounded-lg"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-lg">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONCLUSION: ITI GITA */}
      <section className="py-60 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-stone-600 text-[10px] font-black tracking-[0.6em] uppercase mb-8">
            The End of the Dialogue
          </h4>
          <p className="text-4xl md:text-6xl font-serif text-stone-100 mb-12">
            "Where there is Krishna and the master of archery, Arjuna, there
            will be prosperity, victory, and morality."
          </p>
          <p className="text-stone-500 italic mb-16">The Final Verse • 18.78</p>

          <Link
            href="/"
            className="inline-flex items-center gap-4 px-12 py-5 bg-amber-600 text-stone-950 font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-all rounded-full group"
          >
            Return to the Source
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
