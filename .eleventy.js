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

  // Estimated reading time (~200 wpm)
  eleventyConfig.addFilter("readingTime", (content) => {
    if (!content) return 1;
    const words = String(content).replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
