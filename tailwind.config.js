/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      primary: '#f13a01',
      second: '#febd01',
     },
     backgroundOpacity: ['active'],
     boxShadow: {
        '3xl': '0 15px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      transparent: {
        0: "transparent"
      }
    },
  },
  plugins: [],
};
