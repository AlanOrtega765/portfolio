<script setup lang="ts">
import type { SkillIcon } from "~/types";

defineProps<{
  targetIsVisible: boolean;
}>();

const icons = ref<SkillIcon[]>([
  { name: "logos:javascript", text: "Javascript" },
  { name: "logos:typescript-icon", text: "Typescript" },
  { name: "logos:vue", text: "Vue.js" },
  { name: "logos:nuxt-icon", text: "Nuxt.js" },
  { name: "vscode-icons:file-type-node", text: "Node.js" },
  { name: "simple-icons:express", text: "Express.js" },
  { name: "cib:socket-io", text: "Socket.io" },
  { name: "logos:mongodb-icon", text: "MongoDB" },
  { name: "logos:mysql-icon", text: "MySQL" },
  { name: "logos:supabase-icon", text: "Supabase" },
  { name: "logos:firebase", text: "Firebase" },
  { name: "logos:sass", text: "Sass/Scss" },
  { name: "logos:tailwindcss-icon", text: "TailwindCSS" },
  { name: "logos:vuetifyjs", text: "Vuetify" },
  { name: "logos:figma", text: "Figma" },
  { name: "devicon:git", text: "Git" },
]);
</script>

<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-14 mt-10 text-dark-coffee dark:text-white"
    :class="
      targetIsVisible
        ? 'animate-fade-right animate-ease-in-out animate-duration-1000 opacity-100'
        : 'opacity-0'
    "
  >
    <div class="grid place-items-center" v-for="icon in icons" :key="icon.text">
      <SkillsGridIcon :icon="icon" />
    </div>
  </div>
</template>
