<template>
  <div :class="`flex items-center ${wrapperClass}`">
    <div
      class="hidden lg:block bg-neutral-400 w-full max-w-[43px] h-[2px] mr-[20px]"
    />
    <span class="subtitle" v-bind="$attrs">
      {{ text }}
    </span>
  </div>
</template>
<script setup>
defineProps({
  text: String,
  wrapperClass: {
    type: String,
    default: "",
  },
});
</script>
