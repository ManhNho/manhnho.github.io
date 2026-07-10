#!/usr/bin/env node
/** Create a new Vietnamese post scaffold. Usage: npm run new "Tiêu đề bài viết" */
const fs = require("fs");
const path = require("path");

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Cần tiêu đề. Ví dụ: npm run new "Khai thác IDOR trên API"');
  process.exit(1);
}

const slug = title
  .normalize("NFD")
  .replace(/[̀-ͯ]/g, "")
  .replace(/đ/gi, "d")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const now = new Date();
const date = now.toISOString().slice(0, 10);
const file = path.join(__dirname, "..", "src", "posts", "vi", `${date}-${slug}.md`);

if (fs.existsSync(file)) {
  console.error(`File đã tồn tại: ${file}`);
  process.exit(1);
}

const content = `---
title: "${title.replace(/"/g, "'")}"
date: ${date}
description: "Mô tả ngắn cho bài viết."
tags_list: ["tag1"]
---

Nội dung bài viết bắt đầu ở đây...

## Phần đầu tiên

Chèn ảnh: ![mô tả](/assets/img/posts/ten-anh.png)
`;

fs.writeFileSync(file, content, "utf8");
console.log(`✓ Đã tạo: ${path.relative(process.cwd(), file)}`);
console.log(`  Sau khi viết xong, chạy: npm run translate`);
