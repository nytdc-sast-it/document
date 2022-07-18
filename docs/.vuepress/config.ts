import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  lang: "zh-CN",
  title: "信息技术中心文档站",
  description: "Just for Fun",
  head: [
    ["link", { rel: "stylesheet", href: "/assets/css/style.css" }],
    ["link", { rell: "icon", href: "/favicon.ico" }],
  ],

  theme,
  plugins: [
    googleAnalyticsPlugin({
      id: "G-QXHPDB4HM4",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
  ],
});
