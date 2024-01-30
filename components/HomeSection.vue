<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const { scrollToSection } = useHelpers();

const target = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    return (targetIsVisible.value = isIntersecting);
  }
});
</script>

<template>
  <section
    id="home"
    class="flex justify-center items-center h-svh px-4 lg:px-0"
  >
    <div
      ref="target"
      class="w-full lg:max-w-screen-md"
      :class="
        targetIsVisible
          ? 'animate-fade-up animate-ease-in-out animate-duration-1000 opacity-100'
          : 'opacity-0'
      "
    >
      <NuxtImg
        class="rounded-full mx-auto w-52 h-52 lg:w-64 lg:h-64"
        src="/.netlify/functions/img/person-animated.jpg"
        format="webp"
        loading="lazy"
        width="256"
        height="256"
      />
      <h1
        class="text-xl md:text-4xl lg:text-5xl text-center font-bold mx-auto leading-tight mt-4 text-dark-coffee dark:text-white"
      >
        <span
          class="bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent"
          >Hola, Soy Alan Ortega,</span
        >
        Diseñador de Experiencias Web y Desarrollador Autodidacta.
      </h1>
      <p
        class="text-center text-dark-coffee dark:text-stone-300 text-sm md:text-lg font-semibold w-full md:w-[600px] mx-auto mt-4"
      >
        Explorando el Universo Digital con Creatividad, Proactividad y una
        Pasión Inextinguible por el Desarrollo Web.
      </p>
      <div class="flex justify-center gap-x-2 md:gap-x-4 mt-6">
        <NuxtLink
          class="bg-dark-coffee text-white dark:bg-white dark:text-dark-coffee text-xs md:text-lg font-bold py-2 px-4 md:py-4 md:px-8 rounded-full uppercase"
          href="/curriculum-vitae.pdf"
          target="_blank"
          download
        >
          Descargar CV
        </NuxtLink>
        <button
          class="border border-dark-coffee dark:border-white dark:text-white text-dark-coffee text-xs md:text-lg font-bold py-2 px-4 md:py-4 md:px-8 rounded-full uppercase"
          @click="scrollToSection('projects')"
        >
          Ver Proyectos
        </button>
      </div>
    </div>
  </section>
</template>
