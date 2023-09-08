<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";
import { onMounted, onUnmounted, computed, watch } from "vue";
import { useData, useRoute } from "vitepress";

const { Layout } = DefaultTheme;
const { utility } = VitepressPluginNestedSidebar();
const {
  calculateAndHighlightHeader,
  resetHeader,
  filterSidebar,
  checkMultipleSidebar,
} = utility;
const { theme, site, page } = useData();
const route = useRoute();

const calculateAndHighlightHeaderObj = computed(() => {
  return {
    adjustOffsetTop: +site.value.scrollOffset,
  };
});

const sidebar = computed(() => {
  const file = page.value.relativePath.split("/");

  const isMultipleSidebar = checkMultipleSidebar(theme.value.sidebar);

  if (isMultipleSidebar) {
    if (file.length > 1) {
      return theme.value.sidebar[`/${file[0]}/`].filter(
        filterSidebar(route.path)
      )[0];
    }
    return theme.value.sidebar[`/`].filter(filterSidebar(route.path))[0];
  }
  return theme.value.sidebar.filter(filterSidebar(route.path))[0];
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", () => {
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  });
});

watch(
  () => route.path,
  () => {
    resetHeader();
    calculateAndHighlightHeader(
      sidebar.value,
      calculateAndHighlightHeaderObj.value
    );
  },
  { deep: true }
);
</script>

<template>
  <Layout>
    <Content />
  </Layout>
</template>
