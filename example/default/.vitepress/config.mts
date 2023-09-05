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
      { text: "API", link: "/api-test/api-examples" },
    ],

    sidebar: generateSidebar({
      sidebars: {
        ["/"]: [
          {
            text: "MARKDOWN",
            link: "/markdown-examples",
            collapsed: true,
          },
        ],
        ["/api-test/"]: [
          { text: "API", link: "/api-test/api-examples", collapsed: true },
          { text: "TEST", link: "/api-test/test", collapsed: true },
        ],
      },
      excludeFiles: ["test.md"],
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
