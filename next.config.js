/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables Static HTML Export
  images: {
    unoptimized: true, // Required: Static exports do not support dynamic server-side image resizing
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;