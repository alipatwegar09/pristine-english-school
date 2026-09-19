// components/seo/SchoolSchema.tsx

export default function SchoolSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "School",

    name: "Pristine English School",

    alternateName: "Pristine English School, Miraj",

    url: "https://pristineenglishschool.com",

    description:
      "Pristine English School, Miraj, Maharashtra provides quality education from Playgroup to Higher Secondary Science.",

    telephone: "+91 9421182990",

    email: "pristinemiraj@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "NH-166 Miraj Kolhapur Highway Road, Beside Gosawi Mala",
      addressLocality: "Miraj",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.instagram.com/pristine_english_school_miraj/",
      "https://www.youtube.com/@pristineenglishschoolmiraj837",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}