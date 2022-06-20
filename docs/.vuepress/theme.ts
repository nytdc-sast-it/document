import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./configs/navbar";

export default hopeTheme({
  hostname: "https://doc.tdsast.org",
  repo: "nytdc-sast/document",

  navbar: navbar,
});
