<script setup lang="ts">
const emits = defineEmits<{
  (e: "slidePrev"): void;
}>();

const slidePrev = () => emits("slidePrev");
</script>

<template>
  <button
    class="hidden lg:block absolute top-1/2 -translate-y-1/2 left-4 hover:scale-125 bg-black/50 hover:bg-black/80 rounded-full transition-transform z-10 text-dark-coffee dark:text-white"
    @click="slidePrev"
  >
    <Icon name="majesticons:chevron-left" size="50" />
  </button>
</template>
