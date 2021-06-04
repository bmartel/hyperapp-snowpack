import config from '@martel/hyperapp-scripts-snowpack';

export default {
  ...config,
  plugins: [
    ...config.plugins,
    [
      '@snowpack/plugin-build-script',
      { cmd: 'postcss', input: ['.css'], output: ['.css'] },
    ],
  ],
};
