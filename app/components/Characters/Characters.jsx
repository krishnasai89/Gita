"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const characters = [
  {
    name: "Shri Krishna",
    role: "The Divine Charioteer",
    symbolism: "The Higher Intelligence / Para-Brahman",
    desc: "The supreme teacher who does not fight but guides. He represents the inner voice of wisdom that remains stable amidst the chaos of the battlefield.",
    color: "from-blue-500/20",
    icon: "☸️",
  },
  {
    name: "Arjuna",
    role: "The Seeking Warrior",
    symbolism: "The Individual Soul / Jivatman",
    desc: "The world-class archer who collapses under the weight of moral complexity. He represents every human who faces a crisis of identity and duty.",
    color: "from-amber-500/20",
    icon: "🏹",
  },
  {
    name: "Sanjaya",
    role: "The Divine Visionary",
    symbolism: "The Objective Witness / Awareness",
    desc: "Gifted with 'Divya-Drishti' (Divine Vision) by Vyasa, he narrates the war to the blind king. He represents the ability to see reality without bias.",
    color: "from-stone-500/20",
    icon: "👁️",
  },
  {
    name: "Dhritarashtra",
    role: "The Blind King",
    symbolism: "The Bound Ego / Attachment",
    desc: "Physically and spiritually blind, he is the father of the Kauravas. He represents the mind blinded by attachment to its own creations and desires.",
    color: "from-red-500/20",
    icon: "👑",
  },
  {
    name: "Bhīṣma",
    role: "The Grandsire",
    symbolism: "Ancient Tradition / Vows",
    desc: "The invincible patriarch who is bound by a vow to protect the throne, even if it is held by evil. He represents the weight of old habits and outdated traditions that we struggle to let go of.",
    color: "from-stone-500/20",
    icon: "🛡️",
  },
  {
    name: "Droṇācārya",
    role: "The Royal Teacher",
    symbolism: "Acquired Knowledge / Skill",
    desc: "The master of arms who taught both sides. He represents our skills and intellectual talents that can unfortunately be used to serve the ego if we aren't careful.",
    color: "from-amber-700/20",
    icon: "🏹",
  },
  {
    name: "Duryodhana",
    role: "The Crown Prince",
    symbolism: "Greed / Unbridled Desire",
    desc: "The eldest Kaurava who is consumed by jealousy. He represents the 'Desire-Mind' that believes it owns the world and will destroy anything to keep its power.",
    color: "from-red-900/40",
    icon: "🔥",
  },
  {
    name: "Kauravas & Pandavas",
    role: "Inner Conflict",
    symbolism: "Adharma vs Dharma",
    desc: "The mind’s battle between ego-driven impulses and disciplined virtue.",
    color: "from-indigo-500/20",
    icon: "⚔️",
  },
];

export default function Characters() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".char-card", {
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".char-grid",
          start: "top 100%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="characters"
      className="bg-stone-950 py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-serif text-amber-500 mb-6 tracking-tight">
            Voices of Kurukshetra
          </h2>
          <p className="text-stone-500 text-xs tracking-[0.5em] uppercase font-bold">
            The Eternal Dialogue of the Self
          </p>
        </div>

        {/* CHARACTERS GRID */}
        <div className="char-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((char, i) => (
            <div
              key={i}
              className={`char-card group relative bg-stone-900/30 border border-white/5 p-10 h-[500px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-amber-500/40 rounded-xl`}
            >
              {/* Background Glow Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${char.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-6">{char.icon}</div>
                <h3 className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-2">
                  {char.role}
                </h3>
                <h4 className="text-3xl font-serif text-stone-100 mb-4">
                  {char.name}
                </h4>
                <div className="w-8 h-px bg-amber-500/50 mb-6" />
                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  {char.desc}
                </p>
              </div>

              <div className="relative z-10 border-t border-white/5 pt-6">
                <span className="text-[10px] text-stone-600 uppercase tracking-widest block mb-2 font-bold">
                  Internal Symbolism
                </span>
                <p className="text-amber-500/80 text-xs font-serif italic">
                  {char.symbolism}
                </p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                {char.name.charAt(0)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
