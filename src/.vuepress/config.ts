import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Claude - 奶油泡芙",
      description: "Claude AI 大语言模型AI聊天中文社区",
    },
    "/en/": {
      lang: "en-US",
      title: "Claude - 奶油泡芙",
      description: "Chinese community for Claude AI Chat",
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  theme,
});