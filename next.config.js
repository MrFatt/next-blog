
module.exports = {

  exportPathMap: () => {
    return {
      "/": { page: "/page" },
      "/about": { page: "/about" },
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
}
