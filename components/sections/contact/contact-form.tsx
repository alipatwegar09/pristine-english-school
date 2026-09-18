"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
const [classDropdownOpen, setClassDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.className) {
    setClassDropdownOpen(true);
    return;
  }

  setLoading(true);

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
  setSuccess(true);
  setClassDropdownOpen(false);

  setFormData({
    name: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });
}
      else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to send enquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-100
      bg-white
      p-6
      shadow-xl
      sm:p-8
      md:p-10
    "
    >
      <div className="mb-8">
        <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
          Admission Enquiry
        </h3>

        <p className="mt-3 text-sm font-medium text-slate-600 sm:text-base">
          Fill the form and our team will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter your name"
            className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3.5
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-blue-600
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
          "
          />
        </div>

        {/* Mobile */}

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Mobile Number
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="Enter mobile number"
            className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3.5
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-blue-600
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
          "
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Email Address
          </label>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email address"
            className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3.5
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-blue-600
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
          "
          />
        </div>

        {/* Class */}
{/* Class */}
<div className="relative">
  <label className="mb-2 block text-sm font-bold text-slate-700">
    Select Class
  </label>

  {/* Custom Dropdown Button */}
  <button
    type="button"
    onClick={() =>
      setClassDropdownOpen((prev) => !prev)
    }
    className={`
      flex
      w-full
      items-center
      justify-between
      rounded-xl
      border
      border-slate-200
      bg-slate-50
      px-4
      py-3.5
      text-left
      text-slate-900
      outline-none
      transition
      focus:border-blue-600
      focus:bg-white
      focus:ring-4
      focus:ring-blue-100
      ${
        formData.className
          ? "text-slate-900"
          : "text-slate-400"
      }
    `}
  >
    <span className="truncate">
      {formData.className || "Select Class"}
    </span>

    <svg
      className={`
        ml-2
        h-4
        w-4
        shrink-0
        transition-transform
        duration-200
        ${
          classDropdownOpen
            ? "rotate-180"
            : ""
        }
      `}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 9 6 6 6-6"
      />
    </svg>
  </button>

  {/* Dropdown Options */}
  {classDropdownOpen && (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        z-50
        mt-1
        max-h-52
        overflow-y-auto
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-xl
      "
    >
      {[
        "Playgroup",
        "Nursery",
        "Primary",
        "Secondary",
        "Higher Secondary Science",
      ].map((className) => (
        <button
          key={className}
          type="button"
          onClick={() => {
            setFormData((prev) => ({
              ...prev,
              className,
            }));

            setClassDropdownOpen(false);
          }}
          className={`
            block
            w-full
            px-4
            py-3
            text-left
            text-sm
            transition
            ${
              formData.className === className
                ? "bg-blue-50 font-semibold text-blue-700"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }
          `}
        >
          {className}
        </button>
      ))}
    </div>
  )}
</div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-700">
            Message
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Write your enquiry..."
            className="
            w-full
            resize-none
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3.5
            text-slate-900
            placeholder:text-slate-400
            outline-none
            transition
            focus:border-blue-600
            focus:bg-white
            focus:ring-4
            focus:ring-blue-100
          "
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={loading}
          className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-blue-700
          py-4
          text-base
          font-bold
          text-white
          shadow-lg
          shadow-blue-200
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-800
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
        >
          {loading ? "Sending..." : "Send Enquiry"}

          <Send
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

        {success && (
          <div className="rounded-xl bg-green-100 p-4 text-center font-semibold text-green-700">
            ✅ Thank you! Your admission enquiry has been sent successfully.
          </div>
        )}
      </form>
    </div>
  );
}