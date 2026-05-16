"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Sun,
  Flame,
  Moon,
  Sparkles,
  Feather,
  Anchor,
  ArrowRight,
  ArrowLeft,
  Hexagon,
  Infinity,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const gunaData = {
  sattva: {
    id: "sattva",
    title: "Sattva",
    sanskrit: "सत्त्व",
    theme: "amber",
    colorText: "text-amber-400",
    colorBg: "bg-amber-500/10",
    colorBorder: "border-amber-500/40",
    colorGlow: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
    gradient: "from-amber-500/20 via-transparent to-transparent",
    desc: "The mode of goodness, purity, and light. It illuminates the mind and frees one from sinful reactions. However, it still binds the soul through attachment to happiness and knowledge.",
    symptoms: ["Clarity", "Peace", "Wisdom", "Health"],
    icon: <Sun size={48} />,
    binding: "Attached to Happiness & Knowledge",
  },
  rajas: {
    id: "rajas",
    title: "Rajas",
    sanskrit: "रजस",
    theme: "red",
    colorText: "text-red-500",
    colorBg: "bg-red-500/10",
    colorBorder: "border-red-500/40",
    colorGlow: "shadow-[0_0_50px_rgba(239,68,68,0.15)]",
    gradient: "from-red-500/20 via-transparent to-transparent",
    desc: "The mode of passion, born of unlimited desires and longings. It drives a person to intense endeavor, binding the soul through attachment to action and the fruits of work.",
    symptoms: ["Greed", "Restlessness", "Ambition", "Stress"],
    icon: <Flame size={48} />,
    binding: "Attached to Action & Results",
  },
  tamas: {
    id: "tamas",
    title: "Tamas",
    sanskrit: "तमस",
    theme: "indigo",
    colorText: "text-indigo-400",
    colorBg: "bg-indigo-500/10",
    colorBorder: "border-indigo-500/40",
    colorGlow: "shadow-[0_0_50px_rgba(99,102,241,0.15)]",
    gradient: "from-indigo-500/20 via-transparent to-transparent",
    desc: "The mode of ignorance, born of darkness and delusion. It prevents one from seeing reality as it is, binding the soul through madness, indolence, and excessive sleep.",
    symptoms: ["Confusion", "Apathy", "Delusion", "Sloth"],
    icon: <Moon size={48} />,
    binding: "Attached to Illusion & Inaction",
  },
};

