import { SidebarItem } from "src/sidebar-generator";

let timer: ReturnType<typeof setTimeout>;

export interface Options {
  idName?: string;
  adjustOffsetTop?: number;
}

function resetHeader() {
  const h2 = document.querySelectorAll(".VPSidebarItem.level-2");
  h2.forEach((item) =>
    item.setAttribute("class", "VPSidebarItem level-2 is-link")
  );
  window.scrollTo(0, 0);
}

function setHeadersStyle(index: number) {
  const headers = document
    .querySelector(".VPSidebarItem.level-0.is-active.has-active")
    ?.querySelectorAll(".VPSidebarItem.level-2");

  headers?.forEach((item, idx) => {
    if (idx === index) {
      window.history.pushState(null, "", `${item.querySelector("a")?.href}`);
      item.setAttribute("class", "VPSidebarItem level-2 is-link is-active");
    } else {
      item.setAttribute("class", "VPSidebarItem level-2 is-link");
    }
  });
}

function calculateAndHighlightHeader(header: SidebarItem, options: Options) {
  let scrollYHeight: number;
  let windowInnerHeight: number;

  const adjustHeaderOffset = options?.adjustOffsetTop || 0;

  const { scrollY, innerHeight } = window;

  const offsetHeight = document.body.offsetHeight;

  scrollYHeight = scrollY;

  windowInnerHeight = innerHeight;

  const isBottom =
    Math.abs(scrollYHeight + windowInnerHeight - offsetHeight) < 0.5;

  if (options?.idName) {
    const content = document.getElementById(`#${options.idName}`);
    scrollYHeight = content?.scrollTop!;
  }

  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    if (!header.items) {
      return;
    }

    const filterSidebarHeaders = header.items[0].items;
    const selectedIndex: number[] = [];
    const filteredHeaderElement: HTMLElement[] = [];

    if (scrollYHeight <= 5) {
      setHeadersStyle(0);
      return;
    }

    if (isBottom) {
      setHeadersStyle(filterSidebarHeaders!.length - 1);
      return;
    }

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
      const headerPosition = item.offsetTop - adjustHeaderOffset;

      if (scrollYHeight >= headerPosition) {
        selectedIndex.push(index);
      }
    });

    setHeadersStyle(selectedIndex[selectedIndex.length - 1]);
  }, 100);
}

export default { calculateAndHighlightHeader, resetHeader };
