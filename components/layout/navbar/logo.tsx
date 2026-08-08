import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo/logo.jpeg"
        alt="Pristine English School"
        width={55}
        height={55}
        priority
      />

      <div className="leading-tight">
        <h2 className="text-lg font-bold text-slate-900">
          Pristine English School
        </h2>

        <p className="text-sm text-slate-500">
          Miraj
        </p>
      </div>
    </Link>
  );
}