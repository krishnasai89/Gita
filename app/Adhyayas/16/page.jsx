"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Flame, Skull, Sun, Heart, Swords } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya16() {
  const container = useRef(null);
  const [filter, setFilter] = useState("divine");

  const traits = {
    divine: [
      { trait: "Abhayam", mean: "Fearlessness" },
      { trait: "Ahimsā", mean: "Non-violence" },
      { trait: "Satyam", mean: "Truthfulness" },
      { trait: "Dānam", mean: "Charity" },
      { trait: "Akrodhaḥ", mean: "Absence of Anger" },
      { trait: "Hrīḥ", mean: "Modesty" },
    ],
    demoniac: [
      { trait: "Dambhaḥ", mean: "Hypocrisy" },
      { trait: "Darpaḥ", mean: "Arrogance" },
      { trait: "Abhimānaḥ", mean: "Self-conceit" },
      { trait: "Krodhaḥ", mean: "Anger" },
      { trait: "Pāruṣyam", mean: "Harshness" },
      { trait: "Ajñānam", mean: "Ignorance" },
    ],
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 2, ease: "power4.out" }
    );

    gsap.from(".trait-card", {
      x: filter === "divine" ? -20 : 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [filter]);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-red-500/30"
    >
      {/* 1. HERO SECTION: THE DUALITY */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya16.jpg"
            alt="Light vs Shadow"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/20 to-stone-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-title text-stone-500 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 16
          </p>
          <h1 className="hero-title text-5xl md:text-8xl font-serif text-stone-100 mb-8">
            Daivāsura <span className="text-red-600 italic">Vibhāga</span>
          </h1>
          <p className="hero-title text-stone-400 italic text-xl max-w-xl mx-auto font-light leading-relaxed">
            "Divine properties are deemed to lead to liberation; the demoniacal
            to bondage."
          </p>
        </div>
      </section>

      {/* 2. THE MIRROR OF THE SELF: INTERACTIVE LIST */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <div className="text-left">
              <h2 className="text-4xl font-serif text-stone-100 mb-4">
                The Mirror of the Self
              </h2>
              <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">
                Contrast your nature against the eternal archetypes
              </p>
            </div>

            <div className="flex bg-stone-900/50 p-1 rounded-full border border-white/5">
              <button
                onClick={() => setFilter("divine")}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === "divine"
                    ? "bg-stone-100 text-stone-950"
                    : "text-stone-500 hover:text-white"
                }`}
              >
                Divine Traits
              </button>
              <button
                onClick={() => setFilter("demoniac")}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === "demoniac"
                    ? "bg-red-600 text-white"
                    : "text-stone-500 hover:text-white"
                }`}
              >
                Demoniac Traits
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {traits[filter].map((item, i) => (
              <div
                key={i}
                className={`trait-card p-10 bg-stone-900/40 border rounded-3xl transition-all duration-700 ${
                  filter === "divine"
                    ? "border-emerald-500/10 hover:border-emerald-500/40"
                    : "border-red-900/20 hover:border-red-600/40"
                }`}
              >
                {filter === "divine" ? (
                  <ShieldCheck className="text-emerald-500 mb-6" size={24} />
                ) : (
                  <Flame className="text-red-600 mb-6" size={24} />
                )}
                <h4 className="text-stone-100 font-serif text-2xl mb-1">
                  {item.trait}
                </h4>
                <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">
                  {item.mean}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE THREE GATES TO HELL (VERSE 16.21) */}
      <section className="py-32 px-6 bg-red-950/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-red-600 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Triple Gate of Ruin
          </h3>
          <h2 className="text-4xl font-serif text-stone-100 mb-16 italic">
            "Lust, Anger, and Greed—these are the three gates to hell,
            destructive of the self."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-red-900/20 rounded-2xl bg-black/40 group hover:bg-red-900/10 transition-colors">
              <p className="text-red-600 font-serif text-3xl mb-2">Kāma</p>
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
                Lust / Desire
              </span>
            </div>
            <div className="p-8 border border-red-900/20 rounded-2xl bg-black/40 group hover:bg-red-900/10 transition-colors">
              <p className="text-red-600 font-serif text-3xl mb-2">Krodha</p>
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
                Anger / Wrath
              </span>
            </div>
            <div className="p-8 border border-red-900/20 rounded-2xl bg-black/40 group hover:bg-red-900/10 transition-colors">
              <p className="text-red-600 font-serif text-3xl mb-2">Lobha</p>
              <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">
                Greed / Avarice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE GRID (24 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-4xl font-serif text-stone-100">24 Shlokas</h2>
              <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
                The Divine & Demoniac Index
              </p>
            </div>
            <Swords className="text-red-900/20" size={40} />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-3">
            {Array.from({ length: 24 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/16/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-red-600/10 hover:border-red-600 transition-all group rounded-lg"
              >
                <span className="text-stone-600 group-hover:text-red-600 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-stone-900/20">
        <Link href="/Adhyayas/17" className="group">
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4 block">
            The Logic of Faith
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-stone-100 transition-colors">
            Adhyāya 17: Śraddhātraya Vibhāga Yoga →
          </h4>
        </Link>
      </section>
    </main>
  );
}
