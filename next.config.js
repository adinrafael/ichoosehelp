/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Optional: allow external image domains
  },
};

module.exports = nextConfig;
