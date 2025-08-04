<template>
  <h2 class="title" v-html="formattedText" v-bind="$attrs" />
</template>

<script setup>
const props = defineProps({
  text: String,
  highlightedWords: {
    type: Array,
    default: () => [],
  },
  highlightClass: {
    type: String,
    default: "text-primary",
  },
});

const formattedText = computed(() => {
  return props.text
    .split(/(\s+|\.)/)
    .filter(Boolean)
    .map((word) => {
      // Highlight the word if it's in the highlightedWords list
      if (props.highlightedWords.includes(word)) {
        return `<span class="${props.highlightClass}">${word}</span>`;
      }
      return word;
    })
    .join(""); // Join without spaces between elements
});
</script>
