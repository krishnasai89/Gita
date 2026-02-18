"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Search as SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";
// Components
import CommentarySection from "./CommentarySection";

import VerseNavigation from "./VerseNavigation";
import VerseSearch from "./VerseSearch/VerseSearch";
import SearchOverlay from "./SearchOverlay/SearchOverlay";
import Mindset from "./tabContentMap/Mindset ";

// Data
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VerseDetails({ data, pagination, chapterId }) {
  const miniHeaderRef = useRef(null);
  const mainVerseRef = useRef(null);
  const mediaRef = useRef(null);
  const hasMedia = data.commentary.media.image || data.commentary.media.video;
  // --- STATE ---
  const [index, setIndex] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const hasImage = Boolean(data.commentary?.media?.image);
  const hasVideo = Boolean(data.commentary?.media?.video);
  const hasBoth = hasImage && hasVideo;

  // --- GLOSSARY LOGIC ---
  const openGlossary = (termKey) => {
    const key = termKey.toLowerCase();
    if (glossaryData && glossaryData[key]) {
      setSelectedTerm(glossaryData[key]);
    }
  };
  useEffect(() => {
    setHasMounted(true);
  }, []);
  // Effect B: GSAP Sticky Header
  useEffect(() => {
    // We move the "existence guard" INSIDE the effect instead of stopping the whole hook
    if (!miniHeaderRef.current || !mainVerseRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(miniHeaderRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: mainVerseRef.current,
          start: "bottom top",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [hasMounted, data]); // Runs after mounting and when data changes

  const GlossarySidebar = dynamic(() => import("./GlossarySidebar"), {
    ssr: false,
    loading: () => (
      <div className="fixed inset-y-0 right-0 w-80 bg-stone-900 animate-pulse" />
    ),
  });
  return (
    <section className="relative min-h-screen text-stone-200 bg-stone-950 overflow-x-hidden">
      {/* SEARCH OVERLAY (Placed high in hierarchy) */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* GLOSSARY SIDEBAR */}
      <GlossarySidebar
        isOpen={!!selectedTerm}
        onClose={() => setSelectedTerm(null)}
        term={selectedTerm}
      />

      {/* STICKY MINI-HEADER */}
      <div
        ref={miniHeaderRef}
        className="fixed top-0 left-0 w-full z-[150] bg-stone-950/90 backdrop-blur-md border-b border-white/5 py-4 px-8 translate-y-[-100%] opacity-0"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-amber-500 font-mono text-xs font-bold tracking-widest">
              Adhyāya {data.chapter} • Shloka {data.verse}
            </span>
            <h3 className="text-stone-100 font-serif text-sm truncate max-w-md hidden md:block">
              {data.sanskrit?.split("|")[0]}...
            </h3>
          </div>

          {/* Search Trigger Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            suppressHydrationWarning // <--- Add this
            className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors group"
          >
            <span className="text-[10px] uppercase tracking-widest font-black">
              Search Index
            </span>
            <SearchIcon
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* MAIN VERSE DISPLAY */}
        <div ref={mainVerseRef} className="space-y-4 mt-32 text-center">
          <h6 className="text-amber-700/50 text-[10px] font-black uppercase tracking-[0.6em]">
            Adhyāya {data.chapter} • Shloka {data.verse}
          </h6>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-stone-100 leading-[1.6]">
            {data.sanskrit}
          </h2>
          <p className="text-amber-500/30 italic text-lg lg:text-xl font-serif">
            {data.transliteration}
          </p>
        </div>

        <p className="text-xl md:text-2xl lg:text-3xl font-light text-stone-300 italic text-center mt-12 mb-20 leading-relaxed max-w-5xl mx-auto">
          "{data.translation}"
        </p>

        {/* COMMENTARY TABS */}
        {data.commentary && (
          <div className="pt-20">
            <CommentarySection
              commentary={data.commentary}
              onTermClick={openGlossary}
            />
          </div>
        )}
      </div>

      {/* MINDSET & MEDIA BRIDGE */}
      <div className="mt-40 space-y-16 py-20 border-t border-white/5 pb-0">
        <h4 className="text-amber-500/50 text-xs font-black tracking-[0.6em] uppercase text-center">
          The Transformation of Mind
        </h4>
        {/* Calculate if we have media once at the top.
  Check for actual data existence rather than just boolean flags.
*/}
        <div
          className={`grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start p-8 pb-0 ${!hasMedia ? "flex justify-center" : ""}`}
        >
          {/* MEDIA COLUMN - Only render if media exists */}
          {hasMedia && (
            <div className="lg:col-span-2 relative group w-full">
              <motion.div className="relative rounded-sm overflow-hidden border-[12px] border-stone-900 shadow-2xl bg-black aspect-video">
                <div
                  ref={mediaRef}
                  className="w-full h-full flex items-center justify-center"
                >
                  {data.commentary.media.image ? (
                    <img
                      src={data.commentary.media.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  ) : (
                    <video
                      src={data.commentary.media.video}
                      controls
                      className="w-full h-full"
                    />
                  )}
                </div>
              </motion.div>
            </div>
          )}

          {/* MINDSET COLUMN */}
          <div
            className={`
      w-full 
      bg-stone-950 p-6 md:p-10 rounded-[3rem] border border-white/5 shadow-2xl
      ${
        hasMedia
          ? "lg:col-span-3" // Take 3 columns if media is present
          : "lg:col-span-5 max-w-4xl mx-auto" // Center and limit width if no media
      }
    `}
          >
            <Mindset commentary={data.commentary} onTermClick={openGlossary} />
          </div>
        </div>
        );
        {/* NAVIGATION & JUMP-TO */}
        <div className="max-w-md mx-auto py-12">
          <VerseSearch />
        </div>
        <div className="pt-20 border-t border-white/5">
          <VerseNavigation pagination={pagination} chapterId={chapterId} />
        </div>
      </div>
    </section>
  );
}
