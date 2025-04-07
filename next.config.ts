import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // No comma needed after the last property
  },
  // Other configurations...
};

export default nextConfig;
