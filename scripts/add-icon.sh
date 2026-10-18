#!/usr/bin/env bash
# Copy Font Awesome icons into src/icons so <Icon name="..."> can use them.
#   bun run icon wrench bolt            # thin style (default)
#   STYLE=light bun run icon wrench     # any style folder: thin, light, regular, solid, brands, sharp-thin...
# Only the icons you add end up in the repo, never the whole Font Awesome package.
set -euo pipefail
FA_DIR="${FA_DIR:-$HOME/Desktop/Axle Studio/Font Awesome Icons 7.3.1/fontawesome-pro-7.3.1-web/svgs}"
STYLE="${STYLE:-thin}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/src/icons"
[ $# -gt 0 ] || { echo "usage: bun run icon <name> [name...]"; exit 1; }
mkdir -p "$DEST"
for name in "$@"; do
  src="$FA_DIR/$STYLE/$name.svg"
  if [ -f "$src" ]; then cp "$src" "$DEST/$name.svg" && echo "added $name ($STYLE)"; else echo "not found: $STYLE/$name.svg"; fi
done
