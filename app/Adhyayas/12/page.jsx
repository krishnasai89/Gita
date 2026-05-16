"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Smile,
  Sun,
  ArrowRight,
  ArrowLeft,
  Droplets,
  Feather,
  Infinity,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya12() {
  const container = useRef(null);
  const [petals, setPetals] = useState([]);

  // Hydration-safe floating petals
  useEffect(() => {
    setPetals(
      [...Array(30)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        scale: Math.random() * 1 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
      })),
    );
  }, []);

  useGSAP(
    () => {
      // 1. Hero Text Reveal
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-text",
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        },
      );

      // 2. Continuous Hero Background Flow
      gsap.to(".hero-gradient", {
        backgroundPosition: "200% center",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // 3. The Double-Pulse Heart Animation
      const heartTl = gsap.timeline({ repeat: -1 });
      heartTl
        .to(".devotional-heart", {
          scale: 1.15,
          duration: 0.2,
          ease: "power1.out",
        })
        .to(".devotional-heart", { scale: 1, duration: 0.2, ease: "power1.in" })
        .to(".devotional-heart", {
          scale: 1.15,
          duration: 0.2,
          ease: "power1.out",
        })
        .to(".devotional-heart", {
          scale: 1,
          duration: 1.4,
          ease: "power1.inOut",
        });

      // 4. Heart Ripple Effect
      gsap.to(".heart-ripple", {
        scale: 2.5,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
      });

      // 5. Virtue Cards Stagger
      gsap.from(".virtue-card", {
        opacity: 1,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".virtue-section",
          start: "top 75%",
        },
      });

      // 6. Ladder Steps Reveal
      gsap.from(".ladder-step", {
        opacity: 1,
        x: -30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".ladder-section",
          start: "top 70%",
        },
      });

      // 7. Verse Matrix
      gsap.fromTo(
        ".verse-lotus",
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          stagger: { each: 0.05, from: "center" },
          duration: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".verse-matrix",
            start: "top 85%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#0a0505] min-h-screen selection:bg-rose-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE OCEAN OF LOVE */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Flowing Gradient */}
          <div className="hero-gradient absolute inset-0 bg-gradient-to-r from-[#0a0505] via-rose-950/20 to-[#0a0505] bg-[length:200%_auto] opacity-50" />

          {/* Floating Petals */}
          {petals.map((p) => (
            <div
              key={p.id}
              className="absolute bg-rose-500/30 rounded-full blur-[2px] animate-[floatUp_linear_infinite]"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.scale * 6}px`,
                height: `${p.scale * 6}px`,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}

          <img
            src="/images/adhyaya1.jpg"
            alt="Devotional Peace"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0505]/60 to-[#0a0505]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="hero-text flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-rose-500/40" />
            <Heart size={14} className="text-rose-500/80 fill-rose-500/20" />
            <span className="text-rose-500 tracking-[0.6em] text-[10px] font-black uppercase">
              Adhyāya 12
            </span>
            <div className="h-px w-10 bg-rose-500/40" />
          </div>

          <h1 className="hero-text text-6xl md:text-[9rem] font-serif text-white mb-8 relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-rose-500/10 text-[8rem] md:text-[14rem] whitespace-nowrap pointer-events-none select-none">
              भक्तियोग
            </span>
            Bhakti <span className="italic text-rose-500">Yoga</span>
          </h1>

          <p className="hero-text text-stone-400 text-xl md:text-2xl font-light italic tracking-wide leading-relaxed">
            "Of all yogis, the one who adores Me with faith, whose inner self
            abides in Me, is considered by Me to be the most devout."
          </p>
        </div>
      </section>

      {/* 2. THE DEVOTIONAL HEART (VERSES 12.13-14) */}
      <section className="py-40 px-6 bg-rose-950/5 relative overflow-hidden virtue-section border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Central Heart Visual */}
          <div className="relative flex justify-center items-center mb-24 h-40">
            <div className="heart-ripple absolute w-32 h-32 border border-rose-500/50 rounded-full" />
            <div className="absolute w-64 h-64 bg-rose-600/10 rounded-full blur-[80px]" />

            <div className="devotional-heart relative z-10 text-rose-500 drop-shadow-[0_0_30px_rgba(244,63,94,0.4)]">
              <Heart size={80} fill="currentColor" />
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <Infinity size={24} />
              </div>
            </div>
          </div>

          <h2 className="text-rose-500/60 text-[10px] font-black tracking-[0.6em] uppercase mb-8">
            The Qualities of the Beloved
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-200 leading-snug italic mb-20 max-w-4xl mx-auto">
            "He who has no ill will to any being, who is friendly and
            compassionate, free from egoism and self-sense... he is dear to Me."
          </p>

          {/* The Four Virtues */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Smile />,
                sanskrit: "Maitraḥ",
                english: "Friendly to All",
              },
              {
                icon: <Droplets />,
                sanskrit: "Karuṇa",
                english: "Compassionate",
              },
              {
                icon: <Feather />,
                sanskrit: "Nirmamaḥ",
                english: "Without Attachment",
              },
              {
                icon: <Sun />,
                sanskrit: "Samaḥ",
                english: "Equanimous in Pain & Joy",
              },
            ].map((virtue, i) => (
              <div
                key={i}
                className="virtue-card group p-8 bg-stone-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] hover:border-rose-500/30 hover:bg-rose-950/20 transition-all duration-500 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 group-hover:bg-rose-500 group-hover:text-black transition-all duration-500">
                  {virtue.icon}
                </div>
                <h4 className="text-white font-serif text-xl mb-2">
                  {virtue.sanskrit}
                </h4>
                <p className="text-stone-500 text-[9px] uppercase tracking-widest font-black">
                  {virtue.english}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE LADDER OF GRACE (VERSES 12.8-12) */}
      <section className="py-40 px-6 ladder-section relative">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 relative">
            <h3 className="text-rose-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              The Descent of Practice
            </h3>
            <h4 className="text-5xl font-serif text-white leading-tight">
              If you cannot{" "}
              <span className="text-rose-400 italic">meditate</span>, then work.{" "}
              <br />
              If you cannot work,{" "}
              <span className="text-rose-400 italic">surrender</span>.
            </h4>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              Krishna is profoundly practical and infinitely compassionate. He
              does not demand perfection immediately. He offers a "ladder" of
              spiritual practice, adjusting to the capacity of every individual
              soul.
            </p>
          </div>

          <div className="relative pl-8 md:pl-12 border-l border-rose-500/20 space-y-8">
            {[
              {
                title: "Dhyāna",
                desc: "Fix your mind perfectly on the Divine.",
              },
              {
                title: "Abhyāsa",
                desc: "If you cannot, practice steady meditation.",
              },
              {
                title: "Mat-Karma",
                desc: "If you cannot, do all your work for Me.",
              },
              {
                title: "Phala-Tyāga",
                desc: "If you cannot, simply renounce the results of your actions.",
              },
            ].map((step, i) => (
              <div key={i} className="ladder-step relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0505] border-2 border-rose-500/40 group-hover:border-rose-400 group-hover:bg-rose-500 transition-colors duration-500" />

                <div className="p-8 bg-stone-900/30 backdrop-blur-md border border-white/5 rounded-3xl group-hover:border-rose-500/20 group-hover:bg-rose-950/10 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-rose-500/40 font-serif italic text-2xl">
                      0{i + 1}.
                    </span>
                    <h5 className="text-2xl font-serif text-stone-200 group-hover:text-white transition-colors">
                      {step.title}
                    </h5>
                  </div>
                  <p className="text-stone-500 text-sm font-light leading-relaxed pl-11">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* The Resolution */}
            <div className="ladder-step mt-12 pl-11">
              <p className="text-rose-400 font-serif italic text-2xl">
                "From renunciation comes immediate peace." (Tyāgāc Chāntiḥ)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE LOTUS POND (20 SHLOKAS) */}
      <section className="py-40 px-6 bg-[#080303] verse-matrix border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                20 Petals of Devotion
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                The shortest chapter in the Gita, but the sweetest.
              </p>
            </div>
            <div className="text-rose-600/10 text-[12rem] font-black select-none leading-none">
              12
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter12/verse${i + 1}`}
                className="verse-lotus group relative aspect-square bg-[#12080a]/60 backdrop-blur-md border border-rose-900/30 rounded-3xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-rose-950/40 hover:border-rose-400/60 hover:shadow-[0_10px_40px_-10px_rgba(244,63,94,0.3)]"
              >
                {/* Inner Blooming Gradient (Emanates from the bottom like a flower) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(244,63,94,0.4)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Floating Devotion Spark (Appears and pulses at the top) */}
                <div className="absolute top-4 w-1 h-1 bg-rose-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                {/* The Verse Number */}
                <span className="text-stone-500 group-hover:text-rose-50 font-serif text-2xl relative z-10 transition-colors duration-500">
                  {i + 1}
                </span>

                {/* Secret Slide-up Subtext */}
                <span className="absolute bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-[8px] tracking-[0.4em] text-rose-300 uppercase font-black transition-all duration-500">
                  Bhakti
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <section className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#080303] to-[#0f0a0a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-rose-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/11"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Cosmic Terror
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Viśvarūpa Darśana
              </span>
            </Link>

            <Link
              href="/Adhyayas/13"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-rose-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-rose-400">
                Return to the Mind
              </span>
              <span className="font-serif italic text-3xl md:text-4xl text-white group-hover:text-rose-400 transition-colors duration-700 mt-2">
                Kṣetra Kṣetrajña Vibhāga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                Discriminating the Body from the Soul.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
}
