import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "入门教程",
    icon: "book",
    link: "/beginner/",
  }, {
    text: "进阶教程",
    icon: "grommet-icons:search-advanced",
    link: "/professional/",
  }, {
    text: "API 教程",
    icon: "ant-design:api-outlined",
    link: "/xiaoshuiapi/",
  }
]);