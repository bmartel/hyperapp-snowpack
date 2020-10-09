module.exports = (ctx) => ({
  plugins:
    ctx.env === 'production'
      ? [require('tailwindcss'), require('autoprefixer'), require('cssnano')]
      : [require('tailwindcss')],
});
