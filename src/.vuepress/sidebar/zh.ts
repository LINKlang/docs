import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "Claude 教程",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "API 参考",
      icon: "code",
      prefix: "api/",
      children: "structure",
    },
  ],
});