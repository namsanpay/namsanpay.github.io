export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.ignores.add("src/posts/_*.md");
  eleventyConfig.addFilter("won", (n) => Number(n).toLocaleString("ko-KR") + "원");
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));

  // 게시글: src/posts 폴더의 .md 파일 (파일명이 _ 로 시작하면 제외)
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("src/posts/*.md")
      .filter((p) => !p.page.inputPath.split("/").pop().startsWith("_"))
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("ymd", (d) => {
    const dt = new Date(d);
    const p = (n) => String(n).padStart(2, "0");
    return `${dt.getFullYear()}.${p(dt.getMonth() + 1)}.${p(dt.getDate())}`;
  });
  eleventyConfig.addFilter("iso", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("excerpt", (html = "") =>
    html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 120)
  );
  eleventyConfig.addFilter("prevNext", (posts, url) => {
    const i = posts.findIndex((p) => p.url === url);
    return { newer: i > 0 ? posts[i - 1] : null, older: i >= 0 && i < posts.length - 1 ? posts[i + 1] : null };
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
