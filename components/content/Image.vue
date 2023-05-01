<template>
  <div class="w-full flex items-center justify-center">
    <img :src="imageSrc" :class="[imageClass]" />
  </div>
</template>
<script setup lang="ts">
// import { defineProps } from "vue";

const props = defineProps({
  imageSrc: {
    type: String,
  },
  imageClass: {
    type: String,
  },
});
</script>
