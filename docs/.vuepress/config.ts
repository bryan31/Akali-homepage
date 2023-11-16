import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export default defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Akali",
  themeConfig: {
    status: "<GlobalStatus />",
    statusVersion: "v5",
    // sidebarDepth: 1,
    enableDarkMode: true,
    repo: "https://github.com/bryan31/Akali",
    logo: "/logo.svg",
    lastUpdated: "Last Updated",
    nav: [
      { text: "文档", link: "/guide/" }
    ],
    sidebarNav: [
    ],
    sidebar: {
      "/guide/": [
        {
          title: "使用向导",
          collapsable: false,
          children: ["/guide/", "/guide/hotspot", "/guide/fallback", "/guide/env"]
        }
      ]
    },
    codeSwitcher: {
      groups: {
        default: { ts: "TypeScript", js: "JavaScript" },
        "plugin-usage": { tuple: "Tuple", object: "Object" },
      },
    },
  },
}));
