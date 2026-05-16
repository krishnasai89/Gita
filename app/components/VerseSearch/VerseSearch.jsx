"use client";
import { useState } from "react";
import { Search, ArrowRight, Sparkles } from "lucide-react";

export default function VerseSearch({ onJump }) {
  const [chapter, setChapter] = useState("1");
  const [verse, setVerse] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Validation logic for visual feedback
  const chNum = parseInt(chapter);
  const vNum = parseInt(verse);
  const isValid = chNum >= 1 && chNum <= 18 && vNum > 0;

  const handleJump = (e) => {
    e.preventDefault();
    if (isValid) {
      if (onJump) onJump(); // Closes the overlay if used inside SearchOverlay

      // FORCED HARD RELOAD: Resets scroll and state
      window.location.href = `/shlokas/chapter${chNum}/verse${vNum}`;
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto group">
      {/* Dynamic Background Glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-full blur-md transition-all duration-700 pointer-events-none ${
          isFocused ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      />

      <form
        onSubmit={handleJump}
        className={`relative flex items-center p-2 rounded-full backdrop-blur-2xl transition-all duration-500 border ${
          isFocused
            ? "bg-stone-950/90 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.1)]"
            : "bg-stone-900/60 border-white/10 hover:border-white/20 hover:bg-stone-900/80"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          // Only remove focus if we are clicking outside the form entirely
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
          }
        }}
      >
        {/* Search Icon / Decor */}
        <div className="pl-4 pr-2 flex items-center gap-2">
          {isFocused ? (
            <Sparkles size={18} className="text-amber-500 animate-pulse" />
          ) : (
            <Search size={18} className="text-stone-500" />
          )}
        </div>

        {/* Inputs Section */}
        <div className="flex items-center flex-1 px-2 gap-3">
          {/* Chapter Input */}
          <div className="flex flex-col relative w-16 group/input">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono tracking-widest text-stone-500 uppercase opacity-0 group-hover/input:opacity-100 transition-opacity">
              Chapter
            </span>
            <div className="flex items-center gap-2">
              <span className="text-stone-600 font-mono text-xs select-none">
                CH
              </span>
              <input
                type="number"
                placeholder="1"
                min="1"
                max="18"
                className="w-full bg-transparent text-amber-500 placeholder:text-stone-700 focus:outline-none font-serif text-2xl text-center hide-arrows"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
              />
            </div>
          </div>

          {/* Divider */}
          <span className="text-stone-700 font-serif text-2xl pb-1 animate-pulse select-none">
            :
          </span>

          {/* Verse Input */}
          <div className="flex flex-col relative flex-1 group/input">
            <span className="absolute -top-5 left-8 text-[8px] font-mono tracking-widest text-stone-500 uppercase opacity-0 group-hover/input:opacity-100 transition-opacity">
              Verse
            </span>
            <div className="flex items-center gap-2 pl-2">
              <span className="text-stone-600 font-mono text-xs select-none">
                VS
              </span>
              <input
                type="number"
                placeholder="47"
                min="1"
                className="w-full bg-transparent text-amber-500 placeholder:text-stone-700 focus:outline-none font-serif text-2xl hide-arrows"
                value={verse}
                onChange={(e) => setVerse(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid}
          className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 ${
            isValid
              ? "bg-amber-500 text-stone-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:bg-amber-400 hover:scale-105 active:scale-95"
              : "bg-stone-800 text-stone-600 cursor-not-allowed"
          }`}
        >
          <ArrowRight
            size={20}
            className={
              isValid && isFocused ? "translate-x-0.5 transition-transform" : ""
            }
          />
        </button>
      </form>

      {/* Global Style to hide number input arrows (spinners) */}
      <style jsx global>{`
        /* Chrome, Safari, Edge, Opera */
        .hide-arrows::-webkit-outer-spin-button,
        .hide-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        .hide-arrows[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
}
