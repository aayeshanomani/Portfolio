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
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#94a3b8',
            h1: {
              color: '#38bdf8',
              fontWeight: '700',
            },
            h2: {
              color: '#38bdf8',
              fontWeight: '600',
              marginTop: '2em',
            },
            h3: {
              color: '#38bdf8',
              fontWeight: '600',
            },
            strong: {
              color: '#38bdf8',
            },
            a: {
              color: '#38bdf8',
              '&:hover': {
                color: '#94a3b8',
              },
            },
            code: {
              color: '#38bdf8',
              backgroundColor: 'rgba(31, 41, 55, 0.5)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              color: '#94a3b8',
              borderLeftColor: '#38bdf8',
              backgroundColor: 'rgba(31, 41, 55, 0.3)',
              fontStyle: 'normal',
            },
          },
        },
      },
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
  plugins: [require('@tailwindcss/typography')],
};
