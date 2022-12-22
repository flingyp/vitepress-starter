import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

export default defineConfig({
  base: "/vitepress-starter",
  title: "Vitepress Starter",
  description: "Vitepress Starter",
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  themeConfig: {
    // 文档标题
    siteTitle: "Vitepress Starter",
    // 文档LOGO
    logo: "/docs-logo.png",
    // 顶部栏导航栏
    nav: [
      { text: "Starter", link: "/starter/" },
      {
        text: "相关链接",
        items: [
          {
            text: "源码地址",
            link: "https://github.com/flingyp/vitepress-starter",
          },
          { text: "预览地址", link: "https://yyblog.top/vitepress-starter" },
        ],
      },
    ],
    // 顶部右侧相关社交账号栏
    socialLinks: [
      { icon: "github", link: "https://github.com/flingyp" },
      { icon: "twitter", link: "..." },
      { icon: "discord", link: "..." },
      { icon: "facebook", link: "https://github.com/flingyp" },
      { icon: "instagram", link: "..." },
      { icon: "linkedin", link: "..." },
      { icon: "youtube", link: "..." },
    ],
    // 左侧侧边栏
    sidebar: {
      "/starter/": [
        {
          text: "Starter",
          items: [{ text: "Introduction", link: "/starter/" }],
        },
      ],
    },
    editLink: {
      pattern: "https://github.com/flingyp/vitepress-starter/tree/main/:path",
      text: "Edit this page on GitHub",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present FlingYP",
    },
  },
});
