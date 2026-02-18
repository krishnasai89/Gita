"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, ShieldCheck, User, Layers, Eye } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya13() {
  const container = useRef(null);
  const [activeLayer, setActiveLayer] = useState(null);

  const fieldComponents = [
    {
      id: "elements",
      name: "5 Gross Elements",
      desc: "Earth, Water, Fire, Air, and Space.",
    },
    {
      id: "senses",
      name: "10 Senses",
      desc: "The five senses of perception and five organs of action.",
    },
    {
      id: "mind",
      name: "Mind & Intellect",
      desc: "The internal instruments of thought and decision.",
    },
    {
      id: "ego",
      name: "The Ego",
      desc: "Ahamkāra—the sense of 'I-ness' that claims ownership.",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-title",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" }
    );

    // Stagger for the Anatomy cards
    gsap.from(".anatomy-card", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".anatomy-grid",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-emerald-500/30"
    >
      {/* 1. HERO SECTION: THE FIELD & THE KNOWER */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya13.jpg"
            alt="The Field of Nature"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-emerald-950/20 to-stone-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="hero-title text-emerald-500 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 13
          </p>
          <h1 className="hero-title text-6xl md:text-9xl font-serif text-stone-100 mb-8">
            Kṣetra <span className="text-emerald-400 italic">Vibhāga</span>
          </h1>
          <p className="hero-title text-stone-500 italic text-xl max-w-xl mx-auto font-light">
            "This body is called the Field, and he who knows it is called the
            Knower of the Field."
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE ANATOMY: THE COMPONENTS OF THE FIELD (VERSE 13.6-7) */}
      <section className="py-32 px-6 anatomy-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-emerald-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              The Structure of Existence
            </h3>
            <h2 className="text-4xl font-serif text-stone-100 italic">
              The 24 Components of the "Field"
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Diagram Visual */}
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute w-full h-full border border-emerald-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] border border-emerald-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

              {/* Silhouette representing the body */}
              <div className="relative z-10 flex flex-col items-center">
                <User size={120} className="text-stone-700 mb-4" />
                <div className="bg-emerald-500/10 border border-emerald-500/40 px-6 py-2 rounded-full backdrop-blur-md">
                  <span className="text-emerald-400 font-serif tracking-widest uppercase text-xs">
                    Kṣetra (The Field)
                  </span>
                </div>
              </div>

              {/* Floating Observer Eye representing the Soul */}
              <div className="absolute -top-10 right-10 flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/5 border border-white/20 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-emerald-500 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <Eye size={24} />
                </div>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                  The Knower
                </span>
              </div>
            </div>

            {/* Component Cards */}
            <div className="grid grid-cols-1 gap-4">
              {fieldComponents.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveLayer(item.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`p-8 rounded-2xl border transition-all duration-500 cursor-help ${
                    activeLayer === item.id
                      ? "bg-emerald-950/40 border-emerald-500 translate-x-4"
                      : "bg-stone-900/40 border-white/5"
                  }`}
                >
                  <h4
                    className={`font-serif text-xl mb-2 transition-colors ${
                      activeLayer === item.id
                        ? "text-emerald-400"
                        : "text-stone-300"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DEFINITION OF KNOWLEDGE (VERSE 13.8-12) */}
      <section className="py-32 px-6 border-y border-white/5 bg-emerald-950/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase mb-12">
            True Jñāna (Wisdom)
          </h2>
          <p className="text-2xl md:text-3xl font-serif text-stone-200 leading-relaxed italic mb-12">
            "Humility, unpretentiousness, non-violence, forgiveness,
            uprightness, service to the teacher, purity, and steadfastness—this
            is declared to be Knowledge."
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-stone-900 border border-white/5 rounded-full text-stone-500 text-[10px] uppercase font-bold tracking-widest">
              Amanitvam (Humility)
            </span>
            <span className="px-4 py-2 bg-stone-900 border border-white/5 rounded-full text-stone-500 text-[10px] uppercase font-bold tracking-widest">
              Ahimsā (Non-violence)
            </span>
            <span className="px-4 py-2 bg-stone-900 border border-white/5 rounded-full text-stone-500 text-[10px] uppercase font-bold tracking-widest">
              Shaucam (Purity)
            </span>
          </div>
        </div>
      </section>

      {/* 4. VERSE GRID (35 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">35 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
              The Field & The Knower Index
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-12 gap-3">
            {Array.from({ length: 35 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/13/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500 transition-all group"
              >
                <span className="text-stone-600 group-hover:text-emerald-400 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-emerald-950/10">
        <Link href="/Adhyayas/14" className="group">
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4 block">
            The Three Forces of Nature
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-emerald-400 transition-colors">
            Adhyāya 14: Guṇatraya Vibhāga Yoga →
          </h4>
          <p className="text-stone-700 italic mt-4">
            Understanding the three modes of material nature.
          </p>
        </Link>
      </section>
    </main>
  );
}
