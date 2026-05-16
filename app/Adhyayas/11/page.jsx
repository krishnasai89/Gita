"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Eye,
  Zap,
  Flame,
  Infinity as InfinityIcon,
  ArrowRight,
  ArrowLeft,
  Sun,
  Fingerprint,
  Hexagon,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya11() {
  const container = useRef(null);
  const [stars, setStars] = useState([]);

  // Hydration-safe cosmic particles (The Void)
  useEffect(() => {
    setStars(
      [...Array(60)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      })),
    );
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Hero Expanding Universe Text Reveal
      tl.fromTo(
        ".hero-reveal",
        { opacity: 0, scale: 0.8, filter: "blur(20px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 3,
          ease: "expo.out",
        },
      );

      // Continuous expanding universe background
      gsap.to(".cosmic-bg", {
        scale: 1.2,
        duration: 40,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2. The Gate / Divine Sight Opening
      gsap.fromTo(
        ".divine-eye-core",
        { scale: 0.1, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".gate-section",
            start: "top 60%",
            end: "center center",
            scrub: 1,
          },
        },
      );

      // 3. Thousand Suns Burst Animation (The Flood of Knowledge)
      gsap.to(".supernova-core", {
        scale: 1.5,
        opacity: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // 4. Kāla (The Unbending Law) Reveal
      gsap.from(".kalo-card", {
        opacity: 1,
        x: -50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".kalo-section",
          start: "top 70%",
        },
      });

      // 5. Verse Matrix Reveal (Infinite Eyes)
      gsap.fromTo(
        ".verse-eye",
        { opacity: 0, scale: 0.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: { each: 0.02, from: "random" },
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: ".verse-matrix",
            start: "top 80%",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-black min-h-screen selection:bg-cyan-500/30 overflow-hidden"
    >
      {/* 1. HERO SECTION: THE THRESHOLD */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_80%)] animate-pulse" />

          {/* The Void Starfield */}
          {stars.map((s) => (
            <div
              key={s.id}
              className="absolute bg-white rounded-full blur-[1px]"
              style={{
                left: s.left,
                top: s.top,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animation: `pulse ${s.duration}s infinite alternate`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}

          <img
            src="/images/visvarupa-core.jpg"
            alt="The Universal Form"
            className="cosmic-bg w-full h-full object-contain opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="hero-reveal relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-cyan-500/40" />
            <Hexagon
              size={16}
              className="text-cyan-400 animate-[spin_10s_linear_infinite]"
            />
            <span className="text-cyan-400 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 11
            </span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>

          <h1 className="text-6xl md:text-[10rem] font-serif text-white mb-6 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] leading-none">
            Viśvarūpa <span className="italic text-cyan-400">Darśana</span>
          </h1>

          <p className="text-stone-400 italic text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            "I am what you call the World. Or perhaps the Universe. Or perhaps
            God. I am All, and I am One."
          </p>
        </div>
      </section>

      {/* 2. THE GATE (DIVINE SIGHT - VERSE 11.8) */}
      <section className="py-40 px-6 gate-section relative bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="divine-eye-core w-32 h-32 mx-auto border border-cyan-500/30 rounded-full flex items-center justify-center mb-12 relative">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full animate-ping" />
            <Eye size={40} className="text-cyan-400" />
          </div>
          <h2 className="text-cyan-400/60 text-[10px] font-black tracking-[0.6em] uppercase mb-8">
            Divya Dṛṣṭi (Divine Sight)
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-300 leading-snug italic mb-10">
            "But you cannot see Me with your present eyes. Therefore, I give you
            divine sight. Behold My mystic opulence!"
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-10 bg-cyan-500/20" />
            <p className="text-stone-500 font-bold tracking-[0.4em] text-xs uppercase">
              Verse 11.08
            </p>
            <div className="h-px w-10 bg-cyan-500/20" />
          </div>
        </div>
      </section>

      {/* 3. THE FLOOD OF KNOWLEDGE (RADIANCE - VERSE 11.12) */}
      <section className="py-48 px-6 relative overflow-hidden bg-black">
        {/* The Blinding Light Effect (The Truth Silhouette) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] flex items-center justify-center pointer-events-none">
          <div className="supernova-core absolute w-[200px] h-[200px] bg-white rounded-full blur-[80px] opacity-80" />
          <div className="absolute w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Sun
            className="text-white mx-auto mb-12 animate-[spin_10s_linear_infinite]"
            size={56}
          />
          <h2 className="text-white text-[10px] font-black tracking-[0.6em] uppercase mb-10">
            The Infinite Overload
          </h2>

          <blockquote className="text-4xl md:text-7xl font-serif text-white leading-[1.2] italic mb-12 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            "If the radiance of a thousand suns were to burst forth at once in
            the sky, that would be like the splendor of the Mighty One."
          </blockquote>
        </div>
      </section>

      {/* 4. THE UNBENDING LAW OF THE COSMOS (VERSE 11.32) */}
      <section className="py-40 px-6 border-y border-white/5 relative kalo-section bg-[#020202]">
        {/* Subtle red/amber glow for Equivalent Exchange/Destruction */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="kalo-card p-12 md:p-16 bg-black backdrop-blur-2xl border border-red-500/20 rounded-[3rem] relative overflow-hidden group shadow-[0_0_50px_rgba(220,38,38,0.05)]">
            <Fingerprint className="absolute -top-10 -right-10 w-64 h-64 text-red-500/5 group-hover:text-red-500/10 transition-colors duration-1000" />
            <h4 className="text-white font-serif text-6xl mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
              "Kālo 'smi..."
            </h4>
            <p className="text-stone-200 text-3xl font-serif italic leading-relaxed mb-8 relative z-10">
              "I am mighty Time, the source of destruction that comes forth to
              annihilate the worlds."
            </p>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              This is the unbending law of physics and karma. The warriors on
              the field are already crushed in the blazing mouths of Time. They
              are dead by the absolute math of the universe.
            </p>
            <div className="mt-8 text-red-500/60 text-[10px] tracking-[0.4em] uppercase font-black">
              Verse 11.32
            </div>
          </div>

          <div className="space-y-8 pl-0 lg:pl-12 relative z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <Zap size={14} className="text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">
                The Cosmic Math
              </span>
            </div>
            <h3 className="text-white font-serif text-5xl leading-tight">
              You Are Merely The <br />
              <span className="text-cyan-400 italic">Instrument</span>
            </h3>
            <p className="text-stone-400 text-xl leading-relaxed font-light">
              Krishna does not act out of malice, but absolute order. He tells
              Arjuna: "Therefore, stand up and win glory! They are already
              killed by Me."
            </p>
            <div className="p-6 border-l-2 border-cyan-500 bg-cyan-950/20 text-cyan-100/80 font-mono text-sm tracking-widest uppercase">
              "Nimitta-mātraṃ bhava, Savyasāchin."
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERSE MATRIX: THE INFINITE EYES (55 SHLOKAS) */}
      <section className="py-40 px-6 bg-black verse-matrix relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] text-cyan-500/[0.02] pointer-events-none select-none">
          <InfinityIcon size={800} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                55 Faces of Truth
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Step into the overwhelming vision of the Absolute.
              </p>
            </div>
            <div className="text-cyan-600/10 text-[12rem] font-black select-none leading-none">
              11
            </div>
          </div>

          {/* UPGRADED COSMIC SHARD CARDS */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4">
            {Array.from({ length: 55 }, (_, i) => (
              <Link
                key={i}
                href={`/shlokas/chapter11/verse${i + 1}`}
                className="verse-eye relative aspect-square bg-[#050a14]/80 backdrop-blur-md border border-cyan-900/30 rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group"
              >
                {/* Internal Cosmic Flare (Hidden until hover) */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Pulsing Top Star */}
                <div className="absolute top-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                {/* Verse Number */}
                <span className="text-stone-500 group-hover:text-white font-serif text-2xl relative z-10 transition-colors duration-500 drop-shadow-md">
                  {i + 1}
                </span>

                {/* Secret Slide-up Subtext */}
                <span className="absolute bottom-3 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-[8px] tracking-[0.3em] text-cyan-300 uppercase font-black transition-all duration-500">
                  Darśana
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE RETURN TO INTIMACY (TRANSITION TO CH 12) */}
      <section className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-black to-[#040a14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-cyan-500/50 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/10"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Divine Sparks
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Vibhūti Yoga
              </span>
            </Link>

            <Link
              href="/Adhyayas/12"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-blue-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-400">
                Close the Gate. Return to Love.
              </span>
              <span className="font-serif italic text-3xl md:text-5xl text-white group-hover:text-blue-400 transition-colors duration-700 mt-2">
                Bhakti Yoga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                The Path of Intimate Devotion.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </main>
  );
}
