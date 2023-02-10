/* eslint-disable global-require */
const isNotProduction = process.env.NODE_ENV !== 'production';

const { i18n } = require('./next-i18next.config');

let config = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  i18n,
  output: 'standalone',
  distDir: '_next',
  assetPrefix: isNotProduction ? undefined : '/live-api-openapi-frontweb',
  images: {
    path: '/_next/image',
  },
};

if (isNotProduction) {
  /* eslint-disable import/no-extraneous-dependencies */
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;
