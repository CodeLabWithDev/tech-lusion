<template>
  <div class="min-h-screen">
    <Header />
    <transition name="fade-main" appear>
      <main>
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
const Header = defineAsyncComponent(
  () => import("~/layouts/header/header.vue")
);
const Footer = defineAsyncComponent(
  () => import("~/layouts/footer/footer.vue")
);
</script>
<style scoped>
.fade-main-enter-active,
.fade-main-leave-active {
  transition: opacity 0.5s;
}
.fade-main-enter-from,
.fade-main-leave-to {
  opacity: 0;
}
.fade-main-enter-to,
.fade-main-leave-from {
  opacity: 1;
}
</style>
