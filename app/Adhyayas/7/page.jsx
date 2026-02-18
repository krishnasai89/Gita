"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DevoteeCarousel from "@/app/components/DevoteeCarousel/DevoteeCarousel";
import dynamic from "next/dynamic";

const DivineResonanceCursor = dynamic(
  () => import("../../components/DevoteeCarousel/DevoteeCarousel"),
  {
    ssr: false,
    loading: () => <div className="opacity-0" />,
  },
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya7() {
  const container = useRef(null);
  const particleContainer = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    // 1. Particle Universe Animation
    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className =
        "absolute w-1 h-1 bg-emerald-500/30 rounded-full blur-[1px]";
      particleContainer.current.appendChild(p);
      particles.push(p);

      gsap.set(p, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(p, {
        x: "+=" + (Math.random() * 200 - 100),
        y: "+=" + (Math.random() * 200 - 100),
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // 2. Text Reveal
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 2, stagger: 0.3, ease: "expo.out" },
    );
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-emerald-500/30"
    >
      {/* 1. HERO SECTION: THE COSMIC SOURCE */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Particle Layer */}
        <div
          ref={particleContainer}
          className="absolute inset-0 z-0 opacity-60"
        />

        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/adhyaya7.jpg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-emerald-950/10 to-stone-950" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center z-10 px-6">
          <div className="space-y-6">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-emerald-500 tracking-[0.6em] text-[10px] font-black uppercase"
            >
              Adhyāya 07
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-6xl md:text-9xl font-serif text-stone-100"
            >
              Jñāna <span className="text-emerald-400 italic">Vijñāna</span>
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-500 italic text-xl max-w-2xl mx-auto font-light leading-relaxed"
            >
              "Earth, water, fire, air, space, mind, intellect, and ego—these
              are the eight-fold divisions of My nature."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 8 ELEMENTS OF NATURE (VERSE 7.4) */}
      <section className="py-32 px-6 border-y border-white/5 bg-emerald-950/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-amber-500 text-xs font-black tracking-[0.5em] uppercase mb-20">
            The Eight-Fold Prakriti
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Earth",
              "Water",
              "Fire",
              "Air",
              "Space",
              "Mind",
              "Intellect",
              "Ego",
            ].map((element, i) => (
              <div
                key={i}
                className="group border border-white/5 p-8 text-center hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all rounded-xl"
              >
                <span className="text-emerald-500/20 group-hover:text-emerald-500 transition-colors font-serif text-3xl block mb-2">
                  {i + 1}
                </span>
                <h3 className="text-stone-300 font-serif text-lg tracking-widest uppercase">
                  {element}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARA & APARA PRAKRITI (VERSE 7.5) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal-text">
            <h3 className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6">
              Matter & Spirit
            </h3>
            <h4 className="text-4xl font-serif text-stone-100 mb-8 leading-tight">
              Beyond the <span className="text-emerald-400">Physical</span>
            </h4>
            <p className="text-stone-400 leading-relaxed font-light text-lg">
              Krishna explains that the 8 elements are his "lower" nature
              (*Apara Prakriti*). But there is a "higher" nature (*Para
              Prakriti*)—the life-force that sustains the entire universe.
            </p>
          </div>

          <div className="relative p-10 bg-stone-900/40 border border-white/5 rounded-2xl italic font-serif text-stone-300 leading-relaxed">
            <div className="text-amber-500/20 absolute -top-10 -left-4 text-9xl">
              "
            </div>
            "As a row of pearls is strung on a thread, so is all that exists
            centered in Me, O Arjuna. I am the taste in water; I am the light in
            the sun and the moon."
            <p className="mt-8 text-emerald-600 text-[10px] tracking-[0.4em] uppercase font-bold text-right">
              Verse 7.07-08
            </p>
          </div>
        </div>
      </section>
      <DevoteeCarousel />

      {/* 4. VERSE NAVIGATOR (30 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">30 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
              Knowledge & Realization Index
            </p>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-3">
            {Array.from({ length: 30 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/07/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-emerald-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5">
        <Link href="/Adhyayas/08" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block">
            To the Eternal Beyond
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-emerald-500 transition-colors">
            Adhyāya 08: Akṣara Brahma Yoga →
          </h4>
          <p className="text-stone-700 italic mt-2">
            The path to the Imperishable Truth.
          </p>
        </Link>
      </section>
    </main>
  );
}
