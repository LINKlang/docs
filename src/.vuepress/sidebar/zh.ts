import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "入门教程",
      icon: "book",
      collapsible: true,
      prefix: "beginner/",
      children: "structure",  
    }, {
      text: "进阶教程",
      icon: "grommet-icons:search-advanced",
      collapsible: true,
      prefix: "professional/",
      children: "structure",
    }
  ],
});