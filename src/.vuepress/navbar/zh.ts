import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Claude 教程",
    icon: "book",
    prefix: "/guide/",
    children: [
      {
        text: "使用指南",
        icon: "lightbulb",
        prefix: "usage/",
        children: ["getting-started", "basic-features", "advanced-features"],
      },
      {
        text: "提示词技巧",
        icon: "magic-wand-sparkles",
        prefix: "prompts/",
        children: ["introduction", "techniques", "examples"],
      },
    ],
  },
  {
    text: "API 参考",
    icon: "code",
    link: "/api/",
  },
]);