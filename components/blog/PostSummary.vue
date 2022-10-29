<template>
  <NuxtLink v-if="post" :to="post._path">
    <div
      class="cursor-pointer overflow-hidden px-7 py-5 rounded-lg border-2 hover:border-primary w-full"
    >
      <h2 class="text-lg font-semibold rainbow-text">
        {{ post?.title }}
      </h2>
      <div>
        <ul
          v-if="post?.body?.toc?.links"
          class="list-disc list-inside mt-4 pl-2 space-y-3"
        >
          <template v-for="link in post?.body?.toc?.links" :key="link.id">
            <li
              class="list-item text-sm text-primary-900 underline underline-offset-4 decoration-wavy decoration-primary/40 transition-all"
            >
              {{ link.text }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-8">
        <span class="bg-gray-200 text-sm text-primary px-2 py-1 rounded-md">{{
          formatDate(post.createdAt)
        }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { formatDate } from "@/utils/helpers";

interface Props {
  post: any;
}

const { post } = defineProps<Props>();
</script>
