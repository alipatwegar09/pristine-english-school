import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        bg-slate-50
        py-12
        sm:py-16
        md:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          px-4
          sm:gap-12
          sm:px-6
          lg:grid-cols-2
          lg:gap-16
        "
      >
        <ContactForm />

        <ContactInfo />
      </div>
    </section>
  );
}