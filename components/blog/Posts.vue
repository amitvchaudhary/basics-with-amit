<template>
  <div v-if="posts && posts.length > 0" class="columns-3xs gap-4">
    <div v-for="post in posts" :key="post._path" class="mb-4">
      <BlogPostSummary :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  posts: any;
}

const { posts } = defineProps<Props>();
</script>
