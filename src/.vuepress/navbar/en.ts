import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Beginner Tutorials",
    icon: "book",
    prefix: "/beginner/",
    children: [
      "introduction",
      {
        text: "SillyTavern Deployment",
        icon: "lightbulb",
        link: "sillytavern/"
      },
      {
        text: "Clewd Deployment",
        icon: "logos:claude-icon",
        link: "clewd/",
      },
    ],  
  },
  {
    text: "Advanced Tutorials",
    icon: "grommet-icons:search-advanced",
    prefix: "/professional/",
    children: [
      {
        text: "Placeholder",
        icon: "code",
        link: "placeholder/",
      }
    ],
  }
]);