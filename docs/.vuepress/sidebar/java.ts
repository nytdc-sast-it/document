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
          // "basic-simple-program.md",
          "basic-name.md",
          "basic-comment.md",
          "basic-data-type.md",
          // "basic-operator.md",
          // "basic-control-flow.md",
          // "basic-strings.md",
          // "basic-big-number.md",
          // "basic-array.md",
          // "basic-command-param.md",
        ],
      },
    ],
  },
];
