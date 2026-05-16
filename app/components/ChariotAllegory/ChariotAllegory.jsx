"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Anchor, Compass, Map, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const allegoryData = [
  {
    item: "Hanuman on the Flag",
    sanskrit: "कपिध्वज (Kapidhwaja)",
    quality: "Unshakable Faith & Stability",
    icon: <ShieldCheck className="w-5 h-5" />,
    desc: "Hanuman symbolizes absolute faith and devotion. Even when the senses become restless and chaotic, strong faith (Shraddha) keeps the chariot balanced and prevents collapse.",
  },
  {
    item: "The Rider",
    sanskrit: "आत्मन् (Atman)",
    quality: "The Seeking Soul",
    icon: <Zap className="w-5 h-5" />,
    desc: "Arjuna represents the human being—the pure soul who is currently confused and emotionally overwhelmed, seeking clarity and purpose on the battlefield of life.",
  },
  {
    item: "The Charioteer",
    sanskrit: "बुद्धि (Buddhi)",
    quality: "Divine Intellect / Higher Wisdom",
    icon: <Compass className="w-5 h-5" />,
    desc: "Krishna represents Divine Intelligence. When personal intellect is clouded by fear, surrendering to higher wisdom allows life to move in the right direction.",
  },
  {
    item: "The Reins",
    sanskrit: "मनः (Manah)",
    quality: "Control Mechanism",
    icon: <Anchor className="w-5 h-5" />,
    desc: "The mind acts as the reins. If it is loose or undisciplined, the senses will pull the chariot toward temporary emotions, cravings, and distractions.",
  },
  {
    item: "The Horses",
    sanskrit: "इन्द्रिय (Indriyas)",
    quality: "Sensory Power",
    icon: <Zap className="w-5 h-5" />,
    desc: "The five horses represent Sight, Hearing, Smell, Taste, and Touch. Untrained senses dominate life. The goal is not to destroy them, but to train them into a driving force.",
  },
  {
    item: "The Road",
    sanskrit: "विषय (Vishayas)",
    quality: "The Material Fields (like Attraction, Temptation, etc.)",
    icon: <Map className="w-5 h-5" />,
    desc: "The road represents the material world and its endless sense objects. The road is neutral; it is our focus that determines if the journey reaches its destination.",
  },
];

export default function ChariotAllegory() {
  const container = useRef();
  const visualWrapper = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".allegory-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: {
            grid: "auto",
            from: "center",
            amount: 0.16,
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 82%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );

      ScrollTrigger.refresh();
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-stone-950 relative py-20">
      <div className="flex flex-col lg:flex-row gap-16 px-6 max-w-7xl mx-auto">
        {/* LEFT SIDE: Sticky Visual Representation */}
        <div
          ref={visualWrapper}
          className="lg:sticky lg:top-24 h-fit flex-1 z-20"
        >
          <div className="relative aspect-video rounded-md overflow-hidden border-2 border-transparent animate-border-glow shadow-2xl bg-stone-900/50 flex items-center justify-center">
            <img
              src="/Images/chariot-diagram.jpg"
              alt="Chariot Allegory Diagram"
              className="w-full h-full object-cover opacity-90"
            />
            {/* Inner Vignette for Cinematic Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-serif text-amber-500 mb-2">
              The Architecture of Self Consciousness
            </h2>
            <p className="text-stone-500 text-sm tracking-widest uppercase font-medium">
              Katha Upanishad & Shrimad Bhagavad Gita
            </p>
          </div>
        </div>
        {/* RIGHT SIDE: Scrolling Allegory Cards */}
        <div className="allegory-list flex-1 space-y-32 py-10 lg:py-20">
          {allegoryData.map((point, i) => (
            <div
              key={i}
              className="bg-stone-900/20 border border-white/5 p-8 rounded-2xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex flex-col mb-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                    {point.icon}
                  </div>
                  <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
                    {point.item}
                  </h3>
                </div>
                {/* Devanagari Sanskrit with English transliteration */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-serif bg-clip-text text-transparent bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800 pt-3">
                    {point.sanskrit.split(" ")[0]}
                  </span>
                  <p className="text-stone-500 text-sm mt-2 font-light italic">
                    {point.sanskrit.split(" ")[1]}
                  </p>
                </div>
              </div>
              <h4 className="text-2xl font-serif text-stone-100 mb-4">
                {point.quality}
              </h4>
              <p className="text-stone-400 leading-relaxed font-light text-lg">
                {point.desc}
              </p>
            </div>
          ))}
          {/* FINAL SUMMARY BLOCK */}
          <div className="pt-20">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 backdrop-blur-xl">
              <h5 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-4">
                The Master Insight
              </h5>
              <p className="text-stone-300 text-lg leading-relaxed font-serif italic">
                "Only a strong Intellect (Krishna) can hold the Mind steady.
                When Divine Wisdom leads the chariot, the Soul remains peaceful
                even amidst the roar of battle."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
