<template>
  <div class="targeting-slider">
    <swiper
      class="targeting-slider__slider"
      :modules="[EffectFade]"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :speed="1500"
      :allow-touch-move="true"
      @swiper="setSwiperRef"
    >
      <swiper-slide class="targeting-slider__slide">
        <picture>
          <img class="targeting-slider__img" src="~assets/main/begining-article.png"
               srcset="~assets/main/begining-article.png 1x, ~assets/main/begining-article-2x.png 2x"
               alt="begining article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider__slide">
        <picture>
          <img class="targeting-slider__img" src="~assets/main/ending-article.png"
               srcset="~assets/main/ending-article.png 1x, ~assets/main/ending-article-2x.png 2x" alt="ending article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider__slide">
        <picture>
          <img class="targeting-slider__img" src="~assets/main/middle-article.png"
               srcset="~assets/main/middle-article.png 1x, ~assets/main/middle-article-2x.png 2x" alt="middle article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider__slide">
        <picture>
          <img class="targeting-slider__img" src="~assets/main/side-article.png"
               srcset="~assets/main/side-article.png 1x, ~assets/main/side-article-2x.png 2x" alt="side article">
        </picture>
      </swiper-slide>
    </swiper>
    <p class="targeting-slider__append-buttons">
      <button :class="{ 'active': slideNumber === 1 }" @click="slideTo(1)">В начале статьи</button>
      <button :class="{ 'active': slideNumber === 2 }" @click="slideTo(2)">В конце статьи</button>
      <button :class="{ 'active': slideNumber === 3 }" @click="slideTo(3)">В середине статьи</button>
      <button :class="{ 'active': slideNumber === 4 }" @click="slideTo(4)">На правой боковой панели</button>
    </p>
  </div>

</template>

<script setup>
import {ref} from 'vue';
import {EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

let swiperRef = null;
const slideNumber = ref(1);

const setSwiperRef = (swiper) => {
  swiperRef = swiper;
};

const slideTo = (index) => {
  swiperRef.slideTo(index - 1, 1500);
  slideNumber.value = index;
};
</script>
