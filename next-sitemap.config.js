/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://kanadoc.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  exclude: ["/admin/*", "/login", "/api/*"],
};
