"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, Flame, Moon, Sparkles, Zap, Ghost } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya14() {
  const container = useRef(null);
  const [activeGuna, setActiveGuna] = useState("sattva");

  const gunaData = {
    sattva: {
      title: "Sattva",
      sanskrit: "सत्त्व",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/30",
      desc: "The mode of goodness, purity, and light. It binds the soul through attachment to happiness and knowledge.",
      symptoms: ["Clarity", "Peace", "Wisdom", "Health"],
      icon: <Sun size={40} />,
    },
    rajas: {
      title: "Rajas",
      sanskrit: "रजस",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      desc: "The mode of passion and intense desire. It binds the soul through attachment to action and the fruits of work.",
      symptoms: ["Greed", "Restlessness", "Longing", "Stress"],
      icon: <Flame size={40} />,
    },
    tamas: {
      title: "Tamas",
      sanskrit: "तमस",
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      border: "border-purple-600/30",
      desc: "The mode of ignorance and darkness. It binds the soul through delusion, laziness, and excessive sleep.",
      symptoms: ["Confusion", "Idleness", "Error", "Sleep"],
      icon: <Ghost size={40} />,
    },
  };

  useEffect(() => {
    gsap.from(".guna-card", {
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [activeGuna]);

  return (
    <main ref={container} className="bg-stone-950 min-h-screen">
      {/* 1. HERO SECTION: THE THREE THREADS */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/adhyaya14.jpg"
            alt="The Gunas"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/40 to-stone-950" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-stone-500 tracking-[0.8em] text-[10px] font-black uppercase mb-6">
            Adhyāya 14
          </p>
          <h1 className="text-6xl md:text-9xl font-serif text-stone-100 mb-8">
            Guṇatraya <span className="text-amber-500 italic">Vibhāga</span>
          </h1>
          <p className="text-stone-400 italic text-xl max-w-xl mx-auto font-light">
            "Material nature consists of three modes—Sattva, Rajas, and Tamas.
            These bind the imperishable soul to the body."
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE GUNA EXPLORER */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
              Internal Psychology
            </h2>
            <h3 className="text-4xl font-serif text-stone-100">
              The Fabric of Personality
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Guna Selection Sidebar */}
            <div className="flex lg:flex-col gap-4 w-full lg:w-1/4">
              {Object.keys(gunaData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveGuna(key)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-500 flex flex-col ${
                    activeGuna === key
                      ? `${gunaData[key].bg} ${gunaData[key].border}`
                      : "bg-stone-900/40 border-white/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`text-[10px] font-black uppercase tracking-widest mb-1 ${gunaData[key].color}`}
                  >
                    {gunaData[key].sanskrit}
                  </span>
                  <span className="text-stone-100 font-serif text-2xl">
                    {gunaData[key].title}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Guna Detail Card */}
            <div
              className={`guna-card flex-1 p-12 md:p-20 rounded-[3rem] border transition-colors duration-1000 ${gunaData[activeGuna].bg} ${gunaData[activeGuna].border} relative overflow-hidden`}
            >
              <div
                className={`absolute top-10 right-10 opacity-10 ${gunaData[activeGuna].color}`}
              >
                {gunaData[activeGuna].icon}
              </div>

              <div className="relative z-10">
                <h4
                  className={`text-5xl font-serif mb-8 ${gunaData[activeGuna].color}`}
                >
                  {gunaData[activeGuna].title}
                </h4>
                <p className="text-stone-200 text-xl leading-relaxed font-light mb-12 max-w-xl">
                  {gunaData[activeGuna].desc}
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {gunaData[activeGuna].symptoms.map((symptom, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${gunaData[
                          activeGuna
                        ].color.replace("text", "bg")}`}
                      />
                      <span className="text-stone-400 uppercase tracking-widest text-[10px] font-bold">
                        {symptom}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEYOND THE MODES (VERSE 14.19-20) */}
      <section className="py-32 px-6 border-y border-white/5 bg-stone-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="text-amber-500 mx-auto mb-8" size={32} />
          <h2 className="text-stone-100 font-serif text-4xl mb-8 italic">
            Guṇātīta: Transcending the Gunas
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-12">
            "When the seer beholds no other agent than these modes, and knows
            That which is higher than the modes, he attains My Being."
          </p>
          <div className="p-8 border border-white/10 bg-black/40 rounded-2xl">
            <p className="text-stone-300 font-serif italic text-xl">
              "He who is unshakeable by the modes, who sits as a witness, and
              remains steady in pleasure and pain—he is said to have crossed the
              Gunas."
            </p>
            <p className="mt-6 text-amber-500 text-[10px] font-black tracking-widest uppercase">
              Verse 14.22-25
            </p>
          </div>
        </div>
      </section>

      {/* 4. VERSE GRID (27 SHLOKAS) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">27 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">
              The Three Modes of Nature Index
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4">
            {Array.from({ length: 27 }, (_, i) => (
              <Link
                key={i}
                href={`/chapter/14/verse/${i + 1}`}
                className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-amber-500/10 hover:border-amber-500 transition-all group rounded-xl"
              >
                <span className="text-stone-600 group-hover:text-amber-500 font-serif text-xl">
                  {i + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-amber-950/10">
        <Link href="/Adhyayas/15" className="group">
          <span className="text-[10px] text-stone-700 uppercase tracking-[0.6em] mb-4 block">
            The Tree of Life
          </span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-amber-500 transition-colors">
            Adhyāya 15: Puruṣottama Yoga →
          </h4>
          <p className="text-stone-700 italic mt-4">
            The Yoga of the Supreme Person.
          </p>
        </Link>
      </section>
    </main>
  );
}
