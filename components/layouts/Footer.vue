<script setup lang="ts">
import type { Link } from "~/types";

defineProps<{
  links: Link[];
}>();

const { scrollToSection } = useHelpers();
const actualYear = () => {
  const date = new Date();
  const year = date.getUTCFullYear();

  return year;
};
</script>

<template>
  <footer
    id="contact"
    class="py-10 md:py-20 bg-white dark:bg-dark-coffee text-dark-coffee dark:text-white"
  >
    <div class="grid lg:grid-cols-2 px-4 gap-y-10 container mx-auto">
      <div>
        <h2 class="text-3xl font-bold">Contacto</h2>
        <ul class="mt-4 text-dark-coffee/80 dark:text-white/80 space-y-2">
          <li
            class="flex items-center gap-x-2 text-lg lg:text-xl font-semibold"
          >
            <Icon name="ic:round-email" size="24" />
            <span>alan.ortega.dev@gmail.com</span>
          </li>
          <li
            class="flex items-center gap-x-2 text-lg lg:text-xl font-semibold"
          >
            <Icon name="solar:phone-bold" size="24" />
            <span>+56 9 77714457</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-3xl font-bold">Enlaces</h2>
        <ul class="flex flex-col gap-y-2 mt-4">
          <li v-for="link in links" :key="link.section">
            <NuxtLink
              v-if="link.section !== 'contact'"
              class="cursor-pointer font-medium text-dark-coffee/80 hover:text-dark-coffee dark:text-white/80 dark:hover:text-white text-xl"
              @click="scrollToSection(link.section)"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <span
        class="flex items-center justify-center gap-x-2 text-center lg:col-span-2 lg:text-xl font-medium"
        ><Icon name="bx:copyright" /> {{ actualYear() }} Todos los derechos
        reservados.
      </span>
    </div>
  </footer>
</template>
