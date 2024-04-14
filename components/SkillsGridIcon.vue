<script setup lang="ts">
import type { SkillIcon } from "~/types";

defineProps<{
  icon: SkillIcon;
}>();
</script>

<template>
  <Icon class="w-16 h-16" :name="icon.name" />
  <span class="text-xl font-medium mt-2">{{ icon.text }}</span>
</template>
