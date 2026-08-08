import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F59E0B",
          foreground: "#1E293B",
        },
        background: "#F8FAFC",
        card: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(30, 64, 175, 0.08)",
        card: "0 2px 16px -2px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;