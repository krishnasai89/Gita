"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import {
  History,
  Brain,
  Compass,
  Microscope,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  Accessibility,
  Sprout,
} from "lucide-react";

// Components
import Literal from "./tabContentMap/Literal";
import Psychological from "./tabContentMap/Psychological";
import Spiritual from "./tabContentMap/Spiritual";
import Scientific from "./tabContentMap/Scientific";
import Modern from "./tabContentMap/Modern";
import Misinterpretations from "./tabContentMap/Misinterpretations";
import Inquiry from "./tabContentMap/Inquiry";
import Philosophical from "./tabContentMap/Philosophical";
import Mindset from "./tabContentMap/Mindset ";

export default function CommentarySection({ commentary, onTermClick }) {
  const contentRef = useRef(null);

  // 1. Centralized Tab Configuration
  const tabs = [
    { id: "literal", name: "Historical Context", icon: <History size={16} /> },
    {
      id: "philosophical",
      name: "Philosophical",
      icon: <Accessibility size={16} />,
    },
    { id: "psychological", name: "Psychological", icon: <Brain size={16} /> },
    { id: "spiritual", name: "Spiritual", icon: <Compass size={16} /> },
    { id: "mindset", name: "MindSet", icon: <Sprout size={16} /> },
    {
      id: "scientific",
      name: "Scientific & Rational",
      icon: <Microscope size={16} />,
    },
    { id: "modern", name: "Modern Life", icon: <Lightbulb size={16} /> },
    {
      id: "misinterpretations",
      name: "Misinterpretations",
      icon: <AlertTriangle size={16} />,
    },
    {
      id: "inquiry",
      name: "Reflection & Inquiry",
      icon: <HelpCircle size={16} />,
    },
  ];

  // 2. Simplified State (Only track the ID)
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  // 3. Map IDs to Content Components
  const tabContentMap = {
    literal: <Literal commentary={commentary} onTermClick={onTermClick} />,
    philosophical: (
      <Philosophical commentary={commentary} onTermClick={onTermClick} />
    ),
    psychological: (
      <Psychological commentary={commentary} onTermClick={onTermClick} />
    ),
    mindset: <Mindset commentary={commentary} onTermClick={onTermClick} />,
    spiritual: <Spiritual commentary={commentary} onTermClick={onTermClick} />,
    scientific: (
      <Scientific commentary={commentary} onTermClick={onTermClick} />
    ),
    modern: <Modern commentary={commentary} onTermClick={onTermClick} />,
    misinterpretations: (
      <Misinterpretations commentary={commentary} onTermClick={onTermClick} />
    ),
    inquiry: <Inquiry commentary={commentary} onTermClick={onTermClick} />,
  };

  const handleTabChange = (tabId) => {
    if (tabId === activeTabId) return;

    // Cinematic blur & slide transition
    gsap.to(contentRef.current, {
      opacity: 0,
      y: 15,
      filter: "blur(8px)",
      duration: 0.3,
      onComplete: () => {
        setActiveTabId(tabId);
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, y: 15, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power3.out",
          },
        );
      },
    });
  };

  const activeTabDetails = tabs.find((t) => t.id === activeTabId);

  return (
    <div className="w-full max-w-7xl mx-auto py-12 lg:py-20 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: SIDEBAR TABS (Responsive) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 z-20">
          <div className="hidden lg:block mb-8 px-4">
            <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
              Deep Commentary
            </h4>
            <div className="h-px w-12 bg-amber-500/30" />
          </div>

          {/* 
            Mobile: Horizontal scrollable tabs with snapping
            Desktop: Vertical stacked tabs
          */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative flex-shrink-0 lg:flex-shrink flex items-center gap-3 px-5 py-4 lg:px-6 lg:py-5 rounded-2xl text-[10px] lg:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group text-left snap-start overflow-hidden ${
                    isActive
                      ? "bg-[#0a0a0a] border border-amber-500/30 text-amber-500 shadow-[inset_0_0_20px_rgba(245,158,11,0.05)]"
                      : "bg-transparent border border-white/5 text-stone-500 hover:text-stone-300 hover:bg-[#0a0a0a]"
                  }`}
                >
                  {/* Subtle active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-r-full shadow-[0_0_10px_#f59e0b]" />
                  )}

                  <span
                    className={`transition-colors duration-300 ${isActive ? "text-amber-500" : "text-stone-600 group-hover:text-stone-400"}`}
                  >
                    {tab.icon}
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {tab.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: CONTENT DISPLAY */}
        <div className="lg:col-span-8">
          <div className="bg-[#050505] border border-white/5 p-8 sm:p-12 lg:p-16 rounded-[2rem] lg:rounded-[3rem] shadow-2xl min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
            {/* Ambient Top Glow for Content Box */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent pointer-events-none" />

            <div
              ref={contentRef}
              className="space-y-8 lg:space-y-10 relative z-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-white/5 pb-8">
                <div className="w-fit p-3 lg:p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                  {activeTabDetails?.icon}
                </div>
                <h3 className="text-stone-100 font-serif text-3xl lg:text-4xl italic">
                  {activeTabDetails?.name}
                </h3>
              </div>

              <div className="text-stone-300 leading-relaxed text-base lg:text-lg font-light">
                {tabContentMap[activeTabId] || (
                  <div className="flex flex-col items-center justify-center py-20 text-stone-600">
                    <History size={48} className="mb-4 opacity-20" />
                    <p className="uppercase tracking-widest text-xs font-black">
                      Wisdom loading...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
