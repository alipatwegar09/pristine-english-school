import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  text: string;
}

export default function PrimaryButton({
  href,
  text,
}: PrimaryButtonProps) {
  return (
    <Link href={href}>
      <button
        className="
          rounded-full
          bg-blue-700
          px-8
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-800
          hover:shadow-xl
        "
      >
        {text}
      </button>
    </Link>
  );
}