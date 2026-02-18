"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, Moon, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya8() {
  const container = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      heroRef.current,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }
    );

    gsap.from(".path-card", {
      opacity: 0,
      y: 30,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".path-section",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-amber-500/30"
    >
      {/* 1. HERO SECTION: THE IMPERISHABLE */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya8.jpg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-blue-950/20 to-stone-950" />
        </div>

        <div
          ref={heroRef}
          className="relative h-full flex items-center justify-center text-center z-10 px-6"
        >
          <div className="space-y-6">
            <p className="text-amber-500 tracking-[0.7em] text-[10px] font-black uppercase">
              Adhyāya 08
            </p>
            <h1 className="text-6xl md:text-9xl font-serif text-stone-100">
              Akṣara <span className="text-amber-500 italic">Brahma</span>
            </h1>
            <p className="text-stone-500 italic text-xl max-w-2xl mx-auto font-light leading-relaxed">
              "He who departs from the body thinking of Me alone, at the time of
              death, attains My state."
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE SYLLABLE OM (VERSE 8.13) */}
      <section className="py-32 px-6 border-y border-white/5 bg-amber-500/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-8xl font-serif text-amber-500/10 mb-8 select-none">
            ॐ
          </div>
          <h2 className="text-3xl font-serif text-stone-200 mb-6 italic">
            "Uttering the monosyllable OM—the Brahman—and remembering Me, he who
            departs, leaving the body, attains the Supreme Goal."
          </h2>
          <div className="w-16 h-px bg-amber-500/30 mx-auto" />
        </div>
      </section>

      {/* 3. THE DEPARTURE MAP (THE TWO PATHS) */}
      <section className="py-32 px-6 path-section">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              Verse 8.24 - 8.25
            </h3>
            <h2 className="text-4xl font-serif text-stone-100">
              The Two Paths of the Soul
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Path of Light */}
            <div className="path-card p-12 bg-amber-500/5 border border-amber-500/20 rounded-[2rem] relative overflow-hidden group">
              <Sun className="absolute -top-10 -right-10 w-40 h-40 text-amber-500/10 group-hover:rotate-90 transition-transform duration-1000" />
              <div className="relative z-10">
                <h4 className="text-amber-500 font-serif text-3xl mb-6">
                  Uttarāyana
                </h4>
                <p className="text-stone-500 text-xs uppercase tracking-widest font-bold mb-4">
                  The Path of Light
                </p>
                <p className="text-stone-300 leading-relaxed font-light text-lg italic">
                  "Fire, light, daytime, the bright fortnight, the six months of
                  the northern solstice—departing by this path, the seekers of
                  Brahman go to Brahman."
                </p>
                <div className="mt-8 flex items-center gap-2 text-amber-500/60 text-sm">
                  <Sparkles size={14} />
                  <span>No return to the cycle of birth and death.</span>
                </div>
              </div>
            </div>

            {/* Path of Smoke */}
            <div className="path-card p-12 bg-stone-900/40 border border-white/5 rounded-[2rem] relative overflow-hidden group">
              <Moon className="absolute -top-10 -right-10 w-40 h-40 text-stone-500/10 group-hover:-rotate-45 transition-transform duration-1000" />
              <div className="relative z-10">
                <h4 className="text-stone-400 font-serif text-3xl mb-6">
                  Dakṣiṇāyana
                </h4>
                <p className="text-stone-600 text-xs uppercase tracking-widest font-bold mb-4">
                  The Path of Darkness
                </p>
                <p className="text-stone-500 leading-relaxed font-light text-lg italic">
                  "Smoke, night, the dark fortnight, the six months of the
                  southern solstice—attaining by these the lunar light, the yogi
                  returns."
                </p>
                <div className="mt-8 flex items-center gap-2 text-stone-700 text-sm">
                  <RotateCcw size={14} />
                  <span>
                    Returns to the earthly plane to continue the journey.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE NAVIGATOR (28 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">28 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
              The Imperishable Brahma Index
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 gap-3">
            {Array.from({ length: 28 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/08/verse/${i + 1}`}
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

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-amber-950/10">
        <Link href="/Adhyayas/09" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block">
            To the Secret of Secrets
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-amber-500 transition-colors">
            Adhyāya 09: Rāja Vidyā Rāja Guhya Yoga →
          </h4>
        </Link>
      </section>
    </main>
  );
}

// Utility icon for the return path
function RotateCcw({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
