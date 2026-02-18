"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play, RotateCcw, Pause } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Adhyaya6() {
  const container = useRef(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 Minute Meditation
  const [isActive, setIsActive] = useState(false);

  // Meditation Timer Logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(120);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-title", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 2, ease: "expo.out" });
    
    gsap.from(".meditation-box", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".meditation-section",
        start: "top 70%",
      }
    });
  }, []);

  return (
    <main ref={container} className="bg-stone-950 min-h-screen selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION: THE INNER SILENCE */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/adhyaya6.jpg" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-blue-950/10 to-stone-950" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center z-10 px-6">
          <div className="space-y-6">
            <p className="hero-title text-blue-400 tracking-[0.6em] text-[10px] font-black uppercase">Adhyāya 06</p>
            <h1 className="hero-title text-6xl md:text-9xl font-serif text-stone-100">Dhyāna <span className="text-blue-500 italic">Yoga</span></h1>
            <p className="hero-title text-stone-500 italic text-xl max-w-xl mx-auto font-light">"The mind is restless and difficult to restrain, but it is subdued by practice."</p>
          </div>
        </div>
      </section>

      {/* 2. THE STEADY FLAME (VERSE 6.19) */}
      <section className="py-32 px-6 border-y border-white/5 bg-blue-950/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
             {/* A CSS-only candle flame effect can go here */}
             <div className="w-1 h-12 bg-blue-500/50 rounded-full blur-sm animate-pulse" />
          </div>
          <h2 className="text-stone-400 font-serif text-2xl md:text-3xl leading-relaxed italic mb-8">
            "As a lamp in a windless place does not flicker, even so is the Yogi of subdued mind, practicing meditation on the Self."
          </h2>
          <p className="text-blue-500 text-[10px] font-black tracking-[0.5em] uppercase">The Analogy of Stillness • Verse 6.19</p>
        </div>
      </section>

      {/* 3. INTERACTIVE MEDITATION TIMER */}
      <section className="py-32 px-6 meditation-section">
        <div className="max-w-xl mx-auto meditation-box bg-stone-900/40 border border-white/5 p-12 rounded-[40px] text-center backdrop-blur-xl">
          <h3 className="text-stone-500 text-xs font-bold tracking-widest uppercase mb-8">Practice Silence</h3>
          <div className="text-7xl md:text-8xl font-serif text-stone-100 mb-12 tabular-nums">
            {formatTime(timeLeft)}
          </div>
          
          <div className="flex justify-center gap-6">
            <button 
              onClick={toggleTimer}
              className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-stone-950 hover:bg-blue-400 transition-all"
            >
              {isActive ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
            </button>
            <button 
              onClick={resetTimer}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-stone-400 hover:text-white transition-all"
            >
              <RotateCcw size={20} />
            </button>
          </div>
          
          <p className="mt-10 text-stone-600 text-xs italic">
            "Sit in a clean place, keep the body, head and neck erect..." (Verse 6.11-13)
          </p>
        </div>
      </section>

      {/* 4. KEY LESSONS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h4 className="text-blue-500 font-serif text-3xl">The Friend & The Enemy</h4>
            <p className="text-stone-400 leading-relaxed text-lg font-light">
              Krishna warns: "One should lift oneself by oneself. For the self is the friend of the self, and the self is also the enemy of the self." (Verse 6.5)
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-blue-500 font-serif text-3xl">The Path for Everyone</h4>
            <p className="text-stone-400 leading-relaxed text-lg font-light">
              Yoga is not for the one who eats too much, nor for the one who eats too little. It is for the one who is temperate in food, recreation, and work. (Verse 6.16)
            </p>
          </div>
        </div>
      </section>

      {/* 5. VERSE GRID (47 SHLOKAS) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif text-stone-100">47 Shlokas</h2>
            <p className="text-stone-600 text-xs uppercase tracking-[0.3em] font-bold mt-2">Dhyāna Yoga Verse Index</p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-3">
            {Array.from({ length: 47 }, (_, i) => (
              <Link key={i} href={`/chapter/06/verse/${i + 1}`} className="aspect-square bg-stone-900/30 border border-white/5 flex items-center justify-center hover:bg-blue-500/10 hover:border-blue-500 transition-all group">
                <span className="text-stone-600 group-hover:text-blue-400 font-serif text-xl">{i + 1}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEXT CHAPTER */}
      <section className="py-40 text-center border-t border-white/5 bg-gradient-to-b from-stone-950 to-blue-950/10">
        <Link href="/Adhyayas/07" className="group">
          <span className="text-[10px] text-stone-600 uppercase tracking-[0.4em] mb-4 block">Moving to Divine Knowledge</span>
          <h4 className="text-4xl md:text-5xl font-serif text-stone-400 group-hover:text-blue-400 transition-colors">
            Adhyāya 07: Jñāna Vijñāna Yoga →
          </h4>
        </Link>
      </section>

    </main>
  );
}