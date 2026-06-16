import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vision-texas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

// Cloudflare/OpenNext local-dev bindings. Guarded to `next dev` only: this must
// NOT run during a production build (Vercel or Cloudflare), or the dev platform
// initializer rejects with "write EPIPE" and crashes the build. The `.catch`
// keeps even a dev-time failure from becoming an unhandled rejection.
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare")
    .then((m) => m.initOpenNextCloudflareForDev())
    .catch(() => {});
}
