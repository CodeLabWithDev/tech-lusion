<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
// Js Dependencies
import { defineAsyncComponent } from "vue";

// Components
const Header = defineAsyncComponent(
  () => import("~/layouts/header/header.vue")
);
const Footer = defineAsyncComponent(
  () => import("~/layouts/footer/footer.vue")
);
</script>
