"use client";
import { Briefcase, Heart, UserCircle2, Brain, Globe, Zap } from "lucide-react";

export default function Modern({ commentary, onTermClick }) {
  // 1. Gracefully handle new camelCase and legacy PascalCase schemas
  const modernApps = commentary?.modern || commentary?.Modern || [];

  if (modernApps.length === 0) return null;

  // 2. Expanded Smart Icon Mapping
  const getIcon = (title = "") => {
    const l = title.toLowerCase();
    if (
      l.includes("work") ||
      l.includes("career") ||
      l.includes("business") ||
      l.includes("leader")
    )
      return <Briefcase size={18} />;
    if (l.includes("relation") || l.includes("family") || l.includes("love"))
      return <Heart size={18} />;
    if (
      l.includes("conflict") ||
      l.includes("inner") ||
      l.includes("mind") ||
      l.includes("anxiety")
    )
      return <Brain size={18} />;
    if (l.includes("world") || l.includes("society") || l.includes("global"))
      return <Globe size={18} />;
    if (l.includes("action") || l.includes("energy") || l.includes("focus"))
      return <Zap size={18} />;

    return <UserCircle2 size={18} />;
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Introduction Header */}
      <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h4 className="flex items-center gap-3 text-amber-500/60 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Contemporary Relevance
            <div className="h-px w-12 bg-amber-500/30 hidden sm:block" />
          </h4>
          <p className="text-stone-300 font-serif text-xl md:text-2xl italic leading-relaxed max-w-2xl">
            How this ancient shloka manifests in our daily 21st-century
            experience.
          </p>
        </div>
      </div>

      {/* Applications Timeline */}
      <div className="relative py-4">
        {/* The Vertical Gradient Line */}
        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-amber-500/30 via-stone-800 to-transparent pointer-events-none" />

        <div className="space-y-8">
          {modernApps.map((app, idx) => {
            const title = app.title || app.label; // Handle both schemas

            return (
              <div key={idx} className="relative pl-16 md:pl-20 group">
                {/* The Timeline Node / Icon */}
                <div className="absolute left-0 top-3 w-12 h-12 bg-[#050505] border border-white/10 rounded-2xl flex items-center justify-center text-stone-600 group-hover:text-amber-500 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500 z-10">
                  {getIcon(title)}
                </div>

                {/* The Content Card */}
                <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/5 rounded-[2rem] group-hover:bg-stone-900/40 group-hover:border-amber-500/20 group-hover:translate-x-1 transition-all duration-500 shadow-xl">
                  <div className="space-y-4">
                    <h5 className="text-amber-500/80 font-black uppercase tracking-[0.2em] text-xs md:text-sm">
                      {title}
                    </h5>

                    {/* Sleek divider */}
                    <div className="h-px w-12 bg-stone-800 group-hover:w-24 group-hover:bg-amber-500/30 transition-all duration-700 ease-out" />

                    <p className="text-stone-300 font-light text-base md:text-lg leading-relaxed">
                      {app.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
