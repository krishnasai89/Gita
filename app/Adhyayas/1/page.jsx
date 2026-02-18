"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya1() {
  const heroRef = useRef(null);
  const textRef = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    // 1. Initial Hero Animations
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { y: 40 },
      { y: 0, duration: 1.4, ease: "power3.out" }
    );
    tl.fromTo(
      textRef.current,
      { y: 20 },
      { y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
      "-=0.8"
    );

    // 2. Scroll Animations for Story Sections
    gsap.utils.toArray(".reveal-text").forEach((text) => {
      gsap.from(text, {
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <main ref={container} className="bg-stone-950 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/adhyaya1.jpg"
            alt="Kurukshetra battlefield"
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/30 to-stone-950" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-[0.4em] text-amber-400/70 uppercase font-bold">
            Scroll
          </span>
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
              Adhyāya 01
            </p>
            <h1
              ref={(el) => (textRef.current[1] = el)}
              className="text-5xl md:text-7xl font-serif text-amber-500"
            >
              Arjuna Viṣāda Yoga
            </h1>
            <p
              ref={(el) => (textRef.current[2] = el)}
              className="text-stone-400 italic text-xl font-light"
            >
              "The Yoga of Arjuna's Despondency"
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHICAL CONTEXT */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="reveal-text">
              <h2 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-6">
                The Conflict
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed font-serif">
                On the sacred plain of Kurukshetra, the dharma-field, the
                warrior Arjuna stands paralyzed. This is not a physical failure,
                but a total psychological collapse.
              </p>
            </div>
            <div className="reveal-text border-l border-amber-500/20 pl-8">
              <h3 className="text-stone-100 font-serif text-xl mb-4 italic">
                Shankara's Insight
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed italic">
                Adi Shankara notes that Chapter 1 describes the "human
                condition." Before wisdom can be received, the ego must realize
                its own limitation through grief (Viṣāda).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE STORY: THE BLOWING OF THE CONCHES */}
      <section className="py-32 px-6 bg-stone-900/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl font-serif text-amber-500 text-center reveal-text">
            The Call to War
          </h2>

          <div className="space-y-8 text-stone-400 leading-loose text-lg font-light">
            <p className="reveal-text">
              The air thickens with the sound of ancient horns. Bhīṣma, the
              grandsire, sounds the lion’s roar with his conch. In response,
              Krishna sounds the{" "}
              <span className="text-amber-500">Pāñcajanya</span> and Arjuna the{" "}
              <span className="text-amber-500">Devadatta</span>.
            </p>

            <div className="reveal-text relative p-10 bg-stone-900/40 border border-white/5 rounded-lg overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl">
                01.21
              </div>
              <p className="italic text-stone-200">
                "Placed between the two armies, Arjuna surveys teachers,
                fathers, sons, and friends. He sees the cost of victory and his
                limbs grow weak."
              </p>
            </div>

            <p className="reveal-text">
              Arjuna sinks into his chariot seat. His bow, Gāṇḍīva, slips from
              his hand. He tells Krishna, "I do not see how any good can come
              from killing my own kinsmen."
            </p>
          </div>
        </div>
      </section>

      {/* 4. VERSE NAVIGATOR */}
      <section className="py-32 px-6 bg-stone-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-serif text-stone-100 mb-4">
              Explore the Verses
            </h2>
            <p className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">
              Select a Shloka to read the full Sanskrit and Commentary
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-3">
            {Array.from({ length: 47 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter1/verse${i + 1}`}
                className="aspect-square bg-stone-900/40 border border-white/5 flex flex-col items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-xl">
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

      {/* 5. CHAPTER SUMMARY FOOTER */}
      <section className="py-20 bg-amber-500/5 border-t border-amber-500/20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h4 className="text-stone-500 text-xs tracking-widest uppercase mb-6">
            Final Lesson of Adhyāya 01
          </h4>
          <p className="text-stone-300 text-2xl font-serif italic italic leading-relaxed">
            "Before the soul can rise in wisdom, it must face its own darkness.
            Arjuna's grief is the portal to Krishna's grace."
          </p>
          <div className="mt-12">
            <Link
              href="/Adhyayas/02"
              className="inline-block px-10 py-4 bg-amber-600 text-stone-950 font-black uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors"
            >
              Continue to Chapter 02 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
