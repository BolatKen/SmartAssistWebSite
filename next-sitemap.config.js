/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://smartassist.kz', // замени на свой домен
  generateRobotsTxt: true, // автоматически сгенерирует robots.txt
  sitemapSize: 7000, // при необходимости разбивает sitemap
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
};
