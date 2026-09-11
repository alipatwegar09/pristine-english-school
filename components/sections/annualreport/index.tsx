import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";

export default function AnnualReport() {
  return (
    <section
      className="
        bg-slate-50
        py-16
        sm:py-20
        md:py-24
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            flex flex-col items-start justify-between gap-6
            rounded-3xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm
            sm:p-8
            lg:flex-row
            lg:items-center
          "
        >
          {/* Left Content */}
          <div className="flex items-start gap-4">
            <div
              className="
                flex h-14 w-14 shrink-0 items-center justify-center
                rounded-2xl
                bg-blue-50
                text-blue-700
              "
            >
              <FileText size={28} />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wider
                  text-blue-600
                "
              >
                School Publication
              </p>

              <h2
                className="
                  mt-1
                  font-[var(--font-heading)]
                  text-2xl
                  font-bold
                  text-slate-900
                "
              >
                Annual Report
              </h2>

              <p
                className="
                  mt-1
                  max-w-xl
                  text-sm
                  leading-6
                  text-slate-600
                "
              >
                Explore our latest annual report and learn about the
                achievements, activities and progress of Pristine English
                School.
              </p>
            </div>
          </div>

          {/* Action */}
          <div className="w-full sm:w-auto">
            <Link
              href="/documents/annual-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-blue-700
                px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-blue-700/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-blue-800
                sm:w-auto
              "
            >
              View Annual Report
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}