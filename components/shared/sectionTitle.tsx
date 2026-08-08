interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}