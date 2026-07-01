import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eefcf5",
          100: "#dcf9e8",
          200: "#baf1cf",
          300: "#8fe3b1",
          400: "#61cf8d",
          500: "#34b06f",
          600: "#2d8e5b",
          700: "#256f4a",
          800: "#1d583b",
          900: "#184831",
        },
        sun: {
          50: "#fff8eb",
          100: "#fff0ce",
          200: "#ffe19a",
          300: "#ffc85f",
          400: "#ffb02d",
          500: "#f18f14",
          600: "#c96c10",
          700: "#9d5110",
          800: "#7f4213",
          900: "#673713",
        },
        blush: {
          50: "#fff6f2",
          100: "#ffe8de",
          200: "#ffccb8",
          300: "#ff9f80",
          400: "#ff784f",
          500: "#f05e39",
          600: "#c94b2e",
          700: "#a13b29",
          800: "#833124",
          900: "#6b2922",
        },
        ink: "#0f172a",
        muted: "#64748b",
        surface: "#ffffff",
        panel: "#f8fafc",
        border: "#e2e8f0",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
        glass: "0 10px 30px rgba(15, 23, 42, 0.08)",
        lift: "0 24px 60px rgba(15, 23, 42, 0.12)",
      },
      backgroundImage: {
        "mesh-white":
          "radial-gradient(circle at top left, rgba(121, 147, 255, 0.18), transparent 30%), radial-gradient(circle at top right, rgba(73, 203, 179, 0.14), transparent 25%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "fade-up": "fade-up 0.65s ease-out both",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
