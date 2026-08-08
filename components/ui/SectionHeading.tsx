interface SectionHeadingProps {
  title: string;
  description?: string;
}


export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {

  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">

      <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
        {title}
      </h2>


      {description && (
        <p className="mt-4 text-gray-600">
          {description}
        </p>
      )}

    </div>
  );
}