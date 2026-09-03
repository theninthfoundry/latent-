/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "assets.codepen.io",
      },
      {
        protocol: "https",
        hostname: "skiper-ui.com",
      },
    ],
  },
};

export default nextConfig;
