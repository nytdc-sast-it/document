import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import searchPlugin from "@vuepress/plugin-search";
import registerComponentsPlugin from "@vuepress/plugin-register-components";
import googleAnalyticsPlugin from "@vuepress/plugin-google-analytics";
import { getDirname, path } from "@vuepress/utils";

const isProd = process.env.NODE_ENV === "production";
const __dirname = getDirname(import.meta.url);

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
    googleAnalyticsPlugin({
      id: "G-NVS7MEDHB6",
    }),
  ],
  alias: {
    "@theme-hope/components/NormalPage.js": path.resolve(
      __dirname,
      "./components/NormalPage.vue"
    ),
  },
});
