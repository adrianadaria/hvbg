import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: '#0290FE',
        grey: '#E2E8F6',
        navy: '#00369D',
        yellow: '#FFCD4E',
      }
    },
  },
  plugins: [],
} satisfies Config;
