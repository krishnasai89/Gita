"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya5() {
  const heroRef = useRef(null);
  const textRef = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    // 1. Hero Entrance - Calm and fluid
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "sine.inOut" }
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power2.out" },
      "-=1.2"
    );

    // 2. Parallax effect for the Lotus Symbol
    gsap.to(".lotus-bg", {
      y: -50,
      scrollTrigger: {
        trigger: ".lotus-section",
        scrub: true,
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-teal-500/30"
    >
      {/* 1. HERO SECTION: THE EQUANIMITY OF THE SOUL */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/adhyaya5.jpg"
            alt="The Meditative Mind"
            className="w-full h-full object-cover opacity-20"
          />
          {/* Teal and Slate Gradient for Serenity */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-teal-950/20 to-stone-950" />
        </div>

        <div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center z-10"
        >
          <div className="space-y-6 px-6">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-teal-500 tracking-[0.6em] text-[10px] font-black uppercase"
            >
              Adhyāya 05
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-5xl md:text-8xl font-serif text-stone-100 leading-tight"
            >
              Karma <span className="text-teal-600 italic">Sannyāsa</span>
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-400 italic text-xl font-light max-w-xl mx-auto"
            >
              "The sage who sees with an equal eye is forever free."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE ANALOGY: THE LOTUS LEAF (VERSE 5.10) */}
      <section className="py-32 px-6 lotus-section overflow-hidden border-y border-white/5 bg-stone-900/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="lotus-bg absolute -inset-10 bg-teal-500/5 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-8 relative z-10 leading-tight">
              Like a <span className="text-teal-500 italic">Lotus Leaf</span> on
              Water
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-8 relative z-10">
              Krishna uses the most beautiful analogy in the Gita here: Just as
              a lotus leaf stays in the water but is never wetted by it, the
              seeker remains in the world but is never touched by sin or
              attachment.
            </p>
            <div className="p-6 border-l-2 border-teal-500 bg-teal-500/5 relative z-10">
              <p className="text-stone-200 font-serif italic text-lg">
                "Perform your duty, but leave the result to the Divine. This is
                the secret of peace."
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/lotus-symbol.png"
              alt="Lotus leaf analogy"
              className="w-full opacity-40 hover:opacity-60 transition-opacity duration-1000"
            />
          </div>
        </div>
      </section>

      {/* 3. KEY PILLARS: THE EQUAL EYE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="group p-12 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-teal-500/30 transition-all">
            <h3 className="text-teal-500 font-serif text-2xl mb-6">
              Equal Vision (Sama-Darshana)
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              A realized soul looks with an equal eye upon a learned Brahmin, a
              cow, an elephant, a dog, and even an outcast. This is the ultimate
              test of spiritual maturity.
            </p>
            <span className="text-[10px] text-stone-600 font-bold uppercase tracking-widest">
              Verse 5.18
            </span>
          </div>

          <div className="group p-12 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-teal-500/30 transition-all">
            <h3 className="text-teal-500 font-serif text-2xl mb-6">
              Internal Renunciation
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              True Sannyāsa is not about leaving the forest; it is about leaving
              the "I-am-the-doer" attitude. One who neither hates nor desires is
              a perpetual Sannyāsi.
            </p>
            <span className="text-[10px] text-stone-600 font-bold uppercase tracking-widest">
              Verse 5.03
            </span>
          </div>
        </div>
      </section>

      {/* 4. VERSE NAVIGATOR (29 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl font-serif text-stone-100 mb-4">
              29 Verses of Serenity
            </h2>
            <div className="w-24 h-px bg-teal-500/50 mx-auto" />
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-4 justify-center">
            {Array.from({ length: 29 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/05/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-teal-500/10 hover:border-teal-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-teal-500 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER LINK */}
      <section className="py-32 text-center bg-teal-950/5">
        <Link
          href="/Adhyayas/06"
          className="group inline-flex flex-col items-center"
        >
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4">
            Deepening the Mind
          </span>
          <h4 className="text-4xl font-serif text-stone-400 group-hover:text-teal-500 transition-colors">
            Adhyāya 06: Dhyāna Yoga →
          </h4>
          <p className="text-stone-600 italic mt-2">
            The path of silent meditation.
          </p>
        </Link>
      </section>
    </main>
  );
}
