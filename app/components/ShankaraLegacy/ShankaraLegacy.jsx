"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ShankaraLegacy() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".legacy-content", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-stone-950 py-32 px-6 relative overflow-hidden"
    >
      {/* Background Stylized Text - 'BHASHYA' */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] select-none pointer-events-none uppercase">
        Bhashya
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side: Visual Representation */}
        <div className="flex-1 relative group">
          <div className="relative z-10 rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl">
            <img
              src="/Images/adi-shankara.jpg"
              alt="Adi Shankara with Disciples"
              className="w-full h-auto grayscale hover:grayscale-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
          </div>
          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-amber-500/10 rounded-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />
        </div>

        {/* Right Side: The Matter */}
        <div className="flex-1 legacy-content">
          <h3 className="text-amber-500 text-xs tracking-[0.5em] uppercase font-bold mb-4">
            The Historical Lineage
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-100 mb-8 leading-tight">
            The 700 Verses of <br />{" "}
            <span className="text-amber-500">Adi Shankara</span>
          </h2>

          <div className="space-y-6 text-stone-400 font-light leading-relaxed text-lg">
            <p>
              In the 8th Century, Adi Shankara distilled the 700 verses of the
              Gita from the vast Mahabharata epic, solidifying the version we
              study today.
            </p>
            <p>
              Through his{" "}
              <span className="text-stone-200 italic">Gita Bhashya</span>, he
              proved that the Gita is not just a song of war, but a roadmap to
              <span className="text-amber-500/80"> Moksha (Liberation)</span>.
            </p>
            <blockquote className="border-l-2 border-amber-500/30 pl-6 py-2 italic text-stone-300">
              "The Gita is the quintessence of the whole Vedic literature."
            </blockquote>
          </div>

          <div className="mt-12 flex gap-8">
            <div>
              <div className="text-amber-500 text-2xl font-serif">8th CE</div>
              <div className="text-[10px] uppercase tracking-widest text-stone-600">
                Period
              </div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div>
              <div className="text-amber-500 text-2xl font-serif">700</div>
              <div className="text-[10px] uppercase tracking-widest text-stone-600">
                Standardized Verses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
