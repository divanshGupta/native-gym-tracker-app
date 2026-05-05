/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  // presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E85D04",
        surface: "#1A1A2E",
        card:    "#16213E",
        muted:   "#6B7280",
      },
    },
  },
  plugins: [],
};
