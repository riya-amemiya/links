# 本番環境用イメージのみ
FROM oven/bun:1-slim

WORKDIR /app

# package.jsonをコピー
COPY package.json bun.lock ./

# 本番用の依存関係のみインストール
RUN bun install --production

# ビルド済みの成果物をコピー
COPY .next/ ./.next/
COPY public ./public

# 環境変数を設定
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# package.jsonの「start」スクリプトを実行
CMD ["bun", "run", "start"]