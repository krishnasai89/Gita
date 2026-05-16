"use client";
import { Sparkles, Quote } from "lucide-react";

export default function Philosophical({ commentary, onTermClick }) {
  // Gracefully handle both the new camelCase schema and the old PascalCase one
  const philosophicalData =
    commentary?.philosophical || commentary?.Philosophical;
  const insight =
    philosophicalData?.insight || philosophicalData?.Philosophical_insight;
  const points =
    philosophicalData?.points || philosophicalData?.Philosophical_Levels || [];

  if (!insight && points.length === 0) return null;

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* 1. CORE INSIGHT HEADER */}
      {insight && (
        <div className="relative py-14 px-8 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden group">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />

          <div className="absolute -top-6 -right-6 text-amber-500/5 group-hover:text-amber-500/10 transition-colors duration-700">
            <Sparkles size={140} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 text-center space-y-8">
            <h4 className="flex items-center justify-center gap-4 text-amber-500/60 text-[10px] font-black uppercase tracking-[0.6em]">
              <div className="w-8 h-px bg-amber-500/30" />
              Core Philosophy
              <div className="w-8 h-px bg-amber-500/30" />
            </h4>

            <div className="relative inline-block">
              <Quote
                className="absolute -top-6 -left-8 text-amber-500/20"
                size={32}
              />
              <p className="text-stone-200 text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed italic max-w-4xl mx-auto drop-shadow-md">
                {insight}
              </p>
              <Quote
                className="absolute -bottom-8 -right-8 text-amber-500/20 rotate-180"
                size={32}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. DETAILED BREAKDOWN (Editorial List) */}
      {points.length > 0 && (
        <div className="grid grid-cols-1 gap-6">
          {points.map((level, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 bg-stone-900/20 border border-white/5 rounded-[2.5rem] hover:bg-stone-900/40 hover:border-amber-500/20 transition-all duration-500 flex flex-col md:flex-row gap-6 md:gap-10 items-start"
            >
              {/* Elegant Numeric Index */}
              <div className="flex-shrink-0 pt-1">
                <span className="text-4xl md:text-5xl font-serif font-light text-stone-800 group-hover:text-amber-500/30 transition-colors duration-500 select-none">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                <h5 className="text-stone-100 font-serif text-2xl tracking-wide">
                  {level.title}
                </h5>
                <p className="text-stone-400 text-lg leading-relaxed font-light">
                  {level.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
