"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

export default function VerseNavigation({ pagination, chapterId }) {
  if (!pagination) return null;

  const isStartOfChapter = !pagination.prev || pagination.prev.disabled;
  const isEndOfChapter = !pagination.next || pagination.next.disabled;

  return (
    <div className="pb-24 border-t border-white/5 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* --- PREVIOUS VERSE --- */}
        <div className="flex-1 w-full group">
          {!isStartOfChapter ? (
            <Link
              href={`/shlokas/${chapterId}/${pagination.prev.id}`}
              className="flex flex-col items-start gap-4 p-8 rounded-3xl border border-white/5 bg-stone-900/20 hover:bg-stone-900/50 hover:border-amber-500/30 transition-all duration-500"
            >
              <div className="flex items-center gap-2 text-stone-500 group-hover:text-amber-500 transition-colors">
                <ArrowLeft size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">
                  Previous Shloka
                </span>
              </div>
              <span className="text-stone-300 font-serif text-lg group-hover:text-white transition-colors">
                {pagination.prev.label}
              </span>
            </Link>
          ) : (
            <div className="p-8 opacity-20 border border-dashed border-white/10 rounded-3xl h-full flex flex-col justify-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 italic">
                Beginning of Adhyāya
              </span>
            </div>
          )}
        </div>

        {/* --- CENTER: BACK TO LIBRARY --- */}
        <Link
          href="/#chapters"
          className="p-5 flex items-center justify-center rounded-full bg-stone-900 border border-white/5 text-stone-400 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-xl hover:scale-110 active:scale-95 shrink-0"
          title="Back to Chapters"
        >
          <LayoutGrid size={24} />
        </Link>

        {/* --- NEXT VERSE --- */}
        <div className="flex-1 w-full group">
          {!isEndOfChapter ? (
            <Link
              href={`/shlokas/${chapterId}/${pagination.next.id}`}
              className="flex flex-col items-end gap-4 p-8 rounded-3xl border border-white/5 bg-stone-900/20 hover:bg-stone-900/50 hover:border-amber-500/30 transition-all duration-500 text-right"
            >
              <div className="flex items-center gap-2 text-stone-500 group-hover:text-amber-500 transition-colors">
                <span className="text-xs font-black uppercase tracking-widest">
                  Next Shloka
                </span>
                <ArrowRight size={16} />
              </div>
              <span className="text-stone-300 font-serif text-lg group-hover:text-white transition-colors">
                {pagination.next.label}
              </span>
            </Link>
          ) : (
            <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-3xl text-right h-full flex flex-col justify-center">
              <div className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                Chapter Complete
              </div>
              <span className="text-stone-400 font-serif text-sm">
                You have reached the end of this chapter.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
