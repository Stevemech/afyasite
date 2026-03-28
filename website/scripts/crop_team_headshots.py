#!/usr/bin/env python3
"""Generate square headshots in public/team from Headshot folder originals.

Portrait photos: square crop using full width, slightly biased toward the top
(better for full-body / wide shots). Landscape: centered square.

Angella / Alyse: repo had no files named angella/alyse; we map from form uploads:
  angella.jpg  <- IMG_7622 - Rebecca He.jpg
  alyse.jpg    <- Screenshot Aadya.webp

If a mapping is wrong, replace the source path below or drop files directly into public/team/.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

WEBSITE = Path(__file__).resolve().parents[1]
SRC_DIR = WEBSITE / "Headshot - Photo Upload (File responses)"
OUT_DIR = WEBSITE / "public" / "team"
OUT_SIZE = 800

# (source_filename, output_filename)
JOBS: list[tuple[str, str]] = [
    ("medha pulluru.jpg", "medha.jpg"),
    ("IMG_4667 - Sumita Dantu.jpeg", "sumita.jpg"),
    ("riceheadshot-7254-Edit-Edit - Steve Zhang.jpg", "steve.jpg"),
    ("IMG_7622 - Rebecca He.jpg", "angella.jpg"),
    ("Screenshot+2025-09-28+at+11.30.02 PM - Aadya.webp", "alyse.jpg"),
]


def crop_headshot_square(img: Image.Image) -> Image.Image:
    w, h = img.size
    if h >= w:
        side = w
        left = 0
        max_top = h - side
        top = int(max_top * 0.12) if max_top > 0 else 0
    else:
        side = h
        left = (w - side) // 2
        top = 0
    return img.crop((left, top, left + side, top + side))


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for src_name, out_name in JOBS:
        src = SRC_DIR / src_name
        if not src.is_file():
            print(f"skip (missing): {src_name}")
            continue
        img = Image.open(src).convert("RGB")
        sq = crop_headshot_square(img)
        sq = sq.resize((OUT_SIZE, OUT_SIZE), Image.Resampling.LANCZOS)
        out = OUT_DIR / out_name
        sq.save(out, "JPEG", quality=88, optimize=True)
        print(f"wrote {out.relative_to(WEBSITE)}")


if __name__ == "__main__":
    main()
