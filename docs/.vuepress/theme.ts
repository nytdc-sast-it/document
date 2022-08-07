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
