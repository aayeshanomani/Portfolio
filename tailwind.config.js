/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#64FFDA",
        textPrimary: "#CCD6F6",
        textSecondary: "#8892B0",
        nomad: {
          background: '#0f1117',     // Deep moody blue-gray
          primary: '#1f2937',        // Dark surface (cards, nav)
          accent: '#38bdf8',         // Cyan-blue for buttons/links
          highlight: '#94a3b8',      // Soft light gray-blue text
          terminal: '#16a34a',       // Green for terminal output
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        heading: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px rgba(56, 189, 248, 0.4)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
