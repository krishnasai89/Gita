"use client";
import { Briefcase, Heart, UserCircle2 } from "lucide-react";

export default function Modern({ commentary, onTermClick }) {
  const modernApps = commentary?.Modern || [];

  if (modernApps.length === 0) return null;

  // Icon mapping helper
  const getIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes("work") || l.includes("career"))
      return <Briefcase size={18} />;
    if (l.includes("relation")) return <Heart size={18} />;
    return <UserCircle2 size={18} />;
  };

  return (
    <div className="space-y-12">
      {/* Introduction Header */}
      <div className="border-b border-white/5 pb-8">
        <h4 className="text-amber-500/50 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
          Contemporary Relevance
        </h4>
        <p className="text-stone-300 font-serif text-xl italic leading-relaxed">
          How this ancient shloka manifests in our daily 21st-century
          experience.
        </p>
      </div>

      {/* Applications List */}
      <div className="space-y-12 relative">
        {/* The Vertical Line decoration */}
        <div className="absolute left-[21px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-500/20 via-stone-800 to-transparent" />

        {modernApps.map((app, idx) => (
          <div key={idx} className="relative pl-16 group">
            {/* The Bullet/Icon */}
            <div className="absolute left-0 top-0 w-11 h-11 bg-stone-950 border border-white/10 rounded-xl flex items-center justify-center text-stone-600 group-hover:text-amber-500 group-hover:border-amber-500/50 transition-all duration-500 z-10 shadow-xl">
              {getIcon(app.label)}
            </div>

            <div className="space-y-3">
              <span className="text-[10px] text-amber-700 font-black uppercase tracking-[0.2em]">
                {app.label}
              </span>
              <p className="text-stone-400 font-serif text-xl leading-relaxed italic">
                “{app.text}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
