"use client";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Search, Menu, X, Feather } from "lucide-react";

export default function Navbar({ onSearchClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const container = useRef();
  const menuRef = useRef();
  const tl = useRef();

  const navItems = [
    { id: "chapters", title: "Chapters", link: "/#chapters" },
    { id: "characters", title: "Characters", link: "/#characters" },
    { id: "lineage", title: "Lineage", link: "/#lineage" },
    { id: "commentary", title: "Commentary", link: "/#commentary" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shift
      setIsScrolled(window.scrollY > 50);

      // Scroll Progress Calculation
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      gsap.set(".nav-anim", { opacity: 0, y: -20 });
      gsap.to(".nav-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          duration: 0.6,
          clipPath: "circle(150% at 100% 0%)",
          ease: "power3.inOut",
        })
        .from(
          ".mobile-link",
          {
            x: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: menuRef },
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen ? tl.current.reverse() : tl.current.play();
  };

  return (
    <div ref={container} className="relative">
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-16 transition-all duration-700 ease-in-out z-[200] ${
          isScrolled
            ? "bg-stone-950/80 backdrop-blur-xl border-b border-amber-900/20 py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-10"
        }`}
      >
        {/* LEFT: LOGO */}
        <Link
          href="/"
          className="nav-anim group z-[210] flex items-center gap-4"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-amber-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <Feather
              className="text-amber-500 hidden md:block rotate-45 group-hover:rotate-[60deg] transition-transform duration-500"
              size={24}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-serif text-amber-500 tracking-tighter drop-shadow-sm">
              श्रीमद् भगवद्गीता
            </h1>
            <span className="text-[9px] tracking-[0.4em] text-amber-200/40 uppercase font-black leading-none ml-1">
              Universal Wisdom
            </span>
          </div>
        </Link>

        {/* RIGHT: NAVIGATION */}
        <div className="flex items-center gap-4 md:gap-12 z-[210]">
          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="nav-anim relative text-stone-300 hover:text-amber-400 transition-colors uppercase tracking-[0.2em] text-[10px] font-black group"
              >
                {item.title}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            {/* SEARCH BUTTON */}
            <button
              onClick={onSearchClick}
              className="nav-anim flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-amber-500/10 border border-white/5 hover:border-amber-500/30 rounded-full transition-all duration-500 text-stone-400 hover:text-amber-500 group"
            >
              <Search
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="text-[10px] uppercase tracking-widest hidden sm:inline">
                Search
              </span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-amber-500/10 text-amber-500 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* SCROLL PROGRESS INDICATOR */}
        <div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        ref={menuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 bg-stone-950 z-[190] flex flex-col items-center justify-center lg:hidden"
      >
        {/* Subtle Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
          <span className="text-[40vw] font-serif text-white">ॐ</span>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={toggleMenu}
              className="mobile-link group flex flex-col items-center"
            >
              <span className="text-stone-500 text-[10px] tracking-[0.5em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all">
                Discover
              </span>
              <span className="text-4xl md:text-5xl font-serif text-stone-200 group-hover:text-amber-500 transition-colors duration-500">
                {item.title}
              </span>
            </Link>
          ))}

          <div className="mt-12 w-24 h-px bg-amber-900/40" />

          <button
            onClick={onSearchClick}
            className="mobile-link mt-4 flex items-center gap-3 text-amber-500/60 uppercase tracking-[0.3em] text-xs"
          >
            <Search size={16} /> Search Verse
          </button>
        </div>
      </div>
    </div>
  );
}
