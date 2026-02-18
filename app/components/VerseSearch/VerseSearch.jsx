"use client";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";

export default function VerseSearch() {
  const [chapter, setChapter] = useState("1");
  const [verse, setVerse] = useState("");

  const handleJump = (e) => {
    e.preventDefault();
    const ch = parseInt(chapter);
    const v = parseInt(verse);

    if (ch >= 1 && ch <= 18 && v > 0) {
      // FORCED HARD RELOAD:
      // This resets the scroll, clears the "yellow glow" state,
      // and ensures the browser starts at the very top.
      window.location.href = `/shlokas/chapter${ch}/verse${v}`;
    }
  };

  return (
    <form
      onSubmit={handleJump}
      className="flex items-center gap-4 bg-stone-900/80 p-3 rounded-full border border-white/10 max-w-lg mx-auto"
    >
      <div className="pl-4 flex items-center gap-2 text-stone-500">
        <Search size={18} />
      </div>

      <div className="flex items-center gap-2 flex-1 px-2">
        <input
          type="number"
          placeholder="Ch"
          className="w-full bg-transparent text-amber-500 focus:outline-none font-serif text-xl"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          // NO autoFocus here
        />
        <span className="text-stone-700">:</span>
        <input
          type="number"
          placeholder="Verse"
          className="w-full bg-transparent text-amber-500 focus:outline-none font-serif text-xl"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-amber-500 text-stone-950 p-3 rounded-full hover:bg-white transition-all"
      >
        <ArrowRight size={20} />
      </button>
    </form>
  );
}
