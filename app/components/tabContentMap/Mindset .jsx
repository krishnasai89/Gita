"use client";
import { MoveRight, Quote, Sparkles } from "lucide-react";

export default function Mindset({ commentary, onTermClick }) {
  // 1. Gracefully handle both the new camelCase schema and the old legacy schema
  const mindsetData = commentary?.mindset || commentary?.Mindset;
  const points = mindsetData?.points || [];
  const introText = mindsetData?.intro || mindsetData?.text;

  if (!mindsetData || (!introText && points.length === 0)) return null;

  return (
    <div className="w-full space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER: Context for the Alchemy */}
      <div className="space-y-6 text-center max-w-4xl mx-auto relative">
        {/* Subtle Ambient Glow */}

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="relative z-10 inline-flex items-center gap-3 p-2 px-5 bg-stone-900 border border-white/5 rounded-full shadow-lg">
              <Sparkles size={14} className="text-amber-500" />
              <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">
                Mindset Alchemy <br /> Internalization
              </h4>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-none p-5">
              The Transformation of Mind
            </h3>
          </div>
        </div>
        {introText && (
          <p className="relative z-10 text-stone-200 font-serif text-2xl md:text-3xl italic leading-relaxed px-4 drop-shadow-md">
            {introText}
          </p>
        )}
      </div>

      {/* COMPARISON STACK */}
      <div className="space-y-8">
        {points.map((point, idx) => {
          // Split by the '->' operator
          const parts = point.text.split("->");
          const hasTwoSides = parts.length === 2;

          return (
            <div
              key={idx}
              className="group relative bg-[#050505] border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_10px_40px_rgba(245,158,11,0.05)]"
            >
              {/* Point Title Bar */}
              <div className="bg-[#0a0a0a] border-b border-white/5 px-8 py-5 flex items-center justify-between">
                <h5 className="text-stone-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                  Analysis:
                  <span className="text-stone-300 group-hover:text-amber-500 transition-colors duration-300">
                    {point.title}
                  </span>
                </h5>
                <Quote
                  size={16}
                  className="text-stone-700 group-hover:text-amber-500/30 transition-colors duration-500"
                />
              </div>

              <div className="flex flex-col lg:flex-row min-h-[200px]">
                {hasTwoSides ? (
                  <>
                    {/* LEFT SIDE: The Egoic/Shadow Action */}
                    <div className="flex-1 p-8 md:p-12 space-y-5 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
                        <span className="text-red-400/50 text-[10px] font-black uppercase tracking-[0.3em]">
                          The Shadow Path
                        </span>
                      </div>
                      <p className="text-stone-400 font-serif text-xl leading-relaxed italic">
                        {parts[0].trim()}
                      </p>
                    </div>

                    {/* CENTER DIVIDER: The Alchemy Arrow */}
                    <div className="relative w-full lg:w-px flex items-center justify-center bg-stone-900/50">
                      <div className="absolute h-px w-full lg:h-full lg:w-px bg-stone-800 group-hover:bg-gradient-to-b group-hover:from-stone-800 group-hover:via-amber-500/30 group-hover:to-stone-800 transition-colors duration-700" />

                      <div className="relative z-10 bg-[#0a0a0a] p-3 md:p-4 rounded-full border border-stone-800 group-hover:border-amber-500/50 transition-colors duration-500 shadow-xl lg:group-hover:translate-x-2 group-hover:translate-y-2 lg:group-hover:translate-y-0 transform-gpu">
                        <MoveRight
                          className="text-stone-600 group-hover:text-amber-500 transition-colors duration-300 rotate-90 lg:rotate-0"
                          size={20}
                        />
                      </div>
                    </div>

                    {/* RIGHT SIDE: The Dharmic/Higher Action */}
                    <div className="flex-1 p-8 md:p-12 space-y-5 bg-amber-500/[0.01] group-hover:bg-amber-500/[0.04] transition-colors duration-500 relative overflow-hidden">
                      {/* Subtle success glow inside the right panel */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                      <div className="relative z-10 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-amber-600/80 text-[10px] font-black uppercase tracking-[0.3em]">
                          The Dharmic Path
                        </span>
                      </div>
                      <p className="relative z-10 text-stone-100 font-serif text-xl md:text-2xl leading-relaxed">
                        {parts[1].trim()}
                      </p>
                    </div>
                  </>
                ) : (
                  /* Single Column Fallback */
                  <div className="flex-1 p-8 md:p-12 group-hover:bg-stone-900/20 transition-colors duration-500">
                    <p className="text-stone-300 font-serif text-xl leading-relaxed italic">
                      {point.text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
