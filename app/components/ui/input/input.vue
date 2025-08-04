<template>
  <div class="relative flex items-center bg-white rounded-full overflow-hidden">
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
      "
      type="email"
      placeholder="Enter your email"
      required
      class="w-full px-[24px] py-[8px] ssm:px-4 ssm:py-3 text-neutral-700 focus:outline-none placeholder:text-neutral-600 min-h-[50px] ssm:min-h-[72px]"
    />
    <!-- Slot for the button -->
    <slot name="prefix" />
  </div>
</template>

<script setup lang="ts">
// Props
defineProps<{
  modelValue: string;
}>();

// Emits
defineEmits(["update:modelValue"]);
</script>
