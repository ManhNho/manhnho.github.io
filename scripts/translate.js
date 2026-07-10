#!/usr/bin/env node
/**
 * Auto-translate Vietnamese posts to English (free, no API key).
 *
 * Usage:
 *   node scripts/translate.js                # translate all VI posts missing an EN counterpart
 *   node scripts/translate.js <vi-file.md>   # translate one specific file
 *   node scripts/translate.js --force        # re-translate even if EN exists
 *
 * Uses the free Google translate endpoint. Front-matter values (title,
 * description) and body prose are translated; code blocks, inline code, URLs,
 * and image paths are preserved.
 */
const fs = require("fs");
const path = require("path");

const VI_DIR = path.join(__dirname, "..", "src", "posts", "vi");
const EN_DIR = path.join(__dirname, "..", "src", "posts", "en");

const FORCE = process.argv.includes("--force");
const fileArg = process.argv.slice(2).find((a) => !a.startsWith("--"));

// Direction: default VI→EN. Pass --to-vi to translate EN→VI instead.
const TO_VI = process.argv.includes("--to-vi");
const SRC_DIR = TO_VI ? EN_DIR : VI_DIR;
const OUT_DIR = TO_VI ? VI_DIR : EN_DIR;
const SRC_LANG = TO_VI ? "en" : "vi";
const OUT_LANG = TO_VI ? "vi" : "en";

async function translateText(text, from = SRC_LANG, to = OUT_LANG) {
  if (!text || !text.trim()) return text;
  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx" +
    `&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`translate HTTP ${res.status}`);
  const data = await res.json();
  return data[0].map((seg) => seg[0]).join("");
}

// Protect code blocks, inline code, links & images from translation.
function protect(md) {
  const store = [];
  const stash = (m) => {
    store.push(m);
    return `${store.length - 1}`;
  };
  const protectedMd = md
    .replace(/```[\s\S]*?```/g, stash) // fenced code
    .replace(/`[^`]+`/g, stash) // inline code
    .replace(/!\[[^\]]*\]\([^)]+\)/g, stash) // images
    .replace(/\]\([^)]+\)/g, stash); // link targets (keep link text translatable)
  return { protectedMd, store };
}
function restore(md, store) {
  return md.replace(/(\d+)/g, (_, i) => store[Number(i)]);
}

async function translateMarkdownBody(body) {
  const { protectedMd, store } = protect(body);
  // Translate line by line to keep markdown structure intact.
  const lines = protectedMd.split("\n");
  const out = [];
  for (const line of lines) {
    if (!line.trim() || /^[\d\s#>*\-\d.]*$/.test(line) === false) {
      out.push(await translateText(line));
    } else {
      out.push(line);
    }
  }
  return restore(out.join("\n"), store);
}

function parseFrontMatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { fm: {}, fmRaw: "", body: raw };
  return { fmRaw: m[1], body: m[2] };
}

async function translateFile(srcPath) {
  const raw = fs.readFileSync(srcPath, "utf8");
  const { fmRaw, body } = parseFrontMatter(raw);

  // Translate title & description values inside front-matter.
  let outFm = fmRaw;
  const titleMatch = fmRaw.match(/title:\s*"?(.+?)"?\s*$/m);
  const descMatch = fmRaw.match(/description:\s*"?(.+?)"?\s*$/m);
  if (titleMatch) {
    const t = await translateText(titleMatch[1]);
    outFm = outFm.replace(titleMatch[0], `title: "${t.replace(/"/g, "'")}"`);
  }
  if (descMatch) {
    const d = await translateText(descMatch[1]);
    outFm = outFm.replace(descMatch[0], `description: "${d.replace(/"/g, "'")}"`);
  }
  outFm = outFm.replace(/^lang:.*$/m, "").trim();

  const outBody = await translateMarkdownBody(body);
  const out = `---\n${outFm}\n---\n${outBody}`;

  const base = path.basename(srcPath).replace(/chao-mung|chào-mừng/gi, "welcome");
  const outPath = path.join(OUT_DIR, base);
  fs.writeFileSync(outPath, out, "utf8");
  console.log(`✓ ${path.basename(srcPath)} → ${OUT_LANG}/${path.basename(outPath)}`);
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  let files;
  if (fileArg) {
    files = [path.resolve(fileArg)];
  } else {
    files = fs
      .readdirSync(SRC_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => path.join(SRC_DIR, f));
  }
  for (const f of files) {
    const outGuess = path.join(OUT_DIR, path.basename(f).replace(/chao-mung|chào-mừng/gi, "welcome"));
    if (!FORCE && !fileArg && fs.existsSync(outGuess)) {
      console.log(`- skip ${path.basename(f)} (${OUT_LANG} exists)`);
      continue;
    }
    try {
      await translateFile(f);
    } catch (e) {
      console.error(`✗ ${path.basename(f)}: ${e.message}`);
    }
  }
})();
