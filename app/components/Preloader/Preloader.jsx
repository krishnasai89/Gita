"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const container = useRef();
  const mantraRingInnerRef = useRef();
  const mantraRingOuterRef = useRef();
  const sunRef = useRef();

  const bijaMantras = [
    "श्री",
    "ह्रीं",
    "क्लीं",
    "गं",
    "ऐं",
    "क्रीं",
    "हूं",
    "सौं",
    "दुं",
  ];
  const longMantras = [
    "ॐ तत् सत्",
    "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
    "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता",
    "नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः",
  ];

  const toSanskritNumber = (n) => {
    const sanskritDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return n
      .toString()
      .split("")
      .map((digit) => sanskritDigits[digit])
      .join("");
  };

  useEffect(() => {
    // Check if user has already seen the full animation in this session
    const hasSeenFullLoader = sessionStorage.getItem("hasSeenFullLoader");

    // If they've seen it, make it 8x faster (approx 0.5s total)
    // If not, keep the sacred 4-second pace
    const tickSpeed = hasSeenFullLoader ? 5 : 40;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          sessionStorage.setItem("hasSeenFullLoader", "true");
          return 100;
        }
        return prev + 1;
      });
    }, tickSpeed);

    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      // Continuous rotations
      gsap.to(mantraRingInnerRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
      gsap.to(mantraRingOuterRef.current, {
        rotation: -360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".counter-rotate", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".counter-rotate-outer", {
        rotation: 40,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      // Living Sun Heartbeat
      if (progress > 0 && progress < 100) {
        gsap.fromTo(
          sunRef.current,
          { scale: 1 },
          {
            scale: 1.08,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.out",
          },
        );
      }

      // Enlightenment Exit
      if (progress === 100) {
        const tl = gsap.timeline({ onComplete: () => onComplete() });
        tl.to(".mandala-content", {
          scale: 1.4,
          opacity: 0,
          filter: "blur(30px) brightness(2)",
          duration: 1.2,
          ease: "power2.in",
        }).to(
          ".loader-panel",
          {
            height: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "expo.inOut",
          },
          "-=0.8",
        );
      }
    },
    { scope: container, dependencies: [progress] },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-stone-950 overflow-hidden"
    >
      <div className="loader-panel absolute top-0 left-0 w-full h-1/2 bg-[#050505] z-[10]" />
      <div className="loader-panel absolute bottom-0 left-0 w-full h-1/2 bg-[#050505] z-[10]" />

      <div className="mandala-content relative flex items-center justify-center z-[20]">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-orange-600/10 blur-[120px] animate-pulse" />

        <div ref={sunRef} className="relative z-30 text-center select-none">
          <h2 className="text-8xl md:text-9xl font-serif bg-gradient-to-b from-yellow-100 via-orange-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]">
            ॐ
          </h2>
          <div className="mt-4 font-serif text-orange-500 font-bold text-3xl tracking-widest">
            {toSanskritNumber(progress)}%
          </div>
        </div>

        <div ref={mantraRingInnerRef} className="absolute w-[450px] h-[450px]">
          {bijaMantras.map((mantra, i) => {
            const angle = i * (360 / bijaMantras.length);
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="counter-rotate font-serif text-2xl text-orange-400/80 font-medium drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]"
                  style={{
                    transform: `rotate(${angle}deg) translate(190px) rotate(${-angle}deg)`,
                  }}
                >
                  {mantra}
                </div>
              </div>
            );
          })}
        </div>

        <div ref={mantraRingOuterRef} className="absolute w-[800px] h-[800px]">
          {longMantras.map((mantra, i) => {
            const angle = i * (360 / longMantras.length);
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="counter-rotate-outer font-serif text-sm md:text-base text-red-600/40 font-semibold tracking-widest whitespace-nowrap"
                  style={{
                    transform: `rotate(${angle}deg) translate(340px) rotate(${-angle}deg)`,
                  }}
                >
                  {mantra}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="absolute bottom-12 z-[20] text-orange-950/40 font-black text-[10px] uppercase tracking-[1.2em]">
        Aligning Consciousness
      </p>
    </div>
  );
}
