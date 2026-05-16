"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Shield,
  Eye,
  Flame,
  Sword,
  Crown,
  User,
  Target,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const characters = [
  {
    name: "Shri Krishna",
    role: "The Divine Charioteer",
    symbolism: "The Higher Intelligence",
    desc: "The supreme teacher who does not fight but guides. He represents the inner voice of wisdom that remains stable amidst chaos.",
    icon: <Compass className="w-6 h-6 text-blue-400" />,
    color: "from-blue-600/10",
    shadow: "shadow-blue-500/10",
  },
  {
    name: "Arjuna",
    role: "The Seeking Warrior",
    symbolism: "The Individual Soul",
    desc: "The world-class archer who collapses under moral complexity. He represents every human who faces a crisis of identity.",
    icon: <Target className="w-6 h-6 text-amber-400" />,
    color: "from-amber-600/10",
    shadow: "shadow-amber-500/10",
  },
  {
    name: "Sanjaya",
    role: "The Divine Visionary",
    symbolism: "The Objective Witness",
    desc: "Gifted with 'Divya-Drishti' (Divine Vision), he narrates reality without bias. He represents pure, non-judgmental awareness.",
    icon: <Eye className="w-6 h-6 text-stone-400" />,
    color: "from-stone-600/10",
    shadow: "shadow-stone-500/10",
  },
  {
    name: "Dhritarashtra",
    role: "The Blind King",
    symbolism: "The Bound Ego",
    desc: "Physically and spiritually blind, he represents a mind blinded by attachment to its own creations and selfish desires.",
    icon: <Crown className="w-6 h-6 text-red-400" />,
    color: "from-red-600/10",
    shadow: "shadow-red-500/10",
  },
  {
    name: "Bhīṣma",
    role: "The Grandsire",
    symbolism: "Ancient Tradition",
    desc: "Invincible patriarch bound by a vow. He represents the weight of outdated traditions that we struggle to transcend.",
    icon: <Shield className="w-6 h-6 text-stone-400" />,
    color: "from-stone-600/10",
    shadow: "shadow-stone-500/10",
  },
  {
    name: "Droṇācārya",
    role: "The Royal Teacher",
    symbolism: "Acquired Skill",
    desc: "The master of arms. He represents intellectual talents and skills that can unfortunately be used to serve the ego.",
    icon: <User className="w-6 h-6 text-amber-700" />,
    color: "from-amber-900/10",
    shadow: "shadow-amber-700/10",
  },
  {
    name: "Duryodhana",
    role: "The Crown Prince",
    symbolism: "Unbridled Desire",
    desc: "Consumed by jealousy, he represents the 'Desire-Mind' that will destroy anything to maintain its perceived power.",
    icon: <Flame className="w-6 h-6 text-red-600" />,
    color: "from-red-900/20",
    shadow: "shadow-red-900/20",
  },
  {
    name: "Pandavas",
    role: "The Virtue Collective",
    symbolism: "Dharma",
    desc: "The five brothers representing various aspects of virtue: Truth, Strength, Patience, Wisdom, and Beauty.",
    icon: <Sword className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-600/10",
    shadow: "shadow-indigo-500/10",
  },
];

export default function Characters() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".char-card", {
        opacity: 1,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".char-grid",
          start: "top 85%",
        },
      });
    },
    { scope: container },
  );

  const handleMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    const moveX = (x - 0.5) * 15;
    const moveY = (y - 0.5) * -15;

    gsap.to(card, {
      rotateY: moveX,
      rotateX: moveY,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={container}
      className="relative bg-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="flex items-center gap-2 text-amber-500/60 mb-4 tracking-[0.5em] text-[10px] font-bold uppercase">
            <Sparkles size={14} /> The Archetypes
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Voices of <span className="italic text-amber-500">Kurukshetra</span>
          </h2>
          <p className="max-w-xl text-stone-500 text-sm leading-relaxed">
            Every character on the battlefield represents a specific faculty of
            the human psyche. The war is not external; it is the eternal
            dialogue of the Self.
          </p>
        </div>

        {/* CHARACTERS GRID */}
        <div className="char-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((char, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className={`char-card group relative bg-[#111] border border-white/5 p-8 h-[520px] flex flex-col transition-all duration-500 hover:border-amber-500/30 rounded-2xl overflow-hidden ${char.shadow} hover:shadow-2xl`}
            >
              {/* Dynamic Aura */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${char.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* TOP: ICON & ROLE */}
              <div className="relative z-10 mb-8">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  {char.icon}
                </div>
                <h3 className="text-amber-500/80 text-[9px] font-mono tracking-[0.3em] uppercase mb-1">
                  {char.role}
                </h3>
                <h4 className="text-3xl font-serif text-stone-100 leading-none">
                  {char.name}
                </h4>
              </div>

              {/* MID: DESCRIPTION */}
              <div className="relative z-10 flex-1">
                <p className="text-stone-400 text-[13px] leading-relaxed font-light">
                  {char.desc}
                </p>
              </div>

              {/* BOTTOM: SYMBOLISM */}
              <div className="relative z-10 mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-stone-600 uppercase tracking-widest block mb-1 font-bold">
                      Ontological Key
                    </span>
                    <p className="text-amber-200/90 text-sm font-serif italic">
                      {char.symbolism}
                    </p>
                  </div>
                  <div className="text-4xl font-serif text-white/[0.03] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
