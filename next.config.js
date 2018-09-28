const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

module.exports = {
  exportPathMap: () => {
    const titles = fs.readdirSync(path.resolve(__dirname, "posts/"), "utf-8");
    const posts = titles.map(title => {
      const content = fs.readFileSync(
        path.resolve(__dirname, `posts/${title}`),
        "utf-8"
      );
      return {
        title: title.slice(0, title.length - 3),
        content: content,
      };
    });

    const routes = posts.reduce((acc, { title, content }) => {
      Object.assign({}, acc, {
        [`/post/${title}`]: {
          page: "/post",
          query: { content: content }
        }
      });
    }, {});

    return {
      "/": { page: "/page", query: { posts: posts } },
      "/about": { page: "/about" },
      ...routes
    };
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.node = { fs: "empty" };
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === "babel-loader") {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    // Important: return the modified config
    return config;
  }
};
