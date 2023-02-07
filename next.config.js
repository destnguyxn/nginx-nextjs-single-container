/* eslint-disable global-require */
const isNotProduction = process.env.NODE_ENV !== 'production';

const { i18n } = require('./next-i18next.config');

let config = {
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: false,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  i18n,
  output: 'standalone',
  distDir: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nxas.nexon.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  enabled: process.env.ANALYZE === 'true',
};

if (isNotProduction) {
  /* eslint-disable import/no-extraneous-dependencies */
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;
