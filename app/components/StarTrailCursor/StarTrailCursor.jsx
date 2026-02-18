"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function StarTrailCursor() {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const idleTimer = useRef(null);
  const pulseInterval = useRef(null);

  // The specific mantras you requested
  const mantras = [
    "ॐ",
    "श्री",
    "ह्रीं",
    "क्लीं",
    "गं",
    "ॐ तत् सत्",
    "ऐं",
    "क्रीं",
    "हूं",
    "सौं",
    "दुं",
    "ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
    "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता । नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः ॥",
  ];
  const mantraIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. RIPPLE (Sound Wave Vibration) ---
    const createRipple = (x, y, isIdle = false) => {
      const ripple = document.createElement("div");
      ripple.className = `fixed rounded-full border ${
        isIdle ? "border-amber-400/50 border-[3px]" : "border-amber-500/20"
      } pointer-events-none z-[9998]`;

      gsap.set(ripple, {
        width: 15,
        height: 15,
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        opacity: isIdle ? 0.8 : 0.4,
      });

      container.appendChild(ripple);

      gsap.to(ripple, {
        width: isIdle ? 450 : 200,
        height: isIdle ? 450 : 200,
        opacity: 0,
        duration: isIdle ? 5 : 2.5,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });
    };

    // --- 2. MANTRA RELEASE (Vibrational Seeds) ---
    const releaseMantra = (x, y, isBig = false) => {
      const mantra = document.createElement("div");

      // Cycle through your mantras
      mantra.innerText = mantras[mantraIndex.current];
      mantraIndex.current = (mantraIndex.current + 1) % mantras.length;

      mantra.className = `fixed text-amber-500 pointer-events-none z-[999] font-serif select-none transition-all`;

      // Sacred glow effect
      mantra.style.textShadow = isBig
        ? "0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(245, 158, 11, 0.4)"
        : "0 0 10px rgba(245, 158, 11, 0.5)";

      gsap.set(mantra, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        fontSize: isBig ? "15px" : "7px",
        opacity: 0,
        scale: 0.3,
        rotation: Math.random() * 10 - 5,
      });

      container.appendChild(mantra);

      const tl = gsap.timeline({ onComplete: () => mantra.remove() });

      tl.to(mantra, {
        opacity: isBig ? 1 : 0.7,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      }).to(
        mantra,
        {
          y: y - (isBig ? 180 : 100),
          x: x + (Math.random() * 100 - 50),
          rotation: Math.random() * 30 - 15,
          opacity: 0,
          duration: isBig ? 6 : 3.5,
          ease: "sine.inOut",
        },
        "-=0.1",
      );
    };

    // --- 3. INTERACTION CONTROLLER ---
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      createRipple(e.clientX, e.clientY, false);

      // Release a mantra seed occasionally while moving
      if (Math.random() > 0.94) {
        releaseMantra(e.clientX, e.clientY, false);
      }

      // Reset Idle/Meditation Logic
      clearInterval(pulseInterval.current);
      pulseInterval.current = null;
      clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        // Deep Meditation Pulse
        pulseInterval.current = setInterval(() => {
          createRipple(mouse.current.x, mouse.current.y, true);
          releaseMantra(mouse.current.x, mouse.current.y, true);
        }, 3000); // Rhythmic 3-second heartbeat
      }, 1200);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearInterval(pulseInterval.current);
      clearTimeout(idleTimer.current);
      if (container) container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
    />
  );
}
