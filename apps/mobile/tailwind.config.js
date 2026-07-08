/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ink: "#07100D",
        panel: "#0D1814",
        panel2: "#12221D",
        mint: "#8CFFCB",
        lime: "#B8F35A",
        coral: "#FF7A66",
        gold: "#FFD166",
        muted: "#8EA09A"
      }
    }
  },
  plugins: []
};