export default function Adhyaya14() {
  const container = useRef(null);
  const [activeGuna, setActiveGuna] = useState("sattva");
  const active = gunaData[activeGuna];

  useGSAP(
    () => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".hero-element",
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

      // 2. Slow breathing background for Hero
      gsap.to(".hero-gradient-orb", {
        scale: 1.2,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1.5,
      });
    },
    { scope: container },
  );

  // Guna Transition Animation
  useGSAP(
    () => {
      gsap.fromTo(
        ".guna-content",
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
    },
    { dependencies: [activeGuna], scope: container },
  );

  return (
    <main
      ref={container}
      className="bg-[#030303] min-h-screen selection:bg-amber-500/30 overflow-hidden text-stone-300"
    >
      {/* 1. HERO SECTION: THE THREE THREADS */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Tri-color ambient orbs */}
          <div className="hero-gradient-orb absolute top-0 left-1/4 w-[40vw] h-[40vw] bg-amber-500/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="hero-gradient-orb absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="hero-gradient-orb absolute top-1/3 right-1/3 w-[30vw] h-[30vw] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />

          <img
            src="/images/adhyaya14.jpg"
            alt="The Three Modes"
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-[#030303]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="hero-element flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-white/20" />
            <Hexagon size={16} className="text-white/60" />
            <span className="text-stone-400 tracking-[0.8em] text-[10px] font-black uppercase">
              Adhyāya 14
            </span>
            <div className="h-px w-10 bg-white/20" />
          </div>

          <h1 className="hero-element text-6xl md:text-[8rem] font-serif text-white mb-6 drop-shadow-2xl leading-none">
            Guṇatraya <br />
            <span className="italic text-amber-500">Vibhāga</span>
          </h1>

          <p className="hero-element text-stone-400 italic text-xl md:text-3xl max-w-3xl mx-auto font-light leading-relaxed">
            "Material nature consists of three invisible threads. These bind the
            imperishable soul to the perishable body."
          </p>
        </div>
      </section>

      {/* 2. THE DYNAMIC GUNA ENGINE */}
      <section className="py-40 px-6 relative overflow-hidden">
        {/* Ambient background that changes based on selection */}
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${active.gradient} transition-colors duration-1000 opacity-50 pointer-events-none`}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-stone-500 text-[10px] font-black tracking-[0.6em] uppercase mb-4">
              Internal Psychology
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white italic">
              The Fabric of Human Personality
            </h3>
            <div
              className={`w-px h-16 bg-gradient-to-b ${active.gradient} mx-auto mt-8 transition-colors duration-1000`}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* The 3 Tabs */}
            <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-1/3 pb-4 lg:pb-0 hide-scrollbar">
              {Object.keys(gunaData).map((key) => {
                const isSelected = activeGuna === key;
                const data = gunaData[key];
                return (
                  <button
                    key={key}
                    onClick={() => setActiveGuna(key)}
                    className={`min-w-[200px] lg:min-w-0 p-6 rounded-[2rem] border text-left transition-all duration-500 flex items-center gap-6 ${
                      isSelected
                        ? `${data.colorBg} ${data.colorBorder} ${data.colorGlow} -translate-y-1 lg:-translate-y-0 lg:translate-x-2`
                        : "bg-stone-900/30 border-white/5 opacity-60 hover:opacity-100 hover:bg-stone-900/60"
                    }`}
                  >
                    <div
                      className={`${isSelected ? data.colorText : "text-stone-600"} transition-colors duration-500`}
                    >
                      {data.id === "sattva" ? (
                        <Sun />
                      ) : data.id === "rajas" ? (
                        <Flame />
                      ) : (
                        <Moon />
                      )}
                    </div>
                    <div>
                      <span
                        className={`block text-[10px] font-black uppercase tracking-[0.3em] mb-1 transition-colors duration-500 ${isSelected ? data.colorText : "text-stone-600"}`}
                      >
                        {data.sanskrit}
                      </span>
                      <span
                        className={`block font-serif text-2xl ${isSelected ? "text-white" : "text-stone-400"}`}
                      >
                        {data.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Card */}
            <div className="w-full lg:w-2/3">
              <div
                key={activeGuna} // Forces re-mount for animation
                className={`guna-content p-10 md:p-16 rounded-[3rem] border backdrop-blur-2xl transition-all duration-1000 ${active.colorBg} ${active.colorBorder} ${active.colorGlow} relative overflow-hidden`}
              >
                {/* Large Background Watermark Icon */}
                <div
                  className={`absolute -bottom-10 -right-10 opacity-5 ${active.colorText}`}
                >
                  <div className="scale-[4]">{active.icon}</div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`p-4 rounded-full ${active.colorBg} ${active.colorText}`}
                    >
                      {active.icon}
                    </div>
                    <div>
                      <h4 className={`text-5xl font-serif ${active.colorText}`}>
                        {active.title}
                      </h4>
                      <p className="text-stone-400 text-xs font-mono uppercase tracking-widest mt-2">
                        {active.binding}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-200 text-xl md:text-2xl leading-relaxed font-light mb-12 italic">
                    "{active.desc}"
                  </p>

                  <div className="pt-8 border-t border-white/10">
                    <h5 className="text-[10px] text-stone-500 uppercase tracking-widest font-bold mb-6">
                      Primary Symptoms in Consciousness
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {active.symptoms.map((symptom, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-black/20 p-4 rounded-xl border border-white/5"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${active.colorText.replace("text-", "bg-")}`}
                          />
                          <span className="text-stone-300 tracking-widest text-xs font-bold uppercase">
                            {symptom}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEYOND THE MODES: GUṆĀTĪTA (VERSES 14.19-25) */}
      <section className="py-40 px-6 bg-black relative border-y border-white/5 overflow-hidden">
        {/* Pure White Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Infinity className="text-white/40 mx-auto mb-10" size={40} />
          <h2 className="text-stone-400 text-[10px] font-black tracking-[0.6em] uppercase mb-6">
            The Transcendental State
          </h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Guṇātīta
          </h3>
          <p className="text-stone-300 text-xl md:text-2xl leading-relaxed font-light mb-16 italic">
            "When the seer beholds no other agent than these three modes, and
            knows That which is higher than the modes, he attains My Being."
          </p>

          <div className="p-12 md:p-16 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-[3rem] text-left relative overflow-hidden group hover:border-white/20 transition-all duration-700">
            <Sparkles
              className="absolute top-8 right-8 text-white/10 group-hover:text-white/30 transition-colors duration-700"
              size={60}
            />
            <h4 className="text-white font-serif text-3xl mb-6">
              Who crosses the Gunas?
            </h4>
            <p className="text-stone-400 text-lg leading-relaxed font-light mb-8">
              "He who is unshakeable by the modes, who sits as a witness, who
              considers pain and pleasure alike, to whom a clod of dirt, a
              stone, and gold are the same, who remains steady in honor and
              dishonor—he is said to have transcended the Gunas."
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <span className="text-[10px] text-white/60 font-black tracking-[0.3em] uppercase">
                Verses 14.22-25
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERSE MATRIX: THE WOVEN THREADS (27 SHLOKAS) */}
      <section className="py-40 px-6 bg-[#030303] verse-matrix">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="text-left">
              <h2 className="text-5xl font-serif text-white mb-6">
                27 Woven Threads
              </h2>
              <p className="text-stone-500 text-sm tracking-[0.3em] uppercase font-bold max-w-md leading-relaxed">
                Untangle the ropes of material existence.
              </p>
            </div>
            <div className="text-white/5 text-[12rem] font-black select-none leading-none">
              14
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-4">
            {Array.from({ length: 27 }, (_, i) => {
              // Create a cycle of hover colors to represent the 3 gunas
              const hoverTheme =
                i % 3 === 0
                  ? "hover:bg-amber-500/20 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-amber-500"
                  : i % 3 === 1
                    ? "hover:bg-red-500/20 hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] text-red-500"
                    : "hover:bg-indigo-500/20 hover:border-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] text-indigo-400";

              return (
                <Link
                  key={i}
                  href={`/shlokas/chapter14/verse${i + 1}`}
                  className={`relative aspect-square bg-stone-900/30 border border-white/5 rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 hover:-translate-y-2 group ${hoverTheme.split(" text-")[0]}`}
                >
                  <span
                    className={`font-serif text-2xl relative z-10 transition-colors text-stone-500 group-hover:text-white`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`absolute bottom-3 opacity-0 group-hover:opacity-100 text-[8px] tracking-[0.3em] uppercase font-black transition-opacity duration-500 ${hoverTheme.split(" ").pop()}`}
                  >
                    Guṇa
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. NEXT CHAPTER FOOTER */}
      <footer className="py-48 text-center border-t border-white/5 bg-gradient-to-b from-[#030303] to-[#0a0805] relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-px h-32 bg-gradient-to-b from-white/20 to-transparent mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
            <Link
              href="/Adhyayas/13"
              className="group flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all"
            >
              <ArrowLeft className="text-stone-500 group-hover:-translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-600">
                The Field and Knower
              </span>
              <span className="font-serif italic text-2xl text-stone-400">
                Kṣetra Vibhāga
              </span>
            </Link>

            <Link
              href="/Adhyayas/15"
              className="group flex flex-col items-center gap-4"
            >
              <ArrowRight className="text-amber-500 group-hover:translate-x-2 transition-transform" />
              <span className="text-[10px] uppercase tracking-[0.6em] font-black text-amber-500/80">
                Ascend the Cosmic Tree
              </span>
              <span className="font-serif italic text-3xl md:text-5xl text-white group-hover:text-amber-400 transition-colors duration-700 mt-2">
                Puruṣottama Yoga
              </span>
              <span className="text-stone-400 italic text-lg mt-4 group-hover:text-white transition-colors">
                The Yoga of the Supreme Person.
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
