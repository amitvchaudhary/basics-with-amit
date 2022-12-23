<template>
  <div class="relative w-full mb-10 h-60">
    <div
      class="absolute z-10 flex items-center justify-center w-full h-full p-10 text-4xl font-bold text-center text-slate-800"
    >
      <slot />
    </div>
    <div
      class="inset-0 bottom-0 z-0 flex items-center justify-center w-full bg-center bg-repeat h-72 opacity-30 filter blur-3xl"
      :style="{
        backgroundImage: `url(/images/${imageSrc})`,
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  imageSrc: string;
}

const { imageSrc } = defineProps<Props>();
</script>
