"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroImage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

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
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex w-full justify-center px-1 sm:px-0"
    >
   <div
  className="
    relative
    w-full
    max-w-[325px]
    overflow-hidden
    rounded-xl
    border
    border-pink-200
    bg-pink-50
    p-2.5
    shadow-md
    sm:max-w-[360px]
    sm:p-3
  "
>
  {/* Header */}
  <div className="mb-2 text-center">
    <h3 className="text-base font-extrabold leading-tight text-orange-950 sm:text-lg">
      Admission Enquiry
    </h3>

    <p className="text-[9px] font-medium text-orange-900/60 sm:text-[10px]">
      We will contact you shortly
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-1.5">

    {/* Full Name + Mobile */}
    <div className="grid grid-cols-2 gap-2">

      {/* Full Name */}
      <div>
        <label className="mb-0.5 block text-[10px] font-bold text-gray-900">
          Full Name <span className="text-red-600">*</span>
        </label>

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          type="text"
          placeholder="Enter your name"
          className="
            h-8
            w-full
            rounded-md
            border
            border-gray-300
            bg-white
            px-2
            text-[11px]
            text-gray-900
            outline-none
            placeholder:text-gray-400
            focus:border-orange-400
            focus:ring-1
            focus:ring-orange-200
          "
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="mb-0.5 block text-[10px] font-bold text-gray-900">
          Mobile <span className="text-red-600">*</span>
        </label>

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          type="tel"
          inputMode="numeric"
          placeholder="Mobile number"
          className="
            h-8
            w-full
            rounded-md
            border
            border-gray-300
            bg-white
            px-2
            text-[11px]
            text-gray-900
            outline-none
            placeholder:text-gray-400
            focus:border-orange-400
            focus:ring-1
            focus:ring-orange-200
          "
        />
      </div>

    </div>

    {/* Email */}
    <div>
      <label className="mb-0.5 block text-[10px] font-bold text-gray-900">
        Email
      </label>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email address"
        className="
          h-8
          w-full
          rounded-md
          border
          border-gray-300
          bg-white
          px-2
          text-[11px]
          text-gray-900
          outline-none
          placeholder:text-gray-400
          focus:border-orange-400
          focus:ring-1
          focus:ring-orange-200
        "
      />
    </div>

    {/* Select Class */}
    <div>
      <label className="mb-0.5 block text-[10px] font-bold text-gray-900">
        Select Class <span className="text-red-600">*</span>
      </label>

      <select
        name="className"
        value={formData.className}
        onChange={handleChange}
        required
        className="
          h-8
          w-full
          rounded-md
          border
          border-gray-300
          bg-white
          px-2
          text-[11px]
          text-gray-900
          outline-none
          focus:border-orange-400
          focus:ring-1
          focus:ring-orange-200
        "
      >
        <option value="">Select Class</option>
        <option value="Playgroup">Playgroup</option>
        <option value="Nursery">Nursery</option>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
        <option value="Higher Secondary Science">
          Higher Secondary Science
        </option>
      </select>
    </div>

    {/* Message */}
    <div>
      <label className="mb-0.5 block text-[10px] font-bold text-gray-900">
        Message
      </label>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={1}
        placeholder="Write your enquiry..."
        className="
          h-9
          w-full
          resize-none
          rounded-md
          border
          border-gray-300
          bg-white
          px-2
          py-1.5
          text-[11px]
          text-gray-900
          outline-none
          placeholder:text-gray-400
          focus:border-orange-400
          focus:ring-1
          focus:ring-orange-200
        "
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="
        h-8
        w-full
        rounded-md
        bg-orange-600
        text-xs
        font-extrabold
        text-white
        shadow-sm
        transition
        hover:bg-orange-700
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {loading ? "Sending..." : "Submit"}
    </button>

    {/* Success */}
    {success && (
      <div
        className="
          rounded-md
          bg-green-50
          px-2
          py-1
          text-center
          text-[9px]
          font-semibold
          text-green-700
        "
      >
        ✅ Enquiry sent successfully!
      </div>
    )}

  </form>
</div>
    </motion.div>
  );
}