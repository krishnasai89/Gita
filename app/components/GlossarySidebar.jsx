"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, BookOpen, Info, Quote } from "lucide-react";

export default function GlossarySidebar({ isOpen, onClose, term }) {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // GSAP Animations
  useGSAP(
    () => {
      if (isOpen) {
        // Slide in sidebar and fade in overlay
        gsap.to(overlayRef.current, {
          autoAlpha: 1, // autoAlpha toggles visibility and opacity automatically
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(sidebarRef.current, {
          x: "0%",
          duration: 0.5,
          ease: "power4.out",
          boxShadow: "-20px 0 50px rgba(0,0,0,0.5)",
        });
      } else {
        // Slide out sidebar and fade out overlay
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.in",
        });
        gsap.to(sidebarRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power4.in",
          boxShadow: "none",
        });
      }
    },
    { dependencies: [isOpen] },
  );

  // Do not return null abruptly; allow GSAP to handle hiding via autoAlpha and translations
  return (
    <>
      {/* Background Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-[#050402]/80 backdrop-blur-sm z-[200] invisible opacity-0"
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-[#0c0a09] border-l border-white/5 z-[201] translate-x-full overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Decorative Top Glow */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <div className="p-8 md:p-10 space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-3 text-amber-500">
              <BookOpen size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Interactive Glossary
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 rounded-full transition-all duration-300 text-stone-500"
              aria-label="Close glossary"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content Wrapper */}
          <div className="relative min-h-[50vh]">
            {term ? (
              <div className="space-y-12">
                {/* Title & Etymology */}
                <div className="space-y-6">
                  <h2 className="text-5xl font-serif text-white tracking-tight drop-shadow-md">
                    {term.title}
                  </h2>
                  {term.etymology && (
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400/80 text-sm font-serif tracking-wide shadow-[0_0_15px_rgba(245,158,11,0.05)]">
                      {term.etymology}
                    </span>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h4 className="flex items-center gap-2 text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">
                    <Info size={14} /> Definition
                  </h4>
                  <p className="text-stone-300 leading-relaxed font-light text-lg">
                    {term.description}
                  </p>
                </div>

                {/* Significance (Highlight Box) */}
                {term.significance && (
                  <div className="relative p-8 bg-gradient-to-br from-stone-900/60 to-stone-900/20 border border-white/5 rounded-3xl group hover:border-amber-500/20 transition-colors duration-500">
                    <Quote
                      className="absolute top-6 right-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors"
                      size={40}
                    />
                    <h4 className="text-amber-600 text-[10px] font-black uppercase tracking-widest mb-4">
                      Significance in the Gita
                    </h4>
                    <p className="text-stone-400 text-base leading-relaxed italic relative z-10">
                      "{term.significance}"
                    </p>
                  </div>
                )}
              </div>
            ) : (
              // Empty State (Prevents layout collapse if term is loading/missing)
              <div className="absolute inset-0 flex items-center justify-center text-stone-600 font-light italic">
                Select a highlighted term to view its definition.
              </div>
            )}
          </div>

          {/* Footer Decoration */}
          <div className="pt-24 text-center opacity-30">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6" />
            <span className="font-serif italic text-sm text-amber-500 tracking-widest">
              Tat Tvam Asi
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
