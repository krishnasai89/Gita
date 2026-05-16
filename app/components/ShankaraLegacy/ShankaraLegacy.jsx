"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Library, History, Sparkles, BookOpen } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShankaraLegacy() {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });

      tl.fromTo(
        ".legacy-image",
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 1.1 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
        },
      )
        .from(
          ".legacy-text",
          {
            opacity: 1,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )
        .from(
          ".stat-badge",
          {
            opacity: 1,
            scale: 0.8,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative bg-[#080705] py-40 px-6 overflow-hidden"
    >
      {/* 1. ATMOSPHERIC TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* 2. BACKGROUND WATERMARK */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none">
        Commentary
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* LEFT SIDE: THE ICONIC REPRESENTATION */}
        <div className="flex-1 relative">
          {/* Spiritual Aura Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="legacy-image relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
            <img
              src="/Images/adi-shankara.jpg"
              alt="Adi Shankara with Disciples"
              className="w-full h-auto grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
            />
            {/* Inner Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080705] via-transparent to-transparent" />

            {/* Floating 'Bhashya' Label */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-stone-950/80 backdrop-blur-md border border-amber-500/20 rounded-full">
              <BookOpen size={14} className="text-amber-500" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/80 font-bold">
                Gita Bhashya
              </span>
            </div>
          </div>

          {/* Abstract Floating Frame */}
          <div className="absolute -top-8 -left-8 w-24 h-24 border-t border-l border-amber-500/30 rounded-tl-3xl -z-0" />
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b border-r border-amber-500/30 rounded-br-3xl -z-0" />
        </div>

        {/* RIGHT SIDE: THE PHILOSOPHICAL CORE */}
        <div className="flex-1 z-10">
          <div className="legacy-text flex items-center gap-3 mb-6">
            <Sparkles size={16} className="text-amber-500/60" />
            <h3 className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-black">
              The Sovereign Lineage
            </h3>
          </div>

          <h2 className="legacy-text text-5xl md:text-7xl font-serif text-white mb-10 leading-tight tracking-tight">
            Distilled by <br />
            <span className="italic text-amber-500 drop-shadow-sm">
              Adi Shankara
            </span>
          </h2>

          <div className="legacy-text space-y-8 text-stone-400 font-light leading-relaxed text-xl max-w-xl">
            <p>
              In the 8th Century, a single master consolidated the diverse
              recensions of the Mahabharata (Śatasahasrī Saṃhitā ) into the{" "}
              <span className="text-stone-100 font-medium">
                700-verse standard
              </span>{" "}
              we hold sacred today.
            </p>
            <p>
              Through his monumental commentary, he shifted the perception of
              the Gita from a regional heroic song to the{" "}
              <span className="text-amber-200/60">universal roadmap</span> for
              the liberation of the individual soul.
            </p>
          </div>

          {/* QUOTE BLOCK */}
          <div className="legacy-text relative mt-12 mb-16 p-8 border-l-2 border-amber-500/20 bg-white/[0.02] backdrop-blur-sm rounded-r-2xl">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Library size={40} />
            </div>
            <p className="text-stone-300 font-serif italic text-2xl leading-snug">
              "The Gita is the pure milk of the Upanishads, drawn for the
              benefit of humanity."
            </p>
          </div>

          {/* STATS BADGES */}
          <div className="flex flex-wrap gap-6 lg:gap-12">
            <div className="stat-badge flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <History size={16} className="text-amber-500/40" />
                <span className="text-white text-3xl font-serif">8th CE</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 font-bold">
                Standardization
              </span>
            </div>

            <div className="stat-badge flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-amber-500/40" />
                <span className="text-white text-3xl font-serif">700</span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 font-bold">
                Infallible Verses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
