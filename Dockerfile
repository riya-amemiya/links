# 本番環境用イメージのみ
FROM oven/bun:1-slim

WORKDIR /app

# ビルド済みの成果物をコピー
COPY .next/standalone ./
COPY public ./public
COPY .next/static ./.next/static

# 環境変数を設定
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# アプリケーションを起動
CMD ["bun", "server.js"]