<template>
  <q-page class="main-page">
    <section class="main-page__main-section main-section ">
      <div class="main-section__container container">
        <div class="main-section__text-block">
          <h1><span class="custom-font main-section__title">NativеLab –</span> платформа нативной рекламы.</h1>
          <p class="main-section__text">Более <b>6 лет</b> опыта на международном рекламном рынке!</p>
          <q-btn class="main-btn main-btn--blue main-btn--desktop">получить презентацию и кейсы</q-btn>
        </div>
        <div class="main-section__img-block">
          <ImgSlider/>
        </div>
        <q-btn class="main-btn main-btn--blue main-btn--mob">получить презентацию и кейсы</q-btn>
      </div>
    </section>
    <section class="geo-section container">
      <h2 class="geo-section__title title custom-font">Широкий охват ГЕО</h2>
      <p class="geo-section__intro intro">Мы предлагаем рекламодателям качественный нативный трафик из более чем 22 стран мира</p>
      <div class="geo-section__slider-block">
        <GeoSlider/>
      </div>
    </section>
    <section class="targeting-section">
      <h2 class="targeting-section__title title title--white custom-font">Форматы и таргетинги</h2>
      <p class="targeting-section__intro intro intro--white">TGB • TGB In-Read • Баннер</p>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ImgSlider from 'components/ImgSlider.vue';
import GeoSlider from 'components/GeoSlider.vue';
</script>
