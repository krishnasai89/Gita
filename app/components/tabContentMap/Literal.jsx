"use client";
import { History } from "lucide-react";

export default function Literal({ commentary, onTermClick }) {
  const literal = commentary?.Literal;

  if (!literal)
    return (
      <div className="flex flex-col items-center justify-center py-20 opacity-20">
        <History size={48} />
        <p className="mt-4 uppercase tracking-[0.3em] text-[10px] font-black">
          Context Pending
        </p>
      </div>
    );

  return (
    <section className="space-y-12">
      {/* Tab Branding */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-800" />
        <span className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
          The Direct Meaning
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-800" />
      </div>

      {/* Main Manuscript Card */}
      <div className="relative group">
        {/* Decorative Corner Accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber-500/30" />
        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber-500/30" />

        <blockquote className="relative p-12 bg-stone-950 border border-white/5 rounded-[2rem] shadow-2xl">
          {/* Large Quote Decoration */}
          <span className="absolute -left-2 -top-6 text-9xl text-amber-800/50 font-serif select-none">
            “
          </span>

          <p className="relative z-10 text-stone-300 leading-[2] text-2xl font-serif italic text-center md:text-left">
            {literal}
          </p>

          <span className="absolute -right-2 -bottom-20 text-9xl text-amber-900/60 font-serif select-none">
            ”
          </span>
        </blockquote>
      </div>

      {/* Narrative Context Placeholder */}
      <div className="pt-8 text-center">
        <p className="text-[10px] text-stone-600 uppercase tracking-widest font-bold">
          As translated from the original Sanskrit text.
        </p>
      </div>
    </section>
  );
}
