// Auto-lists the POV gallery images so new uploads appear without editing code.
// Drop more jpgs into src/assets/img/gallery/ and rebuild — they get picked up.
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../assets/img/gallery");
let files = [];
try {
  files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();
} catch (e) {
  files = [];
}

module.exports = files.map((f) => "/assets/img/gallery/" + f);
