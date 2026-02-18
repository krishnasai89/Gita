"use client";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

export default function Navbar({ onSearchClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Entrance: Target the container scope to ensure all items animate
  useGSAP(
    () => {
      // Set initial state immediately
      gsap.set(".nav-anim", { opacity: 0, y: -10 });

      gsap.to(".nav-anim", {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all", // This removes GSAP styles after animation so Tailwind takes back over
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          duration: 0.8,
          clipPath: "circle(150% at 100% 0%)",
          ease: "power4.inOut",
        })
        .from(
          ".mobile-link",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        );
    },
    { scope: menuRef }
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    isOpen ? tl.current.reverse() : tl.current.play();
  };

  return (
    <div ref={container}>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-6 md:px-12 transition-all duration-500 ease-in-out z-[200] ${
          isScrolled
            ? "bg-stone-950/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-8"
        }`}
      >
        {/* LEFT: LOGO */}
        <Link href="/" className="nav-anim z-[210] flex-shrink-0">
          <div className="flex flex-col">
            <p className="text-2xl md:text-3xl font-serif text-amber-500 leading-none">
              श्रीमद् भगवद्गीता
            </p>
            <p className="text-[10px] tracking-[0.1em] text-amber-500/70 uppercase mt-1 hidden sm:block">
              The Divine Song of the Supreme Lord
            </p>
          </div>
        </Link>

        {/* RIGHT: LINKS + SEARCH + MOBILE TOGGLE */}
        <div className="flex items-center gap-6 md:gap-10 z-[210]">
          {/* DESKTOP LINKS - Explicitly flexed and spaced */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                suppressHydrationWarning
                className="nav-anim text-stone-400 hover:text-amber-500 transition-all uppercase tracking-widest text-[11px] font-bold whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={onSearchClick}
            className="nav-anim p-2 hover:bg-white/10 rounded-full transition-colors text-stone-400 hover:text-amber-500"
          >
            <Search size={22} />
          </button>

          {/* MOBILE TOGGLE */}
          <button onClick={toggleMenu} className="lg:hidden text-amber-500 p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        ref={menuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 bg-stone-950 z-[190] flex flex-col items-center justify-center lg:hidden"
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={toggleMenu}
              className="mobile-link text-4xl font-serif text-amber-500 hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
