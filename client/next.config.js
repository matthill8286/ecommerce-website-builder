const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withAtomicUI = require("next-transpile-modules")([
  "@matthill8286/atomic-ui",
  "@matthill8286/atomic-icon-library",
]);

module.exports = withAtomicUI(
  withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ["en", "fr"],
      defaultLocale: "en",
    },
    async redirects() {
      return [
        {
          source: "/",
          destination: "/en-GB",
          permanent: false,
        },
      ];
    },
    experimental: {
      reactRoot: true,
    },
  })
);
