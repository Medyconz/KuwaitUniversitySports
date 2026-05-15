import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ku: {
          ink: 'oklch(var(--ku-ink) / <alpha-value>)',
          blue: 'oklch(var(--ku-blue) / <alpha-value>)',
          gold: 'oklch(var(--ku-gold) / <alpha-value>)',
          mist: 'oklch(var(--ku-mist) / <alpha-value>)',
          line: 'oklch(var(--ku-line) / <alpha-value>)',
        },
      },
      boxShadow: {
        soft: '0 18px 44px -28px oklch(0.24 0.06 255 / 0.45)',
      },
      fontFamily: {
        sans: ['var(--font-ui)', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
