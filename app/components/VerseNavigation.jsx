"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid, Sparkles } from "lucide-react";

export default function VerseNavigation({ pagination, chapterId }) {
  if (!pagination) return null;

  const isStartOfChapter = !pagination.prev || pagination.prev.disabled;
  const isEndOfChapter = !pagination.next || pagination.next.disabled;

  return (
    <div className="w-full">
      {/* 
        Mobile: Stacked flex-col 
        Desktop: Relative flex row with an overlapping absolute center button 
      */}
      <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-0">
        {/* --- PREVIOUS VERSE --- */}
        <div className="flex-1 w-full md:pr-6">
          {!isStartOfChapter ? (
            <Link
              href={`/shlokas/${chapterId}/${pagination.prev.id}`}
              className="group relative flex flex-col items-start gap-4 p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#050505] hover:border-amber-500/30 overflow-hidden transition-all duration-500 h-full"
            >
              {/* Subtle hover flare */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center gap-3 text-stone-500 group-hover:text-amber-500 transition-colors">
                <ArrowLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Previous Shloka
                </span>
              </div>
              <span className="relative z-10 text-stone-400 font-serif text-xl group-hover:text-white transition-colors">
                {pagination.prev.label}
              </span>
            </Link>
          ) : (
            <div className="flex flex-col items-start justify-center gap-2 p-8 md:p-10 rounded-[2rem] border border-dashed border-white/10 bg-transparent h-full opacity-40">
              <div className="w-4 h-px bg-stone-700" />
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 italic">
                Beginning of Adhyāya
              </span>
            </div>
          )}
        </div>

        {/* --- CENTER: BACK TO LIBRARY (Overlapping on Desktop) --- */}
        <div className="relative z-20 flex items-center justify-center py-4 md:py-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Link
            href="/#chapters"
            className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border border-white/10 text-stone-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-950/20 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:scale-110 active:scale-95"
            title="Back to Chapter Grid"
          >
            <LayoutGrid
              size={20}
              className="group-hover:scale-90 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* --- NEXT VERSE --- */}
        <div className="flex-1 w-full md:pl-6">
          {!isEndOfChapter ? (
            <Link
              href={`/shlokas/${chapterId}/${pagination.next.id}`}
              className="group relative flex flex-col items-end gap-4 p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#050505] hover:border-amber-500/30 overflow-hidden transition-all duration-500 text-right h-full"
            >
              {/* Subtle hover flare */}
              <div className="absolute inset-0 bg-gradient-to-l from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center gap-3 text-stone-500 group-hover:text-amber-500 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Next Shloka
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
              <span className="relative z-10 text-stone-400 font-serif text-xl group-hover:text-white transition-colors">
                {pagination.next.label}
              </span>
            </Link>
          ) : (
            <div className="relative flex flex-col items-end justify-center gap-3 p-8 md:p-10 rounded-[2rem] border border-amber-500/20 bg-gradient-to-bl from-amber-500/10 to-transparent text-right h-full overflow-hidden">
              <Sparkles className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 text-amber-500/5 pointer-events-none" />

              <div className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] drop-shadow-md">
                Adhyāya Samāpti
              </div>
              <span className="text-stone-300 font-serif text-sm italic max-w-[200px]">
                You have reached the completion of this chapter.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
