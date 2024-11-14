/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        AlegreyaSans: ["Alegreya Sans", "sans-serif"],
        MalgunGothic: ["Malgun Gothic"],
        sans: ["Helvetica", "Arial"],
        suit: ["SUIT-Regular"],
      },
    },
  },
  plugins: [],
};
