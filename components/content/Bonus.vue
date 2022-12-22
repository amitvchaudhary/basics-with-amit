<template>
  <div class="p-6 bg-indigo-100 rounded-md">
    <div class="flex font-semibold text-indigo-700">
      <span class="mr-2">Bonus</span>
      <span class="flex items-center justify-start">
        <template v-for="star in parseInt(noOfStars)">
          <Icon icon="ic:baseline-star-border" /> </template
      ></span>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

interface Props {
  noOfStars?: string;
}

const { noOfStars = 1 } = defineProps<Props>();
</script>
