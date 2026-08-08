import {
  GraduationCap,
  Users,
  BookOpen,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Happy Students",
  },
  {
    icon: GraduationCap,
    value: "60+",
    label: "Qualified Teachers",
  },
  {
    icon: BookOpen,
    value: "Playgroup",
    label: "to 12th Science",
  },
  {
    icon: Trophy,
    value: "100%",
    label: "Safe Environment",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
        >
          <item.icon
            className="text-yellow-400"
            size={34}
          />

          <h3 className="mt-4 text-3xl font-black text-white">
            {item.value}
          </h3>

          <p className="mt-1 text-slate-200">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}