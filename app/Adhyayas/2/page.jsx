"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Adhyaya2() {
  const heroRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    // Dawn of Wisdom Entrance
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );
    tl.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );
  }, []);

  return (
    <main className="bg-stone-950 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <img
            src="/images/adhyaya2.jpg"
            className="w-full h-full object-cover opacity-30"
          /> */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/10 to-stone-950" />
        </div>

        <div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center z-10"
        >
          <div className="space-y-6 px-6">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-amber-400 tracking-[0.5em] text-xs font-bold uppercase"
            >
              Adhyāya 02
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-5xl md:text-7xl font-serif text-stone-100"
            >
              Sāṅkhya <span className="text-amber-500">Yoga</span>
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-400 italic text-xl font-light"
            >
              "The Yoga of Analytical Knowledge"
            </p>
          </div>
        </div>
      </section>

      {/* THE THREE PILLARS OF CHAPTER 2 */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. IMMORTALITY OF SOUL */}
            <div className="pillar-card p-10 bg-stone-900/30 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all">
              <h3 className="text-amber-500 font-serif text-2xl mb-4">
                The Soul (Atman)
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Krishna teaches that the soul is never born and never dies.
                Weapons cannot cut it, fire cannot burn it. It only changes
                bodies like one changes clothes.
              </p>
              <div className="mt-6 text-[10px] text-stone-600 uppercase tracking-widest">
                Verses 2.11 - 2.30
              </div>
            </div>

            {/* 2. KARMA YOGA */}
            <div className="pillar-card p-10 bg-stone-900/30 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all">
              <h3 className="text-amber-500 font-serif text-2xl mb-4">
                Right Action
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                "You have a right to perform your prescribed duties, but you are
                not entitled to the fruits of your actions." This is the core of
                Karma Yoga.
              </p>
              <div className="mt-6 text-[10px] text-stone-600 uppercase tracking-widest">
                Verses 2.47 - 2.53
              </div>
            </div>

            {/* 3. STITHAPRAGYA */}
            <div className="pillar-card p-10 bg-stone-900/30 border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all">
              <h3 className="text-amber-500 font-serif text-2xl mb-4">
                The Steady Mind
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                The description of a person of "Steady Wisdom"—one who is
                unshakeable in both pleasure and pain, success and defeat.
              </p>
              <div className="mt-6 text-[10px] text-stone-600 uppercase tracking-widest">
                Verses 2.54 - 2.72
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERSE NAVIGATOR (72 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100 mb-2">
              72 Shlokas of Wisdom
            </h2>
            <p className="text-stone-500 text-sm uppercase tracking-widest">
              The complete summary of spiritual science
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
            {Array.from({ length: 72 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/02/verse/${i + 1}`}
                className="aspect-square bg-stone-900/40 border border-white/5 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 text-center">
        <Link
          href="/Adhyayas/03"
          className="text-stone-500 hover:text-amber-500 transition-colors uppercase tracking-[0.6em] text-xs font-bold"
        >
          Proceed to Karma Yoga →
        </Link>
        <br />
        <Link
          href="/Adhyayas/01"
          className="text-stone-500 hover:text-amber-500 transition-colors uppercase tracking-[0.6em] text-xs font-bold"
        >
          ← previous to Arjuna Viṣāda Yoga
        </Link>
      </section>
    </main>
  );
}
