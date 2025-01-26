/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: '#4CAF50', // Green for agriculture theme
        secondary: '#FFC107', // Yellow for accents
        background: '#F9F9F9', // Light background
        text: '#333333', // Dark text

      },
    },
  },
  plugins: [],
};
