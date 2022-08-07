import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://doc.sastit.com",

  logo: "/assets/img/hero.png",
  repo: "nytdc-sast-it/document",
  docsDir: "docs",

  navbar: navbar,
  sidebar: sidebar,

  pageInfo: ["ReadingTime", "Word", "PageView"],

  footer: `<a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备2022004206号-2</a> Copyright © 2022 SASTIT.COM`,
  displayFooter: true,
  copyright: false,

  plugins: {
    mdEnhance: {
      sup: true,
      sub: true,
      tex: true,
    },
    comment: {
      provider: "Waline",
      serverURL: "https://api.doc.sastit.com",
      pageview: true,
    },
  },
});
