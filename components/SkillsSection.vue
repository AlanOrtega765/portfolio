<script setup lang="ts">
const { target, targetIsVisible } = useTargetObserver();
</script>

<template>
  <section id="skills" class="py-20 lg:py-40 px-4 xl:px-0">
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
        class="relative text-4xl md:text-5xl font-bold w-fit mx-auto bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent"
      >
        Habilidades
      </h1>
      <h2
        class="text-center text-lg md:text-2xl font-medium mt-4 text-dark-coffee dark:text-white"
      >
        Las habilidades, herramientas y tecnologías que he utilizado:
      </h2>
      <SkillsGrid :target-is-visible="targetIsVisible" />
    </div>
  </section>
</template>
