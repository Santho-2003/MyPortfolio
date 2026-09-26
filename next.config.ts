import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  /* If your GitHub repo name is NOT "username.github.io" (e.g. repo name is "my-portfolio"),
     uncomment the line below and set your repo name: */
  // basePath: "/my-portfolio",
};

export default nextConfig;