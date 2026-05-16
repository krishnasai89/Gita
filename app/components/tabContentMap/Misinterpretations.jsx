"use client";
import {
  AlertCircle,
  CheckCircle2,
  Link as LinkIcon,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function Misinterpretations({ commentary, onTermClick }) {
  // Gracefully handle both the new camelCase schema and the old legacy schema
  const data = commentary?.misinterpretations || commentary?.Misinterpretations;

  if (!data) return null;

  // Map to the cleaned schema, fallback to the old typo-laden schema
  const wrongPoints = data.myth || data.worng || [];
  const correctPoints = data.truth || data.Correct || [];

  if (wrongPoints.length === 0 && correctPoints.length === 0) return null;

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="inline-flex p-4 bg-stone-900 border border-white/5 rounded-2xl shadow-xl">
          <HelpCircle className="text-amber-500/50" size={24} />
        </div>
        <div>
          <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Cognitive Recalibration
          </h4>
          <p className="text-stone-300 font-serif text-2xl italic leading-relaxed">
            Distinguishing the shadow of misunderstanding from the substance of
            truth.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* THE VERTICAL DIVIDER (Center line on Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-10 bottom-0 w-px bg-gradient-to-b from-stone-800 via-stone-800/50 to-transparent -translate-x-1/2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* --- LEFT COLUMN: THE MYTHS (Faded, Muted) --- */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-end items-center gap-3 px-4">
              <span className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em]">
                Common Misconception
              </span>
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="text-red-500/70" size={16} />
              </div>
            </div>

            <div className="space-y-6 lg:space-y-12">
              {wrongPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-8 md:p-10 bg-[#080808] border border-red-900/20 rounded-[2.5rem] lg:text-right group"
                >
                  <h5 className="text-stone-400 font-serif text-xl mb-3 group-hover:text-red-400/80 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-stone-500 text-base leading-relaxed italic">
                    “{item.text}”
                  </p>

                  {/* Visual connector to the right side (Desktop only) */}
                  <div className="hidden lg:block absolute top-1/2 -right-10 translate-x-1/2 -translate-y-1/2 text-stone-800">
                    <ArrowRight size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE TRUTH (Elevated, Glowing) --- */}
          <div className="space-y-8">
            <div className="flex justify-center lg:justify-start items-center gap-3 px-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <CheckCircle2 className="text-emerald-500" size={16} />
              </div>
              <span className="text-stone-300 text-[10px] font-black uppercase tracking-[0.3em]">
                The Deep Truth
              </span>
            </div>

            <div className="space-y-6 lg:space-y-12">
              {correctPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="relative p-8 md:p-10 bg-[#0a0a0a] border border-emerald-900/30 rounded-[2.5rem] hover:border-emerald-500/40 transition-all duration-500 shadow-xl group overflow-hidden"
                >
                  {/* Subtle success glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {/* Check if it's a reference */}
                      {item.title.toLowerCase().includes("reference") ||
                      item.title.toLowerCase().includes("cross") ? (
                        <LinkIcon size={14} className="text-amber-500/80" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                      )}
                      <h5 className="text-stone-100 font-serif text-2xl">
                        {item.title}
                      </h5>
                    </div>

                    <div className="h-px w-12 bg-stone-800 mb-4 group-hover:w-24 group-hover:bg-emerald-500/30 transition-all duration-500" />

                    <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pt-12 opacity-30">
        <p className="text-[9px] text-stone-500 uppercase tracking-[0.6em] font-mono">
          End of Dialectic Analysis
        </p>
      </div>
    </div>
  );
}
