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
          50: "#f5f1ff",
          100: "#e7ddff",
          200: "#d0bcff",
          300: "#b38eff",
          400: "#9365ff",
          500: "#7a44ff",
          600: "#6332e6",
          700: "#4f27bd",
          800: "#3d1f91",
          900: "#2f186f",
        },
        sun: {
          50: "#fff4db",
          100: "#ffe7ad",
          200: "#ffd873",
          300: "#ffc546",
          400: "#ffb31d",
          500: "#f89109",
          600: "#d87406",
          700: "#ad5808",
          800: "#8a450d",
          900: "#6c360f",
        },
        blush: {
          50: "#fff3f1",
          100: "#ffe1db",
          200: "#ffc2b6",
          300: "#ff957f",
          400: "#ff6e56",
          500: "#f84c36",
          600: "#dd3728",
          700: "#b82a22",
          800: "#91221f",
          900: "#731d1e",
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
