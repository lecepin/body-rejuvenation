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
    sidebar: [
      {
        text: "起始",
        link: "/",
      },

      {
        text: "睡眠",
        link: "/sleep/",
      },
    ],
  }),
};
