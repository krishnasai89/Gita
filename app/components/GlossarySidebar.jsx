"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, BookOpen, Info } from "lucide-react";

export default function GlossarySidebar({ isOpen, onClose, term }) {
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Slide in sidebar and fade in overlay
      gsap.to(sidebarRef.current, { x: 0, duration: 0.6, ease: "power4.out" });
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.4,
      });
    } else {
      // Slide out sidebar and fade out overlay
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power4.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    }
  }, [isOpen]);

  if (!term && !isOpen) return null;

  return (
    <>
      {/* Background Overlay */}
      <div
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] opacity-0 pointer-events-none transition-opacity"
      />

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#12110f] border-l border-white/5 z-[201] shadow-2xl translate-x-full overflow-y-auto"
      >
        <div className="p-8 space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-3 text-amber-500">
              <BookOpen size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Interactive Glossary
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-full transition-colors text-stone-500 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          {term && (
            <div className="space-y-10">
              <div className="space-y-2">
                <h2 className="text-4xl font-serif text-stone-100">
                  {term.title}
                </h2>
                <p className="text-amber-500/60 font-serif italic text-sm">
                  {term.etymology}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-stone-500 text-[10px] font-black uppercase tracking-widest">
                  <Info size={14} /> Description
                </h4>
                <p className="text-stone-300 leading-relaxed font-light text-lg">
                  {term.description}
                </p>
              </div>

              <div className="p-8 bg-stone-900/40 border border-white/5 rounded-3xl space-y-4">
                <h4 className="text-amber-600 text-[10px] font-black uppercase tracking-widest">
                  Significance in the Gita
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed italic">
                  "{term.significance}"
                </p>
              </div>
            </div>
          )}

          {/* Footer Decoration */}
          <div className="pt-20 text-center opacity-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-4" />
            <span className="font-serif italic text-xs text-amber-500">
              Tat Tvam Asi
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
