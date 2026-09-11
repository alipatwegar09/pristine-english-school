"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  X,
  Users,
  User,
  Phone,
  Mail,
  Building2,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

  /* ================= OPEN POPUP ================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  /* ================= BODY SCROLL ================= */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /* ================= FORM CHANGE ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          className: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-slate-950/70
        p-2
        backdrop-blur-sm
        sm:p-4
      "
    >
      {/* ================= POPUP ================= */}

      <div
        className="
          relative flex
          w-full
          max-w-[1000px]
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          lg:rounded-[22px]
        "
      >
        {/* ================= CLOSE ================= */}

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close admission popup"
          className="
            absolute right-2.5 top-2.5 z-50
            flex h-8 w-8
            items-center justify-center
            rounded-full
            bg-white
            text-slate-700
            shadow-md
            transition
            hover:scale-105
            hover:bg-slate-50
          "
        >
          <X size={18} />
        </button>

        {/* ================================================= */}
        {/* LEFT SIDE - DESKTOP */}
        {/* ================================================= */}

        <div className="relative hidden w-[47%] lg:block">
          <img
            src="/images/about/hero.jpeg"
            alt="Pristine English School Miraj"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-[#032b5d]
              via-[#063d75]/35
              to-transparent
            "
          />

          {/* ================= SCHOOL BRAND ================= */}

          <div className="absolute left-6 top-6 z-10">
            <div className="flex items-center gap-2.5">
              {/* Temporary logo */}
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-white
                  shadow-md
                "
              >
                <span className="text-xl font-bold text-lime-500">
                  P
                </span>
              </div>

              <div>
                <h2
                  className="
                    text-[17px]
                    font-extrabold
                    leading-tight
                    text-[#073764]
                  "
                >
                  PRISTINE ENGLISH
                </h2>

                <h3
                  className="
                    text-[17px]
                    font-extrabold
                    leading-tight
                    text-[#073764]
                  "
                >
                  SCHOOL MIRAJ.
                </h3>

                <p
                  className="
                    mt-0.5
                    text-[7px]
                    font-medium
                    tracking-[0.32em]
                    text-[#073764]
                  "
                >
                  LEARN • GROW • EXCEL
                </p>
              </div>
            </div>
          </div>

          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-10
              p-6
            "
          >
            <p className="text-base font-bold text-white">
              Before you go —
            </p>

            <h2
              className="
                mt-1
                max-w-[430px]
                text-[27px]
                font-extrabold
                leading-[1.08]
                text-yellow-400
              "
            >
              were you able to find the information you were looking for?
            </h2>

            <p
              className="
                mt-3
                max-w-[430px]
                text-[12px]
                leading-5
                text-white/95
              "
            >
              Choosing the right school for your child is an important
              decision. If you still have questions about admissions,
              curriculum, fees, or facilities — we&apos;re here to help.
            </p>

            {/* Benefits */}

            <div className="mt-5 flex items-center gap-2">
              <Benefit text="Dedicated Admissions Team" />

              <div className="h-8 w-px bg-white/60" />

              <Benefit text="Personalized Guidance" />

              <div className="h-8 w-px bg-white/60" />

              <Benefit text="Response within 24 Hours" />
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div className="w-full lg:w-[53%]">
          <div
            className="
              flex
              h-full
              flex-col
              justify-center
              px-4
              py-5
              sm:px-7
              sm:py-6
              lg:px-8
              lg:py-6
            "
          >
            {/* ================= TOP MESSAGE ================= */}

            <div
              className="
                mb-3
                flex
                items-center
                gap-2.5
                rounded-full
                bg-red-50
                px-3.5
                py-2
              "
            >
              <div
                className="
                  flex h-8 w-8
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-red-100
                "
              >
                <Users
                  size={18}
                  className="text-red-600"
                />
              </div>

              <p
                className="
                  text-[11px]
                  font-bold
                  leading-4
                  text-red-600
                  sm:text-xs
                "
              >
                We&apos;re here to help you make the
                <br />
                right choice for your child.
              </p>
            </div>

            {/* ================= HEADING ================= */}

            <div className="relative mb-2 pl-4">
              <div
                className="
                  absolute
                  left-0
                  top-0.5
                  h-[67px]
                  w-[6px]
                  rounded-full
                  bg-red-500
                "
              />

              <h1
                className="
                  text-[23px]
                  font-extrabold
                  leading-[1.12]
                  text-[#092b52]
                  sm:text-[27px]
                  lg:text-[29px]
                "
              >
                Get Personalised
                <br />
                Admission Guidance
              </h1>
            </div>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mb-3
                text-[11px]
                leading-5
                text-slate-600
                sm:text-xs
                lg:text-sm
              "
            >
              Share your details below and our admissions experts will get
              in touch with you to guide you personally.
            </p>

            {/* ================= SUCCESS ================= */}

            {submitted ? (
              <SuccessMessage
                onClose={() => setIsOpen(false)}
              />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-2"
              >
                {/* ================= NAME ================= */}

                <InputField
                  icon={<User size={18} />}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" full name *"
                  required
                />

                {/* ================= PHONE ================= */}

                <div
                  className="
                    flex h-[48px]
                    overflow-hidden
                    rounded-lg
                    border border-slate-300
                    focus-within:border-red-500
                    focus-within:ring-2
                    focus-within:ring-red-100
                  "
                >
                  <div
                    className="
                      flex items-center
                      border-r border-slate-200
                      px-2.5
                      text-xs
                      font-medium
                      text-slate-700
                    "
                  >
                    +91
                  </div>

                  <div
                    className="
                      flex w-10
                      items-center
                      justify-center
                      border-r border-slate-200
                    "
                  >
                    <Phone
                      size={17}
                      className="text-slate-500"
                    />
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Mobile number *"
                    className="
                      min-w-0
                      flex-1
                      px-3
                      text-xs
                      text-slate-800
                      outline-none
                      placeholder:text-slate-400
                    "
                  />
                </div>

                {/* ================= EMAIL ================= */}

                <InputField
                  icon={<Mail size={18} />}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />

                {/* ================= CLASS ================= */}

                <div className="relative">
                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-3.5
                      top-1/2
                      z-10
                      -translate-y-1/2
                      text-slate-500
                    "
                  >
                    <Building2 size={18} />
                  </div>

                  <select
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    required
                    className={`
                      h-[48px]
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-slate-300
                      bg-white
                      pl-10
                      pr-9
                      text-xs
                      outline-none
                      transition
                      focus:border-red-500
                      focus:ring-2
                      focus:ring-red-100
                      ${
                        formData.className
                          ? "text-slate-800"
                          : "text-slate-400"
                      }
                    `}
                  >
                    <option value="" disabled>
                      Select Class *
                    </option>

                    <option value="Playgroup">
                      Playgroup
                    </option>

                    <option value="Nursery">
                      Nursery
                    </option>

                    <option value="Primary">
                      Primary
                    </option>

                    <option value="Secondary">
                      Secondary
                    </option>

                    <option value="Higher Secondary Science">
                      Higher Secondary Science
                    </option>
                  </select>

                  <ChevronDown
                    size={17}
                    className="
                      pointer-events-none
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-slate-500
                    "
                  />
                </div>

                {/* ================= MESSAGE ================= */}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Tell us what you would like to know..."
                  className="
                    h-[52px]
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    px-3.5
                    py-2.5
                    text-xs
                    text-slate-800
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-red-500
                    focus:ring-2
                    focus:ring-red-100
                  "
                />

                {/* ================= SUBMIT ================= */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    flex
                    h-[52px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-gradient-to-r
                    from-red-500
                    to-red-600
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    shadow-red-100
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-lg
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-white
                          border-t-transparent
                        "
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a Call Back

                      <ArrowRight
                        size={19}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />
                    </>
                  )}
                </button>

                {/* ================= FOOTER TEXT ================= */}

                <p
                  className="
                    pt-0.5
                    text-center
                    text-[10px]
                    leading-4
                    text-slate-500
                    sm:text-xs
                  "
                >
                  We&apos;ll contact you shortly to answer your questions
                  <br />
                  and help you with admissions.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================= */
/* INPUT FIELD */
/* ================================================= */

interface InputFieldProps {
  icon: React.ReactNode;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function InputField({
  icon,
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
}: InputFieldProps) {
  return (
    <div className="relative">
      <div
        className="
          pointer-events-none
          absolute
          left-3.5
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      >
        {icon}
      </div>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="
          h-[48px]
          w-full
          rounded-lg
          border
          border-slate-300
          bg-white
          pl-10
          pr-3
          text-xs
          text-slate-800
          outline-none
          transition
          placeholder:text-slate-400
          focus:border-red-500
          focus:ring-2
          focus:ring-red-100
        "
      />
    </div>
  );
}

/* ================================================= */
/* BENEFIT */
/* ================================================= */

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="
          flex h-7 w-7
          shrink-0
          items-center justify-center
          rounded-full
          bg-lime-400
        "
      >
        <CheckCircle2
          size={16}
          className="text-green-900"
        />
      </div>

      <span
        className="
          max-w-[85px]
          text-[9px]
          font-bold
          leading-3
          text-white
        "
      >
        {text}
      </span>
    </div>
  );
}

/* ================================================= */
/* SUCCESS MESSAGE */
/* ================================================= */

function SuccessMessage({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-5 text-center">
      <div
        className="
          mb-3
          flex h-14 w-14
          items-center justify-center
          rounded-full
          bg-green-100
        "
      >
        <CheckCircle2
          size={32}
          className="text-green-600"
        />
      </div>

      <h2 className="text-xl font-bold text-[#092b52]">
        Thank You!
      </h2>

      <p className="mt-2 text-xs leading-5 text-slate-600">
        Your admission enquiry has been received.
        Our admissions team will contact you shortly.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="
          mt-4
          rounded-lg
          bg-red-500
          px-6
          py-2
          text-xs
          font-semibold
          text-white
          hover:bg-red-600
        "
      >
        Close
      </button>
    </div>
  );
}