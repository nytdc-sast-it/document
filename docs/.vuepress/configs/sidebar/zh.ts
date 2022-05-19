import type { SidebarConfig } from "@vuepress/theme-default";
import { algorithmSidebar } from "./algorithm";
import { articleSidebar } from "./article";
import { javaSidebar } from "./java";

export const zh: SidebarConfig = {
  "/articles/": articleSidebar,
  "/java/": javaSidebar,
  "/algorithm/": algorithmSidebar,
};
