export default function HeroBackground() {
  return (
    <>
      {/* Building */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/hero/hero-bg.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-[#071B4D]/70" />

      {/* Left Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#071B4D] via-[#071B4D]/70 to-transparent" />

      {/* Glow */}

      <div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-yellow-500/20 blur-[120px]" />

      {/* Texture */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('/images/hero/hero.jpeg')",
        }}
      />
    </>
  );
}