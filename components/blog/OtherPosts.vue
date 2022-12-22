<template>
  <div
    v-if="posts && posts.length > 3"
    class="flex flex-col items-center justify-center bg-slate-50 border-slate-200"
  >
    <div class="mt-10 text-2xl rainbow-text">You may also like ...</div>
    <div
      class="grid grid-cols-1 px-0 py-10 sm:grid-cols-3 sm:px-10 gap-x-2 lg:gap-x-6 gap-y-2 lg:gap-y-0"
    >
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="flex items-center justify-center w-full h-20 p-10 font-semibold text-center bg-white border-2 text-slate-700 hover:border-primary"
      >
        {{ post.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();

const posts = await queryContent("blog")
  .where({ _id: { $ne: page.value._id } })
  .sort({ createdAt: -1 })
  .only(["_path", "title"])
  .limit(3)
  .find();
</script>
