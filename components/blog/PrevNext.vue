<script setup lang="ts">
const { prev, next }: any = useContent();
</script>
<template>
  <div class="flex justify-between p-10 gap-x-6">
    <div class="w-1/2">
      <NuxtLink v-if="prev" :to="prev._path" class="item">
        <div><span class="rainbow-text">Previous</span></div>
        <div class="title">{{ prev.title }}</div>
      </NuxtLink>
    </div>
    <div class="w-1/2">
      <NuxtLink v-if="next" :to="next._path" class="item items-end"
        ><div><span class="rainbow-text">Next</span></div>
        <div class="title">{{ next.title }}</div></NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
.item {
  @apply cursor-pointer p-6 rounded-lg border-2 hover:border-primary w-full flex flex-col justify-center gap-y-1;
}

.title {
  @apply font-semibold text-slate-700;
}
</style>
