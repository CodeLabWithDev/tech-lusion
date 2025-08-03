<template>
  <NuxtLink
    :to="props.href"
    :target="props.target"
    :class="[
      'btn-base',
      variantClass,
      sizeClasses[props.size ?? 'medium'],
      props.disabled && 'btn-disabled',
      'btn-hover-float',
      props.class
    ]"
    :aria-disabled="props.disabled"
    :tabindex="props.disabled ? -1 : 0"
  >
    {{ props.text }}
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { LinkButtonProps, Size } from '~/models/components';

const props = defineProps<LinkButtonProps>();

// Size mapping
const sizeClasses: Record<Size, string> = {
  small: 'btn-sm',
  medium: 'btn-md',
  large: 'btn-lg',
};

// Variants with outline options
const variantClass = computed(() => {
  const variant = props.variant ?? 'primary';
  const isOutline = props.outline ?? false;

  if (variant === 'primary') {
    return isOutline ? 'btn-primary-outline' : 'btn-primary';
  }

  if (variant === 'secondary') {
    return isOutline ? 'btn-secondary-outline' : 'btn-secondary';
  }

  return '';
});
</script>
