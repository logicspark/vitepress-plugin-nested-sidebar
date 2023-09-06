import { SidebarItem, generateSidebar, Sidebar } from "./sidebar-generator";
import ScrollUtils from "./utils/scroll-check-header";

export default function VitepressPluginNestedSidebar() {
  const { calculateAndHighlightHeader } = ScrollUtils;

  const filterSidebar = (compare: string) => {
    return (item: SidebarItem) => item.link === compare;
  };
  const checkMultipleSidebar = (sidebar: Sidebar) => {
    return !Array.isArray(sidebar);
  };
  return {
    generateSidebar,
    utility: {
      calculateAndHighlightHeader,
      filterSidebar,
      checkMultipleSidebar,
    },
  };
}
