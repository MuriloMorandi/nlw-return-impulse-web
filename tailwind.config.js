module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          250: "#996DFF",
          500: "#8257E5",
        }
      },
      borderRadius: {
        md:"4px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}