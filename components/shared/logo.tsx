import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/logo/logo.png"
        alt="Pristine English School"
        width={80}
        height={100}
        priority 
      />

      <div>
        <h2 className="text-lg font-bold text-blue-700 leading-none">
          Pristine
        </h2>

        <p className="text-sm text-blue-700 font-semibold">
          English School
        </p>
      </div>
    </Link>
  );
}