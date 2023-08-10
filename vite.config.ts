import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"),
      name: "VitepressPluginNestedSidebar",
      fileName: (format: string) => {
        if (format === "es") {
          return `vitepress-plugin-nested-sidebar.${format}.mjs`;
        }
        return `vitepress-plugin-nested-sidebar.${format}.js`;
      },
    },
    rollupOptions: {
      external: ["fs", "path"],
    },
  },
});
