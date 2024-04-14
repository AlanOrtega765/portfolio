<script setup lang="ts">
const emits = defineEmits<{
  (e: "slideNext"): void;
}>();

const slideNext = () => emits("slideNext");
</script>

<template>
  <button
    class="hidden lg:block absolute top-1/2 -translate-y-1/2 right-4 hover:scale-125 bg-black/50 hover:bg-black/80 rounded-full transition-transform z-10 text-dark-coffee dark:text-white"
    @click="slideNext"
  >
    <Icon name="majesticons:chevron-right" size="50" />
  </button>
</template>
