/**
 * Re-encode hero background video for web (smaller MP4, fast start, no audio).
 * Run: npm run compress:hero
 */
const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const projectRoot = path.join(__dirname, "..");
const input = path.join(projectRoot, "public", "chafwawn (1).mp4");
const outDir = path.join(projectRoot, "public", "videos");
const output = path.join(outDir, "hero-morocco.mp4");

if (!fs.existsSync(input)) {
  console.error("Missing input:", input);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const args = [
  "-y",
  "-i",
  input,
  "-c:v",
  "libx264",
  "-crf",
  "28",
  "-preset",
  "medium",
  "-vf",
  "scale='min(1280,iw)':-2",
  "-movflags",
  "+faststart",
  "-an",
  output,
];

console.log("Encoding hero video →", path.relative(projectRoot, output));
const r = spawnSync(ffmpegPath, args, { stdio: "inherit" });
if (r.status !== 0) {
  process.exit(r.status ?? 1);
}

const before = fs.statSync(input).size;
const after = fs.statSync(output).size;
console.log(
  `Done. ${(before / 1e6).toFixed(1)} MB → ${(after / 1e6).toFixed(1)} MB (${((1 - after / before) * 100).toFixed(0)}% smaller)`
);
