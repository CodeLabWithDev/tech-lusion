<template>
  <transition name="fade-slide-footer" appear>
    <footer class="pt-[60px] ssm:pt-[100px] pb-[40px]">
      <div class="container !px-[24px]">
        <div class="max-w-[550px] md:max-w-full mx-auto">
          <!-- Top -->
          <div class="flex flex-col lg:flex-row justify-between">
            <!-- left side -->
            <div class="min-w-[150px] max-w-[384px] ssm:mb-[60px] lg:mb-[0]">
              <NuxtLink to="/">
                <NuxtImg
                  :src="pageLogo"
                  alt="logo"
                  class="w-[181px] ssm:w-[217px] lg:w-[260px]"
                />
              </NuxtLink>

              <p
                class="text-[16px] text-neutral-600 font-normal leading-[1.4em] my-[20px]"
              >
                Transforming health with GLP-1 medications and innovative
                wellness solutions.
              </p>

              <div class="mt-[30px] h-[100px] flex items-center justify-start">
                <NuxtLink to="/">
                  <NuxtImg
                    :src="certificateBatch"
                    alt="logo"
                    width="73px"
                    height="79px"
                  />
                </NuxtLink>
              </div>
            </div>

            <!-- Divider -->
            <div
              class="h-[1px] bg-neutral-300 mt-[30px] mb-[30px] w-full ssm:hidden"
            ></div>

            <!-- Quick Links -->
            <div
              class="flex flex-col ssm:flex-row justify-between md:justify-start lg:justify-end items-stretch gap-[20px] ssm:gap-[30px] md:gap-[20px] lg:gap-[50px] space-y-[30px] flex-1 flex-wrap md:flex-nowrap"
            >
              <!-- newbodyrx -->
              <div class="flex flex-col gap-[20px] ssm:gap-[28px]">
                <div class="text-[20px] font-bold">
                  <p class="text-nowrap">
                    NewBody<sup class="text-primary"> RX </sup>
                  </p>
                </div>
                <ul
                  class="flex flex-col mr-[30px] lg:mr-[18px] 2xl:mr-[40px] gap-[20px] ssm:gap-[24px]"
                >
                  <li
                    v-for="link in newbodyrxLinks"
                    :key="link.label"
                    class="text-neutral-900 whitespace-nowrap text-[16px] font-[400] leading-[1.125em]"
                  >
                    <NuxtLink
                      :to="link.href"
                      class="text-neutral-900 hover:text-primary-hover transition-all duration-300 ease-in-out hover:translate-x-1 whitespace-nowrap text-[16px] font-[400] leading-[1.125em]"
                    >
                      {{ link.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- glp-1 -->
              <div class="flex flex-col gap-[20px] ssm:gap-[28px]">
                <div class="text-[20px] font-bold">
                  <p>GLP-1</p>
                </div>
                <ul
                  class="flex flex-col mr-[30px] lg:mr-[18px] 2xl:mr-[40px] gap-[20px] ssm:gap-[24px]"
                >
                  <li
                    v-for="(link, index) in glp1Links"
                    :key="link.label"
                    class="text-neutral-900 whitespace-nowrap text-[16px] font-[400] leading-[1.125em]"
                  >
                    <NuxtLink
                      :to="link.href"
                      :class="[
                        'text-neutral-900 hover:text-primary-hover transition-all duration-300 ease-in-out hover:translate-x-1 whitespace-nowrap text-[16px] font-[400] leading-[1.125em]',
                        index === 0 && index === 0 && '!text-primary',
                      ]"
                    >
                      {{ link.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- products -->
              <div class="flex flex-col gap-[20px] ssm:gap-[28px]">
                <div class="text-[20px] font-bold">
                  <p>Products</p>
                </div>
                <ul class="flex flex-col gap-[20px] ssm:gap-[24px]">
                  <li
                    v-for="link in productsLinks"
                    :key="link.label"
                    :class="{
                      'py-[10px] px-[14px] border border-primary bg-primary-light-opacity capitalize rounded-[10px] w-max min-w-[170px] ml-[-14px]':
                        link.sublinks,
                    }"
                  >
                    <template v-if="link.sublinks">
                      <p
                        class="text-primary text-[16px] font-normal leading-[1.8em] w-full hover:text-primary-hover transition-colors duration-300 mb-[8px]"
                      >
                        {{ link.label }}
                      </p>

                      <ul class="space-y-[12px]">
                        <li
                          v-for="sublink in link.sublinks"
                          :key="sublink.label"
                          class="leading-[1.125em]"
                        >
                          <NuxtLink
                            :to="sublink.href"
                            class="text-neutral-900 whitespace-nowrap text-[14px] font-[400] hover:text-primary-hover transition-all duration-300 ease-in-out"
                          >
                            {{ sublink.label }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </template>
                    <template v-else>
                      <NuxtLink
                        :to="link.href"
                        class="text-neutral-900 hover:text-primary-hover transition-all duration-300 ease-in-out hover:translate-x-1 whitespace-nowrap text-[16px] font-[400] leading-[1.125em] mr-[30px] lg:mr-[18px] 2xl:mr-[40px]"
                      >
                        {{ link.label }}
                      </NuxtLink>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div
            class="h-[1px] bg-neutral-300 mt-[30px] mb-[30px] w-full ssm:hidden"
          ></div>

          <!-- Legal Links -->
          <div class="flex justify-center items-center ssm:mt-[100px]">
            <ul
              class="flex items-center justify-center flex-wrap mb-0 gap-y-[10px] gap-x-[14px] lg:gap-x-[5px]"
            >
              <li
                v-for="link in legalLinks"
                :key="link.label"
                class="mb-0 text-neutral-900 whitespace-nowrap text-[14px] font-medium leading-[1.125em]"
              >
                <NuxtLink
                  :to="link.href"
                  class="text-neutral-900 hover:text-primary-hover transition-all duration-300 ease-in-out hover:scale-105 whitespace-nowrap text-[14px] font-medium leading-[1.125em]"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Divider -->
          <div class="h-[1px] bg-neutral-300 mt-[30px] mb-[30px] w-full"></div>

          <!-- Copyright -->
          <div class="flex justify-center items-center">
            <p class="text-[14px] font-medium leading-[1.6em] text-neutral-600">
              © 2025 NewBodyRx. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </transition>
</template>
<script lang="ts" setup>
// Images
const pageLogo = "/images/icons/logo.svg";
const certificateBatch = "/images/certificate-badge.png";

// Quick Links
const newbodyrxLinks = [
  {
    label: "GLP-1",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "LifeStyle",
    href: "/",
  },
  {
    label: "Learn",
    href: "/",
  },
  {
    label: "Contact Us",
    href: "/",
  },
];

// glp-1 Links
const glp1Links = [
  {
    label: "Get Started",
    href: "/",
  },
  {
    label: "What is GLP-1",
    href: "/",
  },
  {
    label: "GLP-1 Basics",
    href: "/",
  },
  {
    label: "GLP-1 Instructions",
    href: "/",
  },
  {
    label: "Dosing Calculator",
    href: "/",
  },
];

// products Links
const productsLinks = [
  {
    label: "GLP-1",
    href: "/",
  },
  {
    label: "Coming Soon!",
    href: "/",
    sublinks: [
      {
        label: "Anti Aging",
        href: "/",
      },
      {
        label: "Hair Loss",
        href: "/",
      },
      {
        label: "Hormones",
        href: "/",
      },
      {
        label: "Mood",
        href: "/",
      },
      {
        label: "Men's Health",
        href: "/",
      },
      {
        label: "Neuromodulation",
        href: "/",
      },
      {
        label: "Nitrous Oxide",
        href: "/",
      },
      {
        label: "Sleep",
        href: "/",
      },
    ],
  },
];

// Legal Links
const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/",
  },
  {
    label: "Privacy practices",
    href: "/",
  },
  {
    label: "Terms and conditions",
    href: "/",
  },
  {
    label: "Medical Consent",
    href: "/",
  },
  {
    label: "Bill of Rights",
    href: "/",
  },
  {
    label: "CA Residents",
    href: "/",
  },
];
</script>

<style scoped>
/* Footer transition animations */
.fade-slide-footer-enter-active,
.fade-slide-footer-leave-active {
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-footer-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-footer-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-slide-footer-enter-to,
.fade-slide-footer-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
