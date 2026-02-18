"use client";
import { MoveRight, Quote } from "lucide-react";

export default function Mindset({ commentary, onTermClick }) {
  const mindsetData = commentary?.Mindset;
  const points = mindsetData?.points || [];

  if (!mindsetData) return null;

  return (
    <div className="w-full space-y-16">
      {/* HEADER: Context for the Alchemy */}
      <div className="space-y-6 text-center">
        <div className="inline-block p-2 px-4 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <h4 className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">
            Mindset Alchemy
          </h4>
        </div>
        <p className="text-stone-100 font-serif text-2xl italic leading-relaxed max-w-4xl mx-auto px-4">
          {mindsetData.text}
        </p>
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
              className="group relative bg-stone-950 border border-white/5 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-700 hover:border-amber-500/20"
            >
              {/* Point Title Bar */}
              <div className="bg-stone-900/50 border-b border-white/5 px-10 py-4 flex items-center justify-between">
                <h5 className="text-stone-400 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Analysis:{" "}
                  <span className="group-hover:text-amber-600 group-hover:text-[15px] transition-all delay-100">
                    {point.title}
                  </span>
                </h5>
                <Quote size={14} className="text-stone-700" />
              </div>

              <div className="flex flex-col lg:flex-row min-h-[200px]">
                {hasTwoSides ? (
                  <>
                    {/* LEFT SIDE: The Egoic/Shadow Action */}
                    <div className="flex-1 p-10 md:p-12 space-y-4 bg-stone-900/10">
                      <span className="text-red-900/60 text-[9px] font-black uppercase tracking-widest block">
                        The Shadow Path
                      </span>
                      <p className="text-stone-400 font-serif text-xl leading-relaxed italic">
                        {parts[0].trim()}
                      </p>
                    </div>

                    {/* CENTER DIVIDER: The Alchemy Arrow */}
                    <div className="relative w-full lg:w-px flex items-center justify-center">
                      <div className="absolute h-px w-full lg:h-full lg:w-px bg-stone-800" />
                      <div className="relative z-10 bg-stone-950 p-3 rounded-full border border-stone-800 group-hover:border-amber-500/50 transition-colors duration-500">
                        <MoveRight
                          className="text-stone-600 group-hover:text-amber-500 transition-all rotate-90 lg:rotate-0"
                          size={20}
                        />
                      </div>
                    </div>

                    {/* RIGHT SIDE: The Dharmic/Higher Action */}
                    <div className="flex-1 p-10 md:p-12 space-y-4 bg-amber-500/[0.02]">
                      <span className="text-amber-700 text-[9px] font-black uppercase tracking-widest block">
                        The Dharmic Path
                      </span>
                      <p className="text-stone-100 font-serif text-xl leading-relaxed">
                        {parts[1].trim()}
                      </p>
                    </div>
                  </>
                ) : (
                  /* Single Column Fallback */
                  <div className="flex-1 p-10 md:p-12">
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
