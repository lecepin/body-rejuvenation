const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  lang: "zh-CN",
  title: "程序员回春术",
  description: "程序员回春术",
  base: "/body-rejuvenation/",
  head: [["link", { rel: "icon", href: "/body-rejuvenation/logo.png" }]],
  theme: defaultTheme({
    repo: "https://github.com/lecepin/body-rejuvenation",
    logo: "/logo.png",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "食补", link: "/diet/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          children: [
            "/guide/README.md",
            "/guide/sleep/README.md",
            "/guide/kidney/README.md",
          ],
        },
      ],
      "/diet/": [
        {
          text: "食补",
          children: ["/diet/README.md", "/diet/肾虚腰痛.md"],
        },
      ],
    },
  }),
};
