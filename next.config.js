/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/1/0280/3895/5043/files/Photo-55_6d42b8de-e01a-44c6-b370-860df85f5bce.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.lawrencetownsurfco.com',
        port: '',
        pathname: '/cdn/shop/files/Photo-41_53248fd4-6d6b-4e34-8872-4ec9fd65bc08.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.lawrencetownsurfco.com',
        port: '',
        pathname: '/cdn/shop/files/Photo-52_3b810d13-b316-4f48-b8b5-833e6c28b642.jpg',
      },
    ],
  },
}

module.exports = nextConfig
