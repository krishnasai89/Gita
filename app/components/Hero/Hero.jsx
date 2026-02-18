"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Volume2, VolumeX } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef();
  const textRef = useRef();
  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(true);

  useGSAP(
    () => {
      // Scrub: 1 ensures the video/text movement is tied exactly to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          onLeave: () => {
            if (videoRef.current) videoRef.current.pause();
          },
          onEnterBack: () => {
            if (videoRef.current) videoRef.current.play();
          },
          onUpdate: (self) => {
            // Dynamic volume and opacity control
            if (videoRef.current && !videoRef.current.muted) {
              const vol = 1 - self.progress;
              videoRef.current.volume = vol > 0 ? vol : 0;
            }
          },
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" }
      )
        .to(
          textRef.current,
          {
            scale: 100,
            opacity: 0,
            duration: 3,
            ease: "none",
          },
          "+=0.2"
        )
        .to(
          container.current,
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=1"
        );

      // Important: Refresh ScrollTrigger after animations are set
      ScrollTrigger.refresh();
    },
    { scope: container }
  );

  const toggleAudio = (e) => {
    // Prevent the click from bubbling and causing scroll issues
    e.stopPropagation();

    if (videoRef.current) {
      const newState = !isMuted;
      videoRef.current.muted = newState;
      setIsMuted(newState);

      // Force play if browser paused it during mute toggle
      if (!newState) {
        videoRef.current
          .play()
          .catch((err) => console.log("Audio play blocked", err));
        videoRef.current.volume = 1;
      }
    }
  };

  return (
    <section
      ref={container}
      className="relative h-screen w-full overflow-hidden bg-stone-950 will-change-transform"
    >
      {/* FIX: We use 'absolute' with 'inset-0' and ensure the video has 
          'object-cover' to prevent the blank screen/black bars issue.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          key="hero-video" // Key ensures React treats the element as stable
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/Videos/Bhagavad Gita.mp4" type="video/mp4" />
        </video>

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950 z-[1]" />
      </div>

      {/* TEXT LAYER */}
      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
        <div ref={textRef} className="flex flex-col items-center opacity-0">
          <h1 className="text-[15vw] font-serif font-black tracking-tighter text-amber-500 leading-none select-none">
            GITA
          </h1>
          <p className="text-stone-400 tracking-[1em] uppercase text-xs mt-4 select-none">
            The Song of God
          </p>
        </div>
      </div>

      {/* FIXED AUDIO CONTROL */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-10 right-10 z-[100] p-4 rounded-full border border-amber-500/30 bg-stone-900/80 backdrop-blur-xl text-amber-500 hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
        aria-label="Toggle Mute"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent animate-ping" />
      </div>
    </section>
  );
}
