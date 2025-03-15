import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Claude Tutorials",
    icon: "book",
    prefix: "/en/guide/",
    children: [
      {
        text: "User Guide",
        icon: "lightbulb",
        prefix: "usage/",
        children: ["getting-started", "basic-features", "advanced-features"],
      },
      {
        text: "Prompt Techniques",
        icon: "magic-wand-sparkles",
        prefix: "prompts/",
        children: ["introduction", "techniques", "examples"],
      },
    ],
  },
  {
    text: "API Reference",
    icon: "code",
    link: "/en/api/",
  },
]);