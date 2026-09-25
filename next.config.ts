import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/get-code", destination: "/", permanent: true },
      { source: "/intern-path.zip", destination: "/", permanent: true },
    ]
  },
};

export default nextConfig;
