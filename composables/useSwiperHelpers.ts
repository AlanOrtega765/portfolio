export const useSwiperHelpers = () => {
  const swiperRef = ref<any>(null);

  const slidePrev = () => {
    if (swiperRef.value) {
      swiperRef.value.$el.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.value) {
      swiperRef.value.$el.swiper.slideNext();
    }
  };

  return { swiperRef, slidePrev, slideNext };
};
