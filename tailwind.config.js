/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4A90E2",
        "Secondary-color": "#D5E1DF",
        "accent-color-1": "#F5A623", 
        "accent-color-2": "#7ED321",
        "Text-color": "#333333" ,
      },
    },
  },
  plugins: [],
};
