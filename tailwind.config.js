module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
