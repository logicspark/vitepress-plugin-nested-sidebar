import { generateSidebar } from "./sidebar-generator";
import ScrollUtils from "./utils/scroll-check-header";

export default function VitepressPluginNestedSidebar() {
  const { calculateAndHighlightHeader, resetHeader } = ScrollUtils;
  const getFilename = (filename: string) => {
    return filename.replace(/\.md$/, "");
  };
  return {
    generateSidebar,
    calculateAndHighlightHeader,
    getFilename,
    resetHeader,
  };
}
