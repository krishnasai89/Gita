"use client";
import { Sparkles, Feather } from "lucide-react";

export default function Inquiry({ commentary, onTermClick }) {
  // Gracefully handle both the new camelCase schema and the old legacy schema
  const reflectionPoints = commentary?.inquiry || commentary?.Inquiry || [];

  if (reflectionPoints.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-stone-600">
        <Feather size={48} className="mb-4 opacity-20" />
        <p className="uppercase tracking-[0.3em] text-[10px] font-black">
          No inquiry prompts available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-2xl mx-auto relative">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative z-10 inline-flex items-center justify-center p-4 bg-[#0a0a0a] border border-white/5 rounded-full shadow-xl">
          <Feather className="text-amber-500/60" size={24} />
        </div>

        <div className="relative z-10 space-y-4">
          <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">
            Internalizing the Truth
          </h4>
          <p className="text-stone-200 font-serif text-3xl italic drop-shadow-md">
            Questions for Inner Inquiry
          </p>
        </div>
      </div>
      {/* Inquiry List (Journal Style) */}{" "}
      {reflectionPoints.map((point, index) => {
        const title = point.title || point.heading;

        return (
          <div
            key={index}
            className="relative p-8 md:p-12 bg-[#050505] border border-white/5 rounded-[2.5rem] group hover:border-amber-500/30 hover:bg-stone-900/30 transition-all duration-700 overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Top accent glow line (Reveals on hover) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-amber-500/0 to-transparent group-hover:via-amber-500/50 group-hover:w-2/3 transition-all duration-700" />

            {/* Massive Watermark Numbering */}
            <span className="absolute -bottom-8 -right-4 text-[120px] font-serif font-black text-white/[0.02] group-hover:text-amber-500/[0.04] transition-colors duration-700 pointer-events-none select-none">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <div className="relative z-10 space-y-8">
              {/* Topic Label */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50 group-hover:bg-amber-500 group-hover:shadow-[0_0_10px_#f59e0b] transition-all duration-500" />
                <h5 className="text-amber-600/80 font-black text-[10px] uppercase tracking-[0.3em]">
                  {title}
                </h5>
              </div>

              {/* The Core Question */}
              <p className="text-stone-300 font-serif text-xl md:text-2xl leading-relaxed italic group-hover:text-white transition-colors duration-500">
                “{point.text}”
              </p>
            </div>
          </div>
        );
      })}
      {/* Encouragement Footer */}
      <div className="pt-12 text-center flex flex-col items-center gap-4">
        <Sparkles size={16} className="text-amber-500/40" />
        <div className="flex items-center gap-4 opacity-50">
          <div className="w-12 h-px bg-stone-700" />
          <p className="text-[9px] text-stone-400 uppercase tracking-widest font-bold">
            Take a moment to breathe and observe your response
          </p>
          <div className="w-12 h-px bg-stone-700" />
        </div>
      </div>
    </div>
  );
}
