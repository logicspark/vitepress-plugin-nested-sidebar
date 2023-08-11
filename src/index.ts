import {
  generateSidebar,
  Options as SidebarOptions,
} from "./sidebar-generator";

import ScrollHighlight, {
  Options as ScrollOptions,
} from "./utils/scroll-check-header";

export default class VitepressPluginNestedSidebar {
  static createSidebar(options: SidebarOptions) {
    return generateSidebar(options);
  }

  static scrollAndHighlightH2(options: ScrollOptions) {
    return ScrollHighlight.checkPositionH2byScroll(options);
  }

  static checkDocumentIsChanged(changed: boolean, options: ScrollOptions) {
    return ScrollHighlight.checkDocumentChanged(changed, options);
  }
}

export { VitepressPluginNestedSidebar };

export const { createSidebar, scrollAndHighlightH2, checkDocumentIsChanged } =
  VitepressPluginNestedSidebar;
