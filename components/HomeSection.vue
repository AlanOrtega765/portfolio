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
  <section
    id="home"
    class="flex justify-center items-center h-[100dvh] px-4 lg:px-0"
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
        src="/img/person-animated.jpg"
        format="webp"
        loading="lazy"
        width="256"
        height="256"
      />
      <h1
        class="text-xl lg:text-5xl text-center font-bold mx-auto leading-tight mt-4 text-dark-coffee dark:text-white"
      >
        <span
          class="bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent"
          >Hola, Soy Alan Ortega,</span
        >
        Diseñador de Experiencias Web y Desarrollador Autodidacta.
      </h1>
      <p
        class="text-center text-dark-coffee dark:text-stone-300 text-sm lg:text-lg font-semibold w-full lg:w-[600px] mx-auto mt-4"
      >
        Explorando el Universo Digital con Creatividad, Proactividad y una
        Pasión Inextinguible por el Desarrollo Web.
      </p>
      <div class="flex justify-center gap-x-2 lg:gap-x-4 mt-6">
        <button
          class="bg-dark-coffee text-white dark:bg-white dark:text-dark-coffee text-xs lg:text-lg font-bold py-2 px-4 lg:py-4 lg:px-8 rounded-full uppercase"
        >
          Descargar CV
        </button>
        <button
          class="border border-dark-coffee dark:border-white dark:text-white text-dark-coffee text-xs lg:text-lg font-bold py-2 px-4 lg:py-4 lg:px-8 rounded-full uppercase"
        >
          Ver Proyectos
        </button>
      </div>
    </div>
  </section>
</template>
