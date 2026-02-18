"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Twitter, Github, Mail, ArrowUpCircle } from "lucide-react"; // Install lucide-react

export default function Footer() {
  const footerRef = useRef();

  useGSAP(
    () => {
      // Subtle glow pulse for the subscription box
      gsap.to(".glow-box", {
        boxShadow: "0 0 25px 2px rgba(245, 158, 11, 0.4)",
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });

      // Stagger reveal for footer links
      gsap.from(".footer-link-group", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
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
      className="bg-stone-950 border-t border-white/5 pt-32 pb-10 px-6 relative overflow-hidden"
    >
      {/* Decorative Background Element (Faint Mandala Fragment) */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-amber-500/5 rounded-full opacity-20 pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-amber-500/10 rounded-full opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section: Subscription & Brand */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-xl">
            <h3 className="text-3xl font-serif text-amber-500 mb-4">
              Daily Dharma
            </h3>
            <p className="text-stone-400 text-lg font-light leading-relaxed">
              One verse of wisdom every morning. No noise. Just the eternal song
              to guide your journey through the modern battlefield.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <div className="glow-box relative flex w-full md:w-[450px] p-1 bg-stone-900/50 backdrop-blur-sm border border-amber-500/20 rounded-sm">
              <input
                type="email"
                placeholder="Enter your email"
                suppressHydrationWarning
                className="bg-transparent border-none outline-none text-stone-200 px-6 py-4 w-full text-sm placeholder:text-stone-600"
              />
              <button
                suppressHydrationWarning
                className="bg-amber-600 hover:bg-amber-500 text-stone-950 font-black px-8 py-2 transition-all text-[10px] uppercase tracking-widest whitespace-nowrap"
              >
                Join Now
              </button>
            </div>
            <p className="text-[10px] text-stone-600 mt-4 uppercase tracking-[0.2em]">
              Privacy respected. Wisdom shared.
            </p>
          </div>
        </div>

        {/* Middle Section: Links & Heritage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5 pb-20">
          <div className="footer-link-group flex flex-col gap-6">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              The Scripture
            </span>
            <div className="flex flex-col gap-3">
              {["18 Adhyayas", "700 Shlokas", "Characters", "The Chariot"].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-stone-500 hover:text-amber-500 text-sm transition-colors font-light italic"
                  >
                    {link}
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className="footer-link-group flex flex-col gap-6">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              The Lineage
            </span>
            <div className="flex flex-col gap-3">
              {[
                "Adi Shankara",
                "The Bhashya",
                "Manuscript History",
                "Bhakti Schools",
              ].map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-stone-500 hover:text-amber-500 text-sm transition-colors font-light italic"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-link-group flex flex-col gap-6">
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">
              Connect
            </span>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-3 bg-white/5 rounded-full hover:bg-amber-500/20 transition-all border border-white/5"
              >
                <Twitter size={18} className="text-stone-400" />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/5 rounded-full hover:bg-amber-500/20 transition-all border border-white/5"
              >
                <Github size={18} className="text-stone-400" />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/5 rounded-full hover:bg-amber-500/20 transition-all border border-white/5"
              >
                <Mail size={18} className="text-stone-400" />
              </Link>
            </div>
          </div>

          <div className="footer-link-group flex flex-col items-end justify-center">
            <button
              onClick={scrollToTop}
              suppressHydrationWarning
              className="group flex flex-col items-center gap-2 text-stone-600 hover:text-amber-500 transition-all"
            >
              <ArrowUpCircle
                size={32}
                strokeWidth={1}
                className="group-hover:-translate-y-2 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-[0.3em]">
                Top
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-amber-500/20 flex items-center justify-center text-[10px] text-amber-500 font-serif">
              ॐ
            </div>
            <div className="text-lg font-serif tracking-widest text-stone-300">
              Bhagavad <span className="text-amber-500">Gita</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-stone-600 text-[10px] uppercase tracking-[0.3em] mb-1">
              © 2026 Crafted for the Modern Seeker
            </p>
            <p className="text-stone-800 text-[9px] uppercase tracking-[0.2em]">
              Next.js 14 • GSAP 3 • Tailwind CSS • Prismic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
