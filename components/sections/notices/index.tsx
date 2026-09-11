import NoticeHeader from "./notice-header";
import NoticeCard from "./notice-card";

export default function Notices() {
  return (
    <section
      id="notices"
      className="
        bg-amber-50
        py-20
        md:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <NoticeHeader />

        <NoticeCard />
      </div>
    </section>
  );
}