import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "caelanhuntress.com",
      },
    ],
  },
};

export default nextConfig;
