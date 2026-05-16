"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const container = useRef(null);
  const sunRef = useRef(null);
  const mantraRingInnerRef = useRef(null);
  const mantraRingOuterRef = useRef(null);

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

  // --- 1. Progress Timer Logic ---
  useEffect(() => {
    const hasSeenFullLoader = sessionStorage.getItem("hasSeenFullLoader");
    const tickSpeed = hasSeenFullLoader ? 5 : 40; // 0.5s if seen, 4s if new

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

  // --- 2. Continuous Background Animations (Runs ONLY ONCE on mount) ---
  useGSAP(
    () => {
      // Smooth infinite rotations
      gsap.to(mantraRingInnerRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".counter-rotate", {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(mantraRingOuterRef.current, {
        rotation: -360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".counter-rotate-outer", {
        rotation: 360,
        duration: 50,
        repeat: -1,
        ease: "none",
      });

      // Deep, rhythmic heartbeat for the OM symbol
      gsap.to(sunRef.current, {
        scale: 1.15,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Breathing text at the bottom
      gsap.to(".loading-text", {
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container },
  );

  // --- 3. Exit Animation (Runs ONLY when progress reaches 100) ---
  useGSAP(
    () => {
      if (progress === 100) {
        const tl = gsap.timeline({
          onComplete: () => {
            // Slight delay to ensure React state safely unmounts it
            setTimeout(() => onComplete(), 50);
          },
        });

        // 1. Explode the mandala into light
        tl.to(".mandala-content", {
          scale: 2,
          opacity: 0,
          filter: "blur(20px) brightness(2)",
          duration: 1.2,
          ease: "power3.in",
        })
          // 2. Slide the literal "gates" open vertically
          .to(
            ".loader-panel-top",
            {
              yPercent: -100,
              duration: 1.2,
              ease: "expo.inOut",
            },
            "-=0.6",
          )
          .to(
            ".loader-panel-bottom",
            {
              yPercent: 100,
              duration: 1.2,
              ease: "expo.inOut",
            },
            "-=1.2",
          )
          // 3. Fade out the overall container background
          .to(
            container.current,
            {
              autoAlpha: 0,
              duration: 0.5,
            },
            "-=0.4",
          );
      }
    },
    { scope: container, dependencies: [progress] },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020202] overflow-hidden"
    >
      {/* The Heavy Gates */}
      <div className="loader-panel-top absolute top-0 left-0 w-full h-1/2 bg-[#050403] z-[10] border-b border-amber-500/10" />
      <div className="loader-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#050403] z-[10] border-t border-amber-500/10" />

      {/* The Central Content */}
      <div className="mandala-content relative flex items-center justify-center z-[20]">
        {/* Core Sun Glow */}
        <div className="absolute w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

        {/* The OM & Percentage */}
        <div
          ref={sunRef}
          className="relative z-30 text-center select-none flex flex-col items-center justify-center"
        >
          <h2 className="text-8xl md:text-9xl font-serif text-amber-400 drop-shadow-[0_0_40px_rgba(245,158,11,0.8)] leading-none">
            ॐ
          </h2>
          <div className="mt-4 font-serif text-amber-500/80 font-bold text-2xl tracking-[0.2em] w-24 text-center">
            {toSanskritNumber(progress)}%
          </div>
        </div>

        {/* Inner Ring (Bija Mantras) */}
        <div
          ref={mantraRingInnerRef}
          className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
        >
          {bijaMantras.map((mantra, i) => {
            const angle = i * (360 / bijaMantras.length);
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="counter-rotate font-serif text-xl md:text-2xl text-amber-500/60 font-medium drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-180px) rotate(${-angle}deg)`, // Moved logic to translateY for cleaner math
                  }}
                >
                  {mantra}
                </div>
              </div>
            );
          })}
        </div>

        {/* Outer Ring (Long Shlokas) */}
        <div
          ref={mantraRingOuterRef}
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          {longMantras.map((mantra, i) => {
            const angle = i * (360 / longMantras.length);
            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div
                  className="counter-rotate-outer font-serif text-xs md:text-sm text-amber-600/30 font-bold tracking-[0.3em] whitespace-nowrap"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-320px) rotate(${-angle}deg)`,
                  }}
                >
                  {mantra}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Loading Footer */}
      <p className="loading-text absolute bottom-12 z-[20] text-amber-500 font-black text-[10px] uppercase tracking-[1em] text-center w-full select-none">
        Aligning Consciousness
      </p>
    </div>
  );
}
