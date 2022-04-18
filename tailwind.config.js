module.exports = {
  daisyui: {
    themes: [
      {
        rintheme: {
        "primary": "#fbcfe8",       
        "secondary": "#93c5fd",
        "accent": "#a5b4fc",
        "neutral": "#374151",
        "base-100": "#1c1917",
        "info": "#7dd3fc",
        "success": "#99f6e4",
        "warning": "#fef08a",
        "error": "#f87171",
        },
      },
    ],
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
