import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/java/": [
    {
      text: "开始之前",
      children: [
        "intro-introduction-of-java.md",
        "intro-how-to-install-java.md",
        "intro-the-first-program.md",
        "intro-use-ide.md",
      ],
    },
  ],
  "/articles/": [
    {
      text: "必备技能",
      children: [
        "a-how-to-ask-questions.md",
        "a-how-to-sign-up-a-github-account.md",
        "a-how-to-set-system-env-var.md",
        "a-how-to-modify-system-hosts.md",
        "a-how-to-display-filename-extension.md",
      ],
    },
  ],
};
