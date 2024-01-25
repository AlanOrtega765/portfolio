<script setup lang="ts">
const { scrollToSection } = useHelpers();
const colorMode = useColorMode();

const links = ref([
  { text: 'Inicio', section: 'home' },
  { text: 'Sobre mí', section: 'about' },
  { text: 'Habilidades', section: 'skills' },
  { text: 'Proyectos', section: 'projects' },
]);

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div>
    <header
      class="fixed top-0 left-0 w-full dark:bg-dark-coffee/75 backdrop-blur h-20 z-10 px-4"
    >
      <nav class="flex justify-between items-center container mx-auto h-full">
        <div class="flex items-center gap-x-10">
          <NuxtLink
            class="text-3xl font-bold cursor-pointer text-dark-coffee dark:text-white"
            @click="scrollToSection('home')"
            >LOGO.</NuxtLink
          >
          <ul class="hidden lg:flex items-center gap-x-4">
            <li v-for="link in links" :key="link.section">
              <NuxtLink
                class="font-bold text-dark-coffee/80 hover:text-dark-coffee dark:text-stone-300 dark:hover:text-white transition-colors cursor-pointer px-3 py-2"
                @click="scrollToSection(link.section)"
                >{{ link.text }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex items-center gap-x-10">
          <ul>
            <li>
              <NuxtLink href="https://github.com/AlanOrtega765" target="_blank">
                <Icon
                  class="text-dark-coffee/80 hover:text-dark-coffee dark:text-stone-300 dark:hover:text-white transition-colors"
                  name="mdi:github"
                  size="32"
                />
              </NuxtLink>
            </li>
          </ul>

          <button
            class="text-dark-coffee/80 hover:text-dark-coffee dark:text-stone-300 dark:hover:text-white transition-colors w-8 h-8"
            @click="toggleColorMode"
          >
            <Icon
              :name="
                colorMode.preference === 'dark'
                  ? 'ph:moon-duotone'
                  : 'ph:sun-duotone'
              "
              size="32"
            />
          </button>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
