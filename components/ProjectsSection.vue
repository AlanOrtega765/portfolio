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
        <Swiper
          ref="swiperRef"
          class="mt-10"
          :class="
            targetIsVisible
              ? 'animate-fade-right animate-ease-in-out animate-duration-1000 opacity-100'
              : 'opacity-0'
          "
          :modules="[SwiperEffectCoverflow]"
          :slides-per-view="1.2"
          :slides-per-group="1"
          :centered-slides="true"
          :loop="true"
          :effect="'coverflow'"
          :coverflow-effect="{
            depth: 300,
            slideShadows: false,
            rotate: 0,
            scale: 0.8,
            stretch: 100,
          }"
          :breakpoints="{
            1024: {
              slidesPerView: 1.5,
            },
            1440: {
              slidesPerView: 1.9,
              coverflowEffect: {
                stretch: 400,
              },
            },
          }"
        >
          <SwiperSlide
            class="group"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="relative group">
              <NuxtImg
                class="h-auto mx-auto rounded-xl md:rounded-3xl"
                :src="project.image"
                format="webp"
                width="1852"
                height="954"
                :loading="'lazy'"
              />
              <NuxtLink
                :href="project.url"
                target="_blank"
                class="absolute top-0 right-0 lg:top-4 lg:right-4 w-full h-full lg:w-fit lg:h-fit p-2 rounded-full lg:bg-[#1a1a18] lg:hidden lg:group-hover:block lg:opacity-60 lg:hover:opacity-90 transition-opacity"
              >
                <div class="hidden lg:block">
                  <Icon name="gravity-ui:link" size="30" />
                </div>
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          class="hidden lg:block absolute top-1/2 -translate-y-1/2 left-4 hover:scale-125 transition-transform z-10 text-dark-coffee dark:text-white"
          @click="slidePrev"
        >
          <Icon name="majesticons:chevron-left" size="50" />
        </button>
        <button
          class="hidden lg:block absolute top-1/2 -translate-y-1/2 right-4 hover:scale-125 transition-transform z-10 text-dark-coffee dark:text-white"
          @click="slideNext"
        >
          <Icon name="majesticons:chevron-right" size="50" />
        </button>
      </div>
    </div>
  </section>
</template>
