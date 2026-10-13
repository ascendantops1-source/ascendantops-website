import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#FFFFFF',
        'brand-dark': '#F4F8FA',
        'brand-cyan': '#00A9CC',
        'brand-warm': '#00A9CC',
        'brand-warm-soft': '#65D4E8',
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Arial", "sans-serif"],
      },
      borderRadius: {
        'card': '1rem',
        'card-lg': '1.25rem',
      },
      boxShadow: {
        'warm-cta': '0 10px 28px -14px rgba(0, 169, 204, 0.28)',
        'soft-card': '0 16px 40px -18px rgba(16, 29, 44, 0.18)',
      },
    },
  },
  plugins: [],
};
export default config;
