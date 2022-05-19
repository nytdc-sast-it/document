import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/java/": [
    {
      text: "开始之前",
      collapsible: true,
      children: [
        {
          text: "Java 介绍及开发环境配置",
          // collapsible: true,
          children: [
            "intro-introduction-of-java.md",
            "intro-java-runtime.md",
            "intro-java-dev-env.md",
            "intro-jdk-jre.md",
            "intro-the-first-program.md",
          ],
        },
        {
          text: "基础知识",
          // collapsible: true,
          children: [
            "basic-name.md",
            "basic-comment.md",
            "basic-data-type.md",
            "basic-operator.md",
            "basic-control-flow.md",
            "basic-array.md",
            "basic-command-param.md",
          ],
        },
      ],
    },
    // {
    //   text: "面向对象",
    //   collapsible: true,
    //   children: [],
    // },
  ],
  "/articles/": [
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
          collapsible: true,
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
  ],
  "/algorithm/": [],
};
