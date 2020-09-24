module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
