"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search as SearchIcon, BookOpen } from "lucide-react";
import dynamic from "next/dynamic";

// Components
import CommentarySection from "./CommentarySection";
import VerseNavigation from "./VerseNavigation";
import VerseSearch from "./VerseSearch/VerseSearch";
import SearchOverlay from "./SearchOverlay/SearchOverlay";
import Mindset from "./tabContentMap/Mindset ";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GlossarySidebar = dynamic(() => import("./GlossarySidebar"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-y-0 right-0 w-80 bg-[#0c0a09] animate-pulse z-[200]" />
  ),
});

export default function VerseDetails({
  data,
  pagination,
  chapterId,
  glossaryData,
}) {
  const containerRef = useRef(null);
  const miniHeaderRef = useRef(null);
  const mainVerseRef = useRef(null);

  // --- STATE ---
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // --- MEDIA LOGIC ---
  const hasImage = Boolean(data.commentary?.media?.image);
  const hasVideo = Boolean(data.commentary?.media?.video);
  const hasMedia = hasImage || hasVideo;

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

  // --- GSAP ANIMATIONS ---
  useGSAP(
    () => {
      if (!hasMounted) return;

      // 1. Initial Page Load Animation (Staggered Reveal)
      gsap.fromTo(
        ".verse-reveal",
        { opacity: 0, y: 30, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        },
      );

      // 2. Sticky Header Reveal on Scroll
      if (miniHeaderRef.current && mainVerseRef.current) {
        gsap.to(miniHeaderRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainVerseRef.current,
            start: "bottom top",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: containerRef, dependencies: [hasMounted, data] },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen text-stone-200 bg-[#030303] overflow-x-hidden font-sans"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.06)_0%,transparent_70%)] pointer-events-none" />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <GlossarySidebar
        isOpen={!!selectedTerm}
        onClose={() => setSelectedTerm(null)}
        term={selectedTerm}
      />

      {/* STICKY MINI-HEADER */}
      <div
        ref={miniHeaderRef}
        className="fixed top-0 left-0 w-full z-[150] bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 translate-y-[-100%] opacity-0 shadow-2xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 text-amber-500 font-black tracking-widest text-[10px] uppercase">
              <BookOpen size={14} />
              <span className="hidden sm:inline">Adhyāya {data.chapter}</span>
              <span className="sm:hidden">Ch {data.chapter}</span>
              <span className="opacity-50">•</span>
              <span>Verse {data.verse}</span>
            </div>
            <h3 className="text-stone-300 font-serif text-sm truncate max-w-[200px] md:max-w-md italic hidden md:block">
              "{data.translation?.substring(0, 50)}..."
            </h3>
          </div>

          <button
            onClick={() => setIsSearchOpen(true)}
            suppressHydrationWarning
            className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors group px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-amber-500/30"
          >
            <span className="text-[10px] uppercase tracking-widest font-black hidden sm:block">
              Search
            </span>
            <SearchIcon
              size={14}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        {/* 1. MAIN VERSE DISPLAY */}
        <div
          ref={mainVerseRef}
          className="space-y-10 mt-12 md:mt-24 text-center max-w-5xl mx-auto"
        >
          <h6 className="verse-reveal text-amber-500/60 text-[10px] font-black uppercase tracking-[0.6em]">
            Adhyāya {data.chapter} <span className="mx-2 opacity-50">•</span>{" "}
            Shloka {data.verse}
          </h6>

          <h2 className="verse-reveal text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight md:leading-[1.4] drop-shadow-md">
            {data.sanskrit}
          </h2>

          <div className="verse-reveal flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>

          <p className="verse-reveal text-amber-400/50 italic text-lg md:text-xl font-serif tracking-wide">
            {data.transliteration}
          </p>

          <p className="verse-reveal text-xl md:text-3xl font-light text-stone-200 italic leading-relaxed md:leading-loose max-w-4xl mx-auto pt-8">
            "{data.translation}"
          </p>
        </div>

        {/* 2. COMMENTARY SECTION */}
        {data.commentary && (
          <div className="pt-32">
            <CommentarySection
              commentary={data.commentary}
              onTermClick={openGlossary}
            />
          </div>
        )}
      </div>

      {/* 4. NAVIGATION & JUMP-TO */}
      <div className="relative bg-[#020202] border-t border-white/5 py-24">
        <div className="max-w-xl mx-auto px-6 mb-24">
          <h4 className="text-stone-500 text-[10px] font-black tracking-[0.4em] uppercase text-center mb-8">
            Jump to Verse
          </h4>
          <VerseSearch />
        </div>

        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-24">
          <VerseNavigation pagination={pagination} chapterId={chapterId} />
        </div>
      </div>
    </section>
  );
}
