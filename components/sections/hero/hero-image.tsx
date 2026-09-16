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
          max-w-[360px]
          overflow-hidden
          rounded-2xl
          border
          border-amber-200
          bg-gradient-to-br
          from-amber-50
          via-white
          to-orange-50
          p-3.5
          shadow-xl
          sm:p-4
        "
      >
        {/* Decorative circle */}
        <div
          className="
            absolute
            -right-8
            -top-8
            h-20
            w-20
            rounded-full
            bg-yellow-200/50
          "
        />

        {/* Header */}
        <div className="relative mb-3 text-center">
          <div
            className="
              mx-auto
              mb-1.5
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-orange-100
              text-orange-500
            "
          >
            <Sparkles size={14} />
          </div>

          <h3 className="text-lg font-black leading-tight text-orange-950 sm:text-xl">
            Admission Enquiry
          </h3>

          <p className="mt-0.5 text-[11px] font-medium text-orange-900/60">
            We will contact you shortly
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-2.5">

          {/* Name */}
          <div>
            <label className="mb-0.5 block text-[11px] font-bold text-orange-950/80">
              Full Name <span className="text-orange-600">*</span>
            </label>

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your name"
              className="
                h-9
                w-full
                rounded-lg
                border
                border-amber-200
                bg-white/90
                px-3
                text-xs
                text-orange-950
                outline-none
                placeholder:text-orange-900/35
                focus:border-orange-400
                focus:ring-2
                focus:ring-orange-100
                sm:h-10
                sm:text-sm
              "
            />
          </div>

          {/* Mobile + Email */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="mb-0.5 block text-[11px] font-bold text-orange-950/80">
                Mobile <span className="text-orange-600">*</span>
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
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-amber-200
                  bg-white/90
                  px-2.5
                  text-xs
                  text-orange-950
                  outline-none
                  placeholder:text-orange-900/35
                  focus:border-orange-400
                  focus:ring-2
                  focus:ring-orange-100
                  sm:h-10
                  sm:px-3
                "
              />
            </div>

            <div>
              <label className="mb-0.5 block text-[11px] font-bold text-orange-950/80">
                Email
              </label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                className="
                  h-9
                  w-full
                  rounded-lg
                  border
                  border-amber-200
                  bg-white/90
                  px-2.5
                  text-xs
                  text-orange-950
                  outline-none
                  placeholder:text-orange-900/35
                  focus:border-orange-400
                  focus:ring-2
                  focus:ring-orange-100
                  sm:h-10
                  sm:px-3
                "
              />
            </div>
          </div>

          {/* Class */}
          <div>
            <label className="mb-0.5 block text-[11px] font-bold text-orange-950/80">
              Select Class <span className="text-orange-600">*</span>
            </label>

            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className="
                h-9
                w-full
                rounded-lg
                border
                border-amber-200
                bg-white/90
                px-2.5
                text-xs
                text-orange-950
                outline-none
                focus:border-orange-400
                focus:ring-2
                focus:ring-orange-100
                sm:h-10
                sm:px-3
                sm:text-sm
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
            <label className="mb-0.5 block text-[11px] font-bold text-orange-950/80">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              placeholder="Write your enquiry..."
              className="
                h-12
                w-full
                resize-none
                rounded-lg
                border
                border-amber-200
                bg-white/90
                px-3
                py-2
                text-xs
                text-orange-950
                outline-none
                placeholder:text-orange-900/35
                focus:border-orange-400
                focus:ring-2
                focus:ring-orange-100
                sm:h-14
                sm:text-sm
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
              h-9
              w-full
              items-center
              justify-center
              gap-1.5
              rounded-lg
              bg-orange-500
              text-xs
              font-extrabold
              text-white
              shadow-md
              shadow-orange-200
              transition
              hover:bg-orange-600
              disabled:cursor-not-allowed
              disabled:opacity-70
              sm:h-10
              sm:text-sm
            "
          >
            {loading ? "Sending..." : "Send Enquiry"}

            <Send
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          {/* Success */}
          {success && (
            <div
              className="
                rounded-lg
                bg-green-50
                px-2
                py-1.5
                text-center
                text-[10px]
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