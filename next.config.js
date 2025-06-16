/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Ensure proper output for production deployment
  output: 'standalone',
  // Add experimental features for better production stability
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14+
  },
  // Optimize for production
  swcMinify: true,
  // Handle potential module resolution issues
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle potential module resolution issues in production
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
}

module.exports = nextConfig