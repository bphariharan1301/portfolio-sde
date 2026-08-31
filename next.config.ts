import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps the repo clean — Next otherwise regenerates AGENTS.md / CLAUDE.md.
  agentRules: false,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    // Drops the MUI/emotion dev-only labels from the production bundle.
    emotion: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@mui/material"],
  },
};

export default nextConfig;
