/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0f0f0f',
        primary: { DEFAULT: '#ff5722', foreground: '#ffffff' },
        secondary: { DEFAULT: '#2196f3' },
        muted: { DEFAULT: '#f5f5f5', foreground: '#757575' },
        border: '#e0e0e0'
      }
    }
  },
  plugins: []
}