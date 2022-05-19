import { SidebarConfigArray } from "@vuepress/theme-default";

export const javaSidebar: SidebarConfigArray = [
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
];
