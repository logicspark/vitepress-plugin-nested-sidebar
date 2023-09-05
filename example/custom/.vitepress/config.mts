import { defineConfig } from "vitepress";
import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";

const { generateSidebar } = VitepressPluginNestedSidebar();
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: generateSidebar({
      sidebars: [
        {
          text: "MARKDOWN",
          link: "/markdown-examples",
          collapsed: true,
        },
        { text: "API", link: "/api-examples", collapsed: true },
      ],
      excludeFiles: ["api-examples.md"],
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
