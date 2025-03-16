import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Beginner Tutorials",
    icon: "book",
    prefix: "en/beginner/",
    children: [
      "introduction",
      {
        text: "SillyTavern Deployment",
        icon: "lightbulb",
        link: "sillytavern/"
      },
      {
        text: "Clewd Deployment",
        icon: "ri:claude-fill",
        link: "clewd/",
      },
    ],  
  },
  {
    text: "Advanced Tutorials",
    icon: "grommet-icons:search-advanced",
    prefix: "en/professional/",
    children: [
      {
        text: "Placeholder",
        icon: "code",
        link: "placeholder/",
      }
    ],
  }
]);