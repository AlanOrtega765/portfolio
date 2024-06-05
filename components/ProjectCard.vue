<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <article
    class="flex flex-col bg-zinc-900 rounded-xl"
    v-for="project in projects"
    :key="project.id"
  >
    <NuxtImg
      class="h-auto w-full rounded-t-xl"
      :src="project.image"
      format="webp"
      width="800"
      height="450"
      :loading="'lazy'"
    />

    <div class="flex flex-col flex-grow p-4">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">{{ project.name }}</h2>
        <ul class="flex items-center gap-3">
          <li v-for="(icon, index) in project.icons" :key="index">
            <Icon :name="icon" size="24" />
          </li>
        </ul>
      </div>
      <div class="h-px w-full bg-slate-300/5 my-4"></div>
      <div class="flex flex-col flex-grow justify-between">
        <p class="font-medium">{{ project.description }}</p>
        <NuxtLink
          class="block bg-white hover:bg-white/90 transition-colors font-bold text-zinc-900 text-center py-2 uppercase rounded-md mt-10"
          :href="project.url"
          target="__blank"
          >Ver sitio web</NuxtLink
        >
      </div>
    </div>
  </article>
</template>
