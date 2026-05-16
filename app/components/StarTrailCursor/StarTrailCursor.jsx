"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DivineCursor() {
  const containerRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lastSpawn = useRef({ x: 0, y: 0 });
  const idleTimer = useRef(null);
  const pulseInterval = useRef(null);

  // Short Seed (Bija) Mantras for the movement trail
  const seedMantras = [
    "ॐ",
    "श्रीं",
    "ह्रीं",
    "क्लीं",
    "गं",
    "ऐं",
    "क्रीं",
    "हूं",
    "सौं",
  ];

  // Profound phrases for the deep meditation idle state
  const profoundMantras = [
    "ॐ तत् सत्",
    "तत् त्वम् असि", // Tat Tvam Asi (Thou art that)
    "अहं ब्रह्मास्मि", // Aham Brahmasmi (I am Brahman)
    "प्रज्ञानं ब्रह्म", // Prajnanam Brahma (Consciousness is Brahman)
  ];

  const seedIndex = useRef(0);
  const profoundIndex = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- 1. GOLDEN STARDUST (Replaces noisy ripples on movement) ---
    const createDust = (x, y) => {
      const dust = document.createElement("div");
      dust.className =
        "fixed rounded-full bg-amber-400 pointer-events-none z-[9998] mix-blend-screen";

      gsap.set(dust, {
        width: 4,
        height: 4,
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        opacity: 0.6,
        boxShadow: "0 0 10px 2px rgba(245, 158, 11, 0.6)",
      });

      container.appendChild(dust);

      gsap.to(dust, {
        y: y - 20 - Math.random() * 30,
        x: x + (Math.random() * 40 - 20),
        opacity: 0,
        scale: 0.1,
        duration: 1 + Math.random(),
        ease: "power1.out",
        onComplete: () => dust.remove(),
      });
    };

    // --- 2. THE MEDITATION PULSE (Idle State) ---
    const createMeditationPulse = (x, y) => {
      // The expanding energy ring
      const ring = document.createElement("div");
      ring.className =
        "fixed rounded-full border border-amber-500/30 pointer-events-none z-[9997]";

      gsap.set(ring, {
        width: 100,
        height: 100,
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 1,
        boxShadow:
          "inset 0 0 20px rgba(245, 158, 11, 0.2), 0 0 20px rgba(245, 158, 11, 0.2)",
      });

      container.appendChild(ring);

      gsap.to(ring, {
        scale: 4,
        opacity: 0,
        duration: 4,
        ease: "sine.out",
        onComplete: () => ring.remove(),
      });

      // The profound mantra
      const mantra = document.createElement("div");
      mantra.innerText = profoundMantras[profoundIndex.current];
      profoundIndex.current =
        (profoundIndex.current + 1) % profoundMantras.length;

      mantra.className =
        "fixed text-amber-400/80 pointer-events-none z-[9999] font-serif tracking-widest whitespace-nowrap";

      gsap.set(mantra, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        fontSize: "1.2rem",
        opacity: 0,
        yOffset: 0,
        textShadow: "0 0 20px rgba(245,158,11,0.5)",
      });

      container.appendChild(mantra);

      gsap.to(mantra, {
        opacity: 1,
        y: y - 60,
        duration: 2,
        ease: "power2.out",
      });

      gsap.to(mantra, {
        opacity: 0,
        y: y - 100,
        duration: 2,
        delay: 2,
        ease: "power2.in",
        onComplete: () => mantra.remove(),
      });
    };

    // --- 3. MANTRA SEEDS (Movement Trail) ---
    const releaseSeed = (x, y) => {
      const mantra = document.createElement("div");
      mantra.innerText = seedMantras[seedIndex.current];
      seedIndex.current = (seedIndex.current + 1) % seedMantras.length;

      mantra.className =
        "fixed text-amber-500 pointer-events-none z-[999] font-serif select-none mix-blend-screen";

      gsap.set(mantra, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        fontSize: "12px",
        opacity: 0,
        scale: 0.5,
        rotation: Math.random() * 20 - 10,
        textShadow: "0 0 10px rgba(245, 158, 11, 0.4)",
      });

      container.appendChild(mantra);

      const tl = gsap.timeline({ onComplete: () => mantra.remove() });

      tl.to(mantra, {
        opacity: 0.8,
        scale: 1.2,
        duration: 0.4,
        ease: "back.out(2)",
      }).to(
        mantra,
        {
          y: y - 80 - Math.random() * 40,
          x: x + (Math.random() * 60 - 30),
          rotation: Math.random() * 60 - 30,
          opacity: 0,
          scale: 0.5,
          duration: 2 + Math.random(),
          ease: "sine.inOut",
        },
        "-=0.2",
      );
    };

    // --- 4. INTERACTION CONTROLLER ---
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Distance-based spawning (Ensures consistent trails regardless of mouse speed)
      const dist = Math.hypot(
        e.clientX - lastSpawn.current.x,
        e.clientY - lastSpawn.current.y,
      );

      if (dist > 40) {
        releaseSeed(e.clientX, e.clientY);
        lastSpawn.current = { x: e.clientX, y: e.clientY };
      }

      // Spawn stardust more frequently
      if (dist > 15) {
        createDust(e.clientX, e.clientY);
      }

      // Reset Idle/Meditation Logic
      clearInterval(pulseInterval.current);
      pulseInterval.current = null;
      clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        // Trigger immediate first pulse, then interval
        createMeditationPulse(mouse.current.x, mouse.current.y);
        pulseInterval.current = setInterval(() => {
          createMeditationPulse(mouse.current.x, mouse.current.y);
        }, 4000); // Slow, breathing 4-second heartbeat
      }, 1500); // Wait 1.5s of stillness before entering meditation mode
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

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
