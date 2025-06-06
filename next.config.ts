import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This matches any hostname (use with caution)
      },
    ],
  }
};

export default nextConfig;
