"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya4() {
  const heroRef = useRef(null);
  const textRef = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    // 1. Hero Entrance - Subtle and Mystical
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 100, duration: 2, ease: "power2.inOut" }
    );
    tl.fromTo(
      textRef.current,
      { y: 30 },
      { y: 0, duration: 1, stagger: 0.3, ease: "power3.out" },
      "-=1"
    );

    // 2. The Avatara Reveal Logic
    gsap.from(".theory-card", {
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ".theory-grid",
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-purple-500/30"
    >
      {/* 1. HERO SECTION: THE ANCIENT TRUTH */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/adhyaya4.jpg"
            alt="The Descent of Knowledge"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Deep Purple and Indigo for Mystery */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-indigo-950/20 to-stone-950" />
        </div>

        <div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center z-10"
        >
          <div className="space-y-6 px-6">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-indigo-400 tracking-[0.6em] text-[10px] font-black uppercase"
            >
              Adhyāya 04
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-5xl md:text-8xl font-serif text-stone-100 leading-tight"
            >
              Jñāna Karma{" "}
              <span className="text-indigo-500 italic">Sannyāsa</span>
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-500 italic text-lg font-light max-w-xl mx-auto"
            >
              "When action is consumed by the fire of knowledge, the chains of
              destiny are broken."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE THREE REVELATIONS */}
      <section className="py-32 px-6 theory-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="theory-card p-12 bg-indigo-950/10 border border-indigo-500/10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-6xl font-serif text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors">
              01
            </div>
            <h3 className="text-indigo-400 font-serif text-2xl mb-6">
              The Eternal Lineage
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Krishna reveals that this wisdom is not new. He taught it millions
              of years ago to Vivasvan. It is the{" "}
              <span className="italic">Paramparā</span>—the unbroken chain of
              light passed down through ages.
            </p>
          </div>

          <div className="theory-card p-12 bg-indigo-950/10 border border-indigo-500/10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-6xl font-serif text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors">
              02
            </div>
            <h3 className="text-indigo-400 font-serif text-2xl mb-6">
              The Purpose of Avatāra
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Whenever righteousness decays and unrighteousness prevails, the
              Divine manifests. This is the famous promise of protection for the
              good and transformation for the world.
            </p>
          </div>

          <div className="theory-card p-12 bg-indigo-950/10 border border-indigo-500/10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 text-6xl font-serif text-indigo-500/5 group-hover:text-indigo-500/10 transition-colors">
              03
            </div>
            <h3 className="text-indigo-400 font-serif text-2xl mb-6">
              Knowledge as Fire
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Even if one is the "greatest of sinners," the boat of knowledge
              will carry them across the ocean of grief. Wisdom burns karma like
              a fire burns fuel to ashes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE "AVATARA" DECLARATION: VERSE 4.7-4.8 */}
      <section className="py-32 px-6 bg-indigo-950/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-500 font-serif text-2xl mb-8 leading-relaxed">
            यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |<br />
            अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||
          </p>
          <div className="w-12 h-px bg-indigo-500/30 mx-auto mb-8" />
          <p className="text-stone-300 text-xl md:text-2xl font-light italic leading-relaxed">
            "Whenever there is a decline in righteousness and an increase in
            unrighteousness, O Arjuna, then I manifest Myself."
          </p>
          <p className="mt-8 text-stone-600 text-[10px] tracking-[0.4em] uppercase font-bold">
            Adhyāya 04 • Verse 07
          </p>
        </div>
      </section>

      {/* 4. VERSE GRID (42 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="text-4xl font-serif text-stone-100 whitespace-nowrap">
              42 Shlokas
            </h2>
            <div className="w-full h-px bg-indigo-500/10" />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
            {Array.from({ length: 42 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/04/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-indigo-900/20 flex flex-col items-center justify-center hover:bg-indigo-500/10 hover:border-indigo-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-indigo-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAPTER TRANSITION */}
      <section className="py-32 text-center border-t border-white/5">
        <Link href="/Adhyayas/05" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block group-hover:text-indigo-500 transition-colors">
            Next Chapter
          </span>
          <h4 className="text-4xl font-serif text-stone-200 group-hover:text-indigo-400 transition-colors">
            Karma Sannyāsa Yoga →
          </h4>
          <p className="text-stone-600 italic text-sm mt-4">
            Merging Action into Inner Peace
          </p>
        </Link>
      </section>
    </main>
  );
}
