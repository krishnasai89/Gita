"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const chaptersData = [
  {
    no: "1",
    sanskrit: "०१",
    title: "Arjuna Viṣāda Yoga",
    desc: "The Yoga of Dejection",
    group: "Karma",
  },
  {
    no: "2",
    sanskrit: "०२",
    title: "Sāṅkhya Yoga",
    desc: "The Yoga of Knowledge",
    group: "Karma",
  },
  {
    no: "3",
    sanskrit: "०३",
    title: "Karma Yoga",
    desc: "The Yoga of Action",
    group: "Karma",
  },
  {
    no: "4",
    sanskrit: "०४",
    title: "Jñāna Karma Sannyāsa",
    desc: "The Yoga of Renunciation",
    group: "Karma",
  },
  {
    no: "5",
    sanskrit: "०५",
    title: "Karma Sannyāsa Yoga",
    desc: "The Yoga of True Renunciation",
    group: "Karma",
  },
  {
    no: "6",
    sanskrit: "०६",
    title: "Dhyāna Yoga",
    desc: "The Yoga of Meditation",
    group: "Karma",
  },
  {
    no: "7",
    sanskrit: "०७",
    title: "Jñāna Vijñāna Yoga",
    desc: "The Yoga of Realization",
    group: "Bhakti",
  },
  {
    no: "8",
    sanskrit: "०८",
    title: "Akṣara Brahma Yoga",
    desc: "The Yoga of the Imperishable",
    group: "Bhakti",
  },
  {
    no: "9",
    sanskrit: "०९",
    title: "Rāja Vidyā Yoga",
    desc: "The Yoga of Royal Secrets",
    group: "Bhakti",
  },
  {
    no: "10",
    sanskrit: "१०",
    title: "Vibhūti Yoga",
    desc: "The Yoga of Divine Glories",
    group: "Bhakti",
  },
  {
    no: "11",
    sanskrit: "११",
    title: "Viśvarūpa Darśana",
    desc: "The Vision of the Universal Form",
    group: "Bhakti",
  },
  {
    no: "12",
    sanskrit: "१२",
    title: "Bhakti Yoga",
    desc: "The Yoga of Devotion",
    group: "Bhakti",
  },
  {
    no: "13",
    sanskrit: "१३",
    title: "Kṣetra Kṣetrajña",
    desc: "The Field and its Knower",
    group: "Jnana",
  },
  {
    no: "14",
    sanskrit: "१४",
    title: "Guṇatraya Vibhāga",
    desc: "The Three Gunas of Nature",
    group: "Jnana",
  },
  {
    no: "15",
    sanskrit: "१५",
    title: "Puruṣottama Yoga",
    desc: "The Yoga of the Supreme Person",
    group: "Jnana",
  },
  {
    no: "16",
    sanskrit: "१६",
    title: "Daivāsura Sampad",
    desc: "Divine and Demoniac Natures",
    group: "Jnana",
  },
  {
    no: "17",
    sanskrit: "१७",
    title: "Śraddhātraya Vibhāga",
    desc: "The Threefold Faith",
    group: "Jnana",
  },
  {
    no: "18",
    sanskrit: "१८",
    title: "Mokṣa Sannyāsa Yoga",
    desc: "Final Liberation",
    group: "Jnana",
  },
];

export default function ChapterGrid() {
  const container = useRef();

  useGSAP(
    () => {
      // Staggered entrance for cards
      gsap.from(".chapter-card", {
        opacity: 1, // FIXED: Set initial state to 0 so they fade in
        y: 40,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".chapters-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container },
  );

  const onMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Spotlight glow coordinates
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // 3D Tilt Logic
    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      ease: "power3.out",
      duration: 0.4,
    });
  };

  const onMouseLeave = (card) => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <section
      ref={container}
      className="relative bg-[#080705] py-40 px-6 overflow-hidden"
      id="chapters"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* HEADER */}
      <div className="text-center mb-32 relative z-10">
        <div className="flex items-center justify-center gap-3 text-amber-500/60 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">
          <Sparkles size={14} /> The Complete Revelation
        </div>
        <h2 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
          The Path of <span className="italic text-amber-500">Eighteen</span>
        </h2>
        <div className="flex items-center justify-center gap-4 md:gap-8 text-stone-500 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
          <span>Karma (Action)</span>
          <div className="w-1 h-1 rounded-full bg-amber-500" />
          <span>Bhakti (Devotion)</span>
          <div className="w-1 h-1 rounded-full bg-amber-500" />
          <span>Jnana (Knowledge)</span>
        </div>
      </div>

      {/* CHAPTERS GRID */}
      <div className="chapters-grid relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {chaptersData.map((ch) => (
          <Link href={`/Adhyayas/${ch.no}`} key={ch.no} className="block group">
            <div
              onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
              className="chapter-card relative bg-stone-900/20 backdrop-blur-md border border-white/5 p-8 md:p-10 h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-amber-500/30 rounded-[2rem] group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Dynamic Glow Spotlight */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(245,158,11,0.12), transparent 40%)`,
                }}
              />

              {/* DUAL LAYER WATERMARK BLOCK */}
              <div className="absolute top-0 right-4 select-none flex flex-col items-end pointer-events-none">
                {/* Large Background English Digit */}
                <span className="text-[12rem] md:text-[14rem] font-sans font-black leading-none text-white/[0.02] absolute -top-4 -right-2 group-hover:text-amber-500/[0.03] transition-colors duration-700">
                  {ch.no}
                </span>

                {/* Foreground Sanskrit Digit */}
                <div className="relative z-10 flex flex-col items-end opacity-[0.05] group-hover:opacity-20 transition-all duration-700 pt-8 pr-4">
                  <span className="text-[6rem] md:text-[8rem] font-serif leading-none">
                    {ch.sanskrit}
                  </span>
                  <span className="text-sm md:text-xl font-mono -mt-2 md:-mt-4 tracking-[0.3em] uppercase">
                    ADHYĀYA
                  </span>
                </div>
              </div>

              {/* Content Header */}
              <div className="relative z-20 pt-2">
                <div
                  className={`text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase mb-2 ${
                    ch.group === "Karma"
                      ? "text-blue-500/60"
                      : ch.group === "Bhakti"
                        ? "text-amber-500/60"
                        : "text-red-500/60"
                  }`}
                >
                  {ch.group} Trisatakam
                </div>
                <div className="h-px w-8 bg-amber-500/40" />
              </div>

              {/* Main Title */}
              <div className="relative z-20">
                <h4 className="text-3xl md:text-4xl font-serif text-stone-100 mb-3 group-hover:text-amber-400 transition-colors duration-500 leading-tight">
                  {ch.title}
                </h4>
                <p className="text-stone-500 text-sm italic group-hover:text-stone-300 transition-colors">
                  “{ch.desc}”
                </p>
              </div>

              {/* Explore Indicator */}
              <div className="relative z-20 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-stone-600 group-hover:text-amber-500 transition-all">
                <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-amber-500/20 transition-all" />
                Explore Verse
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
