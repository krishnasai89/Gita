"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya3() {
  const heroRef = useRef(null);
  const textRef = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    // 1. Hero Entrance - Dynamic and Rising
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { y: 30 },
      { y: 0, duration: 1.2, ease: "power4.out" }
    );
    tl.fromTo(
      textRef.current,
      { x: -30 },
      { x: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      "-=0.8"
    );

    // 2. Cycle of Action - Staggered reveal
    gsap.from(".action-step", {
      y: 40,
      duration: 1,
      scrollTrigger: {
        trigger: ".action-grid",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-orange-500/30"
    >
      {/* 1. HERO SECTION: THE PATH OF ACTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/adhyaya3.jpg"
            alt="The Wheel of Karma"
            className="w-full h-full object-cover opacity-30 scale-110"
          />
          {/* Earthy, fiery gradient for the 'Fire of Action' */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-orange-950/20 to-stone-950" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.4em] text-orange-400/70 uppercase font-bold">
            Duty
          </span>
        </div>

        <div
          ref={heroRef}
          className="relative h-screen flex items-center justify-center text-center z-10"
        >
          <div className="space-y-6 px-6">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className="text-orange-500 tracking-[0.5em] text-xs font-black uppercase"
            >
              Adhyāya 03
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-5xl md:text-8xl font-serif text-stone-100 leading-tight"
            >
              Karma <span className="italic text-orange-600">Yoga</span>
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-400 italic text-xl font-light max-w-2xl mx-auto"
            >
              "The secret of turning every movement into a sacred offering."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS OF ACTION */}
      <section className="py-32 px-6 grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="action-step p-10 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group">
            <div className="text-orange-600 font-serif text-5xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
              01
            </div>
            <h3 className="text-stone-100 font-serif text-2xl mb-4 uppercase tracking-tighter">
              The Compulsion
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              No one can remain inactive for even a moment. Nature (Prakriti)
              forces all beings to move. The true freedom is not in stopping
              action, but in choosing the{" "}
              <span className="text-orange-500">intent</span> behind it.
            </p>
          </div>

          <div className="action-step p-10 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group">
            <div className="text-orange-600 font-serif text-5xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
              02
            </div>
            <h3 className="text-stone-100 font-serif text-2xl mb-4 uppercase tracking-tighter">
              Loka-Saṅgraha
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              The leaders of society must act. Even Krishna, who has nothing to
              gain in the three worlds, continues to work to set an example for
              others. Action is for the{" "}
              <span className="text-orange-500">welfare of the world</span>.
            </p>
          </div>

          <div className="action-step p-10 bg-stone-900/40 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all group">
            <div className="text-orange-600 font-serif text-5xl mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
              03
            </div>
            <h3 className="text-stone-100 font-serif text-2xl mb-4 uppercase tracking-tighter">
              Work as Sacrifice
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed font-light">
              Yajña. When work is performed for the self, it binds you. When
              work is performed as a contribution to the whole, it{" "}
              <span className="text-orange-500">liberates</span> you.
            </p>
          </div>
        </div>
      </section>

      {/* 3. KEY PHILOSOPHICAL QUOTE: 3.30 */}
      <section className="py-32 px-6 border-y border-white/5 bg-stone-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Final Commandment of Karma
          </h2>
          <p className="text-3xl md:text-4xl font-serif text-stone-200 leading-relaxed italic mb-10">
            "Renouncing all actions in Me, with the mind centered on the Self,
            free from hope and selfishness, and cured of mental fever, fight!"
          </p>
          <div className="w-16 h-px bg-orange-600/50 mx-auto mb-6" />
          <p className="text-orange-600 font-bold tracking-[0.3em] text-xs">
            ADHYĀYA 03 • VERSE 30
          </p>
        </div>
      </section>

      {/* 4. VERSE NAVIGATOR (43 SHLOKAS) */}
      <section className="py-32 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif text-stone-100 mb-4">
                The Verses
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed uppercase tracking-widest font-bold">
                Chapter 03 contains 43 verses detailing the transition from
                physical work to spiritual devotion.
              </p>
            </div>
            <div className="text-orange-600/20 text-7xl font-black select-none">
              3 / 18
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
            {Array.from({ length: 43 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/03/verse/${i + 1}`}
                className="aspect-square bg-stone-900/40 border border-white/5 flex flex-col items-center justify-center hover:bg-orange-500/10 hover:border-orange-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-orange-500 font-serif text-xl">
                  {i + 1}
                </span>
                <span className="text-[7px] text-stone-800 uppercase tracking-tighter mt-1">
                  Shloka
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER LINK */}
      <section className="py-32 border-t border-white/5 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone-600 text-xs tracking-widest uppercase mb-8">
            Up Next
          </p>
          <Link href="/Adhyayas/04" className="group">
            <h4 className="text-4xl md:text-5xl font-serif text-stone-300 group-hover:text-orange-500 transition-colors mb-4">
              Jñāna Karma Sannyāsa Yoga
            </h4>
            <p className="text-stone-600 italic font-serif text-xl group-hover:text-stone-400">
              The path where action is burned in the fire of knowledge.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
