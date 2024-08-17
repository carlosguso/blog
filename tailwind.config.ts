import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "main-dark": "#12001f",
        "main-accent": "#c99dfa",
        "main-light": "#ffffff",
        "main-accent-light": "#6200ee",
      },
    },
  },
  plugins: [],
}
export default config