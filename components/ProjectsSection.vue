<script setup lang="ts">
import type { Project } from "~/types";

const { target, targetIsVisible } = useTargetObserver();

const projects = ref<Project[]>([
  {
    id: 1,
    image: "/img/projects/project-1.webp",
    url: "https://movies-hub-nuxt.netlify.app/",
  },
  {
    id: 2,
    image: "/img/projects/project-2.webp",
    url: "https://tic-tac-toe-nuxt.netlify.app",
  },
  {
    id: 3,
    image: "/img/projects/project-3.webp",
    url: "https://appolly-app.netlify.app/",
  },
  {
    id: 4,
    image: "/img/projects/project-4.webp",
    url: "https://jadoo-nuxt.netlify.app/",
  },
]);
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
      <div class="relative">
        <SwipersProjects
          :projects="projects"
          :target-is-visible="targetIsVisible"
        />
      </div>
    </div>
  </section>
</template>
