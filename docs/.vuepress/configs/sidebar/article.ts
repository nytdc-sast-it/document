import { SidebarConfigArray } from "@vuepress/theme-default";

export const articleSidebar: SidebarConfigArray = [
  {
    text: "必看文章",
    children: [
      "a-how-to-ask-questions.md",
      "a-how-to-sign-up-a-github-account.md",
      "a-how-to-open-cmd.md",
      "a-how-to-set-system-env-var.md",
      "a-how-to-modify-system-hosts.md",
      "a-how-to-display-filename-extension.md",
      "a-how-to-get-chsi-code",
      {
        text: "基础内容",
        children: [
          "a-basic-computer.md",
          "a-basic-os.md",
          "a-basic-file-extension.md",
          "a-basic-encoding.md",
          "a-basic-path.md",
          "a-basic-develop.md",
          "a-basic-ci.md",
          "a-basic-license.md",
          "a-basic-open-source-and-free.md",
        ],
      },
    ],
  },
  {
    text: "编程语言",
    children: ["lang-how-advanced-lang-exec.md"],
  },
];
