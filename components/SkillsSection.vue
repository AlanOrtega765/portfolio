<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const target = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    return (targetIsVisible.value = isIntersecting);
  }
});
</script>

<template>
  <section id="skills" class="py-40">
    <div
      ref="target"
      class="container mx-auto"
      :class="
        targetIsVisible
          ? 'animate-fade-up animate-ease-in-out animate-duration-1000 opacity-100'
          : 'opacity-0'
      "
    >
      <h1
        class="relative text-5xl font-bold w-fit mx-auto bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent"
      >
        Habilidades
      </h1>
      <h2 class="text-center text-2xl font-medium mt-4">
        Las habilidades, herramientas y tecnologías que he utilizado:
      </h2>
      <div
        class="grid grid-cols-8 gap-y-14 mt-10"
        :class="
          targetIsVisible
            ? 'animate-fade-left animate-ease-in-out animate-duration-1000 opacity-100'
            : 'opacity-0'
        "
      >
        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:javascript" />
          <span class="text-xl font-medium mt-2">Javascript</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:typescript-icon" />
          <span class="text-xl font-medium mt-2">Typescript</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:vue" />
          <span class="text-xl font-medium mt-2">Vue.js</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:nuxt-icon" />
          <span class="text-xl font-medium mt-2">Nuxt.js</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="vscode-icons:file-type-node" />
          <span class="text-xl font-medium mt-2">Node.js</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="simple-icons:express" />
          <span class="text-xl font-medium mt-2">Express.js</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="cib:socket-io" />
          <span class="text-xl font-medium mt-2">Socket.io</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:mongodb-icon" />
          <span class="text-xl font-medium mt-2">MongoDB</span>
        </div>

        <div class="grid place-items-center col-start-2">
          <Icon class="w-16 h-16" name="logos:mysql-icon" />
          <span class="text-xl font-medium mt-2">MySQL</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:sass" />
          <span class="text-xl font-medium mt-2">Sass/Scss</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:tailwindcss-icon" />
          <span class="text-xl font-medium mt-2">TailwindCSS</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:vuetifyjs" />
          <span class="text-xl font-medium mt-2">Vuetify</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="logos:figma" />
          <span class="text-xl font-medium mt-2">Figma</span>
        </div>

        <div class="grid place-items-center">
          <Icon class="w-16 h-16" name="devicon:git" />
          <span class="text-xl font-medium mt-2">Git</span>
        </div>
      </div>
    </div>
  </section>
</template>
