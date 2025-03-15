import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Claude Tutorials",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "API Reference",
      icon: "code",
      prefix: "api/",
      children: "structure",
    },
  ],
});