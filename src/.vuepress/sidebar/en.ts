import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Beginner Tutorials",
      icon: "book",
      collapsible: true,
      prefix: "beginner/",
      children: "structure",  
    }, {
      text: "Advanced Tutorials",
      icon: "grommet-icons:search-advanced",
      collapsible: true,
      prefix: "professional/",
      children: "structure",
    }
  ],
});