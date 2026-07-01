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
          50: "#f6f8ff",
          100: "#eef2ff",
          200: "#dde6ff",
          300: "#c6d4ff",
          400: "#9fb5ff",
          500: "#7893ff",
          600: "#5970f3",
          700: "#4457d0",
          800: "#3545a6",
          900: "#2c397f",
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
