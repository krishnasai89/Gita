"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const allegoryData = [
  {
    item: "Hanuman on the Flag",
    sanskrit: "कपिध्वज (Kapidhwaja)",
    quality: "Unshakable Faith & Stability",
    desc: "Hanuman symbolizes absolute faith and devotion. Even when the senses become restless and chaotic, strong faith (Shraddha) keeps the chariot balanced and prevents collapse.",
  },
  {
    item: "The Rider",
    sanskrit: "आत्मन् (Atman)",
    quality: "The Seeking Soul",
    desc: "Arjuna represents the human being—the pure soul who is currently confused and emotionally overwhelmed, seeking clarity and purpose on the battlefield of life.",
  },
  {
    item: "The Charioteer",
    sanskrit: "बुद्धि (Buddhi)",
    quality: "Divine Intellect / Higher Wisdom",
    desc: "Krishna represents Divine Intelligence. When personal intellect is clouded by fear, surrendering to higher wisdom allows life to move in the right direction.",
  },
  {
    item: "The Reins",
    sanskrit: "मनः (Manah)",
    quality: "Control Mechanism",
    desc: "The mind acts as the reins. If it is loose or undisciplined, the senses will pull the chariot toward temporary emotions, cravings, and distractions.",
  },
  {
    item: "The Horses",
    sanskrit: "इन्द्रिय (Indriyas)",
    quality: "Sensory Power",
    desc: "The five horses represent Sight, Hearing, Smell, Taste, and Touch. Untrained senses dominate life. The goal is not to destroy them, but to train them into a driving force.",
  },
  {
    item: "The Road",
    sanskrit: "विषय (Vishayas)",
    quality: "Attraction & Temptation",
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
              The Architecture of Self
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
              className="allegory-card group border-l-2 border-amber-500/10 pl-8 py-6 transition-all duration-500 hover:border-amber-500 hover:bg-white/[0.02]"
            >
              <div className="flex flex-col mb-4">
                <h3 className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                  {point.item}
                </h3>
                {/* Devanagari Sanskrit with English transliteration */}
                <span className="text-3xl md:text-4xl font-serif text-amber-500/40 group-hover:text-amber-500 transition-colors duration-700 ease-in-out">
                  {point.sanskrit.split(" ")[0]}
                  <span className="text-sm ml-4 text-stone-600 font-sans italic tracking-widest">
                    {point.sanskrit.split(" ")[1]}
                  </span>
                </span>
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
          <div className="mt-40 grid grid-cols-1 gap-6 pt-20 border-t border-white/10">
            <div className="p-8 bg-stone-900/40 rounded-lg border border-amber-500/10 hover:border-amber-500/30 transition-colors">
              <h5 className="text-amber-500 uppercase tracking-widest text-xs font-bold mb-4 italic">
                The Truth (The Intellect)
              </h5>
              <p className="text-stone-300 text-sm leading-relaxed">
                Only a strong Intellect (Krishna) can hold the Mind steady.
                Training the mind is not about suppression, but about
                direction.When Divine Wisdom leads, the Soul remains peaceful
                even amidst the battle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
