/**
 * Turn matte black fills in `public/adam-city-tours-logo.png` into brand navy (#0F3568),
 * keep metallic gold-ish pixels (warm highlights) intact.
 *
 * Usage: node scripts/recolor-logo-navy.cjs
 */

const sharp = require("sharp");
const path = require("path");

const NAVY_R = 15;
const NAVY_G = 53;
const NAVY_B = 104;

const logoPath = path.join(__dirname, "..", "public", "adam-city-tours-logo.png");

function looksLikeWarmGold(r, g, b) {
  /* Gold / bronze fringe: relatively high warm channels */
  if (r > 138 && g > 95 && b < 118) return true;
  if (r > 120 && g > 100 && b < 105 && r - b > 35) return true;
  return false;
}

function shouldRecolorDark(r, g, b, a) {
  if (a < 28) return false;
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  /* Solid black / charcoal body */
  if (lum < 88) return true;
  /* Dark neutrals outside gold range */
  if (lum < 118 && !looksLikeWarmGold(r, g, b) && r + g + b < 320) return true;
  return false;
}

async function main() {
  const input = sharp(logoPath).ensureAlpha();
  const { data, info } = await input.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.from(data);

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = channels >= 4 ? data[i + 3] : 255;

    if (shouldRecolorDark(r, g, b, a) && !looksLikeWarmGold(r, g, b)) {
      out[i] = NAVY_R;
      out[i + 1] = NAVY_G;
      out[i + 2] = NAVY_B;
    }
  }

  await sharp(out, {
    raw: {
      width,
      height,
      channels,
    },
  })
    .png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
    .toFile(logoPath + ".tmp");

  const fs = require("fs");
  fs.renameSync(logoPath + ".tmp", logoPath);
  console.log("Updated", logoPath, `(${width}×${height})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
