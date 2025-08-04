<template>
  <div
    class="mx-auto flex justify-between items-center gap-[30px]"
    :class="[containerClasses, wrapperClass]"
  >
    <!-- Image column -->
    <div
      class="w-full lg:max-w-[52%] flex justify-center lg:justify-end relative order-1 lg:order-none"
    >
      <div
        class="w-full max-w-[754px] lg:max-w-[100%] rounded-[20px] flex items-center justify-center overflow-hidden"
      >
        <NuxtImg
          :src="props.imageSrc"
          :alt="props.imageAlt"
          :class="['w-full object-fit ssm:rounded-[20px]', props.imageHeight]"
        />
      </div>
      <!-- Slot -->
      <slot name="right" />
    </div>

    <!-- Content column -->
    <div class="flex-1 lg:max-w-[48%] order-2 lg:order-none">
      <SubTitleText
        v-if="props.subtitle"
        :text="props.subtitle"
        wrapperClass="mb-[5px] lg:mb-[20px] justify-center lg:justify-start"
      />
      <div
        v-if="props.title"
        class="mb-[15px] md:mb-[20px] lg:mb-[24px] text-center lg:text-start"
      >
        <TitleText
          :text="props.title"
          :highlightedWords="props.highlightedWords"
          :highlightClass="highlightClass"
          :class="props.titleClass"
        />
      </div>
      <p
        v-if="props.paragraph"
        class="paragraph text-center lg:text-start mb-[20px]"
      >
        {{ props.paragraph }}
      </p>
      <slot name="left" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const TitleText = defineAsyncComponent(
  () => import("~/components/text/titleText.vue")
);
const SubTitleText = defineAsyncComponent(
  () => import("~/components/text/subTitleText.vue")
);

// Props
const props = defineProps({
  title: { type: String, default: "" },
  subtitle: { type: String, default: "" },
  paragraph: { type: String, default: "" },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, default: "" },
  reverse: { type: Boolean, default: false },
  topImage: { type: Boolean, default: true },
  highlightedWords: { type: Array as () => string[], default: () => [] },
  titleClass: { type: String, default: "" },
  highlightClass: { type: String, default: "text-primary" },
  imageHeight: { type: String, default: "" },
  wrapperClass: { type: String, default: "" },
});

// compute flex direction: always col on mobile, but reverse or normal on lg
const containerClasses = computed(() =>
  props.reverse ? "flex-col lg:flex-row-reverse" : "flex-col lg:flex-row"
);
</script>
