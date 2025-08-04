/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://aibenchmarks.net',
  },
};

module.exports = nextConfig;
