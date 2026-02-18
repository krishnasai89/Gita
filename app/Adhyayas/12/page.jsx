"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Sparkles, Smile, Sun } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya12() {
  const container = useRef(null);
  const heartRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // 1. The Breathing Devotional Heart Animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(heartRef.current, {
      scale: 1.1,
      duration: 2,
      ease: "sine.inOut",
    });

    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Hero Content Entrance
    gsap.from(".hero-text", {
      opacity: 0,
      y: 30,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-rose-500/30"
    >
      {/* 1. HERO SECTION: THE PATH OF LOVE */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya12.jpg"
            alt="Devotional Peace"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-rose-950/10 to-stone-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-text text-rose-400 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 12
          </p>
          <h1 className="hero-text text-6xl md:text-9xl font-serif text-stone-100 mb-8">
            Bhakti <span className="text-rose-500 italic">Yoga</span>
          </h1>
          <p className="hero-text text-stone-500 italic text-xl max-w-xl mx-auto font-light">
            "Of all yogis, the one who adores Me with faith is considered by Me
            to be the most devout."
          </p>
        </div>
      </section>

      {/* 2. THE DEVOTIONAL HEART ANIMATION (VERSE 12.13-14) */}
      <section className="py-32 px-6 bg-stone-900/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-rose-500 text-[10px] font-black tracking-[0.5em] uppercase mb-20">
            The Qualities of a Devotee
          </h2>

          <div className="relative flex justify-center items-center mb-20">
            {/* Pulsing Glow Background */}
            <div
              ref={glowRef}
              className="absolute w-64 h-64 bg-rose-500/20 rounded-full blur-[80px] opacity-40"
            />

            {/* The Animated Heart Icon */}
            <div
              ref={heartRef}
              className="relative z-10 text-rose-500 drop-shadow-[0_0_20px_rgba(244,63,94,0.5)]"
            >
              <Heart size={120} fill="currentColor" strokeWidth={0.5} />
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-serif text-stone-200 leading-relaxed italic mb-10 px-4">
            "He who has no ill will to any being, who is friendly and
            compassionate, free from egoism and self-sense..."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="space-y-2">
              <Smile className="text-rose-400 mx-auto" size={24} />
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                Maitraḥ (Friendly)
              </p>
            </div>
            <div className="space-y-2">
              <Sparkles className="text-rose-400 mx-auto" size={24} />
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                Karuṇa (Compassionate)
              </p>
            </div>
            <div className="space-y-2">
              <Sun className="text-rose-400 mx-auto" size={24} />
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                Nirmamaḥ (Non-attached)
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-rose-400 font-serif text-xl">ॐ</div>
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                Samaḥ (Equanimous)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LADDER OF BHAKTI (VERSE 12.8-12) */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-rose-500 text-[10px] font-black tracking-[0.4em] uppercase">
                The Choice of Paths
              </h3>
              <h4 className="text-4xl font-serif text-stone-100 leading-tight">
                If you cannot{" "}
                <span className="text-rose-400 italic">meditate</span>, then
                work. If you cannot{" "}
                <span className="text-rose-400 italic">work</span>, then
                surrender.
              </h4>
              <p className="text-stone-400 text-lg leading-relaxed font-light">
                Krishna offers a ladder of practice. First, fix your mind on Me.
                If you can't, practice Yoga. If you can't, do work for Me. If
                you can't even do that, just renounce the fruits of your
                actions.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "Abhyāsa", desc: "Constant Practice" },
                { step: "Mat-Karma", desc: "Work for the Divine" },
                { step: "Phala-Tyāga", desc: "Renouncing the Fruits" },
                { step: "Tyāgāc Chāntiḥ", desc: "Peace through Renunciation" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-stone-900/40 border border-white/5 rounded-2xl flex justify-between items-center group hover:border-rose-500/30 transition-all"
                >
                  <span className="text-stone-500 font-mono text-xs">
                    0{i + 1}
                  </span>
                  <span className="text-stone-200 font-serif text-lg">
                    {item.step}
                  </span>
                  <span className="text-rose-500/40 group-hover:text-rose-500 transition-colors text-xs uppercase tracking-tighter">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE GRID (20 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">20 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                Bhakti Yoga Verse Index
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/12/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-rose-500/10 hover:border-rose-500 transition-all group rounded-lg"
              >
                <span className="text-stone-600 group-hover:text-rose-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-rose-950/10">
        <Link href="/Adhyayas/13" className="group">
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4 block">
            To the Field of Knowledge
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-rose-400 transition-colors">
            Adhyāya 13: Kṣetra Kṣetrajña Vibhāga Yoga →
          </h4>
          <p className="text-stone-700 italic mt-4">
            Discriminating the Body from the Soul.
          </p>
        </Link>
      </section>
    </main>
  );
}
