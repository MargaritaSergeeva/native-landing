<template>
  <div class="geo-slider">
    <swiper
      class="geo-slider__slider"
      :modules="[Navigation]"
      :speed="500"
      :navigation="{
        nextEl: '.geo-slider__next',
        prevEl: '.geo-slider__prev'
      }"
      :breakpoints="{
      '360': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      '1300': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
      loop
    >
      <swiper-slide v-for="geo in geoData" :key="geo.title" class="geo-slider__slide">
        <q-card class="geo-slider__card">
          <h3 class="geo-slider__title">{{ geo.title }} <span class="geo-slider__alias">{{ geo.alias }}</span></h3>
          <div>
            <p class="geo-slider__click"><b>{{ geo.show_per_day }}</b> <span>показов /день</span></p>
            <p class="geo-slider__click"><b>{{ geo.click_per_day }}</b> <span>кликов /день</span></p>
          </div>
          <div v-if="geo.flag" class="geo-slider__flag">
            <img :src="geo.flag" alt="flag">
          </div>
        </q-card>
      </swiper-slide>
    </swiper>
    <div class="geo-slider__prev"></div>
    <div class="geo-slider__next"></div>
  </div>


</template>

<script setup lang="ts">
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

const geoData = [
  {
    title: 'Россия',
    alias: 'RU',
    show_per_day: '308 413 355',
    click_per_day: '6 014 060',
    flag: 'flags/ru.svg'
  },
  {
    title: 'Беларусь',
    alias: 'BY',
    show_per_day: '14 503 928',
    click_per_day: '246 566',
    flag: 'flags/by.svg'
  },
  {
    title: 'Индонезия',
    alias: 'ID',
    show_per_day: '295 575 563',
    click_per_day: '6 798 237',
    flag: 'flags/indo.svg'
  },
  {
    title: 'Казахстан',
    alias: 'KZ',
    show_per_day: '22 163 019',
    click_per_day: '465 423',
    flag: 'flags/kz.svg'
  },
  {
    title: 'Тайланд',
    alias: 'TH',
    show_per_day: '8 214 516',
    click_per_day: '131 432',
    flag: 'flags/tl.svg'
  },
  {
    title: 'Европа',
    alias: '',
    show_per_day: '89 143 018',
    click_per_day: '1 604 574',
    flag: ''
  },
  {
    title: 'Латинская Америка',
    alias: '',
    show_per_day: '350 657 012',
    click_per_day: '7 363 797',
    flag: ''
  },
]
</script>
