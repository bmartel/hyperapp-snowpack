import config from '@martel/hyperapp-scripts-snowpack';

export default {
  ...config,
  optimize: {
    entrypoints: 'auto',
    bundle: true,
    treeshake: true,
    minify: true,
    target: 'es2018',
  },
  plugins: [
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
  ],
};
