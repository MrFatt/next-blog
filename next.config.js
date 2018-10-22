const fs = require("fs");
const path = require("path");
const summary = require("./summary.json");
module.exports = {
  exportPathMap: () => {
    const routes = summary.titles.reduce((acc, title) => {
      Object.assign({}, acc, {
        [`/post/${title}`]: {
          page: "/post",
          query: { title }
        }
      });
    }, {});

    return {
      "/": { page: "/page" },
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
    config.module.rules.push({
      test: [/\.md$/],
      loader: require.resolve("raw-loader")
    });
    // Important: return the modified config
    return config;
  }
};
