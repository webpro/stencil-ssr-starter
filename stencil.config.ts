import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  namespace: 'my-app',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null
    },
    {
      type: 'dist'
    }
  ]
};
