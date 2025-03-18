# ベースイメージとしてBunを使用
FROM oven/bun:1 AS builder

# 作業ディレクトリを設定
WORKDIR /app

# パッケージマネージャーファイルをコピー
COPY package.json bun.lock ./

# 依存関係をインストール
RUN bun install --frozen-lockfile

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN bun run build

# 本番環境用イメージ
FROM oven/bun:1-slim AS runner

WORKDIR /app

# 本番環境変数を設定
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Next.js standalone出力をコピー
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# アプリケーションユーザーを作成
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs \
    && chown -R nextjs:nodejs /app

# セキュリティのため非root userとして実行
USER nextjs

# ポートを公開
EXPOSE 3000

# 環境変数でホストを設定
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# アプリケーションを起動（Bunを使用）
CMD ["bun", "server.js"]
