const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProduction ? "/news-homepage" : undefined,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
