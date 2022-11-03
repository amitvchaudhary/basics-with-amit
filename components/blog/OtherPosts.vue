<template>
  <div
    class="flex flex-col items-center justify-center bg-slate-50 border-slate-200"
  >
    <div class="rainbow-text text-2xl mt-10">You may also like ...</div>
    <div
      v-if="posts"
      class="grid grid-cols-1 py-10 px-0 sm:grid-cols-3 sm:px-10 gap-x-2 lg:gap-x-6 gap-y-2 lg:gap-y-0"
    >
      <NuxtLink
        v-for="post in posts"
        :key="post._path"
        :to="post._path"
        class="w-full bg-white border-2 text-center p-10 h-20 font-semibold text-slate-700 hover:border-primary flex items-center justify-center"
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
