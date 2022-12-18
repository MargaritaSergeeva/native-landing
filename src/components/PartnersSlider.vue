<template>
  <div class="partners-slider">
    <swiper
      class="partners-slider__slider"
      :modules="[Pagination]"
      :speed="500"
      :pagination="{
        dynamicBullets: true,
        clickable: true,
      }"
      :breakpoints="{
      '360': {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      '1300': {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    }"
      loop
    >
      <swiper-slide v-for="partner in partnersData" :key="partner.id" class="partners-slider__slide">
        <q-card class="partners-slider__card">
          <img
            class="partners-slider__img"
            :src="'img/' + partner.img + '.jpg'"
            :srcset="'img/' + partner.img + '.jpg 1x, img/'+ partner.img + '-2x.jpg 2x'"
            :alt="'partner ' + partner.img">
        </q-card>
      </swiper-slide>
    </swiper>
  </div>


</template>

<script setup lang="ts">
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';
import AOS from 'aos';
import {onMounted} from 'vue';

onMounted(() => {
  AOS.init();
})

const partnersData = [
  {
    id: 1,
    img: 'lenta',
  },
  {
    id: 2,
    img: 'esquire',
  },
  {
    id: 3,
    img: 'ria',
  },
  {
    id: 4,
    img: 'womanhit',
  },
  {
    id: 5,
    img: 'kleo',
  },
  {
    id: 6,
    img: 'gismeteo',
  },
  {
    id: 7,
    img: 'afisha',
  },
  {
    id: 8,
    img: 'komersant',
  },
  {
    id: 9,
    img: 'vedomosti',
  },
  {
    id: 10,
    img: 'forbes',
  },
  {
    id: 11,
    img: 'cosmo',
  }, {
    id: 12,
    img: 'rbk',
  }, {
    id: 13,
    img: 'rambler',
  }, {
    id: 14,
    img: 'tass',
  },
  {
    id: 15,
    img: 'elle',
  },
  {
    id: 16,
    img: 'eva',
  },
  {
    id: 17,
    img: 'wmj',
  },
  {
    id: 18,
    img: 'gazeta',
  },
  {
    id: 19,
    img: 'bazar',
  },
  {
    id: 20,
    img: 'woman',
  },
  {
    id: 21,
    img: 'utro',
  },
];
</script>
