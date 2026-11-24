import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** App directory — keep Turbopack from picking the parent monorepo lockfile. */
const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
  },
  turbopack: {
    root: appRoot,
  },
};

export default nextConfig;
