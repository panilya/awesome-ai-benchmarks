/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/awesome-ai-benchmarks' : '',
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS ? '/awesome-ai-benchmarks' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  env: {
    SITE_URL: process.env.GITHUB_ACTIONS
      ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io/${process.env.GITHUB_REPOSITORY?.split('/')[1] || 'awesome-ai-benchmarks'}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  },
};

module.exports = nextConfig;
