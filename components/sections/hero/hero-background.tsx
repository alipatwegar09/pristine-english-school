"use client";

export default function HeroBackground() {
  return (
    <>
      {/* Hero Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero.jpeg"
        className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        "
      >
        <source
          src="/images/hero/hero.mp4"
          type="video/mp4"
        />
      </video>


      {/* Soft Dark Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/30
        "
      />


      {/* Text Readability Gradient */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/70
        via-black/40
        to-transparent
        "
      />


      {/* Bottom Fade */}
      <div
        className="
        absolute
        inset-x-0
        bottom-0
        h-48
        bg-gradient-to-t
        from-slate-950/50
        to-transparent
        "
      />


      {/* Blue Glow */}
      <div
        className="
        absolute
        -left-20
        top-32
        h-80
        w-80
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />


      {/* Gold Glow */}
      <div
        className="
        absolute
        bottom-10
        right-10
        h-72
        w-72
        rounded-full
        bg-yellow-400/15
        blur-3xl
        "
      />
    </>
  );
}