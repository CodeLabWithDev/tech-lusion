<template>
  <section class="container">
    <div>
      <h1 class="text-3xl font-bold text-primary">Welcome (Protected)</h1>
      <p>This is the protected home page (index.vue)</p>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "main",
  middleware: "auth",
});

// Load the page data for each section here and store into stores
</script>
