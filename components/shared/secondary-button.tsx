import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  text: string;
}

export default function SecondaryButton({
  href,
  text,
}: SecondaryButtonProps) {
  return (
    <Link href={href}>
      <button
        className="
          rounded-full
          border
          border-slate-300
          px-8
          py-3
          font-semibold
          transition-all
          duration-300
          hover:bg-slate-100
        "
      >
        {text}
      </button>
    </Link>
  );
}