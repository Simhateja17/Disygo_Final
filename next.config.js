/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    // Enable image optimization
    formats: ['image/webp', 'image/avif'],
    // Configure lazy loading behavior
    loader: 'default',
    // Enable blur placeholder for lazy loaded images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable image optimization
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      }
    ]
  },
  // Ensure proper output for production deployment
  output: 'standalone',
  // Enable experimental features for better performance
  experimental: {
    // Removed experimental features that may cause build issues
    // Optimize server-side bundle
    serverComponentsExternalPackages: ['@splinetool/react-spline', '@splinetool/runtime']
  },
  // Optimize for production
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  // Handle potential module resolution issues
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Performance optimizations
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          spline: {
            test: /[\\/]node_modules[\\/]@splinetool[\\/]/,
            name: 'spline',
            chunks: 'all',
            priority: 10,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'all',
            priority: 10,
          }
        }
      }
    }

    // Handle potential module resolution issues in production
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    // Bundle analyzer in development
    if (!dev && !isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.ANALYZE': JSON.stringify(process.env.ANALYZE)
        })
      )
    }

    return config;
  },
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</fonts/Ndot-57-Aligned.otf>; rel=preload; as=font; type=font/otf; crossorigin, <https://prod.spline.design>; rel=preconnect, <https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode>; rel=preload; as=fetch; crossorigin',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Redirects for SEO optimization
  async redirects() {
    return []
  },
  // Environment variables for performance monitoring
  env: {
    PERFORMANCE_MONITORING: process.env.NODE_ENV === 'development' ? 'true' : 'false',
  },
  // Production optimizations
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig