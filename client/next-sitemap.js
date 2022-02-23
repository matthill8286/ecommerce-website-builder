const excludedPaths = ["/cart", "/checkout", "/account/*"];

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_API_URI,
  generateRobotsTxt: true,
  exclude: excludedPaths + ["/[sitemap]"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: excludedPaths,
      },
    ],
  },
};
