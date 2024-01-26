<script setup lang="ts">
const { scrollToSection } = useHelpers();
const colorMode = useColorMode();

const links = ref([
  { text: 'Inicio', section: 'home' },
  { text: 'Sobre mí', section: 'about' },
  { text: 'Habilidades', section: 'skills' },
  { text: 'Proyectos', section: 'projects' },
  { text: 'Contacto', section: 'contact' },
]);

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <div>
    <header
      class="fixed top-0 left-0 w-full bg-white/75 dark:bg-dark-coffee/75 backdrop-blur h-20 z-10 px-4"
    >
      <nav class="flex justify-between items-center container mx-auto h-full">
        <div class="flex items-center gap-x-10">
          <NuxtLink
            class="text-3xl font-bold cursor-pointer text-dark-coffee dark:text-white"
            @click="scrollToSection('home')"
            >AO.</NuxtLink
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
    <footer
      id="contact"
      class="py-10 md:py-20 bg-white dark:bg-dark-coffee text-dark-coffee dark:text-white"
    >
      <div class="grid lg:grid-cols-2 px-4 gap-y-10 container mx-auto">
        <div>
          <h2 class="text-3xl font-bold">Contacto</h2>
          <ul class="mt-4 text-dark-coffee/80 dark:text-white/80 space-y-2">
            <li class="flex items-center gap-x-2 text-lg lg:text-xl font-semibold">
              <Icon name="ic:round-email" size="24"/>
              <span>alanortega765@gmail.com</span>
            </li>
            <li class="flex items-center gap-x-2 text-lg lg:text-xl font-semibold">
              <Icon name="solar:phone-bold" size="24"/>
              <span>+56945316989 | +56977714457</span>
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
          ><Icon name="bx:copyright" /> Todos los derechos reservados.
        </span>
      </div>
    </footer>
  </div>
</template>
