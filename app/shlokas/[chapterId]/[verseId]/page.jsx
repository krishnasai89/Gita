import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";
import VerseDetails from "@/app/components/verseDetails";
import { gitaData } from "@/app/lib/gitaData";

export default async function VersePage({ params }) {
  // 1. Await params (Required in Next.js 15/16)
  const { chapterId, verseId } = await params;

  // 2. Extract numbers from strings like "chapter1" and "verse1"
  const chNum = chapterId.replace("chapter", "");
  const vNum = verseId.replace("verse", "");

  // 3. Create the lookup key (matches "ch1-v1")
  const dataKey = `ch${chNum}-v${vNum}`;
  const verseContent = gitaData[dataKey];

  // 4. Handle Case: Data Not Found (Premium 404 State)
  if (!verseContent) {
    return (
      <div className="min-h-screen bg-[#030303] flex items-center justify-center p-6 relative overflow-hidden font-sans">
        {/* Ambient lost glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center max-w-md w-full p-10 md:p-14 bg-[#0a0a0a] border border-white/5 rounded-[3rem] shadow-2xl">
          <div className="w-20 h-20 mx-auto bg-stone-900/50 border border-white/5 rounded-full flex items-center justify-center mb-8 shadow-inner">
            <BookOpen className="text-stone-700" size={32} strokeWidth={1.5} />
          </div>

          <h1 className="text-3xl font-serif mb-4 text-stone-200">
            Shloka Not Found
          </h1>

          <p className="text-stone-500 mb-10 leading-relaxed font-light text-sm md:text-base">
            The wisdom you seek for{" "}
            <span className="text-stone-300 font-medium">
              Adhyāya {chNum}, Shloka {vNum}
            </span>{" "}
            is currently lost to time, or not yet transcribed into our database.
          </p>

          <Link
            href="/#chapters"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-stone-900 border border-white/10 hover:border-amber-500/30 text-stone-400 hover:text-amber-500 transition-all duration-300 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="text-xs font-black uppercase tracking-widest">
              Return to Library
            </span>
          </Link>
        </div>
      </div>
    );
  }

  // 5. Bulletproof Pagination Logic
  const currentVNum = parseInt(vNum);
  const nextVNum = currentVNum + 1;
  const prevVNum = currentVNum - 1;

  // STRICT CHECK: Verify the data actually exists in the DB to prevent 404 dead-links
  const nextKey = `ch${chNum}-v${nextVNum}`;
  const prevKey = `ch${chNum}-v${prevVNum}`;

  const hasNext = Boolean(gitaData[nextKey]);
  const hasPrev = Boolean(gitaData[prevKey]);

  const paginationData = {
    next: hasNext
      ? {
          id: `verse${nextVNum}`,
          label: `Shloka ${nextVNum}`,
          disabled: false,
        }
      : { disabled: true },

    prev: hasPrev
      ? {
          id: `verse${prevVNum}`,
          label: `Shloka ${prevVNum}`,
          disabled: false,
        }
      : { disabled: true },
  };

  // 6. Return the UI (Safely mapping both old and new schema structures)
  return (
    <main className="bg-[#030303]">
      <VerseDetails
        data={{
          chapter: chNum,
          verse: vNum,
          // Support both camelCase (new) and snake_case (old)
          sanskrit: verseContent.sanskritText || verseContent.sanskrit_text,
          transliteration: verseContent.transliteration,
          translation:
            verseContent.englishTranslation || verseContent.english_translation,
          words:
            verseContent.wordBreakdown || verseContent.word_breakdown || [],
          commentary: verseContent.commentary,
        }}
        pagination={paginationData}
        chapterId={chapterId}
      />
    </main>
  );
}
