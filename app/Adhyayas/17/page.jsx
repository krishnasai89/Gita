"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Utensils,
  Gift,
  MessageSquare,
  Flame,
  Leaf,
  Zap,
  Ghost,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya17() {
  const container = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Food");

  const categories = {
    Food: [
      {
        mode: "Sattva",
        icon: <Leaf className="text-emerald-500" />,
        desc: "Juicy, fatty, wholesome, and pleasing to the heart.",
        effect: "Promotes life, purity, and health.",
      },
      {
        mode: "Rajas",
        icon: <Zap className="text-orange-500" />,
        desc: "Bitter, sour, salty, excessively hot, pungent, and dry.",
        effect: "Produces pain, grief, and disease.",
      },
      {
        mode: "Tamas",
        icon: <Ghost className="text-stone-600" />,
        desc: "Stale, tasteless, putrid, rotten, and impure.",
        effect: "Leads to darkness and ignorance.",
      },
    ],
    Speech: [
      {
        mode: "Sattva",
        icon: <MessageSquare className="text-emerald-500" />,
        desc: "Words that are truthful, pleasant, and beneficial.",
        effect: "The austerity of speech.",
      },
      {
        mode: "Rajas",
        icon: <MessageSquare className="text-orange-500" />,
        desc: "Speaking to gain prestige, honor, or for show.",
        effect: "Unstable and fleeting.",
      },
      {
        mode: "Tamas",
        icon: <MessageSquare className="text-stone-600" />,
        desc: "Speaking to delude or harm oneself and others.",
        effect: "Self-destructive.",
      },
    ],
    Charity: [
      {
        mode: "Sattva",
        icon: <Gift className="text-emerald-500" />,
        desc: "Given to a worthy person, at the right time and place.",
        effect: "Pure giving without expectation.",
      },
      {
        mode: "Rajas",
        icon: <Gift className="text-orange-500" />,
        desc: "Given with a view to receiving something in return.",
        effect: "Done grudgingly or for reward.",
      },
      {
        mode: "Tamas",
        icon: <Gift className="text-stone-600" />,
        desc: "Given at the wrong place/time to unworthy persons.",
        effect: "Disrespectful and contemptuous.",
      },
    ],
  };

  useEffect(() => {
    gsap.from(".hero-content", {
      opacity: 1,
      y: 30,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".category-card", {
      opacity: 1,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [activeCategory]);

  return (
    <main
      ref={container}
      className="bg-stone-950 min-h-screen selection:bg-stone-500/30"
    >
      {/* 1. HERO SECTION: THE THREEFOLD FAITH */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya17.jpg"
            alt="Faith and Nature"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/40 to-stone-950" />
        </div>

        <div className="hero-content relative z-10 text-center px-6">
          <p className="text-stone-500 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 17
          </p>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-100 mb-8">
            Śraddhātraya <span className="text-stone-400 italic">Vibhāga</span>
          </h1>
          <p className="text-stone-500 italic text-xl max-w-2xl mx-auto font-light leading-relaxed">
            "The faith of each is in accordance with his nature, O Arjuna. A man
            consists of his faith; as his faith is, so is he."
          </p>
        </div>
      </section>

      {/* 2. GUNA FOOD & LIFESTYLE CHART */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-stone-600 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              The Science of Living
            </h3>
            <h2 className="text-4xl font-serif text-stone-100">
              Threefold{" "}
              <span className="italic text-stone-500">Manifestations</span>
            </h2>
          </div>
          [Image illustrating the threefold faith (Shraddha) in the modes of
          nature]
          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-16">
            {Object.keys(categories).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                  activeCategory === cat
                    ? "bg-stone-100 text-stone-950 border-stone-100"
                    : "text-stone-500 border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories[activeCategory].map((item, i) => (
              <div
                key={i}
                className="category-card p-10 bg-stone-900/40 border border-white/5 rounded-[2.5rem] hover:bg-stone-900 transition-colors"
              >
                <div className="mb-8">{item.icon}</div>
                <h4 className="text-stone-100 font-serif text-2xl mb-4 tracking-tight">
                  {item.mode}
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed mb-6 font-light">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-stone-600 text-[10px] font-black uppercase tracking-widest mb-1">
                    Impact
                  </p>
                  <p className="text-stone-300 text-xs italic">{item.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OM TAT SAT: THE FINAL PURIFIER (VERSE 17.23-28) */}
      <section className="py-32 px-6 bg-stone-900/20 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-12">
            The Triple Designation
          </h2>
          <h3 className="text-6xl md:text-8xl font-serif text-stone-200 mb-12 flex justify-center gap-8">
            <span>ॐ</span> <span>तत्</span> <span>सत्</span>
          </h3>
          <p className="text-stone-400 text-xl font-light italic leading-relaxed">
            "OM-TAT-SAT is declared to be the threefold designation of Brahman.
            Acts of sacrifice, gift, and penance are always begun with 'OM' by
            the seekers of liberation."
          </p>
          <p className="mt-12 text-stone-600 text-xs leading-relaxed max-w-2xl mx-auto">
            Whatever is done without faith—be it sacrifice, gift, or penance—is
            called 'Asat' (unreal). It is of no value here or hereafter.
          </p>
        </div>
      </section>

      {/* 4. VERSE GRID (28 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">28 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
              The Threefold Faith Index
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-4">
            {Array.from({ length: 28 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/17/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-stone-500/10 hover:border-stone-500 transition-all group rounded-2xl"
              >
                <span className="text-stone-600 group-hover:text-stone-100 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER: THE CONCLUSION */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-stone-900/30">
        <Link href="/Adhyayas/18" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.6em] mb-4 block animate-pulse">
            The Ultimate Conclusion
          </span>
          <h4 className="text-5xl md:text-7xl font-serif text-stone-400 group-hover:text-stone-100 transition-all duration-700">
            Adhyāya 18: Mokṣa Sannyāsa Yoga →
          </h4>
          <p className="text-stone-600 italic mt-6 text-xl">
            Liberation through Renunciation.
          </p>
        </Link>
      </section>
    </main>
  );
}
