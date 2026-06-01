const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, '../public/adam-city-tours-logo.png');
const output = path.join(__dirname, '../public/adam-city-tours-logo.png');

async function removeBg() {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8Array(data);

  // Threshold: pixels close to white become transparent
  const threshold = 240;

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];

    if (r >= threshold && g >= threshold && b >= threshold) {
      pixels[i + 3] = 0; // fully transparent
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels },
  })
    .png()
    .toFile(output + '.tmp.png');

  const fs = require('fs');
  fs.renameSync(output + '.tmp.png', output);

  console.log(`Done — ${width}x${height}, background removed.`);
}

removeBg().catch(console.error);
