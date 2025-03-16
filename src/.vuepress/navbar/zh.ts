import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "入门教程",
    icon: "book",
    prefix: "/beginner/",
    children: [
      "introduction",
      {
        text: "酒馆部署",
        icon: "lightbulb",
        link: "sillytavern/"
      },
      {
        text: "Clewd 部署",
        icon: "ri:claude-fill",
        link: "clewd/",
      },
    ],  
  }, {
    text: "进阶教程",
    icon: "grommet-icons:search-advanced",
    prefix: "/professional/",
    children: [
      {
        text: "占位",
        icon: "code",
        "link": "placeholder/",
      }
    ],
  }
]);