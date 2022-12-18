<template>
  <div class="targeting-slider-mob">
    <swiper
      class="targeting-slider-mob__slider"
      :speed="1500"
    >
      <swiper-slide class="targeting-slider-mob__slide">
        <picture>
          <img class="targeting-slider-mob__img" src="~assets/main/begining-article.png"
               srcset="~assets/main/begining-article.png 1x, ~assets/main/begining-article-2x.png 2x"
               alt="begining article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider-mob__slide">
        <picture>
          <img class="targeting-slider-mob__img" src="~assets/main/ending-article.png"
               srcset="~assets/main/ending-article.png 1x, ~assets/main/ending-article-2x.png 2x" alt="ending article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider-mob__slide">
        <picture>
          <img class="targeting-slider-mob__img" src="~assets/main/middle-article.png"
               srcset="~assets/main/middle-article.png 1x, ~assets/main/middle-article-2x.png 2x" alt="middle article">
        </picture>
      </swiper-slide>
      <swiper-slide class="targeting-slider-mob__slide">
        <picture>
          <img class="targeting-slider-mob__img" src="~assets/main/side-article.png"
               srcset="~assets/main/side-article.png 1x, ~assets/main/side-article-2x.png 2x" alt="side article">
        </picture>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';

</script>
