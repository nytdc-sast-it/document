import { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const javaSidebar: HopeThemeSidebarArrayConfig = [
  {
    text: "Java 基础",
    collapsable: true,
    children: [
      {
        text: "环境搭建",
        children: [
          "intro-introduction-of-java.md",
          "intro-java-runtime.md",
          "intro-java-dev-env.md",
          "intro-jdk-jre.md",
          "intro-the-first-program.md",
          "intro-guess-number.md",
          "ext-graalvm-native.md",
        ],
      },
      {
        text: "语言基础",
        collapsable: true,
        children: [
          // "basic-program-structure.md",
          // "basic-name.md",
          "basic-comment.md",
          // "basic-data-type.md",
          // "basic-operator.md",
          // "basic-control-flow.md",
          // "basic-strings.md",
          // "basic-big-number.md",
          // "basic-array.md",
          // "basic-command-param.md",
        ],
      },
      // "oop-introduce.md",
      // {
      //   text: "异常处理",
      //   children: [
      //     "exception-introduction.md",
      //     "exception-catch.md",
      //     "exception-throw.md",
      //     "exception-log.md",
      //   ],
      // },
      // {
      //   text: "泛型",
      //   children: [],
      // },
      // {
      //   text: "集合",
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
