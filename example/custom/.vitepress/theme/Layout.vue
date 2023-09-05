<script setup lang="ts">
import { useData } from "vitepress";
import Theme from "vitepress/theme";

const { Layout } = Theme;
// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
  <Layout>
    <Content />
  </Layout>
</template>
