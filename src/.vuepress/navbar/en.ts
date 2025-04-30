import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Beginner Tutorials",
    icon: "book",
    link: "en/beginner/",
  },
  {
    text: "Advanced Tutorials",
    icon: "grommet-icons:search-advanced",
    link: "en/professional/",
  }, {
    text: "API Tutorial",
    icon: "ant-design:api-outlined",
    link: "en/xiaoshuiapi/",
  }
]);