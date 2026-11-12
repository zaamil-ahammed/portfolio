/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#09090b',
          900: '#0f0f12',
          850: '#141418',
          800: '#1a1a20',
          700: '#26262e',
        },
        accent: {
          DEFAULT: '#9ba4e6',
          light: '#b4bbf2',
          dark: '#7983cf',
          muted: 'rgba(155, 164, 230, 0.12)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'tighter': '-0.04em',
        'tight': '-0.02em',
      },
    },
  },
  plugins: [],
};
