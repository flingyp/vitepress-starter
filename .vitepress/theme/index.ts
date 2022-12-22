import DefaultTheme from "vitepress/theme";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import type { App } from "vue";
import "./styles/HomeHeroImage.css"; // 站点主页，Logo图片样式修改
import "./styles/CodeStyle.css"; // 代码块相关样式
import "@vitepress-demo-preview/component/dist/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", AntDesignContainer);
  },
};
