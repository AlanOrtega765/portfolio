import { useIntersectionObserver } from "@vueuse/core";

export const useTargetObserver = () => {
  const target = ref<any>(null);
  const targetIsVisible = ref(false);

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      return (targetIsVisible.value = isIntersecting);
    }
  });

  return { target, targetIsVisible }
};
