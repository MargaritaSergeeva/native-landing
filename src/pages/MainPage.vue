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
    <section class="geo container">
      <h2>Широкий охват ГЕО</h2>
      <p>Мы предлагаем рекламодателям качественный нативный трафик из более чем 22 стран мира</p>

    </section>
  </q-page>
</template>

<script setup lang="ts">
import ImgSlider from 'components/ImgSlider.vue'
</script>
