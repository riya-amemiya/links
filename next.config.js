/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputFileTracingExcludes: {
      "*": [
        "node_modules/@swc/core-linux-x64-gnu",
        "node_modules/@swc/core-linux-x64-musl",
        "node_modules/@esbuild/linux-x64",
      ],
    },
    webpackBuildWorker: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async headers() {
    return process.env.NODE_ENV === "production"
      ? [
          {
            // 全てのパスに Security Headers を適用する
            source: "/(.*)",
            headers: [
              {
                key: "Content-Security-Policy",
                value:
                  "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' static.cloudflareinsights.com *.pagespeed-mod.com *.google-analytics.com *.googletagmanager.com; img-src * data:; style-src 'self' 'unsafe-inline'; connect-src *.google-analytics.com;",
              },
              {
                key: "Permissions-Policy",
                value: "camera=(), microphone=(), geolocation=()",
              },
              {
                key: "Access-Control-Allow-Origin",
                value: "same-origin",
              },
            ],
          },
        ]
      : [];
  },
};
module.exports = nextConfig;
