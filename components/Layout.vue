<script setup lang="ts">
import type { Link } from "~/types";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";

const links = ref<Link[]>([
  { text: "Inicio", section: "home" },
  { text: "Sobre mí", section: "about" },
  { text: "Habilidades", section: "skills" },
  { text: "Proyectos", section: "projects" },
  { text: "Contacto", section: "contact" },
]);
</script>

<template>
  <div>
    <Header :links="links" />
    <main>
      <slot />
    </main>
    <Footer :links="links" />
  </div>
</template>
