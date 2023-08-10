const path = require("path");
const { defineConfig } = require("vite");

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VitepressPluginNestedSidebar",
      fileName: (format: string) =>
        format == "es"
          ? `vitepress-plugin-nested-sidebar.${format}.mjs`
          : `vitepress-plugin-nested-sidebar.${format}.js`,
    },
    rollupOptions: {
      external: ["fs", "path"],
    },
  },
});
