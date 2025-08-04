<script setup lang="ts">
import { ref, computed } from "vue";
import useInView from "~/composables/useInView";

const props = defineProps({
  effect: { type: String, default: "fade-slide-up" }, // supports: fade-slide-up, fade-slide-down, fade-slide-left, fade-slide-right
  duration: { type: Number, default: 800 }, // transition duration in ms
  delay: { type: Number, default: 0 }, // transition delay in ms
});

// create a ref to the container div
const container = ref<HTMLElement | null>(null);

// call composable to observe visibility
const { isVisible } = useInView(container);

// dynamically compute classes based on effect & isVisible
const transitionClasses = computed(() => {
  const base = "opacity-0 transform transition ease-out";
  const visible = "opacity-100";

  switch (props.effect) {
    case "fade-slide-up":
      return isVisible.value
        ? `${visible} translate-y-0`
        : `${base} translate-y-6`;
    case "fade-slide-down":
      return isVisible.value
        ? `${visible} translate-y-0`
        : `${base} -translate-y-6`;
    case "fade-slide-left":
      return isVisible.value
        ? `${visible} translate-x-0`
        : `${base} -translate-x-6`;
    case "fade-slide-right":
      return isVisible.value
        ? `${visible} translate-x-0`
        : `${base} translate-x-6`;
    default:
      return isVisible.value ? visible : base;
  }
});
</script>

<template>
  <div ref="container">
    <div
      :class="transitionClasses"
      :style="{
        transitionDuration: props.duration + 'ms',
        transitionDelay: props.delay + 'ms',
      }"
    >
      <slot />
    </div>
  </div>
</template>
