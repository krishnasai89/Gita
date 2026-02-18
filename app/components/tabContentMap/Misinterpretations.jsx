"use client";
import {
  AlertCircle,
  CheckCircle2,
  Link as LinkIcon,
  HelpCircle,
} from "lucide-react";

export default function Misinterpretations({ commentary, onTermClick }) {
  const data = commentary?.Misinterpretations;

  if (!data) return null;

  const wrongPoints = data.worng || [];
  const correctPoints = data.Correct || [];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <HelpCircle className="mx-auto text-amber-500/20" size={32} />
        <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">
          Cognitive Recalibration
        </h4>
        <p className="text-stone-300 font-serif text-xl italic leading-relaxed">
          Distinguishing the shadow from the substance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* THE VERTICAL DIVIDER (Center line on Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/5 via-stone-800 to-transparent -translate-x-1/2" />

        {/* --- LEFT COLUMN: THE DISCARDED VIEWS --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 px-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertCircle className="text-red-500" size={16} />
            </div>
            <span className="text-stone-500 text-[10px] font-black uppercase tracking-widest">
              Surface Level / Misconceptions
            </span>
          </div>

          {wrongPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-stone-900/20 border border-white/5 rounded-[2rem] hover:bg-stone-900/40 transition-all duration-500 group"
            >
              <h5 className="text-stone-300 font-serif text-lg mb-2 group-hover:text-red-400/80 transition-colors">
                {item.title}
              </h5>
              <p className="text-stone-500 text-base leading-relaxed italic">
                “{item.text}”
              </p>
            </div>
          ))}
        </div>

        {/* --- RIGHT COLUMN: THE DEPTH / CORRECTIONS --- */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8 px-4">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <CheckCircle2 className="text-amber-500" size={16} />
            </div>
            <span className="text-stone-100 text-[10px] font-black uppercase tracking-widest">
              Deep Insight / Corrections
            </span>
          </div>

          {correctPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-stone-950 border border-white/10 rounded-[2rem] hover:border-amber-500/30 transition-all duration-500 shadow-xl group"
            >
              <div className="flex items-center gap-2 mb-3">
                {/* Change icon if it's a cross-reference */}
                {item.title.toLowerCase().includes("reference") ||
                item.title.toLowerCase().includes("cross") ? (
                  <LinkIcon size={14} className="text-amber-500/50" />
                ) : (
                  <div className="w-1 h-1 rounded-full bg-amber-500" />
                )}
                <h5 className="text-stone-100 font-serif text-xl">
                  {item.title}
                </h5>
              </div>
              <p className="text-stone-300 text-lg leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center pt-8">
        <p className="text-[9px] text-stone-700 uppercase tracking-[0.5em] font-mono">
          End of Dialectic Analysis
        </p>
      </div>
    </div>
  );
}
