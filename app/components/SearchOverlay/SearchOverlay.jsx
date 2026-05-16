"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { X, Book, ArrowRight, Sparkles } from "lucide-react";
import VerseSearch from "../VerseSearch/VerseSearch";

export default function SearchOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const gridRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // 1. Reveal Overlay with a "Zoom Out" effect from the center
      gsap.to(overlayRef.current, {
        display: "flex",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.fromTo(
        contentRef.current,
        { scale: 1.1, filter: "blur(10px)" },
        { scale: 1, filter: "blur(0px)", duration: 0.8, ease: "expo.out" },
      );

      // 2. Sophisticated Stagger
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.02,
          duration: 0.7,
          ease: "back.out(1.2)",
          delay: 0.2,
        },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
      });
    }
  }, [isOpen]);

  const chapters = [
    "Arjuna Viṣāda",
    "Sāṅkhya",
    "Karma",
    "Jñāna Karma",
    "Karma Sannyāsa",
    "Dhyāna",
    "Jñāna Vijñāna",
    "Akṣara Brahma",
    "Rāja Vidyā",
    "Vibhūti",
    "Viśvarūpa Darśana",
    "Bhakti",
    "Kṣetra Kṣetrajña",
    "Guṇatraya",
    "Puruṣottama",
    "Daivāsura",
    "Śraddhātraya",
    "Mokṣa Sannyāsa",
  ].map((name, i) => ({ id: i + 1, name }));

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[10002] hidden bg-[#050505]/95 backdrop-blur-2xl flex-col items-center justify-start pt-16 px-6 opacity-0 overflow-hidden"
    >
      {/* BACKGROUND AURA */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* CLOSE ACTION */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-stone-500 hover:text-white transition-all p-3 hover:bg-white/5 rounded-full z-[10003] group"
      >
        <X
          size={28}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
      </button>

      <div ref={contentRef} className="w-full max-w-5xl z-10">
        {/* HEADER AREA */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-500/60 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            <Sparkles size={12} /> The Divine Library
          </div>
          <div className="relative">
            <VerseSearch onJump={onClose} />
          </div>
        </div>

        {/* CHAPTER GRID SECTION */}
        <div className="relative group/grid">
          <h3 className="text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 flex items-center gap-4 px-2">
            Browse Adhyāyas <div className="h-[1px] flex-1 bg-white/5" />
          </h3>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[55vh] pr-4 custom-scrollbar scroll-smooth"
          >
            {chapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/Adhyayas/${ch.id}`}
                onClick={onClose}
                className="group relative p-1 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Border Inner Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-5 bg-stone-900/40 backdrop-blur-md border border-white/5 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    {/* Chapter ID Seed */}
                    <div className="w-10 h-10 rounded-full border border-amber-500/10 flex items-center justify-center bg-stone-950 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all duration-500">
                      <span className="text-amber-500/40 group-hover:text-amber-500 font-mono text-[10px] transition-colors">
                        {ch.id.toString().padStart(2, "0")}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-stone-300 group-hover:text-amber-500 font-serif text-xl leading-tight transition-colors duration-300">
                        {ch.name}
                      </h4>
                      <p className="text-stone-600 text-[9px] uppercase tracking-[0.2em] mt-1.5 flex items-center gap-2">
                        Adhyāya{" "}
                        <span className="w-1 h-1 bg-stone-700 rounded-full" />{" "}
                        {ch.id}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-white/0 group-hover:bg-amber-500/10 transition-all">
                    <ArrowRight
                      size={16}
                      className="text-stone-700 group-hover:text-amber-500 translate-x-[-4px] group-hover:translate-x-0 transition-all"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Fade Out */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
        </div>

        {/* FOOTER NAVIGATION */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-12 border-t border-white/5 pt-10">
          <Link
            href="/glossary"
            onClick={onClose}
            className="group flex flex-col items-center gap-2"
          >
            <div className="flex items-center gap-3 text-stone-400 group-hover:text-amber-500 transition-all text-[11px] uppercase tracking-[0.3em] font-bold">
              <Book
                size={16}
                className="text-stone-600 group-hover:text-amber-500"
              />
              Sanskrit Glossary
            </div>
            <div className="w-0 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.3); /* Increased from 0.1 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(245, 158, 11, 0.3);
        }
      `}</style>
    </div>
  );
}
