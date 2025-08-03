<template>
  <transition name="fade-slide-header" appear>
    <header>
      <div class="py-[23px] ssm:py-[26px] md:py-[28px] lg:py-[34px]">
        <div class="container max-w-[1248px]">
          <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="header-right">
              <NuxtLink to="/" class="w-[120px] ssm:w-[150px] md:w-[200px]">
                <NuxtImg
                  :src="pageLogo"
                  alt="logo"
                  width="100%"
                  class="w-[120px] ssm:w-[150px] md:w-[200px]"
                />
              </NuxtLink>
            </div>

            <!-- Navigation -->
            <div
              class="nav-menu hidden lg:flex items-center gap-[32px] mr-[32px]"
            >
              <div
                v-for="(menu, index) in menus"
                :key="index"
                class="relative"
                @mouseenter="activeDropdown = index"
                @mouseleave="activeDropdown = null"
              >
                <!-- Menu title and icon -->
                <div
                  class="flex items-center cursor-pointer transition-all duration-300 group"
                >
                  <template v-if="menu.submenus">
                    <span
                      :class="[
                        'nav-link text-neutral-800 transition-all duration-300 hover:text-primary-hover focus:text-primary-hover active:text-primary-hover',
                        `${activeDropdown === index && 'text-primary-hover'}`,
                      ]"
                    >
                      {{ menu.title }}
                    </span>
                    <svg
                      :class="[
                        'ml-1 w-4 h-4 transition-all duration-300 group-hover:-rotate-180 group-hover:stroke-primary',
                        `${
                          activeDropdown === index &&
                          '-rotate-180 stroke-primary'
                        }`,
                      ]"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </template>

                  <template v-else>
                    <NuxtLink
                      :to="menu.link"
                      class="nav-link text-neutral-800 hover:text-primary-hover focus:text-primary-hover active:text-primary-hover transition-colors duration-300"
                    >
                      {{ menu.title }}
                    </NuxtLink>
                  </template>
                </div>

                <!-- Dropdown menu -->
                <transition name="fade-dropdown">
                  <div
                    v-if="activeDropdown === index && menu.submenus"
                    class="absolute top-full left-1/2 -translate-x-1/2 w-max bg-white z-50 pt-[30px]"
                  >
                    <div
                      class="px-[40px] pt-[60px] pb-[45px] flex justify-between gap-[40px] shadow-[0_4px_22px_var(--color-shadow-long)] rounded-[18px] border border-neutral-300"
                    >
                      <div
                        v-for="(category, catIndex) in menu.submenus"
                        :key="catIndex"
                        :class="{
                          'py-[10px] px-[14px] border border-primary bg-primary-light-opacity mt-[-14px] capitalize rounded-[10px] w-full min-w-[170px]':
                            category.items,
                        }"
                      >
                        <template v-if="category.items">
                          <span
                            class="text-primary text-[16px] font-normal leading-[1.125em] w-full"
                          >
                            {{ category.category }}
                          </span>
                          <ul class="mr-[18px] mt-2">
                            <li
                              v-for="(sub, subIndex) in category.items"
                              :key="subIndex"
                              class="mb-0"
                            >
                              <NuxtLink
                                :to="sub.link"
                                class="text-[14px] leading-[1.125em] text-neutral-900 hover:text-primary-hover transition-colors"
                              >
                                {{ sub.title }}
                              </NuxtLink>
                            </li>
                          </ul>
                        </template>
                        <template v-else>
                          <NuxtLink
                            :to="category.link"
                            class="text-neutral-800 hover:text-primary-hover text-[16px] font-normal leading-[1.125em] transition-colors duration-300 whitespace-nowrap"
                          >
                            {{ category.category }}
                          </NuxtLink>
                        </template>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <!-- CTA + Mobile Menu Button -->
            <div class="header-left flex items-center">
              <linkButton
                href="/"
                text="get started"
                class="capitalize !py-[16px] !px-[26px] !hidden md:!block"
                size="small"
              />
              <button
                @click="isMenuOpen = !isMenuOpen"
                class="ml-4 lg:hidden w-[40px] h-[40px] bg-primary rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out"
              >
                <div class="relative w-[20px] h-[18px]">
                  <span
                    :class="[
                      'block absolute top-0 left-0 h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
                      isMenuOpen ? 'rotate-45 top-[8px]' : '',
                    ]"
                  ></span>
                  <span
                    :class="[
                      'block absolute top-[8px] left-0 h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
                      isMenuOpen ? 'opacity-0' : '',
                    ]"
                  ></span>
                  <span
                    :class="[
                      'block absolute bottom-0 left-0 h-[2px] w-full bg-white rounded transition-all duration-300 ease-in-out',
                      isMenuOpen ? '-rotate-45 bottom-[8px]' : '',
                    ]"
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay -->
      <div
        v-show="isMenuOpen"
        class="fixed inset-0 z-40 transition-opacity duration-300 ease-in-out lg:hidden"
        @click="isMenuOpen = false"
      ></div>

      <!-- Mobile menu -->
      <div
        class="fixed top-[86px] left-0 w-full h-full bg-neutral-100 z-50 transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden p-[16px] ssm:p-[24px]"
        :class="{
          '-translate-x-full': !isMenuOpen,
          'translate-x-0': isMenuOpen,
        }"
      >
        <!-- Content -->
        <ul class="space-y-[32px]">
          <li v-for="(menu, index) in menus" :key="index">
            <div
              @click="toggleSubmenu(index)"
              class="flex justify-between items-center w-max group text-neutral-800"
            >
              <template v-if="menu.link">
                <NuxtLink
                  :to="menu.link"
                  @click="isMenuOpen = false"
                  class="nav-link cursor-pointer hover:text-primary-hover focus:text-primary-hover active:text-primary-hover transition-colors duration-300"
                  >{{ menu.title }}</NuxtLink
                >
              </template>
              <template v-else>
                <div class="flex items-center">
                  <span
                    :class="[
                      'nav-linktransition-all duration-300 hover:text-primary-hover focus:text-primary-hover active:text-primary-hover',
                      `${openIndex === index && 'text-primary-hover'}`,
                    ]"
                    >{{ menu.title }}</span
                  >
                  <svg
                    v-if="menu.submenus"
                    class="w-4 h-4 ml-[6px] transition-transform duration-300 group-hover:-rotate-180 group-hover:stroke-primary"
                    :class="{
                      '-rotate-180 stroke-primary': openIndex === index,
                    }"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </template>
            </div>

            <transition name="slide-menu">
              <div
                v-if="openIndex === index && menu.submenus"
                class="space-y-[20px] w-max ml-[20px]"
              >
                <div
                  v-for="(category, catIndex) in menu.submenus"
                  :key="catIndex"
                  :class="{
                    'py-[10px] px-[14px] border border-primary bg-primary-light-opacity capitalize rounded-[10px] w-full min-w-[170px]':
                      category.items,
                  }"
                >
                  <template v-if="category.items">
                    <span
                      class="text-primary text-[16px] font-normal leading-[1.125em] w-full"
                    >
                      {{ category.category }}
                    </span>
                    <ul class="ml-3 mt-2">
                      <li
                        v-for="(sub, subIndex) in category.items"
                        :key="subIndex"
                        class="mb-0"
                      >
                        <NuxtLink
                          :to="sub.link"
                          class="text-[14px] leading-[1.125em] text-neutral-900 hover:text-primary-hover focus:text-primary-hover active:text-primary-hover transition-colors duration-300"
                          @click="isMenuOpen = false"
                        >
                          {{ sub.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>
                  <template v-else>
                    <NuxtLink
                      :to="category.link"
                      class="text-neutral-600 hover:text-primary-hover focus:text-primary-hover active:text-primary-hover text-[16px] font-normal leading-[1.125em] transition-colors duration-300 whitespace-nowrap mb-0"
                      @click="isMenuOpen = false"
                    >
                      {{ category.category }}
                    </NuxtLink>
                  </template>
                </div>
              </div>
            </transition>
          </li>
        </ul>

        <div class="mt-[60px] py-[16px]">
          <linkButton
            href="/"
            text="get started"
            class="capitalize !py-[16px] !px-[26px] md:hidden !w-full"
            size="small"
          />
        </div>
      </div>
    </header>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";
import linkButton from "~/components/ui/buttons/linkButton.vue";

const isMenuOpen = ref(false);
const openIndex = ref<number | null>(null);
const activeDropdown = ref<number | null>(null);

const pageLogo = "/images/icons/logo.svg";

const toggleSubmenu = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const menus = [
  { title: "GLP-1", link: "/" },
  {
    title: "Products",
    submenus: [
      { category: "GLP-1", link: "/" },
      {
        category: "Coming Soon!",
        items: [
          { title: "Anti Aging", link: "/" },
          { title: "Hair Loss", link: "/" },
          { title: "Hormones", link: "/" },
          { title: "Mood", link: "/" },
          { title: "Men's Health", link: "/" },
          { title: "Neuromodulation", link: "/" },
          { title: "Nitrous Oxide", link: "/" },
          { title: "Sleep", link: "/" },
        ],
      },
    ],
  },
  { title: "Learn", link: "/" },
];
</script>

<style scoped>
.fade-slide-header-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-slide-header-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-slide-header-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-dropdown-enter-active,
.fade-dropdown-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-dropdown-enter-from,
.fade-dropdown-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-dropdown-enter-to,
.fade-dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  overflow: hidden;
}
.slide-menu-enter-from,
.slide-menu-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-menu-enter-to,
.slide-menu-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>
