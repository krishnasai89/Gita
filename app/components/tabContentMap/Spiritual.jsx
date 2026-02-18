"use client";
import { Compass, Sun, Moon, Sparkles, ScrollText } from "lucide-react";

export default function Spiritual({ commentary, onTermClick }) {
  const insight = commentary?.Spiritual_insight;
  const levels = commentary?.Spiritual || [];

  // Guard clause: If everything is missing, don't render anything
  if (!insight && levels.length === 0) return null;

  // Layout Logic: Adjust grid based on item count
  const gridClass =
    levels.length === 1
      ? "grid-cols-1 max-w-3xl mx-auto"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className="space-y-16">
      {/* SECTION 1: THE CORE ESOTERIC INSIGHT (Only renders if 'insight' has matter) */}
      {insight && (
        <div className="relative text-center space-y-8 py-16 border-y border-white/5 bg-stone-900/10 rounded-3xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-stone-950 border border-white/5 rounded-full text-amber-500 shadow-2xl">
            <Compass size={24} className="animate-pulse" />
          </div>

          <div className="max-w-4xl mx-auto px-6">
            <h4 className="text-amber-500/40 text-[10px] font-black uppercase tracking-[0.6em] mb-6">
              The Eternal Wisdom
            </h4>
            <p className="text-stone-100 text-3xl md:text-4xl font-serif leading-[1.6] italic">
              “{insight}”
            </p>
          </div>
        </div>
      )}

      {/* SECTION 2: LEVELS OF REALITY (Renders if levels exist) */}
      {levels.length > 0 && (
        <div className="space-y-10">
          {/* Subtle label if the main insight was missing */}
          {!insight && (
            <div className="flex items-center gap-4 px-4 opacity-50">
              <ScrollText size={16} className="text-amber-500" />
              <h4 className="text-[10px] font-black uppercase tracking-widest">
                Philosophical Layers
              </h4>
              <div className="h-px flex-1 bg-stone-800" />
            </div>
          )}

          <div className={`grid gap-6 ${gridClass}`}>
            {levels.map((level, i) => (
              <div
                key={i}
                className="px-10 py-12 bg-stone-950 border border-white/5 rounded-[2.5rem] hover:border-amber-500/20 transition-all duration-700 group relative overflow-hidden shadow-xl"
              >
                {/* Background Icon Watermark */}
                <div className="absolute -bottom-4 -right-4 text-white/[0.02] group-hover:text-amber-500/[0.05] transition-colors">
                  {i % 2 === 0 ? <Sun size={120} /> : <Moon size={120} />}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-700 text-[10px] font-black uppercase tracking-widest">
                      Level 0{i + 1}
                    </span>
                    <div className="h-px w-4 bg-stone-900" />
                  </div>

                  <h5 className="text-stone-100 font-serif text-2xl group-hover:text-amber-500 transition-colors duration-500">
                    {level.title}
                  </h5>

                  <div className="h-px w-8 bg-stone-800 group-hover:w-16 group-hover:bg-amber-500/50 transition-all duration-500" />

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
      <div className="flex flex-col items-center gap-4 pt-8 opacity-20">
        <Sparkles size={20} className="text-amber-500" />
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-amber-500" />
          ))}
        </div>
      </div>
    </div>
  );
}
