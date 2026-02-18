"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Zap, Infinity as InfinityIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya11() {
  const container = useRef(null);
  const scaleRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // 1. THE UNIVERSAL SCALE ANIMATION (Pinning & Zooming)
    gsap.to(imgRef.current, {
      scale: 8, // Intense zoom to reveal "infinite" detail
      scrollTrigger: {
        trigger: scaleRef.current,
        start: "top top",
        end: "+=300%", // Long scroll for dramatic effect
        pin: true,
        scrub: 1,
      },
    });

    // 2. Text Parallax over the zoom
    gsap.to(".zoom-text", {
      y: -200,
      scrollTrigger: {
        trigger: scaleRef.current,
        start: "top 20%",
        scrub: 2,
      },
    });

    // 3. Hero Entrance
    gsap.fromTo(
      ".hero-reveal",
      { filter: "blur(20px)" },
      { filter: "blur(0px)", duration: 2, ease: "power2.out" }
    );
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-blue-500/30"
    >
      {/* 1. HERO SECTION: THE DIVINE SIGHT */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />
        </div>

        <div className="hero-reveal relative z-10 text-center px-6">
          <p className="text-blue-500 tracking-[1em] text-[10px] font-black uppercase mb-6">
            Adhyāya 11
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-stone-100 mb-8 leading-none">
            Viśvarūpa <span className="text-blue-400 italic">Darśana</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-stone-500 italic text-xl font-light">
            <Eye className="text-blue-500" size={20} />
            <p>"Behold My hundreds and thousands of diverse divine forms."</p>
          </div>
        </div>
      </section>

      {/* 2. THE RADIANCE OF A THOUSAND SUNS (VERSE 11.12) */}
      <section className="py-40 px-6 relative overflow-hidden bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-amber-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Illumination
          </h2>
          <p className="text-3xl md:text-5xl font-serif text-stone-100 leading-tight italic mb-10">
            "If the radiance of a thousand suns were to burst forth at once in
            the sky, that would be like the splendor of the Mighty One."
          </p>
          <div className="w-24 h-px bg-blue-500/50 mx-auto" />
        </div>
        {/* Abstract Light Flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* 3. THE UNIVERSAL SCALE INTERACTION */}
      <section
        ref={scaleRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            ref={imgRef}
            src="/images/visvarupa-core.jpg"
            alt="The Universal Form Core"
            className="w-[150vw] md:w-[60vw] h-auto object-contain opacity-60"
          />
        </div>

        <div className="zoom-text absolute z-20 text-center opacity-0 px-6">
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-4 drop-shadow-2xl">
            Infinite Faces.
          </h3>
          <p className="text-blue-400 tracking-[0.4em] uppercase font-bold text-sm">
            Infinite Eyes. Infinite Wonders.
          </p>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 text-[10px] text-stone-500 uppercase tracking-[0.5em] font-black animate-bounce">
          Scroll to Witness
        </div>
      </section>

      {/* 4. THE FORM OF TIME (VERSE 11.32) */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="p-12 bg-stone-900/40 border-l-4 border-blue-600 rounded-r-3xl">
              <h4 className="text-blue-500 font-serif text-4xl mb-8">
                "Kālo ’smi"
              </h4>
              <p className="text-stone-200 text-2xl font-serif italic leading-relaxed mb-6">
                "I am mighty Time, the source of destruction that comes forth to
                annihilate the worlds."
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                Arjuna sees all the warriors on the field rushing into Krishna's
                many mouths. Krishna explains that even without Arjuna's action,
                these men are already "slain" by Time.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-stone-100 font-serif text-4xl mb-6">
              Be the <span className="text-blue-500 italic">Instrument</span>
            </h3>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              Krishna tells Arjuna: "Therefore, stand up and win glory! Conquer
              your enemies and enjoy an opulent kingdom. They are already killed
              by Me; be you merely an instrument, O Savyasāchin."
            </p>
            <div className="mt-8 flex items-center gap-2 text-blue-500/60 text-xs font-bold uppercase tracking-widest">
              <Zap size={14} />
              <span>Nimitta-mātraṃ bhava — Verse 11.33</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VERSE GRID (55 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex items-center justify-between">
            <h2 className="text-4xl font-serif text-stone-100">55 Shlokas</h2>
            <InfinityIcon className="text-blue-900/40" size={40} />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-11 gap-3">
            {Array.from({ length: 55 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/11/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-blue-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RETURN TO DEVOTION */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-blue-950/20">
        <Link href="/Adhyayas/12" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block">
            From Awe to Love
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-blue-400 transition-colors">
            Adhyāya 12: Bhakti Yoga →
          </h4>
          <p className="text-stone-700 italic mt-4">
            The Path of Devotional Service.
          </p>
        </Link>
      </section>
    </main>
  );
}
