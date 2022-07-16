import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://doc.sastit.com",

  repo: "nytdc-sast-it/document",
  docsDir: "docs",

  navbar: navbar,
  sidebar: sidebar,

  plugins: {
    mdEnhance: {
      sup: true,
      sub: true,
      tex: true,
    },
  },
});
