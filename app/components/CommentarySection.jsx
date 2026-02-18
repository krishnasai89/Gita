"use client";
import {
  History,
  Brain,
  Compass,
  Microscope,
  Lightbulb,
  AlertTriangle,
  HelpCircle,
  Accessibility,
} from "lucide-react";
import { gsap } from "gsap";
import { useRef, useState } from "react";
import Literal from "./tabContentMap/Literal";
import Psychological from "./tabContentMap/Psychological";
import Spiritual from "./tabContentMap/Spiritual";
import Scientific from "./tabContentMap/Scientific";
import Modern from "./tabContentMap/Modern";
import Misinterpretations from "./tabContentMap/Misinterpretations";
import Inquiry from "./tabContentMap/Inquiry";
import Philosophical from "./tabContentMap/Philosophical";

export default function CommentarySection({ commentary, onTermClick }) {
  const contentRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Historical Context");
  const [activeIcon, setActiveIcon] = useState(<History size={16} />);

  const tabs = [
    { name: "Historical Context", icon: <History size={16} /> },
    { name: "Philosophical", icon: <Accessibility size={16} /> },
    { name: "Psychological", icon: <Brain size={16} /> },
    { name: "Spiritual", icon: <Compass size={16} /> },
    {
      name: "Scientific & Rational Perspective",
      icon: <Microscope size={16} />,
    },
    { name: "Applications in Modern Life", icon: <Lightbulb size={16} /> },
    { name: "Common Misinterpretations", icon: <AlertTriangle size={16} /> },
    { name: "Reflection & Inner Inquiry", icon: <HelpCircle size={16} /> },
  ];

  const tabContentMap = {
    "Historical Context": (
      <Literal commentary={commentary} onTermClick={onTermClick} />
    ),
    Philosophical: (
      <Philosophical commentary={commentary} onTermClick={onTermClick} />
    ),
    Psychological: (
      <Psychological commentary={commentary} onTermClick={onTermClick} />
    ),
    Spiritual: <Spiritual commentary={commentary} onTermClick={onTermClick} />,
    "Scientific & Rational Perspective": (
      <Scientific commentary={commentary} onTermClick={onTermClick} />
    ),
    "Applications in Modern Life": (
      <Modern commentary={commentary} onTermClick={onTermClick} />
    ),
    "Common Misinterpretations": (
      <Misinterpretations commentary={commentary} onTermClick={onTermClick} />
    ),
    "Reflection & Inner Inquiry": (
      <Inquiry commentary={commentary} onTermClick={onTermClick} />
    ),
  };

  const handleTabChange = (tabName, tabIcon) => {
    if (tabName === activeTab) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      onComplete: () => {
        setActiveIcon(tabIcon);
        setActiveTab(tabName);
        gsap.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      {/* SIDE-BY-SIDE GRID CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: SIDEBAR TABS (Span 4) */}
        <div className="lg:col-span-4 space-y-2 sticky top-32">
          <div className="mb-8 px-4">
            <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em] mb-2">
              Deep Commentary
            </h4>
            <div className="h-1 w-12 bg-amber-500/20" />
          </div>

          <div className="flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabChange(tab.name, tab.icon)}
                className={`flex items-center gap-4 px-6 py-5 rounded-2xl text-[11px] font-bold uppercase tracking-wider transition-all duration-500 group text-left ${
                  activeTab === tab.name
                    ? "bg-stone-900 border border-amber-500/30 text-amber-500 shadow-xl"
                    : "bg-transparent border border-transparent text-stone-500 hover:text-stone-300 hover:bg-stone-900/50"
                }`}
              >
                <span
                  className={`transition-colors duration-500 ${
                    activeTab === tab.name
                      ? "text-amber-500"
                      : "text-stone-700 group-hover:text-stone-500"
                  }`}
                >
                  {tab.icon}
                </span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {/* RIGHT COLUMN: CONTENT DISPLAY (Span 8) */}
        <div className="lg:col-span-8">
          <div
            ref={contentRef}
            /* CHANGED: bg-stone-950 creates a solid, dark background */
            className="bg-stone-950 border border-white/5 p-12 lg:p-16 rounded-[3rem] shadow-2xl min-h-[600px]"
          >
            <div className="space-y-10">
              <div className="flex items-center gap-6 border-b border-white/5 pb-8">
                <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500">
                  {activeIcon}
                </div>
                <h3 className="text-stone-100 font-serif text-4xl italic">
                  {activeTab}
                </h3>
              </div>

              <div className="text-stone-300 leading-relaxed text-lg font-light">
                {tabContentMap[activeTab] || (
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
