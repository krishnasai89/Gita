"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const devotees = [
  {
    title: "Ārta",
    sanskrit: "आर्तो",
    label: "The Distressed",
    desc: "Those who turn to the Divine when they are in pain, suffering, or facing extreme crisis. They seek relief and protection.",
    insight: "Faith born out of the need for comfort.",
  },
  {
    title: "Arthārthī",
    sanskrit: "अर्थार्थी",
    label: "The Seeker of Wealth",
    desc: "Those who seek material success, prosperity, or the fulfillment of worldly desires through divine grace.",
    insight: "Faith born out of the need for security.",
  },
  {
    title: "Jijñāsu",
    sanskrit: "जिज्ञासुः",
    label: "The Curious",
    desc: "The seekers of knowledge who want to understand the 'Why' behind existence and the nature of the Truth.",
    insight: "Faith born out of intellectual inquiry.",
  },
  {
    title: "Jñānī",
    sanskrit: "ज्ञानी",
    label: "The Wise",
    desc: "The one who knows the Truth and seeks the Divine for its own sake, seeing no difference between themselves and the Supreme.",
    insight: "The highest faith: born out of pure love and oneness.",
  },
];

export default function DevoteeCarousel() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef();

  const nextSlide = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev + 1) % devotees.length);
        gsap.fromTo(
          cardRef.current,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
  };

  const prevSlide = () => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      onComplete: () => {
        setIndex((prev) => (prev === 0 ? devotees.length - 1 : prev - 1));
        gsap.fromTo(
          cardRef.current,
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        );
      },
    });
  };

  return (
    <section className="py-32 px-6 bg-emerald-950/5 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-emerald-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4">
            Verse 7.16
          </h3>
          <h2 className="text-4xl font-serif text-stone-100 italic">
            "Four types of virtuous people worship Me..."
          </h2>
        </div>

        <div className="relative">
          {/* Main Card */}
          <div
            ref={cardRef}
            className="bg-stone-900/40 border border-emerald-500/20 p-12 md:p-20 rounded-[2rem] min-h-[400px] flex flex-col justify-center items-center text-center backdrop-blur-sm"
          >
            <span className="text-6xl md:text-8xl font-serif text-emerald-500/10 absolute top-10 select-none">
              {devotees[index].sanskrit}
            </span>

            <div className="relative z-10">
              <h4 className="text-emerald-500 font-serif text-4xl mb-2">
                {devotees[index].title}
              </h4>
              <p className="text-stone-500 text-xs uppercase tracking-[0.3em] font-bold mb-8">
                {devotees[index].label}
              </p>

              <p className="text-stone-300 text-xl font-light leading-relaxed max-w-lg mx-auto mb-10">
                "{devotees[index].desc}"
              </p>

              <div className="flex items-center justify-center gap-2 text-emerald-500/60 text-sm italic">
                <Star size={14} />
                <span>{devotees[index].insight}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full border border-white/5 hover:border-emerald-500/50 hover:text-emerald-500 transition-all text-stone-600"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {devotees.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 ${
                    index === i ? "w-8 bg-emerald-500" : "w-2 bg-stone-800"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-4 rounded-full border border-white/5 hover:border-emerald-500/50 hover:text-emerald-500 transition-all text-stone-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
