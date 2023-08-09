import SidebarGenerator from "./sidebar-generator";

export default function PluginNestedSidebar() {
  const { generateSidebar } = SidebarGenerator;
  return {
    generateSidebar,
  };
}
