<template>
  <ClientOnly>
    <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
      <section class="container py-global">
        <SubTitleText
          text="The studies are in"
          wrapperClass="justify-center mb-[5px] lg:mb-[20px]"
        />
        <div
          class="max-w-[850px] mx-auto text-center mb-[15px] mb:mb-[20px] lg:mb-[24px]"
        >
          <TitleText
            text="Lose Weight. Improve Health. Gain Confidence."
            :highlightedWords="highlightedWords"
          />
        </div>
        <p class="paragraph mb-[20px] text-center">
          The conversation is no longer about will power. GLP-1 is the
          data-backed proven solution.
        </p>
        <TwoColumnPanel
          title="Compounded Semaglutide"
          paragraph="Semaglutide is highly effective for weight loss, mimicking the GLP-1 hormone to curb appetite and regulate blood sugar. Studies show consistent weight loss, with 33% of patients losing 20% or more body weight."
          imageSrc="/images/studies-1.png"
          imageAlt="Overweight statistic"
          :highlightedWords="['semaglutide']"
          titleClass="!text-[22px] lg:!text-[28px] !font-outfit !font-semibold"
          wrapperClass="pb-[40px] lg:pt-[40px]"
        >
          <!-- Optional extra left content -->
          <template #left>
            <div
              class="w-full flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[24px]"
            >
              <LinkButton
                text="Get Started"
                variant="primary"
                to="/"
                class="w-full lg:w-max"
              />
              <LinkButton
                text="Learn More"
                variant="primary"
                to="/"
                class="w-full lg:w-max"
                outline
              />
            </div>
          </template>
        </TwoColumnPanel>
        <TwoColumnPanel
          title="Compounded Tirzepatide"
          paragraph="Tirzepatide targets both GLP-1 and GIP receptors, supporting appetite control and insulin sensitivity. This dual action is even more effective for weight loss with 50% of patients losing 20% or more body weight."
          imageSrc="/images/studies-2.png"
          imageAlt="Overweight statistic"
          :highlightedWords="['tirzepatide']"
          :reverse="true"
          titleClass="!text-[22px] lg:!text-[28px] !font-outfit !font-semibold"
          highlightClass="text-primary-2"
          wrapperClass="lg:pt-[40px]"
        >
          <!-- Optional extra left content -->
          <template #left>
            <div
              class="w-full flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[24px]"
            >
              <LinkButton
                text="Get Started"
                variant="secondary"
                to="/"
                class="w-full lg:w-max"
              />
              <LinkButton
                text="Learn More"
                variant="secondary"
                to="/"
                class="w-full lg:w-max"
                outline
              />
            </div>
          </template>
        </TwoColumnPanel>
        <div class="mb:mt-[40px] mb-[20px]">
          <p
            class="!text-[12px] leading-[1.7em] !font-300 text-neutral-600 text-center lg:text-start"
          >
            Clinical trial data.
          </p>
        </div>
      </section>
    </FadeInOnView>
  </ClientOnly>
</template>
<script setup lang="ts">
// Components
import FadeInOnView from "~/components/ui/fadeInOnView.vue";
import LinkButton from "~/components/ui/buttons/linkButton.vue";
const TitleText = defineAsyncComponent(
  () => import("~/components/text/titleText.vue")
);
const SubTitleText = defineAsyncComponent(
  () => import("~/components/text/subTitleText.vue")
);
const TwoColumnPanel = defineAsyncComponent(
  () => import("~/components/panels/twoColumnPanel.vue")
);

// Variables
const highlightedWords = ["Weight", "Health", "Confidence"];
</script>
