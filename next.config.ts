import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,  // Ensure trailing slashes are included in URLs
  basePath: '/cost-per-gram',};

export default nextConfig;
