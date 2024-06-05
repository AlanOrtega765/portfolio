<script setup lang="ts">
import { projects } from '@/constants'
const { target, targetIsVisible } = useTargetObserver()
</script>

<template>
  <section id="projects" class="py-20 lg:py-40 bg-gray-100 dark:bg-[#262626]">
    <div
      ref="target"
      :class="
        targetIsVisible
          ? 'animate-fade-up animate-ease-in-out animate-duration-1000 opacity-100'
          : 'opacity-0'
      "
    >
      <h1
        class="relative text-4xl md:text-5xl font-bold w-fit mx-auto bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent pb-1"
      >
        Proyectos
      </h1>
      <h2
        class="text-center text-lg md:text-2xl font-medium mt-4 text-dark-coffee dark:text-white"
      >
        Aquí hay un resumen de mis proyectos desarrollados:
      </h2>
      <div class="relative grid grid-cols-3 gap-6 container mx-auto mt-10">
        <ProjectCard :projects="projects" />
      </div>
    </div>
  </section>
</template>
