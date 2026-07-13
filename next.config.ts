import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/partner",
        destination: "/partners",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
