import { SidebarItem } from "src/sidebar-generator";

let timer: ReturnType<typeof setTimeout>;

export interface Options {
  idName?: string;
  adjustCalHeaderNum?: number;
  highLightColor: string;
}

function setHeadersStyle(index: number, highLightColor: string) {
  const headers = document
    .querySelector(".VPSidebarItem.level-0.is-active.has-active")
    ?.querySelectorAll(".VPSidebarItem.level-2");
  const color = `color:${highLightColor}`;
  headers?.forEach((item, idx) => {
    if (idx === index) {
      item.querySelector("p")?.setAttribute("style", color);
    } else {
      item.querySelector("p")?.removeAttribute("style");
    }
  });
}

function resetHeader() {
  const h2 = document?.querySelectorAll(".VPSidebarItem.level-2");
  h2.forEach((item) => item.querySelector("p")?.removeAttribute("style"));
  window.scrollTo(0, 0);
}

function calculateAndHighlightHeader(
  relativeFile: string,
  headers: SidebarItem[],
  options: Options
) {
  const filteredSidebar = headers.filter(
    (item) => item.link?.slice(1) === relativeFile
  )[0];

  let scrollYHeight: number;
  const headHeight = options?.adjustCalHeaderNum || 0;
  const { scrollY } = window;

  scrollYHeight = scrollY;

  if (options?.idName) {
    const content = document.getElementById(`#${options.idName}`);
    scrollYHeight = content?.scrollTop!;
  }

  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    if (scrollYHeight <= 5) {
      setHeadersStyle(0, options.highLightColor);
      return;
    }

    if (!filteredSidebar.items) {
      return;
    }

    const filterSidebarHeaders = filteredSidebar.items[0].items;
    const selectedIndex: number[] = [];
    const filteredHeaderElement: HTMLElement[] = [];

    document.querySelectorAll("h2").forEach((item, index) => {
      if (!item.id) {
        return;
      }
      const findIdx = filterSidebarHeaders!.findIndex((ele) => {
        return (
          ele.text == item.textContent?.slice(0, item.textContent.length - 2)
        );
      });

      if (findIdx === -1) {
        return;
      }
      filteredHeaderElement.push(item);
    });

    filteredHeaderElement.forEach((item, index) => {
      const headerPosition = item.offsetTop - headHeight;
      if (scrollYHeight >= headerPosition) {
        selectedIndex.push(index);
      }
    });

    setHeadersStyle(
      selectedIndex[selectedIndex.length - 1],
      options.highLightColor
    );
  }, 100);
}

export default { calculateAndHighlightHeader, resetHeader };
