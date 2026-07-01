import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react", "@react-three/drei"],
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
