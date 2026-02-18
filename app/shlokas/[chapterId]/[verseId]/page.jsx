import VerseDetails from "@/app/components/verseDetails";
import { gitaData } from "@/app/lib/gitaData";

export default async function VersePage({ params }) {
  // 1. Await params (Required in Next.js 15/16)
  const { chapterId, verseId } = await params;

  // 2. Extract numbers from strings like "chapter1" and "verse1"
  // This gives us "1" and "1"
  const chNum = chapterId.replace("chapter", "");
  const vNum = verseId.replace("verse", "");

  // 3. Create the lookup key (matches "ch1-v1")
  const dataKey = `ch${chNum}-v${vNum}`;
  const verseContent = gitaData[dataKey];

  // 4. Handle Case: Data Not Found
  if (!verseContent) {
    return (
      <div className="bg-stone-950 min-h-screen flex items-center justify-center text-stone-500">
        <div className="text-center p-8 border border-white/5 rounded-[2rem]">
          <h1 className="text-2xl font-serif mb-2 text-amber-500">
            Verse Not Found
          </h1>
          <p>
            We couldn't find data for Ch {chNum} Shloka {vNum}
          </p>
        </div>
      </div>
    );
  }

  // 5. Prepare Pagination Logic
  // We define these locally so they are available for the paginationData object
  const currentVNum = parseInt(vNum);
  const nextVNum = currentVNum + 1;
  const prevVNum = currentVNum - 1;

  // Check if next/prev keys exist in gitaData to prevent dead links
  const nextKey = `ch${chNum}-v${nextVNum}`;
  const hasNext = Boolean(gitaData[nextKey]);

  const paginationData = {
    next: hasNext
      ? {
          id: `verse${nextVNum}`,
          label: `Shloka ${nextVNum}`,
          disabled: false,
        }
      : { disabled: true },

    prev:
      currentVNum > 1
        ? {
            id: `verse${prevVNum}`,
            label: `Shloka ${prevVNum}`,
            disabled: false,
          }
        : { disabled: true },
  };

  // 6. Return the UI
  return (
    <main className="bg-stone-950">
      <VerseDetails
        data={{
          chapter: chNum,
          verse: vNum,
          sanskrit: verseContent.sanskrit_text,
          transliteration: verseContent.transliteration,
          translation: verseContent.english_translation,
          words: verseContent.word_breakdown || [],
          media: verseContent.media,
          commentary: verseContent.commentary,
        }}
        pagination={paginationData}
        chapterId={chapterId}
      />
    </main>
  );
}
