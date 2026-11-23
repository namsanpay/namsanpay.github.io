export default {
  layout: "post.njk",
  eleventyComputed: {
    // draft: true 인 글은 페이지를 만들지 않음
    permalink: (data) => (data.draft ? false : `/board/${data.page.fileSlug}/`),
  },
};
