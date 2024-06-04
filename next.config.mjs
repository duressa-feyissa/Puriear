/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puriear.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
