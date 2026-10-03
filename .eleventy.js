const CleanCSS = require("clean-css");
const { minify: terserMinify } = require("terser");
const htmlmin = require("html-minifier-terser");
const fs = require("fs");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("posts_vi", (c) =>
    c.getFilteredByGlob("src/posts/vi/**/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("posts_en", (c) =>
    c.getFilteredByGlob("src/posts/en/**/*.md").sort((a, b) => b.date - a.date)
  );

  const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  eleventyConfig.addFilter("readableDate", (date, lang) => {
    const d = new Date(date);
    const day = d.getUTCDate();
    const month = d.getUTCMonth();
    const year = d.getUTCFullYear();
    if (lang === "en") return `${MONTHS_EN[month]} ${day}, ${year}`;
    return `${String(day).padStart(2, "0")}/${String(month + 1).padStart(2, "0")}/${year}`;
  });

  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Minify HTML output (also minifies inline CSS/JS)
  eleventyConfig.addTransform("htmlmin", async function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      });
    }
    return content;
  });

  // Build event: minify CSS and JS after build
  eleventyConfig.on("eleventy.after", async () => {
    const outDir = "_site/assets";

    // Minify CSS
    const cssPath = path.join(outDir, "css/main.css");
    if (fs.existsSync(cssPath)) {
      const raw = fs.readFileSync(cssPath, "utf8");
      const min = new CleanCSS({ level: 2 }).minify(raw);
      fs.writeFileSync(cssPath, min.styles);
      console.log(`[perf] CSS: ${Math.round(raw.length/1024)}KB → ${Math.round(min.styles.length/1024)}KB`);
    }

    // Minify JS
    const jsPath = path.join(outDir, "js/main.js");
    if (fs.existsSync(jsPath)) {
      const raw = fs.readFileSync(jsPath, "utf8");
      const min = await terserMinify(raw, { compress: true, mangle: true });
      fs.writeFileSync(jsPath, min.code);
      console.log(`[perf] JS: ${Math.round(raw.length/1024)}KB → ${Math.round(min.code.length/1024)}KB`);
    }
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
