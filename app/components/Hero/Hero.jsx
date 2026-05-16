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
        { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out" },
      )
        .to(
          textRef.current,
          {
            scale: 100,
            opacity: 0,
            duration: 3,
            ease: "none",
          },
          "+=0.2",
        )
        .to(
          container.current,
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=1",
        );

      // Important: Refresh ScrollTrigger after animations are set
      ScrollTrigger.refresh();
    },
    { scope: container },
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
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950 z-10" />
      </div>

      {/* TEXT LAYER */}
      <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
        <div ref={textRef} className="flex flex-col items-center opacity-0">
          <div className="hero-title relative">
            {/* Sanskrit Subtle Glow */}
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-6xl md:text-8xl font-serif text-amber-500/40 select-none whitespace-nowrap">
              श्रीमद् भगवद्गीता
            </span>
            <h1 className="text-[18vw] md:text-[14vw] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-800 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-none">
              GITA
            </h1>
          </div>
          <p className="text-stone-400 text-sm mt-4 select-none leading-relaxed tracking-[1mm] italic">
            “Beyond the clamor of the battlefield, lies the song of the eternal
            soul.”
          </p>
        </div>
      </div>

      {/* FIXED AUDIO CONTROL */}
      <button
        onClick={() => {
          if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            videoRef.current.volume = 0.5;
          }
        }}
        className="fixed bottom-10 right-10 z-[100] flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-amber-500 hover:text-black transition-all duration-500 group overflow-hidden"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold hidden md:block">
          {isMuted ? "Unmute Experience" : "Mute Sound"}
        </span>
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone-500">
          Scroll to Begin
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent" />{" "}
      </div>
    </section>
  );
}
