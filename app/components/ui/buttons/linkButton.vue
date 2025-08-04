<template>
  <component
    :is="props.href ? NuxtLink : 'button'"
    :to="props.href"
    :target="props.target"
    :type="props.href ? undefined : props.type"
    :class="[
      'btn-base',
      variantClass,
      sizeClasses[props.size ?? 'medium'],
      (props.disabled || props.loading) && 'btn-disabled',
      props.float ? 'btn-hover-float' : '',
      props.class,
    ]"
    :aria-disabled="props.disabled || props.loading"
    :tabindex="props.disabled || props.loading ? -1 : 0"
    :disabled="!props.href && (props.disabled || props.loading)"
    v-bind="$attrs"
  >
    <span
      class="truncate w-full text-ellipsis overflow-hidden whitespace-nowrap"
    >
      {{ props.loading ? "Please wait" : props.text }}
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { NuxtLink } from "#components";
import type { LinkButtonProps, Size } from "~/models/components.ts";

const props = withDefaults(defineProps<LinkButtonProps>(), {
  float: true,
  size: "medium",
  outline: false,
  disabled: false,
  loading: false,
  type: "button",
});

// Size mapping
const sizeClasses: Record<Size, string> = {
  small: "btn-sm",
  medium: "btn-md",
  large: "btn-lg",
};

// Variants with outline options
const variantClass = computed(() => {
  const variant = props.variant ?? "primary";
  const isOutline = props.outline ?? false;

  if (variant === "primary") {
    return isOutline ? "btn-primary-outline" : "btn-primary";
  }

  if (variant === "secondary") {
    return isOutline ? "btn-secondary-outline" : "btn-secondary";
  }

  return "";
});
</script>

<style scoped>
/* Optional custom styles can be added here */
</style>
