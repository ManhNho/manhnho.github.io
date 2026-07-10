# manhnho.github.io

Personal cybersecurity blog & portfolio of **Pham Tien Manh (ManhNho)**.
Static [Eleventy](https://www.11ty.dev/) site — Markdown content, no backend, bilingual (EN/VI), auto-deployed to GitHub Pages.

Live: https://manhnho.github.io

## Commands

```bash
npm install
npm run dev                 # local preview at http://localhost:8080
npm run build               # build to _site/
npm run new "Post title"    # scaffold a Vietnamese post in src/posts/vi/
npm run translate           # auto-translate VI posts → EN (add --to-vi for EN → VI)
```

Push to `master` and GitHub Actions builds & deploys automatically.

## Structure

- `src/posts/{vi,en}/` — blog posts (Markdown + front-matter)
- `src/assets/img/posts/` — post images
- `src/_data/site.js` — profile, achievements, certifications
- `src/_data/t.js` — bilingual UI strings
