"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ChevronDown,
  Sparkles,
  BookOpen,
  Feather,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya1() {
  const container = useRef(null);
  const [particles, setParticles] = useState([]);

  // Generate safe particles for hydration
  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-bg",
        { scale: 1.1, filter: "brightness(0.2) blur(10px)" },
        {
          scale: 1,
          filter: "brightness(0.5) blur(0px)",
          duration: 2,
          ease: "power3.out",
        },
      ).fromTo(
        ".hero-text",
        { y: 40, opacity: 1, filter: "blur(5px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=1.5",
      );

      // Continuous slow scale for background
      gsap.to(".hero-bg", {
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. Story Text Reveals
      gsap.utils.toArray(".reveal-text").forEach((text) => {
        gsap.from(text, {
          y: 40,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 3. Verse Grid Stagger
      gsap.from(".verse-node", {
        opacity: 1,
        scale: 0.8,
        y: 20,
        stagger: 0.02,
        duration: 0.5,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".verse-grid-container",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#050505] min-h-screen selection:bg-amber-500/30"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-stone-950">
          <img
            src="/images/adhyaya1.jpg"
            alt="Kurukshetra battlefield"
            className="hero-bg w-full h-full object-cover opacity-60 mix-blend-luminosity"
          />
          {/* Advanced Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
        </div>

        {/* Floating Embers */}
        <div className="absolute inset-0 pointer-events-none z-[1]">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-500/40 rounded-full blur-[1px] animate-pulse"
              style={{
                left: p.left,
                top: p.top,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="hero-text flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-amber-500/50" />
            <span className="text-amber-500 tracking-[0.5em] text-[10px] font-black uppercase">
              Adhyāya 01
            </span>
            <div className="h-px w-12 bg-amber-500/50" />
          </div>

          <div className="hero-text relative mb-6">
            <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-7xl md:text-9xl font-serif text-amber-400/10 whitespace-nowrap pointer-events-none select-none">
              अर्जुनविषादयोग
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-500 to-amber-900 drop-shadow-2xl">
              Arjuna Viṣāda Yoga
            </h1>
          </div>

          <p className="hero-text text-stone-400 italic text-xl md:text-2xl font-light tracking-wide">
            "The Yoga of Arjuna's Despondency"
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[9px] tracking-[0.4em] text-stone-500 uppercase font-bold">
            Descend
          </span>
          <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-500 animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ================= THE PHILOSOPHICAL CONTEXT ================= */}
      <section className="py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-500/30 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 reveal-text">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles size={16} className="text-amber-500/50" />
                <h2 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
                  The Inner Conflict
                </h2>
              </div>
              <p className="text-stone-300 text-2xl md:text-3xl leading-relaxed font-serif font-light">
                On the sacred plain of Kurukshetra, the dharma-field, the
                warrior Arjuna stands paralyzed. This is not a failure of skill,
                but a total{" "}
                <span className="italic text-amber-500">
                  psychological collapse.
                </span>
              </p>
            </div>

            <div className="lg:col-span-5 reveal-text relative">
              <div className="p-8 bg-stone-900/30 backdrop-blur-md border border-white/5 rounded-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                  <BookOpen size={100} />
                </div>
                <h3 className="text-amber-400 font-serif text-xl mb-4 flex items-center gap-3">
                  <Feather size={18} /> Shankara's Insight
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Adi Shankara notes that Chapter 1 describes the absolute{" "}
                  <span className="text-stone-200">"human condition."</span>{" "}
                  Before supreme wisdom can be received, the ego must first
                  realize its own limitation through grief (Viṣāda).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE STORY NARRATIVE ================= */}
      <section className="py-32 px-6 bg-stone-950 border-y border-white/5 relative">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center reveal-text">
            <h2 className="text-5xl font-serif text-white mb-6">
              The Call to War
            </h2>
            <div className="w-16 h-px bg-amber-500/50 mx-auto" />
          </div>

          <div className="space-y-10 text-stone-400 leading-relaxed text-lg font-light font-serif">
            <p className="reveal-text">
              <span className="float-left text-7xl text-amber-500 leading-none pr-4 font-serif">
                T
              </span>
              he air thickens with the sound of ancient horns. Bhīṣma, the
              grandsire, sounds the lion’s roar with his conch, shattering the
              silence of the morning. In response, Krishna sounds the divine{" "}
              <span className="text-stone-200 italic">Pāñcajanya</span> and
              Arjuna the{" "}
              <span className="text-stone-200 italic">Devadatta</span>. The
              earth trembles under the weight of impending destruction.
            </p>

            {/* Glassmorphic Pull Quote */}
            <div className="reveal-text relative my-16 p-10 bg-gradient-to-r from-amber-500/[0.05] to-transparent border-l-2 border-amber-500 rounded-r-2xl">
              <div className="absolute top-4 right-4 text-[10px] font-mono tracking-widest text-amber-500/50">
                SHLOKA 01.21
              </div>
              <p className="text-2xl italic text-stone-200 leading-snug">
                "Placed between the two armies, Arjuna surveys teachers,
                fathers, sons, and friends. He sees the cost of victory, and his
                limbs grow weak."
              </p>
            </div>

            <p className="reveal-text">
              Arjuna sinks into his chariot seat. His legendary bow, Gāṇḍīva,
              slips from his hand. His mind spinning, he turns to Krishna, "I do
              not see how any good can come from killing my own kinsmen. I shall
              not fight." Thus begins the greatest dialogue ever spoken.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VERSE NAVIGATOR ================= */}
      <section className="py-40 px-6 relative overflow-hidden verse-grid-container">
        {/* Mandala Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
          <Sparkles size={800} className="text-amber-500" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-20 text-center reveal-text">
            <h2 className="text-4xl font-serif text-stone-100 mb-4">
              Explore the Text
            </h2>
            <p className="text-amber-500/60 uppercase tracking-[0.4em] text-[10px] font-bold">
              47 Shlokas • Sanskrit & Commentary
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {Array.from({ length: 47 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter1/verse${i + 1}`}
                className="verse-node aspect-square bg-stone-900/20 backdrop-blur-sm border border-white/5 rounded-xl flex flex-col items-center justify-center hover:bg-amber-500 hover:border-amber-400 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-1"
              >
                <span className="text-stone-500 group-hover:text-stone-950 font-serif text-2xl transition-colors">
                  {i + 1}
                </span>
                <span className="text-[8px] text-stone-700 group-hover:text-stone-900 uppercase tracking-widest mt-1 font-bold transition-colors">
                  Verse
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CHAPTER SUMMARY FOOTER ================= */}
      <section className="py-32 relative bg-stone-900/50 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="max-w-4xl mx-auto text-center px-6">
          <h4 className="text-amber-500/60 text-[10px] font-black tracking-[0.4em] uppercase mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-amber-500/30" />
            The Portal of Grief
            <div className="h-px w-8 bg-amber-500/30" />
          </h4>
          <p className="text-stone-300 text-3xl md:text-4xl font-serif italic leading-relaxed mb-16">
            "Before the soul can rise in wisdom, it must face its own darkness.
            Arjuna's grief is the portal to Krishna's grace."
          </p>

          <Link
            href="/Adhyayas/2"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-stone-100 text-stone-950 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-500 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Proceed to Adhyāya 2{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </Link>
        </div>
      </section>

      {/* Global Style for Keyframes */}
      <style jsx global>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </main>
  );
}
