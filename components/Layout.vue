<script setup lang="ts">
import Footer from './layouts/Footer.vue'
import Header from './layouts/Header.vue'
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
