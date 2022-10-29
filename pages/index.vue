<template>
  <div class="h-full">
    <main>
      <HomeIntroduction />
      <BlogRecentPosts />
      <AboutMe />
    </main>
  </div>
</template>

<script setup>
const { data: blogNav } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});

const somePosts = queryContent("/blog").find();
useHead({
  title: "basicsWithAmit",
});
</script>
