const stats = [
  { value: "1500+", label: "Students" },
  { value: "60+", label: "Teachers" },
  { value: "100%", label: "Result" },
  { value: "10+", label: "Years" },
];

export default function StatsSection() {
  return (
    <section className="-mt-12 relative z-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-2xl md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <h2 className="text-3xl font-bold text-blue-700">
              {item.value}
            </h2>
            <p className="mt-2 text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}