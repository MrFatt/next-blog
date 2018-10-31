const fs = require("fs");
const path = require("path");
const summary = require("./summary.json");

module.exports = {
  exportPathMap: () => {
    const postRoutes = summary.posts.reduce(
      (acc, { title }) =>
        Object.assign({}, acc, {
          [`/post/${title}`]: {
            page: "/post",
            query: { title }
          }
        }),
      {}
    );

    const pageCount = Math.ceil(summary.posts.length / 5);
    const pageRouters = Array.from(Array(pageCount).keys(), x => x + 1).reduce(
      (acc, cur) =>
        Object.assign(acc, {
          [`/page/${cur}`]: {
            page: "/page",
            query: { cur, pageCount }
          }
        }),
      {}
    );

    const { tags } = summary;

    const tagsRouter = tags.reduce((acc, { name }) => 
      Object.assign({}, acc, {
        [`/page/${name}`]: {
          page: "/page",
          query: { tag: name }
        }
      }), {});


    setTimeout(() => {}, 10000);
    return {
      "/": { page: "/page", query: { cur: 1, pageCount } },
      "/about": { page: "/about" },
      ...postRoutes,
      ...pageRouters,
      ...tagsRouter
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
    config.module.rules.push({
      test: [/\.md$/],
      loader: require.resolve("raw-loader")
    });
    // Important: return the modified config
    return config;
  }
};
