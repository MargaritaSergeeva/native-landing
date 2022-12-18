<template>
  <swiper
    class="img-slider"
    :modules="[EffectFade, Autoplay]"
    effect="fade"
    :fade-effect="{ crossFade: true }"
    :speed="1500"
    :autoplay="{
              delay: 4500,
              disableOnInteraction: false,
            }"
    :allow-touch-move="false"
    loop
  >
    <swiper-slide class="img-slider__slide">
      <picture>
        <img class="img-slider__img img-slider__img--phone" src="~assets/main/phone1.png" srcset="~assets/main/phone1.png 1x, ~assets/main/phone1-2x.png 2x" alt="phone">
      </picture>
    </swiper-slide>
    <swiper-slide class="img-slider__slide">
      <picture>
        <img class="img-slider__img img-slider__img--laptop" src="~assets/main/laptop1.png" srcset="~assets/main/laptop1.png 1x, ~assets/main/laptop1-2x.png 2x" alt="laptop">
      </picture>
    </swiper-slide>
    <swiper-slide class="img-slider__slide">
      <picture>
        <img class="img-slider__img img-slider__img--phone" src="~assets/main/phone2.png" srcset="~assets/main/phone2.png 1x, ~assets/main/phone2-2x.png 2x" alt="phone">
      </picture>
    </swiper-slide>
    <swiper-slide class="img-slider__slide">
      <picture>
        <img class="img-slider__img img-slider__img--laptop" src="~assets/main/laptop2.png"
             srcset="~assets/main/laptop2.png 1x, ~assets/main/laptop2-2x.png 2x" alt="laptop">
      </picture>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>
