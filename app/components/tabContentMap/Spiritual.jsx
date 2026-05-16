"use client";
import { Compass, Sun, Moon, Sparkles, ScrollText, Wind } from "lucide-react";

export default function Spiritual({ commentary, onTermClick }) {
  // Gracefully handle both the new camelCase schema and the old PascalCase one
  const spiritualData = commentary?.spiritual || {};
  const insight = spiritualData?.insight || commentary?.Spiritual_insight;
  const levels = spiritualData?.points || commentary?.Spiritual || [];

  // Guard clause: If everything is missing, don't render anything
  if (!insight && levels.length === 0) return null;

  // Layout Logic: Adjust grid based on item count for optimal reading width
  const gridClass =
    levels.length === 1
      ? "grid-cols-1 max-w-3xl mx-auto"
      : "grid-cols-1 lg:grid-cols-2";

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* SECTION 1: THE CORE ESOTERIC INSIGHT */}
      {insight && (
        <div className="relative text-center space-y-8 py-16 px-6 md:px-12 mt-8 border border-white/5 bg-gradient-to-b from-stone-900/30 to-[#050505] rounded-[3rem] shadow-2xl">
          {/* Breaking-the-box Astrolabe Icon */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-[#0a0a0a] border border-amber-500/20 rounded-full text-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <Compass
              size={32}
              className="animate-[spin_12s_linear_infinite]"
              strokeWidth={1.5}
            />
          </div>

          <div className="max-w-4xl mx-auto pt-4 relative z-10">
            <h4 className="flex items-center justify-center gap-4 text-amber-500/50 text-[10px] font-black uppercase tracking-[0.6em] mb-8">
              <Wind size={14} />
              The Eternal Wisdom
              <Wind size={14} />
            </h4>
            <p className="text-stone-200 text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed italic drop-shadow-md">
              “{insight}”
            </p>
          </div>

          {/* Subtle bottom glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
      )}

      {/* SECTION 2: LEVELS OF REALITY */}
      {levels.length > 0 && (
        <div className="space-y-10">
          {/* Subtle label if the main insight was missing */}
          {!insight && (
            <div className="flex items-center gap-4 opacity-60">
              <ScrollText size={16} className="text-amber-500" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">
                Philosophical Layers
              </h4>
              <div className="h-px flex-1 bg-gradient-to-r from-amber-500/30 to-transparent" />
            </div>
          )}

          <div className={`grid gap-6 md:gap-8 ${gridClass}`}>
            {levels.map((level, i) => (
              <div
                key={i}
                className="px-8 py-10 md:px-12 md:py-12 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] hover:bg-stone-900/40 hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-700 group relative overflow-hidden shadow-xl"
              >
                {/* Background Celestial Watermark */}
                <div className="absolute -bottom-8 -right-8 text-white/[0.02] group-hover:text-amber-500/[0.05] group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000 ease-out pointer-events-none">
                  {i % 2 === 0 ? (
                    <Sun size={160} strokeWidth={1} />
                  ) : (
                    <Moon size={160} strokeWidth={1} />
                  )}
                </div>

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="text-amber-600/80 text-[10px] font-black uppercase tracking-[0.4em]">
                      Level {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>

                  <h5 className="text-stone-100 font-serif text-2xl group-hover:text-amber-400 transition-colors duration-500">
                    {level.title}
                  </h5>

                  {/* Expanding accent line */}
                  <div className="h-px w-8 bg-stone-800 group-hover:w-20 group-hover:bg-amber-500/50 transition-all duration-700 ease-out" />

                  <p className="text-stone-400 text-lg leading-relaxed font-light italic">
                    {level.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER DECORATION */}
      <div className="flex flex-col items-center gap-5 pt-12 opacity-30 select-none pointer-events-none">
        <Sparkles size={24} className="text-amber-500" strokeWidth={1} />
        <div className="flex gap-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-amber-500 ${i === 1 ? "opacity-100" : "opacity-40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
