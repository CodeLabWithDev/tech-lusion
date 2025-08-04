<template>
  <ClientOnly>
    <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
      <section class="container py-global">
        <TwoColumnPanel
          subtitle="Share GLP-1, Save Big"
          title="Unlock Savings and Opportunities with GLP-1"
          imageSrc="/images/share-glp-1.jpg"
          imageAlt="Overweight statistic"
          :highlightedWords="['savings', 'opportunities']"
          :reverse="true"
          imageHeight="h-full ssm:h-[650px] !object-cover"
          wrapperClass="lg:flex-row"
        >
          <!-- Optional extra left content -->
          <template #left>
            <div
              class="w-full flex items-start gap-[10px] lg:gap-[12px] mt-[10px]"
              v-for="list in checkList"
            >
              <NuxtImg
                src="/images/icons/check-primary.svg"
                alt="checked icon"
                width="64px"
                height="64px"
                class="object-cover rounded-full mr-[8px] ssm:mr-[10px]"
              />

              <div>
                <h3 class="text-[22px]">
                  Buy Quarterly – save over the monthly fees
                </h3>
                <TitleText
                  :text="list.description"
                  :highlightedWords="list.highlightedWords"
                  highlightClass="text-primary font-semibold"
                  class="paragraph !text-[16px] md:!text-[18px] !leading-[1.5em] md:!leading-[1.833em] !font-light !font-outfit"
                />
              </div>
            </div>
          </template>
        </TwoColumnPanel>
      </section>
    </FadeInOnView>
  </ClientOnly>
</template>
<script setup lang="ts">
// Components
import FadeInOnView from "~/components/ui/fadeInOnView.vue";

const TitleText = defineAsyncComponent(
  () => import("~/components/text/titleText.vue")
);

const TwoColumnPanel = defineAsyncComponent(
  () => import("~/components/panels/twoColumnPanel.vue")
);

// Variables
const checkList = [
  {
    title: "Buy Quarterly – save over the monthly fees",
    description: "Refer to earn discounts or even FREE products/services.",
    highlightedWords: ["FREE"],
  },
  {
    title: "Bulk Sales for Clinics",
    description: "Special pricing for medical providers managing patient care.",
    highlightedWords: [],
  },
];
</script>
