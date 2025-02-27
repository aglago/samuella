// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    // Tailwind CSS v4 uses a simpler content configuration
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    
    // Theme configuration is similar but with some v4 optimizations
    theme: {
      extend: {
        colors: {
          primary: "#333333",
          secondary: "#666666",
          accent: "#888888",
          light: "#f5f5f5",
          dark: "#1a1a1a",
        },
        fontFamily: {
          sans: ["var(--font-inter)", "sans-serif"],
          mono: ["var(--font-roboto-mono)", "monospace"],
        },
      },
    },
    
    // Tailwind CSS v4 no longer uses PostCSS plugins
    // Instead, it uses a simpler direct mode by default
    plugins: [],
  };
  