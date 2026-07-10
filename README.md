# manhnho.github.io

Blog cá nhân về an ninh mạng của **Phạm Tiến Mạnh (ManhNho)** — static site, không backend, không database. Nội dung viết bằng Markdown, hình ảnh commit kèm. Song ngữ Việt/Anh với tự-động-dịch miễn phí.

Live: https://manhnho.github.io

## Công nghệ

- [Eleventy (11ty)](https://www.11ty.dev/) — static site generator
- Giao diện dark hacker-terminal (glitch, grid, scanline), font Space Grotesk + JetBrains Mono
- Deploy tự động qua GitHub Actions → GitHub Pages

## Viết bài mới

### Cách 1 — dùng script (khuyên dùng)

```bash
npm run new "Tiêu đề bài viết của bạn"
```

Lệnh này tạo file `src/posts/vi/YYYY-MM-DD-tieu-de.md` với front-matter sẵn.

### Cách 2 — tạo file thủ công

Tạo file `.md` trong `src/posts/vi/` với front-matter:

```markdown
---
title: "Tiêu đề bài viết"
date: 2026-07-10
description: "Mô tả ngắn hiển thị ở trang blog và thẻ chia sẻ."
tags_list: ["web", "bugbounty"]
---

Nội dung Markdown ở đây...
```

**Chèn ảnh**: bỏ ảnh vào `src/assets/img/posts/` rồi tham chiếu:

```markdown
![mô tả ảnh](/assets/img/posts/ten-anh.png)
```

## Tự động dịch sang tiếng Anh

```bash
npm run translate            # dịch tất cả bài VI chưa có bản EN
npm run translate -- --force # dịch lại toàn bộ (kể cả đã có)
node scripts/translate.js src/posts/vi/bai-cua-ban.md  # dịch 1 file
```

Script giữ nguyên code block, inline code, link và ảnh — chỉ dịch phần chữ. Bản dịch lưu vào `src/posts/en/`. **Nên đọc lại và chỉnh sửa** bản EN cho tự nhiên hơn trước khi commit.

## Chạy local

```bash
npm install
npm run dev      # http://localhost:8080 — tự reload khi sửa file
npm run build    # build ra thư mục _site/
```

## Quy trình xuất bản

```bash
npm run new "Bài viết mới"     # tạo bài tiếng Việt
# ... viết nội dung, thêm ảnh vào src/assets/img/posts/ ...
npm run translate              # sinh bản tiếng Anh
git add . && git commit -m "post: bài viết mới" && git push
```

GitHub Actions sẽ tự build & deploy trong ~1 phút.

## Cập nhật profile / thành tựu

Sửa file `src/_data/site.js` (awards, talks, certs, stats, publications, social links).
Sửa chữ giao diện song ngữ ở `src/_data/t.js`.

## Bật GitHub Pages (chỉ làm 1 lần)

Repo Settings → Pages → **Source: GitHub Actions**.

---

Idea: ManhNho · Design & Coding: SangDQ, ManhNho
