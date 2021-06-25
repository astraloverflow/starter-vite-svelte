module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./src/**/*.{html,js,ts,svelte}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
