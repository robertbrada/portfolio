/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--rxst-font-sans)"],
        mono: ["var(--rxst-font-mono)"],
        headline: ["SF Pro Display Bold"],
        headline2: ["Satoshi"],
      },
      colors: {
        // primary: "#FCA127",
        // "primary-focus": "#F19417",
        // "primary-content": "#000",
        stakebar: "#6B43EE",
        observatory: "#2FB3A3",
        sdp: "#3A61F9",
        robert: "#2D3748",
        croco: "#34A13C",
        trezor: "#000000",
        duo: "#238CE5",
        eigen: "#150958",
        "text-primary": "#2D3748",
        "text-secondary": "#718096",
        "text-tertiary": "#CBD5E0",
      },
    },
  },
  plugins: [],
};
