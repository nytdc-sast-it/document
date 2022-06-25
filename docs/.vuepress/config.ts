import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  // logo: "https://vuejs.org/images/logo.png",

  lang: "zh-CN",
  title: "南邮通达科协学习站",
  description: "Just for Fun",
  head: [["link", { rel: "stylesheet", href: "/assets/css/style.css" }]],

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
  ],
});
