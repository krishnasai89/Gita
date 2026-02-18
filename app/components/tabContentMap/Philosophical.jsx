"use client";
import { Sparkles, Anchor, Accessibility } from "lucide-react";

export default function Philosophical({ commentary, onTermClick }) {
  const insight = commentary?.Philosophical?.Philosophical_insight;
  const levels = commentary?.Philosophical?.Philosophical_Levels || [];

  if (!insight) return null;

  return (
    <div className="space-y-16">
      {/* CORE INSIGHT HEADER */}
      <div className="relative py-12 px-8 bg-stone-950 border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <Sparkles size={120} />
        </div>

        <div className="relative z-10 text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-3 bg-stone-900 border border-white/10 rounded-full text-amber-500">
              <Accessibility className="animate-spin-slow" size={24} />
            </div>
          </div>
          <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.6em]">
            Deeper Philosophical Insight
          </h4>
          <p className="text-stone-200 text-2xl md:text-3xl font-serif leading-relaxed italic max-w-4xl mx-auto">
            {insight}
          </p>
        </div>
      </div>

      {/* DETAILED BREAKDOWN */}
      <div className="grid grid-cols-1 gap-6">
        {levels.map((level, i) => (
          <div
            key={i}
            className="p-10 bg-stone-950 border border-white/5 rounded-[2.5rem] hover:border-amber-500/20 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-900 border border-white/5 text-stone-500">
                <Anchor size={18} />
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="text-stone-100 font-serif text-xl tracking-wide">
                {level.title}
              </h5>
              <p className="text-stone-400 text-lg leading-relaxed font-light italic">
                {level.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
