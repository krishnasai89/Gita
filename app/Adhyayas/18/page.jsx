"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  BookOpen,
  Heart,
  Anchor,
  ShieldCheck,
  ArrowRight,
  Crown,
  Sparkles,
  Feather,
  Sun,
  Hand,
  Eye,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya18() {
  const container = useRef(null);
  const mapRef = useRef(null);
  const [sparks, setSparks] = useState([]);

  // Hydration-safe ascending sparks (Moksha/Liberation metaphor)
  useEffect(() => {
    setSparks(
      [...Array(40)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 4,
        scale: Math.random() * 1.5 + 0.5,
      })),
    );
  }, []);

  const paths = [
    {
      id: "karma",
      title: "Karma Yoga",
      icon: <Anchor size={32} />,
      desc: "Action without attachment to the fruits.",
      verse: "18.46",
      color: "text-orange-500",
      bg: "bg-orange-500/10 hover:bg-orange-500/20",
      border: "border-orange-500/30",
    },
    {
      id: "jnana",
      title: "Jñāna Yoga",
      icon: <BookOpen size={32} />,
      desc: "Discrimination between the Self and Matter.",
      verse: "18.55",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
      border: "border-emerald-500/30",
    },
    {
      id: "bhakti",
      title: "Bhakti Yoga",
      icon: <Heart size={32} />,
      desc: "Total devotion and love for the Supreme.",
      verse: "18.65",
      color: "text-rose-500",
      bg: "bg-rose-500/10 hover:bg-rose-500/20",
      border: "border-rose-500/30",
    },
  ];

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 2,
          stagger: 0.2,
          ease: "power4.out",
        },
      );

      // Rotating Mandala
      gsap.to(".liberation-mandala", {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none",
      });

      // 2. The 5 Factors Stagger
      gsap.from(".factor-card", {
        opacity: 1,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".factors-section", start: "top 75%" },
      });

      // 3. Convergence Map Animation
      const tlMap = gsap.timeline({
        scrollTrigger: { trigger: mapRef.current, start: "top 70%" },
      });
      tlMap
        .from(".path-card", {
          opacity: 1,
          y: -40,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          ".convergence-line",
          { height: "100%", duration: 1, ease: "power2.inOut" },
          "-=0.5",
        )
        .from(".surrender-node", {
          opacity: 1,
          scale: 0,
          duration: 0.8,
          ease: "back.out(2)",
        });

      // 4. Charama Shloka Breathing Glow
      gsap.to(".charama-glow", {
        scale: 1.1,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 5. Verse Grid Reveal
      gsap.fromTo(
        ".verse-seed",
        { opacity: 0, scale: 0.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: { each: 0.015, from: "center" },
          ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".verse-grid", start: "top 85%" },
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#020202] min-h-screen selection:bg-amber-500/30 overflow-hidden font-sans"
    >
      {/* 1. HERO SECTION: THE ULTIMATE CONCLUSION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)]" />

          {/* Ascending Sparks of Liberation */}
          {sparks.map((s) => (
            <div
              key={s.id}
              className="absolute bg-amber-400/60 rounded-full blur-[1px] animate-[floatUp_linear_infinite]"
              style={{
                left: s.left,
                bottom: "-10%",
                width: `${s.scale * 3}px`,
                height: `${s.scale * 3}px`,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}

          {/* Golden Mandala */}
          <div className="liberation-mandala absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-[1.5]">
            <svg
              width="800"
              height="800"
              viewBox="0 0 200 200"
              className="text-amber-500"
            >
              {[...Array(36)].map((_, i) => (
                <path
                  key={i}
                  d="M100 10 L105 50 L100 100 L95 50 Z"
                  fill="currentColor"
                  transform={`rotate(${i * 10} 100 100)`}
                />
              ))}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <img
            src="/images/adhyaya18.jpg"
            alt="Final Liberation"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/60 via-transparent to-[#020202]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="hero-title flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-amber-500/40" />
            <Crown size={16} className="text-amber-500" />
            <span className="text-amber-500 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 18
            </span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>

          <h1 className="hero-title text-6xl md:text-[9rem] font-serif text-white mb-6 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)] leading-none">
            Mokṣa <span className="italic text-amber-500">Sannyāsa</span>
          </h1>

          <p className="hero-title text-stone-400 italic text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            "The Yoga of Liberation through Renunciation — The Grand Synthesis."
          </p>
        </div>
      </section>

      {/* 2. THE 5 FACTORS OF ACTION (VERSE 18.14) */}
      <section className="py-40 px-6 relative factors-section bg-gradient-to-b from-[#020202] to-[#0a0702] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-stone-500 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              Understanding Human Action
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">
              The 5 Factors of Accomplishment
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: "The Body",
                desc: "The physical seat of action.",
                icon: <Hand />,
              },
              {
                title: "The Doer",
                desc: "The ego claiming agency.",
                icon: <Heart />,
              },
              {
                title: "The Senses",
                desc: "The instruments of perception.",
                icon: <Eye />,
              },
              {
                title: "The Effort",
                desc: "The varying kinds of endeavor.",
                icon: <Anchor />,
              },
              {
                title: "The Divine",
                desc: "The ultimate supersoul.",
                icon: <Sun />,
              },
            ].map((factor, i) => (
              <div key={i} className="factor-card relative group">
                <div className="p-8 h-full bg-stone-900/30 backdrop-blur-md border border-white/5 rounded-3xl transition-all duration-500 hover:bg-amber-950/20 hover:border-amber-500/40 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] flex flex-col items-center text-center">
                  <div className="text-amber-500/20 group-hover:text-amber-400 transition-colors duration-500 mb-6 scale-150">
                    {factor.icon}
                  </div>
                  <span className="text-amber-500 font-serif text-3xl block mb-2">
                    {i + 1}
                  </span>
                  <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-4">
                    {factor.title}
                  </h4>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 border border-white/10 bg-black/40 rounded-[2rem] text-center max-w-3xl mx-auto relative overflow-hidden">
            <Sparkles
              className="absolute top-4 right-4 text-amber-500/10"
              size={60}
            />
            <p className="text-stone-300 text-lg md:text-xl font-serif italic leading-relaxed relative z-10">
              "Since these five are the true causes, anyone who sees only
              himself as the sole doer, due to an untrained intellect, does not
              truly see."
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE GITA SUMMARY MAP: THE CONVERGENCE */}
      <section
        ref={mapRef}
        className="py-40 px-6 relative bg-[#050301] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            The Converging <span className="text-amber-500 italic">Paths</span>
          </h2>
          <p className="text-amber-500/60 tracking-[0.4em] uppercase text-xs font-black mb-24">
            All streams lead to the same ocean
          </p>

          {/* The Tri-Yoga Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
            {paths.map((path) => (
              <div
                key={path.id}
                className={`path-card p-10 backdrop-blur-xl border rounded-[2.5rem] transition-all duration-500 flex flex-col items-center text-center ${path.bg} ${path.border}`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-8 bg-black/40 ${path.color}`}
                >
                  {path.icon}
                </div>
                <h4 className="text-white font-serif text-3xl mb-4">
                  {path.title}
                </h4>
                <p className="text-stone-300 text-base font-light leading-relaxed mb-8 flex-grow">
                  {path.desc}
                </p>
                <span
                  className={`px-4 py-1 rounded-full bg-black/40 text-[10px] uppercase tracking-widest font-bold ${path.color}`}
                >
                  Verse {path.verse}
                </span>
              </div>
            ))}
          </div>

          {/* The Convergence UI (Lines merging down) */}
          <div className="relative h-40 mt-8 hidden md:block">
            <div className="absolute top-0 left-1/6 w-[33%] h-0 border-r border-b border-orange-500/30 rounded-br-[3rem] convergence-line" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-emerald-500/30 convergence-line" />
            <div className="absolute top-0 right-1/6 w-[33%] h-0 border-l border-b border-rose-500/30 rounded-bl-[3rem] convergence-line" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-1/2 bg-amber-500/50" />
          </div>

          {/* The Final Destination: Prapatti */}
          <div className="surrender-node mt-12 md:mt-0 relative z-20 inline-flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-amber-500/10 border-2 border-amber-500 flex items-center justify-center text-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.3)] mb-6">
              <ShieldCheck size={48} />
            </div>
            <h4 className="text-4xl font-serif text-white">Prapatti</h4>
            <p className="text-amber-500 text-xs font-black uppercase tracking-[0.4em] mt-2">
              Absolute Surrender
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE ULTIMATE SECRET: CHARAMA SHLOKA (VERSE 18.66) */}
      <section className="py-48 px-6 bg-[#020100] relative overflow-hidden border-y border-white/5">
        {/* Divine Light Burst */}
        <div className="charama-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Feather
            className="text-amber-500 mx-auto mb-10"
            size={56}
            strokeWidth={1}
          />
          <h2 className="text-amber-500/80 text-[10px] font-black tracking-[0.8em] uppercase mb-16">
            The Charama Shloka
          </h2>

          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.2] mb-16 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            "Abandon all varieties of religion and just surrender unto Me. I
            shall deliver you from all sinful reactions;{" "}
            <span className="italic text-amber-400">do not fear.</span>"
          </p>

          <p className="text-stone-400 italic text-xl md:text-2xl font-light mb-16">
            Sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja...
          </p>

          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-amber-500/40" />
            <p className="text-amber-500 text-sm font-bold tracking-[0.5em] uppercase">
              The Ultimate Secret • 18.66
            </p>
            <div className="h-px w-12 bg-amber-500/40" />
          </div>
        </div>
      </section>

      {/* 5. VERSE MATRIX: 78 GOLDEN SEEDS */}
      <section className="py-40 px-6 bg-[#050301] verse-grid">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                78 Steps to Freedom
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                The longest chapter. The complete synthesis.
              </p>
            </div>
            <div className="text-amber-600/10 text-[12rem] font-black select-none leading-none">
              18
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 max-w-6xl mx-auto">
            {Array.from({ length: 78 }, (_, i) => {
              const verse = i + 1;
              const isSecret = verse === 66; // Charama Shloka (The Ultimate Secret)
              const isFinale = verse === 78; // The Final Verse

              // 1. THE FINALE (VERSE 78) - Expands to fill the remaining row
              if (isFinale) {
                return (
                  <Link
                    key={i}
                    href={`/shlokas/chapter18/verse${verse}`}
                    className="group relative flex-grow w-full sm:w-auto sm:min-w-[250px] h-16 md:h-20 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-2xl flex items-center justify-between px-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] z-20"
                  >
                    {/* Sweeping Light Ray */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

                    <span className="text-black/80 font-serif text-2xl md:text-3xl font-black relative z-10">
                      78
                    </span>
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-black font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                        Iti Gita
                      </span>
                      <span className="text-black/70 font-serif italic text-sm md:text-base">
                        The Grand Finale
                      </span>
                    </div>
                  </Link>
                );
              }

              // 2. THE SECRET (VERSE 66) - Blazing glowing tablet
              if (isSecret) {
                return (
                  <Link
                    key={i}
                    href={`/shlokas/chapter18/verse${verse}`}
                    className="group relative w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 bg-amber-950/60 backdrop-blur-md border border-amber-400/80 rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.4)_0%,transparent_70%)] animate-pulse" />
                    <span className="text-amber-400 font-serif text-xl md:text-2xl font-bold relative z-10 drop-shadow-md">
                      {verse}
                    </span>
                    <span className="absolute bottom-2 text-[8px] text-amber-300 font-black uppercase tracking-widest relative z-10">
                      Secret
                    </span>
                  </Link>
                );
              }

              // 3. NORMAL VERSES - Ancient stone tablets
              return (
                <Link
                  key={i}
                  href={`/shlokas/chapter18/verse${verse}`}
                  className="group relative w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20 bg-gradient-to-b from-[#1a1005] to-[#0a0601] border border-amber-900/30 shadow-[inset_0_1px_0_rgba(245,158,11,0.1)] rounded-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-amber-900/40 hover:border-amber-500/50 hover:shadow-[0_10px_20px_rgba(245,158,11,0.2)]"
                >
                  {/* Subtle Top Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-amber-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="text-stone-500 group-hover:text-amber-400 font-serif text-lg md:text-xl transition-colors font-bold">
                    {verse}
                  </span>

                  {/* Hover Spark */}
                  <div className="absolute bottom-2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_5px_#f59e0b]" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CONCLUSION: ITI GITA (THE END) */}
      <section className="py-60 text-center px-6 relative bg-black overflow-hidden">
        {/* Slow fade to gold effect */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-amber-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <h4 className="text-amber-500/60 text-[10px] font-black tracking-[0.8em] uppercase mb-12">
            The End of the Dialogue
          </h4>
          <p className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-16 leading-[1.2] italic drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            "Where there is Krishna, the Lord of Yoga, and Arjuna, the master
            archer, there will certainly be opulence, victory, extraordinary
            power, and morality."
          </p>
          <p className="text-stone-500 uppercase tracking-widest text-sm font-bold mb-24">
            Sanjaya's Final Declaration • 18.78
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-6 px-12 py-6 bg-amber-500 text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] hover:-translate-y-1 transition-all rounded-full group"
          >
            Return to the Source
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(110vh) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
