<script setup lang="ts">
import { navLinks } from '@/constants'

const { scrollToSection } = useHelpers()
const colorMode = useColorMode()

const isOpenNav = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full bg-white/75 dark:bg-dark-coffee/75 backdrop-blur h-20 z-10 px-4"
    :class="isOpenNav ? 'bg-white/100 dark:bg-dark-coffee/100' : ''"
  >
    <nav class="flex justify-between items-center container mx-auto h-full">
      <div class="flex items-center gap-x-10">
        <NuxtLink
          class="text-3xl font-bold cursor-pointer text-dark-coffee dark:text-white"
          @click="scrollToSection('home')"
          >AO.</NuxtLink
        >
        <ul
          class="lg:flex lg:relative lg:top-0 lg:w-fit lg:items-center flex-col lg:flex-row w-full items-start absolute top-20 left-0 gap-x-4 gap-y-4 dark:bg-dark-coffee lg:dark:bg-transparent shadow-lg lg:shadow-none py-10 lg:py-0 rounded-b-2xl px-4 lg:px-0"
          :class="isOpenNav ? 'flex' : 'hidden'"
        >
          <li v-for="link in navLinks" :key="link.section">
            <NuxtLink
              class="text-xl lg:text-base font-bold text-dark-coffee lg:text-dark-coffee/80 hover:text-dark-coffee dark:text-white lg:dark:text-stone-300 dark:hover:text-white transition-colors cursor-pointer px-3 py-2"
              @click="scrollToSection(link.section), (isOpenNav = false)"
              >{{ link.text }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-x-4 lg:gap-x-10">
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

        <ClientOnly>
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
        </ClientOnly>

        <div class="lg:hidden">
          <Icon
            class="text-dark-coffee dark:text-white"
            :name="isOpenNav ? 'ic:round-close' : 'gravity-ui:bars'"
            size="32"
            @click="isOpenNav = !isOpenNav"
          />
        </div>
      </div>
    </nav>
  </header>
</template>
