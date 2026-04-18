/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: '#000000', // Pure black for Apple feel
        bg1: '#1a1a1a',
        bg2: '#2a2a2a',
        bg3: '#3a3a3a',
        bg4: '#4a4a4a',
        border: '#404040',
        b2: '#555555',
        text: '#ffffff',
        dim: '#a0a0a0',
        muted: '#808080',
        green: '#34c759',
        red: '#ff3b30',
        blue: '#007aff',
        amber: '#ff9500',
        purple: '#af52de',
        cyan: '#5ac8fa',
        teal: '#30d158',
        orange: '#ff9f0a',
        indigo: '#5856d6',
        lime: '#32d74b',
      },
    },
  },
  plugins: [],
}