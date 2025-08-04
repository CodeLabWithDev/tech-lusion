<template>
  <div class="bg-white rounded-2xl overflow-hidden flex flex-col">
    <NuxtLink :to="link" class="relative block aspect-[4/3]">
      <NuxtImg
        :src="cardSrc"
        alt="product image"
        class="w-full h-full object-cover rounded-[18px]"
      />
      <div
        v-if="price"
        class="absolute top-3 right-3 bg-white text-gray-800 text-[15px] ssm:text-[16px] px-[15px] ssm:px-[24px] py-[10px] font-normal leading-[1.125em] rounded-full"
      >
        {{ price }}
      </div>
    </NuxtLink>

    <div
      class="flex flex-col flex-1 justify-between pt-[10px] mb:pt-[32px] text-center"
    >
      <div>
        <h3
          class="text-[20px] ssm:text-[22px] mb:text-[24px] font-semibold truncate mb-[3px] ssm:mb-[6px] md:mb-[10px] lg:mb-[13px]"
        >
          {{ title }}
        </h3>
        <p class="text-gray-500 paragraph line-clamp-2">
          {{ subtitle }}
        </p>
      </div>

      <div v-if="link" class="mt-4">
        <LinkButton
          :text="'Get Started'"
          :variant="buttonType"
          :to="link"
          class="w-full ssm:w-max"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import LinkButton from "~/components/ui/buttons/linkButton.vue";

defineProps<{
  cardSrc: string;
  title: string;
  subtitle?: string;
  link: string;
  price?: string;
  buttonType?: "primary" | "secondary";
}>();
</script>
