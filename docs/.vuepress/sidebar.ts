import { sidebar } from "vuepress-theme-hope";
import { algorithmSidebar } from "./sidebar/algorithm";
import { articleSidebar } from "./sidebar/article";
import { javaSidebar } from "./sidebar/java";

export default sidebar({
  "/articles/": articleSidebar,
  "/java/": javaSidebar,
  "/algorithm/": algorithmSidebar,
});
