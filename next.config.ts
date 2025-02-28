import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['somanirealtors.keka.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'somanirealtors.keka.com',
        pathname: '/files/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:id((?!$).*)',  // Match any path except the root
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow'
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        punycode: false
      }
    }
    return config
  }
}

export default nextConfig
