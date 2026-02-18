"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leaf, Flower, Apple, Droplets, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya9() {
  const container = useRef(null);
  const offeringRef = useRef(null);

  useEffect(() => {
    // 1. Offering Animation (Patram Pushpam)
    const elements = gsap.utils.toArray(".offering-icon");

    gsap.fromTo(
      elements,
      { y: 50, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: offeringRef.current,
          start: "top 70%",
        },
      }
    );

    // Floating effect for offering items
    elements.forEach((el, i) => {
      gsap.to(el, {
        y: "-=15",
        duration: 2 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // 2. Hero Reveal
    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-purple-500/30"
    >
      {/* 1. HERO SECTION: THE SOVEREIGN SECRET */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya9.jpg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-purple-950/20 to-stone-950" />
        </div>

        <div className="hero-content relative h-full flex items-center justify-center text-center z-10 px-6">
          <div className="space-y-6">
            <p className="text-amber-500 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 09
            </p>
            <h1 className="text-6xl md:text-9xl font-serif text-stone-100">
              Rāja <span className="text-purple-500 italic">Vidyā</span>
            </h1>
            <p className="text-stone-500 italic text-xl max-w-2xl mx-auto font-light leading-relaxed">
              "The King of Sciences, the King of Secrets, the Supreme Purifier."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE SOVEREIGN SCIENCE (VERSE 9.2) */}
      <section className="py-32 px-6 border-y border-white/5 bg-purple-950/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Direct Experience
          </h2>
          <p className="text-3xl font-serif text-stone-200 leading-relaxed italic mb-8">
            "It is realized by direct perception, endowed with merit, very easy
            to perform, and imperishable."
          </p>
          <div className="w-20 h-px bg-purple-500/30 mx-auto" />
        </div>
      </section>

      {/* 3. DIVINE OFFERING ANIMATION (VERSE 9.26) */}
      <section ref={offeringRef} className="py-32 px-6 bg-stone-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-stone-500 text-xs font-bold tracking-[0.4em] uppercase mb-16">
            The Simplicity of Devotion
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="offering-icon flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <Leaf size={40} />
              </div>
              <span className="text-stone-400 font-serif italic text-lg">
                Patram (Leaf)
              </span>
            </div>
            <div className="offering-icon flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.1)]">
                <Flower size={40} />
              </div>
              <span className="text-stone-400 font-serif italic text-lg">
                Puṣpam (Flower)
              </span>
            </div>
            <div className="offering-icon flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                <Apple size={40} />
              </div>
              <span className="text-stone-400 font-serif italic text-lg">
                Phalam (Fruit)
              </span>
            </div>
            <div className="offering-icon flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <Droplets size={40} />
              </div>
              <span className="text-stone-400 font-serif italic text-lg">
                Toyam (Water)
              </span>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-serif text-stone-200 max-w-3xl mx-auto leading-relaxed italic">
            "If one offers Me with love and devotion a leaf, a flower, a fruit,
            or water, I will accept it."
          </p>
          <p className="mt-8 text-purple-500 text-[10px] tracking-[0.5em] uppercase font-bold">
            Verse 9.26
          </p>
        </div>
      </section>

      {/* 4. THE ALL-ENCOMPASSING DIVINE (VERSE 9.16-19) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h4 className="text-purple-500 font-serif text-4xl leading-tight">
                I am the Ritual, the Sacrifice, and the Chant.
              </h4>
              <p className="text-stone-400 text-lg font-light leading-relaxed">
                Krishna explains His omnipresence. He is the Father, the Mother,
                the Supporter, and the Grandsire. He is the syllable{" "}
                <span className="text-amber-500">Om</span> and the three Vedas.
              </p>
            </div>
            <div className="p-12 bg-purple-950/10 border border-purple-500/10 rounded-3xl relative overflow-hidden group">
              <Sparkles className="absolute -top-4 -right-4 w-24 h-24 text-purple-500/10 group-hover:scale-125 transition-transform duration-1000" />
              <p className="text-stone-300 italic text-xl leading-relaxed relative z-10">
                "I am the Goal, the Supporter, the Lord, the Witness, the Abode,
                the Shelter, the Friend, the Origin, the Dissolution, the
                Foundation, and the Imperishable Seed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERSE GRID (34 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">34 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                The Sovereign Secret Index
              </p>
            </div>
            <span className="text-purple-500/20 text-8xl font-black select-none leading-none">
              09
            </span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
            {Array.from({ length: 34 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/09/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-purple-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-purple-950/10">
        <Link href="/Adhyayas/10" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block">
            To the Infinite Opulence
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-amber-500 transition-colors">
            Adhyāya 10: Vibhūti Yoga →
          </h4>
          <p className="text-stone-700 italic mt-2">
            The Divine Manifestations in the Universe.
          </p>
        </Link>
      </section>
    </main>
  );
}
