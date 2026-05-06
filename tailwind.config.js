/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // React Native (mobile)
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // React web (add only in web version)
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        accent:       "#7C5CFC",
        "accent-light": "#9B7EFD",
        "accent-subtle": "#EDE8FF",
        "accent-text": "#4B2FCC",

        // Backgrounds (dark mode first — app is dark-first)
        void:         "#141414",   // page bg
        surface:      "#1C1C1E",   // card bg
        elevated:     "#2C2C2E",   // input, elevated card
        "off-white":  "#F5F5F7",   // light mode page bg
        
        // Text
        "text-primary":   "#FFFFFF",
        "text-secondary": "#8E8E93",
        "text-tertiary":  "#636366",
        "text-inverse":   "#141414",

        // Borders
        "border-default": "#2C2C2E",
        "border-strong":  "#3A3A3C",

        // Semantic
        success:  "#22C55E",
        danger:   "#EF4444",
        warning:  "#F59E0B",

        // Muscle group tags
        "tag-chest":  "#EDE8FF",
        "tag-back":   "#E6F9F0",
        "tag-legs":   "#FFF3E0",
        "tag-arms":   "#FFF0F3",
        "tag-core":   "#F0F0F0",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system"],
      },

      borderRadius: {
        xs:   "4px",
        sm:   "8px",
        md:   "12px",    // default card radius
        lg:   "16px",
        xl:   "24px",
        full: "9999px",
      },

      fontSize: {
        "2xs": ["11px", { lineHeight: "16px", letterSpacing: "0.06em" }],
        xs:    ["12px", { lineHeight: "16px" }],
        sm:    ["13px", { lineHeight: "20px" }],
        base:  ["14px", { lineHeight: "22px" }],
        md:    ["16px", { lineHeight: "24px" }],
        lg:    ["20px", { lineHeight: "28px", letterSpacing: "-0.3px" }],
        xl:    ["26px", { lineHeight: "32px", letterSpacing: "-0.5px" }],
      },

      spacing: {
        1:  "4px",
        2:  "8px",
        3:  "12px",
        4:  "16px",
        5:  "20px",
        6:  "24px",
        8:  "32px",
        10: "40px",
        12: "48px",
        16: "64px",
      },
    },
  },
  plugins: [],
};