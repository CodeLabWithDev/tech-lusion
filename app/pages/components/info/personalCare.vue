<template>
  <ClientOnly>
    <FadeInOnView effect="fade-slide-up" :duration="800" :delay="100">
      <section class="container py-global">
        <SubTitleText
          text="Personalized Care"
          wrapperClass="justify-center mb-[5px] lg:mb-[20px]"
        />
        <div
          class="max-w-[850px] mx-auto text-center mb-[15px] mb:mb-[20px] lg:mb-[24px]"
        >
          <TitleText
            text="Medically supervised weight loss made easy. Done from home, delivered to your door."
            :highlightedWords="highlightedWords"
          />
        </div>
        <p class="paragraph mb-[20px] text-center">
          Reduce appetite, curb cravings, lose weight.
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[16px]">
          <ProductsCard
            v-for="(product, index) in products"
            :key="index"
            :card-src="product.cardSrc"
            :title="product.title"
            :subtitle="product.subtitle"
            :link="product.link"
            :price="product.price"
            :button-type="product.buttonType"
          />
        </div>

        <div class="mt-[20px] mb:mt-[40px] mb-[20px]">
          <p
            class="!text-[12px] leading-[1.7em] !font-300 text-neutral-600 text-center lg:text-start"
          >
            *Prescription products require an online consultation with a health
            care provider who will determine if a prescription is appropriate
            for you.
          </p>
        </div>
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
const SubTitleText = defineAsyncComponent(
  () => import("~/components/text/subTitleText.vue")
);
const ProductsCard = defineAsyncComponent(
  () => import("~/components/cards/productsCard.vue")
);

// Variables
const highlightedWords = ["weight", "loss", "home", "door"];

// types
import type { Product } from "~/models/components";

// card data
const products: Product[] = [
  {
    cardSrc: "/images/product-1.jpg",
    title: "Compounded Semaglutide",
    subtitle:
      "Weekly injections, same active ingredient as Ozempic® and Wegovy®.",
    link: "/",
    price: "Starting at $299/mo",
    buttonType: "primary",
  },
  {
    cardSrc: "/images/product-2.jpg",
    title: "Compounded Tirzepatide",
    subtitle:
      "Weekly injections, same active ingredient as Mounjaro® and Zepbound®.",
    link: "/",
    price: "Starting at $349/mo",
    buttonType: "secondary",
  },
];
</script>
