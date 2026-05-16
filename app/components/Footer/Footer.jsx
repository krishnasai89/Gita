"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import {
  Twitter,
  Github,
  Mail,
  ArrowUp,
  Send,
  BookOpen,
  Quote,
} from "lucide-react";

export default function Footer() {
  const footerRef = useRef();

  useGSAP(
    () => {
      // 1. Slow Rotating Mandala
      gsap.to(".footer-mandala", {
        rotation: 360,
        duration: 150,
        repeat: -1,
        ease: "none",
      });

      // 2. Staggered Reveal on Scroll
      gsap.from(".footer-reveal", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: footerRef },
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#020202] border-t border-white/5 pt-32 pb-10 px-6 relative overflow-hidden font-sans"
    >
      {/* 1. BACKGROUND: THE ETERNAL CYCLE */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Deep ambient glow */}
        <div className="absolute bottom-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.10)_0%,transparent_70%)]" />

        {/* Rotating Mandala Watermark */}
        <div className="footer-mandala absolute -bottom-[400px] -right-[200px] opacity-[0.03] scale-[2] md:scale-[3] text-amber-500">
          <svg width="800" height="800" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.2"
              strokeDasharray="2 4"
            />
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M100 20 L105 50 L100 100 L95 50 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
                transform={`rotate(${i * 15} 100 100)`}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2. TOP SECTION: THE INVITATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 footer-reveal">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6 opacity-60">
              <Quote size={16} className="text-amber-500" />
              <span className="text-stone-400 text-[10px] font-black tracking-[0.4em] uppercase">
                Daily Dharma
              </span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              The Luminous <span className="italic text-amber-500">Lamp</span>
            </h3>
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-8">
              "Out of compassion, I destroy the darkness of their ignorance with
              the luminous lamp of knowledge." <br />
              <span className="text-[10px] uppercase tracking-widest font-bold text-amber-500/60 mt-4 block">
                Receive one verse every morning.
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="relative group w-full max-w-md">
              {/* Focus Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/0 via-amber-500/30 to-amber-600/0 rounded-full blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-700" />

              <form className="relative flex items-center bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-full p-1.5 focus-within:border-amber-500/50 transition-colors">
                <Mail className="text-stone-500 ml-4" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  suppressHydrationWarning // <-- Add this line back right here!
                  className="bg-transparent border-none outline-none text-stone-200 px-4 py-3 w-full text-sm placeholder:text-stone-600 font-light"
                />
                <button
                  type="button"
                  className="bg-amber-600 hover:bg-amber-500 text-black rounded-full px-6 py-3 transition-colors flex items-center gap-2 group/btn"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                    Subscribe
                  </span>
                  <Send
                    size={12}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
            <p className="text-[9px] text-stone-600 mt-4 uppercase tracking-[0.2em] ml-4">
              No noise. Just the eternal song.
            </p>
          </div>
        </div>

        {/* 3. MIDDLE SECTION: NAVIGATION MATRIX */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-white/5 py-20 mb-10">
          <div className="flex flex-col gap-6 footer-reveal">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              The Scripture
            </span>
            <div className="flex flex-col gap-4">
              {["18 Adhyayas", "700 Shlokas", "Characters", "The Chariot"].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="group flex items-center gap-2 text-stone-500 hover:text-white text-sm transition-colors font-light"
                  >
                    <span className="w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-4" />
                    {link}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 footer-reveal">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              The Lineage
            </span>
            <div className="flex flex-col gap-4">
              {[
                "Adi Shankara",
                "The Bhashya",
                "Manuscript History",
                "Bhakti Schools",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="group flex items-center gap-2 text-stone-500 hover:text-white text-sm transition-colors font-light"
                >
                  <span className="w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-4" />
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 footer-reveal md:col-span-2 lg:col-span-1">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              Connect
            </span>
            <div className="flex gap-3">
              {[
                { icon: <Twitter size={16} />, href: "#" },
                {
                  icon: <Github size={16} />,
                  href: "https://github.com/krishnasai89",
                },
                { icon: <BookOpen size={16} />, href: "#" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="w-12 h-12 bg-stone-900/40 rounded-full flex items-center justify-center text-stone-500 border border-white/5 hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-950/20 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_5px_15px_rgba(245,158,11,0.2)]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Ascend Button (Scroll to top) */}
          <div className="flex flex-col items-start md:items-end justify-center footer-reveal lg:col-span-1">
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-4 text-stone-600 hover:text-amber-500 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-stone-800 group-hover:border-amber-500/50 flex items-center justify-center transition-colors relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-0 bg-amber-500/10 group-hover:h-full transition-all duration-300" />
                <ArrowUp
                  size={16}
                  className="group-hover:-translate-y-1 transition-transform duration-300 relative z-10"
                />
              </div>
              <span
                className="text-[9px] uppercase tracking-[0.3em] font-bold"
                style={{ writingMode: "vertical-rl" }}
              >
                Ascend
              </span>
            </button>
          </div>
        </div>

        {/* 4. BOTTOM SECTION: COPYRIGHT & SEAL */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 footer-reveal">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-amber-500/20 bg-amber-500/5 flex items-center justify-center text-sm text-amber-500 font-serif">
              ॐ
            </div>
            <div>
              <div className="text-xl font-serif tracking-widest text-white leading-none">
                Bhagavad <span className="text-amber-500 italic">Gita</span>
              </div>
              <span className="text-[8px] text-stone-600 uppercase tracking-widest font-black">
                The Song of God
              </span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] mb-1.5 font-bold">
              © {new Date().getFullYear()} Crafted for the Modern Seeker
            </p>
            <p className="text-stone-700 text-[9px] uppercase tracking-[0.2em]">
              Next.js 14 • GSAP 3 • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
