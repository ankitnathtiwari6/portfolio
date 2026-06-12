/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 3s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "shimmer": "shimmer 2s infinite",
        "scan": "scan 5s linear infinite",
        "scan-line": "scanLine 4s ease-in-out infinite",
        "orbit": "orbit 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 8px rgba(0, 245, 255, 0.3), 0 0 16px rgba(0, 245, 255, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(0, 245, 255, 0.7), 0 0 40px rgba(0, 245, 255, 0.3)",
          },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(25px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        scanLine: {
          "0%":   { top: "-2px", opacity: "0" },
          "5%":   { opacity: "1" },
          "95%":  { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(110px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(110px) rotate(-360deg)" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 12px rgba(0, 245, 255, 0.5), 0 0 24px rgba(0, 245, 255, 0.2)",
        "neon-purple": "0 0 12px rgba(168, 85, 247, 0.5), 0 0 24px rgba(168, 85, 247, 0.2)",
        "glass": "0 4px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      colors: {
        space: {
          950: "#020817",
          900: "#0a1628",
          800: "#0d1f35",
          700: "#132840",
        },
      },
    },
  },
  plugins: [],
};
