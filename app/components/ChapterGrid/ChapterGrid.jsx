"use client";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const chapters = [
  {
    no: "1",
    title: "Arjuna Visada Yoga",
    desc: "The Despondency of Arjuna",
  },
  { no: "2", title: "Sankhya Yoga", desc: "The Yoga of Knowledge" },
  { no: "3", title: "Karma Yoga", desc: "The Yoga of Action" },
  {
    no: "4",
    title: "Jnana Karma Sanyasa Yoga",
    desc: "The Yoga of Knowledge and Renunciation of Action",
  },
  {
    no: "5",
    title: "Karma Sanyasa Yoga",
    desc: "The Yoga of Renunciation",
  },
  { no: "6", title: "Dhyana Yoga", desc: "The Yoga of Meditation" },
  {
    no: "7",
    title: "Jnana Vijnana Yoga",
    desc: "The Yoga of Knowledge and Wisdom",
  },
  {
    no: "8",
    title: "Aksara Brahma Yoga",
    desc: "The Yoga of the Imperishable Brahman",
  },
  {
    no: "9",
    title: "Raja Vidya Raja Guhya Yoga",
    desc: "The Yoga of Royal Knowledge and Royal Secret",
  },
  {
    no: "10",
    title: "Vibhuti Yoga",
    desc: "The Yoga of Divine Manifestations",
  },
  {
    no: "11",
    title: "Visvarupa Darsana Yoga",
    desc: "The Yoga of the Vision of the Universal Form",
  },
  { no: "12", title: "Bhakti Yoga", desc: "The Yoga of Devotion" },
  {
    no: "13",
    title: "Ksetra Ksetrajna Vibhaga Yoga",
    desc: "The Yoga of the Field and the Knower of the Field",
  },
  {
    no: "14",
    title: "Gunatraya Vibhaga Yoga",
    desc: "The Yoga of the Division of the Three Gunas",
  },
  {
    no: "15",
    title: "Purusottama Yoga",
    desc: "The Yoga of the Supreme Person",
  },
  {
    no: "16",
    title: "Daivasura Sampad Vibhaga Yoga",
    desc: "The Yoga of the Divine and Demoniac Natures",
  },
  {
    no: "17",
    title: "Sraddhatraya Vibhaga Yoga",
    desc: "The Yoga of the Threefold Faith",
  },
  {
    no: "18",
    title: "Moksha Sanyasa Yoga",
    desc: "The Yoga of Liberation through Renunciation",
  },
];

export default function ChapterGrid() {
  const container = useRef();

  const onMouseMove = (e, card) => {
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    // 1. Perspective Tilt Logic
    const rotateX = (y / height - 0.5) * -20;
    const rotateY = (x / width - 0.5) * 20;

    gsap.to(card, {
      rotationY: x * 20, // Adjust intensity here
      rotationX: -y * 20,
      transformPerspective: 1000,
      ease: "power3.out",
      duration: 0.5,
    });
    // 2. CURSOR GLOW LOGIC: Update CSS variables for the spotlight effect
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const onMouseLeave = (card) => {
    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <section className="bg-stone-950 py-32 px-10" id="chapters">
      {/* SECTION TITLE */}
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-serif text-amber-500 mb-6 tracking-tight hover:animate-pulse">
          The Path of Eighteen
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6 animate-pulse" />
        <p className="text-stone-500 text-xs tracking-[0.6em] uppercase font-bold">
          Journey through the Song of God
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {chapters.map((ch) => (
          <Link href={`/Adhyayas/${ch.no}`} key={ch.no}>
            <div
              onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
              className="group relative bg-stone-900/40 border border-white/5 p-10 h-80 flex flex-col justify-end cursor-pointer overflow-hidden transition-colors hover:border-amber-500/50 rounded-md"
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(245,158,11,0.15), transparent 40%)",
                }}
              />
              <span className="absolute top-[-20%] right-[-10%] text-[15rem] font-black text-white/[0.02] group-hover:text-amber-500/[0.05]">
                {ch.no}
              </span>
              <h3 className="text-amber-500 text-xs tracking-[0.3em] uppercase mb-2">
                Chapter / Adhyaya (अध्याय) {ch.no}
              </h3>
              <h4 className="text-2xl font-serif text-stone-100 mb-2">
                {ch.title}
              </h4>
              <p className="text-stone-500 text-sm italic">{ch.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
