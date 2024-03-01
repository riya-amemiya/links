import MillionCompiler from "@million/lint";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  // 画像最適化の設定
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
    // 本番環境ではconsole.logを削除する
    removeConsole: process.env.NODE_ENV === "production",
  },
  headers() {
    return process.env.NODE_ENV === "production"
      ? [
          {
            // 全てのパスに Security Headers を適用する
            source: "/(.*)",
            headers: [
              {
                key: "Content-Security-Policy",
                value:
                  "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' static.cloudflareinsights.com *.pagespeed-mod.com *.google-analytics.com *.googletagmanager.com; img-src * data:; style-src 'self' 'unsafe-inline'; connect-src 'self' *.google-analytics.com;",
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
export default MillionCompiler.next()(nextConfig);
