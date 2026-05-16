import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#f0f7f4",
          100: "#dceee6",
          200: "#bcddce",
          300: "#8fc4ad",
          400: "#5fa388",
          500: "#3d856c",
          600: "#2d6a56",
          700: "#255546",
          800: "#204539",
          900: "#1b3a30",
          950: "#0e211b",
        },
        charcoal: {
          50: "#f7f7f6",
          100: "#ececea",
          200: "#d6d5d2",
          300: "#b5b3ae",
          400: "#908d86",
          500: "#75726b",
          600: "#5f5c56",
          700: "#4e4b47",
          800: "#43413d",
          900: "#3a3835",
          950: "#1f1e1c",
        },
        sky: {
          mist: "#e8f0f4",
          deep: "#2c4a5e",
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(31, 30, 28, 0.08), 0 2px 8px -2px rgba(31, 30, 28, 0.04)",
        card: "0 8px 32px -8px rgba(31, 30, 28, 0.12)",
        lift: "0 16px 48px -12px rgba(31, 30, 28, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
