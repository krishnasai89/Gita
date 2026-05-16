"use client";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";

const devotees = [
  {
    title: "Ārta",
    sanskrit: "आर्तो",
    label: "The Distressed",
    desc: "Those who turn to the Divine when they are in pain, suffering, or facing extreme crisis. They seek relief and protection.",
    insight: "Faith born out of the need for comfort.",
    theme: {
      color: "text-blue-400",
      bg: "bg-blue-950/20",
      border: "border-blue-500/30",
      glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
      watermark: "text-blue-500/[0.03]",
      dot: "bg-blue-500",
    },
  },
  {
    title: "Arthārthī",
    sanskrit: "अर्थार्थी",
    label: "The Seeker of Wealth",
    desc: "Those who seek material success, prosperity, or the fulfillment of worldly desires through divine grace.",
    insight: "Faith born out of the need for security.",
    theme: {
      color: "text-emerald-400",
      bg: "bg-emerald-950/20",
      border: "border-emerald-500/30",
      glow: "shadow-[0_0_40px_rgba(16,185,129,0.15)]",
      watermark: "text-emerald-500/[0.03]",
      dot: "bg-emerald-500",
    },
  },
  {
    title: "Jijñāsu",
    sanskrit: "जिज्ञासुः",
    label: "The Curious",
    desc: "The seekers of knowledge who want to understand the 'Why' behind existence and the nature of the Absolute Truth.",
    insight: "Faith born out of intellectual inquiry.",
    theme: {
      color: "text-purple-400",
      bg: "bg-purple-950/20",
      border: "border-purple-500/30",
      glow: "shadow-[0_0_40px_rgba(168,85,247,0.15)]",
      watermark: "text-purple-500/[0.03]",
      dot: "bg-purple-500",
    },
  },
  {
    title: "Jñānī",
    sanskrit: "ज्ञानी",
    label: "The Wise",
    desc: "The one who knows the Truth and seeks the Divine for its own sake, seeing no difference between themselves and the Supreme.",
    insight: "The highest faith: born out of pure love and oneness.",
    theme: {
      color: "text-amber-400",
      bg: "bg-amber-950/20",
      border: "border-amber-500/40",
      glow: "shadow-[0_0_50px_rgba(245,158,11,0.25)]",
      watermark: "text-amber-500/[0.05]",
      dot: "bg-amber-500",
    },
  },
];

export default function DevoteeCarousel() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const isAnimating = useRef(false);

  const active = devotees[index];

  const changeSlide = (newIndex, direction) => {
    if (isAnimating.current || newIndex === index) return;
    isAnimating.current = true;

    // Slide out distance based on direction
    const xOffset = direction === "next" ? -40 : 40;

    gsap.to(contentRef.current, {
      opacity: 0,
      x: xOffset,
      scale: 0.95,
      filter: "blur(8px)",
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIndex(newIndex);

        // Slide in from opposite side
        gsap.fromTo(
          contentRef.current,
          { x: -xOffset, opacity: 0, scale: 0.95, filter: "blur(8px)" },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "back.out(1.2)",
            onComplete: () => {
              isAnimating.current = false;
            },
          },
        );
      },
    });
  };

  const nextSlide = () => changeSlide((index + 1) % devotees.length, "next");
  const prevSlide = () =>
    changeSlide(index === 0 ? devotees.length - 1 : index - 1, "prev");
  const goToSlide = (i) => changeSlide(i, i > index ? "next" : "prev");

  return (
    <section className="py-32 px-6 bg-[#030504] border-y border-white/5 relative overflow-hidden transition-colors duration-1000">
      {/* Dynamic Ambient Background Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none transition-colors duration-1000 ${active.theme.bg}`}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="flex items-center justify-center gap-3 text-stone-500 text-[10px] font-black tracking-[0.5em] uppercase mb-6">
            <div className="w-8 h-px bg-stone-700" />
            Verse 7.16
            <div className="w-8 h-px bg-stone-700" />
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-white italic drop-shadow-lg">
            "Four types of virtuous people <br className="hidden md:block" />{" "}
            worship Me..."
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            className={`relative min-h-[450px] md:min-h-[400px] p-8 md:p-16 rounded-[2.5rem] border backdrop-blur-xl flex flex-col justify-center items-center text-center overflow-hidden transition-all duration-1000 ${active.theme.bg} ${active.theme.border} ${active.theme.glow}`}
          >
            {/* Huge Sanskrit Watermark */}
            <span
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-serif font-black select-none pointer-events-none transition-colors duration-1000 ${active.theme.watermark}`}
            >
              {active.sanskrit}
            </span>

            {/* Inner Animating Content */}
            <div
              ref={contentRef}
              className="relative z-10 w-full max-w-2xl mx-auto"
            >
              {index === 3 && (
                <Sparkles
                  className="absolute -top-10 left-1/2 -translate-x-1/2 text-amber-500/40 animate-pulse"
                  size={40}
                />
              )}

              <h4
                className={`font-serif text-5xl md:text-6xl mb-3 transition-colors duration-1000 drop-shadow-md ${active.theme.color}`}
              >
                {active.title}
              </h4>
              <p className="text-stone-300/60 text-[10px] uppercase tracking-[0.4em] font-black mb-10">
                {active.label}
              </p>

              <div className="relative mb-10">
                <Quote
                  className="absolute -top-4 -left-6 md:-left-10 text-white/5"
                  size={40}
                />
                <p className="text-stone-200 text-xl md:text-2xl font-light leading-relaxed italic">
                  "{active.desc}"
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-black/40 border border-white/5">
                <Star size={14} className={active.theme.color} />
                <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">
                  {active.insight}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12 px-4 md:px-8">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-stone-900/50 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-stone-400 hover:text-white backdrop-blur-md"
              aria-label="Previous devotee"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Clickable Indicators */}
            <div className="flex gap-3">
              {devotees.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group py-4 px-1" // Larger hit area for accessibility
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === i
                        ? `w-10 ${active.theme.dot} shadow-[0_0_10px_currentColor]`
                        : "w-2 bg-stone-800 group-hover:bg-stone-600"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-stone-900/50 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-stone-400 hover:text-white backdrop-blur-md"
              aria-label="Next devotee"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
