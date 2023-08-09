import { resolve, extname } from "path";
import matter from "gray-matter";
import FileHelper from "./utils/file-helper";

declare interface Options {
  sidebars: Sidebar;
  excludeFiles?: string[];
  includeIndexMd?: boolean;
}

declare interface SidebarListItem {
  [key: string]: any;
}

export type SidebarItem = {
  text?: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
};

export interface SidebarMulti {
  [path: string]: SidebarItem[];
}

export type Sidebar = SidebarItem[] | SidebarMulti;

export default class SidebarGenerator {
  static generateSidebar(options: Options): Sidebar {
    const isMultipleSidebar = !Array.isArray(options.sidebars);

    const sidebar: Sidebar = {};

    if (isMultipleSidebar) {
      Object.keys(options.sidebars).forEach((item) => {
        const currentDirName = "." + item;
        const sidebarItems = SidebarGenerator._generateSidebarItem(
          currentDirName,
          options
        ).map(SidebarGenerator._setupSidebar(item, options, isMultipleSidebar));

        Object.assign(sidebar, { [item]: sidebarItems });
      });

      return sidebar;
    }

    (options.sidebars as SidebarItem[]).forEach((ele) => {
      const sidebarItems = SidebarGenerator._generateSidebarItem(
        "./",
        options
      ).map(SidebarGenerator._setupSidebar("", options, isMultipleSidebar));

      Object.assign(sidebar, sidebarItems);
    });

    return Object.values(sidebar) as SidebarItem[];
  }

  static _setupSidebar(
    file: string,
    options: Options,
    isMultipleSidebar: boolean
  ) {
    return (sidebar: SidebarItem | undefined | null) => {
      let customSidebar: SidebarItem | undefined = {};

      if (isMultipleSidebar) {
        customSidebar = (options.sidebars as SidebarMulti)[
          file as keyof SidebarMulti
        ].find((customSidebar: SidebarItem) => {
          return customSidebar.link === sidebar?.link;
        });
      } else {
        customSidebar = (options.sidebars as SidebarItem[]).find(
          (customSidebar) => {
            return customSidebar.link === sidebar?.link;
          }
        );
      }

      if (!sidebar) {
        return;
      }

      if (!customSidebar) {
        return sidebar;
      }

      sidebar!.text = customSidebar.text;

      return {
        ...sidebar,
        collapsed: customSidebar.collapsed,
      };
    };
  }

  static _generateSidebarItem(currentDir: string, options: Options) {
    let directoryFiles: string[] = FileHelper.getFileByReaddirSync(currentDir);

    const exceptDotFiles = [".json", ".yaml", ".lock"];

    return directoryFiles
      .map((file) => {
        const childItemPath = resolve(currentDir, file);
        const uniqueHeadersSet = new Set();
        const childItemPathDisplay = `${currentDir.replace(".", "")}${file}`
          .replace(/\/{2}/, "/")
          .replace(/\.md$/, "");

        const checkDotVitePressFile = /\.vitepress/;

        const checkExceptDotFilesResult = exceptDotFiles.includes(
          extname(file)
        );

        const isDirectory = FileHelper.checkIsDirectory(childItemPath);

        if (options.excludeFiles?.includes(file)) {
          return null;
        }

        if (checkDotVitePressFile.test(file)) {
          return null;
        }

        if (checkExceptDotFilesResult) {
          return null;
        }

        if (file === "index.md" && !options.includeIndexMd) {
          return null;
        }

        if (file === "node_modules") {
          return null;
        }

        if (isDirectory) {
          return null;
        }

        if (extname(file) === ".md") {
          let childItemText;
          const fileData = FileHelper.getFileDataByReadFileSync(childItemPath);

          // const linkText = file.replace(/\.md$/, "");

          childItemText = SidebarGenerator._getTitleFromFileName(file);
          const { content } = matter(fileData);

          const h2Tags = content
            .split("\n")
            .filter((item) => item.startsWith("## "))
            .forEach((item) => {
              const slicedText = item.slice(3);
              uniqueHeadersSet.add(slicedText);
              // const decodeText = slicedText.replace(" ", "-").toLowerCase();

              return {
                text: slicedText,
                // link: `${currentDir.replace(".", "")}${linkText}#${decodeText}`,
              };
            });
          const uniqueHeaders = [...uniqueHeadersSet].map((header) => {
            return { text: `${header}` };
          });

          if (uniqueHeaders!.length) {
            return {
              text: childItemText as string,
              link: childItemPathDisplay,
              items: uniqueHeaders,
            };
          }

          return {
            text: childItemText as string,
            link: childItemPathDisplay,
          };
        }

        return null;
      })
      .filter((result) => result !== null);
  }

  static _getTitleFromFileName(fileName: string, isDirectory = false) {
    let result = fileName;

    if (isDirectory) {
      result = result.replace(/-/g, " ").replace(/_/g, " ");
      return result;
    }
    result = result.replace(/-/g, " ").replace(/_/g, " ").replace(/\.md$/, "");
    return result;
  }
}

export { SidebarGenerator };
