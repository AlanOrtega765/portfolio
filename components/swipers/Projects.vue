<script setup lang="ts">
import type { Project } from "~/types";

defineProps<{
  projects: Project[];
  targetIsVisible: boolean;
}>();

const { swiperRef, slidePrev, slideNext } = useSwiperHelpers();
</script>

<template>
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
        slidesPerView: 2,
      },
    }"
  >
    <SwiperSlide class="group" v-for="project in projects" :key="project.id">
      <div class="relative group">
        <NuxtImg
          class="h-full w-auto mx-auto rounded-xl md:rounded-3xl"
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
    <SwipersButtonPrev @slide-prev="slidePrev" />
    <SwipersButtonNext @slide-next="slideNext" />
  </Swiper>
</template>
