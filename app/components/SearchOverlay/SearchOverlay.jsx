"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { X, Book, ArrowRight } from "lucide-react";
import VerseSearch from "../VerseSearch/VerseSearch";

export default function SearchOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // 1. Reveal Overlay
      gsap.to(overlayRef.current, {
        display: "flex",
        opacity: 1,
        duration: 0.4,
      });

      // 2. Stagger Chapter Cards
      const cards = gridRef.current.children;
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.03, // Tiny delay between each card for a "wave" effect
          duration: 0.6,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
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
      className="fixed inset-0 z-[10002] hidden bg-stone-950/98 backdrop-blur-3xl flex-col items-center justify-start pt-20 px-6 opacity-0"
    >
      {/* Close Button - High Z-index to stay above cursor ripples */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 text-stone-500 hover:text-amber-500 transition-all p-2 z-[10003]"
      >
        <X size={32} />
      </button>

      <div className="w-full max-w-5xl">
        <div className="relative mb-16">
          <VerseSearch onJump={onClose} />
        </div>

        {/* CHAPTER GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar"
        >
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              // Directing to Verse 1 of that chapter
              href={`/Adhyayas/${ch.id}`}
              onClick={onClose}
              className="group p-5 bg-stone-900/40 border border-white/5 rounded-2xl hover:border-amber-500/40 hover:bg-amber-500/[0.03] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="text-amber-500/20 group-hover:text-amber-500 font-mono text-xs transition-colors">
                  {ch.id.toString().padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-stone-300 group-hover:text-white font-serif text-lg leading-tight">
                    {ch.name}
                  </h4>
                  <p className="text-stone-600 text-[8px] uppercase tracking-[0.2em] mt-1">
                    Adhyāya{ch.id}
                  </p>
                </div>
              </div>
              <ArrowRight
                size={14}
                className="text-stone-800 group-hover:text-amber-500 transition-all"
              />
            </Link>
          ))}
        </div>

        {/* QUICK NAVIGATION */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center border-t border-white/5 pt-12">
          <Link
            href="/glossary"
            className="flex items-center gap-2 text-stone-500 hover:text-amber-500 transition-colors text-[10px] uppercase tracking-widest font-bold"
          >
            <Book size={14} /> Sanskrit Glossary
          </Link>
        </div>
      </div>
    </div>
  );
}
