const { defaultTheme } = require("@vuepress/theme-default");
const { pwaPlugin } = require("@vuepress/plugin-pwa");

module.exports = {
  lang: "zh-CN",
  title: "程序员回春术",
  description: "程序员回春术",
  base: "/body-rejuvenation/",
  head: [
    ["link", { rel: "icon", href: "/body-rejuvenation/logo.png" }],
    [
      "link",
      { rel: "manifest", href: "/body-rejuvenation/manifest.webmanifest" },
    ],
    ["script", { src: "/body-rejuvenation/reg.sw.js" }],
  ],
  theme: defaultTheme({
    repo: "https://github.com/lecepin/body-rejuvenation",
    logo: "/logo.png",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "物理疗法", link: "/fitness/" },
      { text: "食补", link: "/diet/" },
    ],
    sidebar: {
      "/guide/": [
        {
          // text: "指南",
          children: [
            "/guide/README.md",
            "/guide/sleep/README.md",
            "/guide/kidney/README.md",
            "/guide/control-inflammation/README.md",
            "/guide/16h-fasting/README.md",
          ],
        },
      ],
      "/diet/": [
        {
          // text: "食补",
          children: [
            "/diet/README.md",
            "/diet/肾虚腰痛.md",
            "/diet/早衰.md",
            "/diet/遗精.md",
          ],
        },
      ],
      "/fitness/": [
        {
          // text: "物理疗法",
          children: [
            "/fitness/README.md",
            "/fitness/PC.md",
            "/fitness/臀肌.md",
          ],
        },
      ],
    },
  }),
  plugins: [
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
};
