import { ref, onMounted, onUnmounted, type Ref } from "vue";

export default function useInView(targetRef: Ref<HTMLElement | null>) {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === "undefined" || !targetRef.value) return; // skip SSR

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer?.unobserve(entry.target); // observe once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isVisible };
}
