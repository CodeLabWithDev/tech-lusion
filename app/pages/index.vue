<template>
  <div>
    <PersonalCare />
    <ObesityStatsSection />
    <StudiesSection />
    <ShareGlp />
    <ContactForm />
  </div>
</template>

<script setup>
// Js Dependencies
import { defineAsyncComponent } from "vue";

// Components
const ContactForm = defineAsyncComponent(() =>
  import("./components/form/contactForm.vue")
);

const PersonalCare = defineAsyncComponent(() =>
  import("./components/info/personalCare.vue")
);

const ObesityStatsSection = defineAsyncComponent(() =>
  import("./components/info/obesityStatsSection.vue")
);

const StudiesSection = defineAsyncComponent(() =>
  import("./components/info/studiesSection.vue")
);

const ShareGlp = defineAsyncComponent(() =>
  import("./components/info/shareGlp.vue")
);

// Page Meta
definePageMeta({
  middleware: "auth",
  layoutTransition: {
    name: "slide-in",
  },
});

// Load the page data for each section here and store into stores
</script>
