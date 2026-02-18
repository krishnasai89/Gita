"use client";
import { HelpCircle, Sparkles } from "lucide-react";

export default function Inquiry({ commentary }) {
  const reflectionPoints = commentary?.Inquiry || [];

  if (reflectionPoints.length === 0) {
    return (
      <div className="text-center py-20 text-stone-600 italic">
        No inquiry prompts available for this verse.
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <Sparkles className="mx-auto text-amber-500/40" size={32} />
        <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em]">
          Internalizing the Truth
        </h4>
        <p className="text-stone-300 font-serif text-2xl italic">
          Questions for Inner Inquiry
        </p>
      </div>

      {/* Inquiry List */}
      <div className="grid grid-cols-1 gap-8">
        {reflectionPoints.map((point, index) => (
          <div
            key={index}
            className="relative p-10 bg-stone-900/20 border border-white/5 rounded-3xl group hover:border-amber-500/20 transition-all duration-500"
          >
            {/* Numbering Decoration */}
            <span className="absolute top-8 right-10 text-5xl font-serif text-white/[0.03] group-hover:text-amber-500/[0.05] transition-colors">
              0{index + 1}
            </span>

            <div className="flex gap-6 items-start">
              <div className="mt-1 p-3 bg-stone-900 rounded-xl border border-white/5 text-amber-500/50">
                <HelpCircle size={20} />
              </div>

              <div className="space-y-4 max-w-xl">
                <h5 className="text-stone-100 font-serif text-xl tracking-wide">
                  {point.heading}
                </h5>
                <p className="text-stone-400 leading-relaxed font-light text-lg italic">
                  “{point.text}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Encouragement Footer */}
      <div className="pt-10 text-center">
        <p className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">
          Take a moment to breathe and observe your response to these questions.
        </p>
      </div>
    </div>
  );
}
