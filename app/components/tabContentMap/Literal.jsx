"use client";
import { History, Quote } from "lucide-react";

export default function Literal({ commentary, onTermClick }) {
  // Gracefully handle both the new camelCase schema and the old PascalCase one
  const literalText = commentary?.literal || commentary?.Literal;

  if (!literalText) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-stone-600">
        <History size={48} className="mb-4 opacity-20" />
        <p className="uppercase tracking-[0.3em] text-[10px] font-black">
          Context Pending
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Tab Branding / Header Line */}
      <div className="flex items-center gap-6 opacity-60">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/30" />
        <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap">
          The Direct Meaning
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/30" />
      </div>

      {/* Main Manuscript Card */}
      <div className="relative group max-w-4xl mx-auto">
        {/* Subtle Hover Beam */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative p-8 md:p-14 bg-gradient-to-br from-stone-900/60 to-stone-950/80 border border-white/5 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Large Background Quote Icon */}
          <Quote className="absolute -top-6 -left-6 text-amber-500/5 w-40 h-40 -rotate-12 pointer-events-none transition-transform duration-700 group-hover:-rotate-6 group-hover:scale-110" />

          {/* 
            The Drop Cap & Text 
            first-letter styling creates an illuminated manuscript effect
          */}
          <p
            className="relative z-10 text-stone-300 leading-loose text-lg md:text-xl font-serif font-light text-justify md:text-left
            first-letter:float-left 
            first-letter:text-6xl md:first-letter:text-7xl 
            first-letter:pr-4 first-letter:pt-2 
            first-letter:font-black first-letter:text-amber-500 
            first-letter:drop-shadow-[0_0_10px_rgba(245,158,11,0.4)]
          "
          >
            {literalText}
          </p>
        </div>

        {/* Corner Accents (Bottom Right) */}
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-amber-500/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Narrative Context Footer */}
      <div className="pt-4 text-center">
        <p className="text-[9px] text-stone-500 uppercase tracking-[0.3em] font-bold inline-flex items-center gap-3">
          <span className="w-4 h-px bg-stone-700" />
          Translated from the original Sanskrit text
          <span className="w-4 h-px bg-stone-700" />
        </p>
      </div>
    </section>
  );
}
