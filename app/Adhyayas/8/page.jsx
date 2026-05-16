"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Sun,
  Moon,
  Sparkles,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Infinity,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya8() {
  const container = useRef(null);
  const [particles, setParticles] = useState([]);

  // Hydration-safe particle generation for "Ascending Souls/Stars"
  useEffect(() => {
    setParticles(
      [...Array(30)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power4.out",
        },
      );

      // 2. The Resonant OM Parallax
      gsap.to(".om-symbol", {
        scale: 1.2,
        opacity: 0.15,
        scrollTrigger: {
          trigger: ".om-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Path Cards Reveal
      gsap.from(".path-card", {
        opacity: 1,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".path-section",
          start: "top 75%",
        },
      });

      // 4. Verse Grid Reveal
      gsap.from(".verse-star", {
        opacity: 1,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".verse-grid",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  const onMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    gsap.to(card, {
      rotateY: (x - 0.5) * 15,
      rotateX: (y - 0.5) * -15,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  return (
    <main
      ref={container}
      className="bg-[#030508] min-h-screen selection:bg-amber-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE IMPERISHABLE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

          {/* Ascending Particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute bg-amber-500/40 rounded-full blur-[1px] animate-[scrollUp_linear_infinite]"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          <img
            src="/images/adhyaya1.jpg"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
            alt="Cosmic Void"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030508]/50 via-transparent to-[#030508]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="hero-title flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-500/40" />
            <span className="text-amber-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 08
            </span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>

          <h1 className="hero-title text-6xl md:text-[8rem] font-serif text-white mb-6 relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-amber-500/10 text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              अक्षरब्रह्मयोग
            </span>
            Akṣara <span className="italic text-amber-500">Brahma</span>
          </h1>

          <p className="hero-title text-stone-400 text-xl md:text-2xl font-light italic tracking-widest max-w-3xl mx-auto leading-relaxed">
            "The Yoga of the Imperishable — Beyond the cycles of creation and
            destruction."
          </p>
        </div>
      </section>

      {/* 2. THE SYLLABLE OM (VERSE 8.13) */}
      <section className="py-40 px-6 relative om-section border-y border-white/5 bg-[#050810]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
          <div className="om-symbol text-[30rem] md:text-[50rem] font-serif text-amber-500/20 select-none leading-none absolute">
            ॐ
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-10 text-amber-500 animate-pulse">
            <Infinity size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-100 mb-10 leading-snug italic">
            "Uttering the monosyllable OM—the Brahman—and remembering Me, he who
            departs, leaving the body, attains the Supreme Goal."
          </h2>
          <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-amber-500/60">
            <div className="h-px w-8 bg-amber-500/20" />
            Verse 8.13
            <div className="h-px w-8 bg-amber-500/20" />
          </div>
        </div>
      </section>

      {/* 3. THE DEPARTURE MAP (THE TWO PATHS) */}
      <section className="py-40 px-6 path-section relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-amber-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              Verse 8.24 - 8.25
            </h3>
            <h2 className="text-5xl md:text-6xl font-serif text-white">
              The Two Paths of the Soul
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* PATH 1: Uttarāyana (Light) */}
            <div
              onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
              }
              className="path-card p-12 bg-amber-500/5 backdrop-blur-xl border border-amber-500/20 rounded-[2.5rem] relative overflow-hidden group transition-all duration-700 hover:bg-amber-500/10 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700">
                <Sun
                  size={180}
                  className="text-amber-400 group-hover:rotate-45 transition-transform duration-1000"
                />
              </div>
              <div className="relative z-10">
                <h4 className="text-amber-400 font-serif text-4xl mb-2">
                  Uttarāyana
                </h4>
                <p className="text-amber-500/60 text-[10px] uppercase tracking-[0.4em] font-black mb-8">
                  The Path of Light
                </p>
                <p className="text-stone-300 leading-relaxed font-light text-lg italic mb-12">
                  "Fire, light, daytime, the bright fortnight, the six months of
                  the northern solstice—departing by this path, the seekers of
                  Brahman go to Brahman."
                </p>
                <div className="pt-8 border-t border-amber-500/20 flex items-center gap-4 text-amber-300/80 text-sm font-medium">
                  <div className="p-2 rounded-full bg-amber-500/10">
                    <Sparkles size={16} />
                  </div>
                  <span>No return to the cycle of birth and death.</span>
                </div>
              </div>
            </div>

            {/* PATH 2: Dakṣiṇāyana (Smoke/Darkness) */}
            <div
              onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0 })
              }
              className="path-card p-12 bg-blue-950/20 backdrop-blur-xl border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-700 hover:bg-blue-900/20 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover:opacity-20 transition-opacity duration-700">
                <Moon
                  size={180}
                  className="text-blue-400 group-hover:-rotate-12 transition-transform duration-1000"
                />
              </div>
              <div className="relative z-10">
                <h4 className="text-blue-400 font-serif text-4xl mb-2">
                  Dakṣiṇāyana
                </h4>
                <p className="text-blue-500/60 text-[10px] uppercase tracking-[0.4em] font-black mb-8">
                  The Path of Smoke
                </p>
                <p className="text-stone-400 leading-relaxed font-light text-lg italic mb-12">
                  "Smoke, night, the dark fortnight, the six months of the
                  southern solstice—attaining by these the lunar light, the yogi
                  returns."
                </p>
                <div className="pt-8 border-t border-blue-500/10 flex items-center gap-4 text-blue-300/70 text-sm font-medium">
                  <div className="p-2 rounded-full bg-blue-500/10">
                    <RotateCcw size={16} />
                  </div>
                  <span>
                    Returns to the earthly plane to continue the journey.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE NAVIGATOR: THE STAR GRID (28 SHLOKAS) */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#020305] verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                28 Illuminations
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Mapping the architecture of the imperishable absolute.
              </p>
            </div>
            <div className="text-amber-600/10 text-[12rem] font-black select-none leading-none">
              08
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-14 gap-3">
            {Array.from({ length: 28 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter8/verse${i + 1}`}
                className="verse-star aspect-square bg-stone-900/20 border border-white/5 rounded-2xl flex flex-col items-center justify-center transition-all duration-500 hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:-translate-y-1 group"
              >
                <span className="text-stone-500 group-hover:text-black font-serif text-xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[6px] text-stone-800 group-hover:text-black/60 uppercase tracking-widest mt-1 font-bold">
                  Brahma
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <footer className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-[#020305] to-[#0a0501]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-b from-amber-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/7"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Preceding Science
              </span>
              <span className="font-serif italic text-2xl text-stone-300">
                Jñāna Vijñāna Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/9"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-amber-500/60">
                Ascend to the Secret
              </span>
              <span className="font-serif italic text-3xl text-white group-hover:text-amber-400 transition-colors">
                Rāja Vidyā Rāja Guhya
              </span>
            </Link>
          </div>
        </div>
      </footer>

      {/* Global Animation for Rising Particles */}
      <style jsx global>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
