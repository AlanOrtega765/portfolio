<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';

const swiperRef = ref();
const target = ref(null);
const targetIsVisible = ref(false);

const projects = ref([
  {
    id: 1,
    image: '/img/projects/project-1.png',
    url: 'https://movies-hub-nuxt.netlify.app/',
  },
  {
    id: 2,
    image: '/img/projects/project-2.png',
    url: 'https://recintos-deportivos-uta.netlify.app/',
  },
  {
    id: 3,
    image: '/img/projects/project-3.png',
    url: 'https://tic-tac-toe-nuxt.netlify.app',
  },
  { id: 4, image: '/img/projects/project-4.png', url: '#' },
  {
    id: 5,
    image: '/img/projects/project-5.png',
    url: 'https://jadoo-nuxt.netlify.app/',
  },
]);

const slidePrev = () => swiperRef.value.$el.swiper.slidePrev();
const slideNext = () => swiperRef.value.$el.swiper.slideNext();

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    return (targetIsVisible.value = isIntersecting);
  }
});
</script>

<template>
  <section id="projects" class="py-40 bg-[#262626]">
    <div
      ref="target"
      :class="
        targetIsVisible
          ? 'animate-fade-up animate-ease-in-out animate-duration-1000 opacity-100'
          : 'opacity-0'
      "
    >
      <h1
        class="relative text-5xl font-bold w-fit mx-auto bg-gradient-to-r from-[#a600ff] vi-[#ff00e8] to-[#ff8000] bg-clip-text text-transparent pb-1"
      >
        Proyectos
      </h1>
      <h2 class="text-center text-2xl font-medium mt-4">
        Aquí hay un resumen de mis proyectos desarrollados:
      </h2>
      <div class="relative">
        <Swiper
          ref="swiperRef"
          class="container mx-auto mt-10"
          :class="
            targetIsVisible
              ? 'animate-fade-right animate-ease-in-out animate-duration-1000 opacity-100'
              : 'opacity-0'
          "
          :modules="[SwiperEffectCoverflow]"
          :slides-per-view="1.5"
          :slides-per-group="1"
          :centered-slides="true"
          :loop="true"
          :effect="'coverflow'"
          :coverflow-effect="{
            depth: 300,
            slideShadows: false,
            rotate: 0,
            scale: 0.8,
            stretch: 550,
          }"
        >
          <SwiperSlide
            class="group"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="relative group">
              <NuxtImg
                class="relative w-[1024px] h-auto mx-auto rounded-3xl"
                :src="project.image"
                format="webp"
                width="1852"
                height="954"
                :loading="'lazy'"
              />
              <NuxtLink
                :href="project.url"
                target="_blank"
                class="absolute top-4 right-4 p-2 rounded-full bg-[#1a1a18] hidden group-hover:block opacity-60 hover:opacity-90 transition-opacity"
              >
                <Icon name="gravity-ui:link" size="30" />
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          class="absolute top-1/2 -translate-y-1/2 left-4 hover:scale-125 transition-transform z-10"
          @click="slidePrev"
        >
          <Icon name="majesticons:chevron-left" size="50" />
        </button>
        <button
          class="absolute top-1/2 -translate-y-1/2 right-4 hover:scale-125 transition-transform z-10"
          @click="slideNext"
        >
          <Icon name="majesticons:chevron-right" size="50" />
        </button>
      </div>
    </div>
  </section>
</template>
