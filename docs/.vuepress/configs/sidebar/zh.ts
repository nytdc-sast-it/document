import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/java/": [
    {
      text: "Java 基础",
      collapsible: true,
      children: [
        {
          text: "环境搭建",
          children: [
            "intro-introduction-of-java.md",
            "intro-java-runtime.md",
            "intro-java-dev-env.md",
            "intro-jdk-jre.md",
            "intro-the-first-program.md",
          ],
        },
        {
          text: "语言基础",
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
        // {
        //   text: "面向对象",
        //   children: [],
        // },
        // {
        //   text: "异常处理",
        //   children: [],
        // },
        // {
        //   text: "集合框架及泛型",
        //   children: [],
        // },
        // {
        //   text: "常用类",
        //   children: [],
        // },
        // {
        //   text: "Stream 流",
        //   children: [],
        // },
        // {
        //   text: "注解与反射",
        //   children: [],
        // },
        // {
        //   text: "IO 流",
        //   children: [],
        // },
        // {
        //   text: "并发",
        //   children: [],
        // },
      ],
    },
    // {
    //   text: "构建工具",
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
