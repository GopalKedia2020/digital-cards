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