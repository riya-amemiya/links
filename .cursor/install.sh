#!/usr/bin/env bash
# Idempotent Cloud Agent install script for the `links` site.
# Runs after the repository is checked out. Safe to run repeatedly.
set -euo pipefail

# Pin Bun for the Cloud Agent environment.
BUN_VERSION="1.3.6"
export BUN_INSTALL="${HOME}/.bun"
export PATH="${BUN_INSTALL}/bin:${PATH}"

# Install the pinned Bun toolchain when it is missing or the wrong version.
if ! command -v bun >/dev/null 2>&1 || [ "$(bun --version 2>/dev/null || true)" != "${BUN_VERSION}" ]; then
  curl -fsSL https://bun.sh/install | bash -s "bun-v${BUN_VERSION}"
fi

# Expose Bun on the default PATH so `start`/`terminals` (non-login shells) find it.
if command -v sudo >/dev/null 2>&1; then
  sudo ln -sf "${BUN_INSTALL}/bin/bun" /usr/local/bin/bun
  sudo ln -sf "${BUN_INSTALL}/bin/bunx" /usr/local/bin/bunx
fi

# Install JS dependencies from the committed lockfile.
bun install

# NEXT_PUBLIC_URL is the public canonical site URL (not a secret). It is only
# required for production builds/serve (build, start, e2e); the dev server falls
# back to http://localhost:3000. Seed a local .env once without clobbering edits.
if [ ! -f .env ]; then
  echo "NEXT_PUBLIC_URL=https://riya-amemiya-links.tokidux.com" > .env
fi

echo "Install complete: $(bun --version), node $(node --version)"
