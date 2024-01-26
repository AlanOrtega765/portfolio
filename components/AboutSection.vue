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
    id="about"
    class="flex items-center justify-center py-20 md:py-40 bg-gray-100 dark:bg-[#262626] px-4"
  >
    <div
      ref="target"
      class="container mx-auto text-center"
      :class="
        targetIsVisible
          ? 'animate-fade-up animate-ease-in-out animate-duration-1000 opacity-100'
          : 'opacity-0'
      "
    >
      <h1
        class="relative text-4xl md:text-5xl font-bold w-fit mx-auto bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent"
      >
        Sobre Mí
      </h1>
      <p
        class="md:text-2xl text-dark-coffee dark:text-white font-medium mt-10 max-w-screen-xl mx-auto"
        :class="
          targetIsVisible
            ? 'animate-fade-right animate-ease-in-out animate-duration-1000 opacity-100'
            : 'opacity-0'
        "
      >
        Soy un apasionado desarrollador web con un fuerte compromiso en la
        creación de sitios web estéticamente atractivos y funcionales. Mi
        fascinación por el desarrollo va más allá del código, ya que encuentro
        inspiración en la creación de experiencias visuales impactantes. Además
        de mi dedicación al mundo digital, soy un entusiasta del ejercicio
        físico, encontrando un equilibrio entre el mundo virtual y el bienestar
        físico. Mi búsqueda constante de conocimiento me impulsa a explorar y
        adoptar nuevas tecnologías web, siempre buscando mejorar el rendimiento
        y la experiencia del usuario. Con cada proyecto, me esfuerzo por
        fusionar la creatividad con la eficiencia técnica, creando soluciones
        que no solo satisfacen las necesidades del cliente, sino que también
        elevan el estándar de la experiencia en línea.
      </p>
    </div>
  </section>
</template>
