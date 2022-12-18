<template>
  <div class="contacts-slider">
    <swiper
      class="contacts-slider__slider"
      :modules="[Navigation]"
      :speed="500"
      :navigation="{
        nextEl: '.contacts-slider__next',
        prevEl: '.contacts-slider__prev'
      }"
      :breakpoints="{
      '360': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      '1300': {
        slidesPerView: 2,
        spaceBetween: 150,
      },
    }"
    >
      <swiper-slide v-for="contact in contactsData" :key="contact.name" class="contacts-slider__slide">
        <q-card class="contacts-slider__card">
          <p class="contacts-slider__name">{{ contact.name }}</p>
          <p class="contacts-slider__job">{{ contact.job }}</p>
          <div class="contacts-slider__links">
            <a :href="'mailto:'+ contact.email">Email: {{ contact.email }}</a>
            <a :href="'https://t.me/'+ contact.telegram">Телеграм: @{{ contact.telegram }}</a>
            <a :href="'tel:'+ contact.tel2">Телефон: {{ contact.tel }}</a>
          </div>
        </q-card>
      </swiper-slide>
    </swiper>
    <div class="contacts-slider__prev"></div>
    <div class="contacts-slider__next"></div>
  </div>


</template>

<script setup lang="ts">
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/vue';

const contactsData = [
  {
    name: 'Душин Виктор',
    job: 'CEO',
    email: 'ceo@nativelab.ru',
    tel: '+7 964 8921672',
    tel2: '89648921672',
    telegram: 'sgrlive'
  },
  {
    name: 'Черная Наталья',
    job: 'Руководитель по привлечению рекламодателей',
    email: 'n.ch@nativelab.ru',
    tel: '+7 985 0733393',
    tel2: '89850733393',
    telegram: 'Nata_chernayaa'
  },
]
</script>
