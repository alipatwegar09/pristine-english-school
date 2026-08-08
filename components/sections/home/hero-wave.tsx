export default function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 220"
        className="w-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="
          M0,120
          C250,220
          550,20
          850,130
          C1100,220
          1280,50
          1440,120
          L1440,260
          L0,260
          Z
          "
        />

        <path
          fill="#fbbf24"
          opacity=".9"
          d="
          M0,140
          C300,240
          650,40
          950,150
          C1200,220
          1320,80
          1440,130
          "
        />
      </svg>

      <div
        className="
        absolute
        right-20
        bottom-12
        hidden
        text-right
        lg:block
        "
      >
        <h2
          className="
          text-5xl
          italic
          font-semibold
          text-blue-900
          "
        >
          Nurturing Minds,
        </h2>

        <h2
          className="
          text-5xl
          italic
          font-semibold
          text-yellow-500
          "
        >
          Building Futures.
        </h2>
      </div>
    </div>
  );
}