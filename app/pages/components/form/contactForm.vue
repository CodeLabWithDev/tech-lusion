<template>
  <ClientOnly>
    <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
      <section
        class="relative bg-primary-hover py-[60px] ssm:py-[80px] overflow-hidden"
      >
        <div class="container">
          <NuxtImg
            :src="bgImage"
            alt="rotating shape"
            width="293"
            height="293"
            class="absolute max-w-[293px] animate-spin-slow pointer-events-none -top-[262px] -left-[202px] max-[991px]:-top-[239px] max-[991px]:-left-[128px] max-[767px]:-left-[186px] max-[479px]:-left-[198px]"
          />
          <div
            class="flex flex-col lg:flex-row justify-between items-center gap-[40px] w-full"
          >
            <div
              class="max-w-[496px] lg:mr-[40px] w-full text-center lg:text-start z-1"
            >
              <h2 class="title text-neutral-100 max-w-[435px] mb-40px lg:mb-0">
                <span class="text-primary-2">Stay</span> in the
                <span class="text-primary-2">Loop</span> on Health &amp;
                Wellness.
              </h2>
              <p class="paragraph !text-neutral-100 max-w-[435px]">
                Be the first to know about new product launches, health &amp;
                wellness updates and cost savings opportunities. Sign up today!
              </p>
            </div>
            <div class="w-full">
              <form @submit.prevent="handleSubmit">
                <div
                  v-if="submitted"
                  class="bg-secondary-4 rounded-[16px] flex items-center justify-center text-primary text-[20px] p-[20px] my-[20px] font-semibold"
                >
                  Thanks for joining our newsletter.
                </div>
                <div v-else class="flex flex-col w-full gap-[15px]">
                  <InputWithButton v-model="email">
                    <template #prefix>
                      <div class="px-[8px] hidden ssm:block">
                        <LinkButton
                          text="Sign Up"
                          type="submit"
                          :float="false"
                          :loading="loading"
                          class="capitalize"
                        />
                      </div>
                    </template>
                  </InputWithButton>
                  <LinkButton
                    text="Sign Up"
                    class="capitalize !bg-white hover:!bg-white !text-neutral-800 ssm:!hidden"
                    type="submit"
                    :float="false"
                    :loading="loading"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeInOnView>
  </ClientOnly>
</template>

<script setup lang="ts">
// Js Dependencies
import { ref } from "vue";

// Components
import InputWithButton from "~/components/ui/input/input.vue";
import LinkButton from "~/components/ui/buttons/linkButton.vue";
import FadeInOnView from "~/components/ui/fadeInOnView.vue";

// Images
const bgImage = "/images/bg-image.svg";

// Variables
const email = ref("");
const loading = ref(false);
const submitted = ref(false);

// Methods
const handleSubmit = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    submitted.value = true;
    email.value = "";
  }, 1500);
};
</script>
