import { generateSidebar } from "./sidebar-generator";
import ScrollUtils from "./utils/scroll-check-header";

export default function VitepressPluginNestedSidebar() {
  const { checkPositionH2byScroll, checkDocumentChanged } = ScrollUtils;
  return {
    generateSidebar,
    checkPositionH2byScroll,
    checkDocumentChanged,
  };
}
