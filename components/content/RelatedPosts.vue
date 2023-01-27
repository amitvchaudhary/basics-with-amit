<template>
  <div class="p-6 border border-pink-500 rounded-md">
    <div class="flex font-semibold text-pink-700">Related Posts</div>
    <div class="post-link">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.post-link {
  @apply prose-a:border-b-0 prose-a:text-red-900 prose-a:pb-1 prose-a:no-underline;
}
</style>
