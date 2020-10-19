module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
