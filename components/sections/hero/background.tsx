export default function HeroBackground() {
  return (
    <>
      {/* Main Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

      {/* Top Left */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </>
  );
}