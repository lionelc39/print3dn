export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        card: "var(--card-bg)"
      }
    }
  },
  plugins: [],
}
