const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withDotenv = require('next-runtime-dotenv');

const nextConfig = withBundleAnalyzer(
  withDotenv({
    cssModules: true,
    reactStrictMode: true,
    trailingSlash: true,
    swcMinify: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'style')],
    },
    images: {
      loader: 'akamai',
      path: '/',
      formats: ['image/avif', 'image/webp'],
      domains: ['https://gefeststroi.com'],
    },
    publicRuntimeConfig: {
      NEXT_PUBLIC_ROBOTS_TXT: process.env.NEXT_PUBLIC_ROBOTS_TXT,
    },
  }),
);

module.exports = nextConfig;
