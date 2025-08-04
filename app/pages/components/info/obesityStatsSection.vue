<template>
  <ClientOnly>
    <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
      <section class="py-12 md:py-20">
        <div
          class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-[30px]"
        >
          <!-- Left column -->
          <div class="flex-1 md:max-w-[48%]">
            <SubTitleText
              text="The obesity epidemic"
              wrapperClass="mb-[5px] lg:mb-[20px] justify-center md:justify-start"
            />
            <div
              class="mb-[15px] mb:mb-[20px] lg:mb-[24px] text-center md:text-start"
            >
              <TitleText
                text="Nearly 70% of U.S. adults are overweight."
                :highlightedWords="highlightedWords"
              />
            </div>
            <p class="paragraph text-center md:text-start mb-[20px]">
              Nearly 70% of adults in the U.S. struggle with being overweight,
              which can lead to a range of health issues—from diabetes to heart
              disease. Managing weight is not just about appearance; it’s about
              improving overall well-being and reducing long-term health risks.
            </p>
          </div>

          <!-- Right column -->
          <div
            class="w-full md:max-w-[52%] flex justify-center md:justify-end relative"
          >
            <div class="max-w-[86%] w-full rounded-[20px]">
              <NuxtImg
                src="/images/obesity-woman.jpg"
                alt="Overweight statistic"
                class="w-full object-cover object-[50%_50%] sm:object-[62%_50%] h-[330px] ssm:h-[400px] md:h-[600px] ssm:rounded-[20px]"
              />
            </div>
            <!-- Overlay cards -->
            <div
              class="absolute bottom-[-8%] left-[5%] ssm:top-[51px] ssm:left-0 flex flex-col gap-3"
            >
              <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
                <div
                  class="bg-white rounded-xl shadow px-[20px] py-[15px] ssm:px-[25px] ssm:py-[20px] md:px-[45px] md:py-[24px] flex items-center gap-2"
                >
                  <span
                    class="text-primary font-semibold text-[16px] ssm:text-[24px]"
                    >35%</span
                  >
                  <span
                    class="text-gray-700 font-normal text-[16px] ssm:text-[18px]"
                    >Overweight</span
                  >
                </div>
              </FadeInOnView>
              <FadeInOnView effect="fade-slide-up" :duration="800" :delay="200">
                <div
                  class="bg-white rounded-xl shadow px-[20px] py-[15px] ssm:px-[25px] ssm:py-[20px] md:px-[45px] md:py-[24px] flex items-center gap-2"
                >
                  <span
                    class="text-primary font-semibold text-[16px] ssm:text-[24px]"
                    >34%</span
                  >
                  <span
                    class="text-gray-700 font-normal text-[16px] ssm:text-[18px]"
                    >Obese</span
                  >
                </div>
              </FadeInOnView>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnView>
  </ClientOnly>
</template>
<script lang="ts" setup>
// Components
import FadeInOnView from "~/components/ui/fadeInOnView.vue";
const TitleText = defineAsyncComponent(
  () => import("~/components/text/titleText.vue")
);
const SubTitleText = defineAsyncComponent(
  () => import("~/components/text/subTitleText.vue")
);

// Variables
const highlightedWords = ["70%", "overweight"];
</script>
