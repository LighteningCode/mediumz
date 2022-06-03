/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['miro.medium.com', 'cdn-static-1.medium.com', 'images.unsplash.com','localhost:8081'],
  },
}

module.exports = nextConfig
