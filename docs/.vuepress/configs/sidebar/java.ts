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
          "basic-strings.md",
          "basic-big-number.md",
          "basic-array.md",
          "basic-command-param.md",
        ],
      },
      {
        text: "面向对象",
        children: [
          "oop-introduce.md",
          {
            text: "类和对象",
            children: [
              "oop-fields-methods.md",
              "oop-static.md",
              "oop-constructor.md",
              "oop-records.md",
              "oop-package.md",
            ],
          },
          {
            text: "继承",
            children: [
              "oop-sub-super-classes.md",
              "oop-abstract-classes.md",
              "oop-enum-classes.md",
              "oop-sealed-classes.md",
            ],
          },
          {
            text: "更多",
            children: [
              "oop-interface.md",
              "oop-lambda-expressions.md",
              "oop-inner-classes.md",
            ],
          },
        ],
      },
      {
        text: "异常处理",
        children: [
          "exception-introduction.md",
          "exception-catch.md",
          "exception-throw.md",
          "exception-log.md",
        ],
      },
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
