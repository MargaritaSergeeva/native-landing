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
      <div class="targeting-section__container container">
        <h2 class="targeting-section__title title title--white custom-font">Форматы и таргетинги</h2>
        <p class="targeting-section__intro intro intro--white">TGB • TGB In-Read • Баннер</p>
        <div class="targeting-section__desktop">
            <TargetingSlider/>
        </div>
        <div class="targeting-section__mob">
          <q-list class="targeting-section__mob-list">
            <q-item class="targeting-section__mob-item">
              <picture>
                <img class="targeting-section__mob-img" src="~assets/main/begining-article.png" srcset="~assets/main/begining-article.png 1x, ~assets/main/begining-article-2x.png 2x" alt="begining article">
              </picture>
              <p class="targeting-section__mob-text">В начале статьи</p>
            </q-item>
            <q-item class="targeting-section__mob-item">
              <picture>
                <img class="targeting-section__mob-img" src="~assets/main/ending-article.png" srcset="~assets/main/ending-article.png 1x, ~assets/main/ending-article-2x.png 2x" alt="ending article">
              </picture>
              <p class="targeting-section__mob-text">В конце статьи</p>
            </q-item>
            <q-item class="targeting-section__mob-item">
              <picture>
                <img class="targeting-section__mob-img" src="~assets/main/middle-article.png" srcset="~assets/main/middle-article.png 1x, ~assets/main/middle-article-2x.png 2x" alt="middle article">
              </picture>
              <p class="targeting-section__mob-text">В середине статьи</p>
            </q-item>
            <q-item class="targeting-section__mob-item">
              <picture>
                <img class="targeting-section__mob-img" src="~assets/main/side-article.png" srcset="~assets/main/side-article.png 1x, ~assets/main/side-article-2x.png 2x" alt="side article">
              </picture>
              <p class="targeting-section__mob-text">На правой боковой панели</p>
            </q-item>
          </q-list>
        </div>
        <p class="targeting-section__intro intro intro--white intro--bold">Доступные настройки таргетов</p>
        <q-list class="targeting-section__target-list">
          <q-item class="targeting-section__target-item"><p>География</p></q-item>
          <q-item class="targeting-section__target-item"><p>Устройства <br>(ПК/моб)</p></q-item>
          <q-item class="targeting-section__target-item"><p>Операционные системы</p></q-item>
          <q-item class="targeting-section__target-item"><p>Операторы связи</p></q-item>
          <q-item class="targeting-section__target-item"><p>Браузеры</p></q-item>
        </q-list>
        <q-list class="targeting-section__target-list-big">
          <q-item class="targeting-section__target-item-big">
            <p>Интеграция с DMP- платформами</p>
            <ul>
              <li>AmberData</li>
              <li>Weborama и другими</li>
            </ul>
          </q-item>
          <q-item class="targeting-section__target-item-big">
            <p>Аудиторные данные</p>
            <ul>
              <li>соцдем (пол/возраст)</li>
              <li>интересы</li>
              <li>Retargeting, LAL</li>
            </ul>
          </q-item>
          <q-item class="targeting-section__target-item-big targeting-section__target-item-big--extra">
            <p>Ключевые слова</p>
            <span>
              Покажем в статьях, где есть те или иные слова
            </span>
          </q-item>
          <q-item class="targeting-section__target-item-big targeting-section__target-item-big--extra">
            <p>Список площадок</p>
            <span>
              Подбор тематических площадок
            </span>
          </q-item>
        </q-list>
        <q-btn class="targeting-section__main-btn main-btn main-btn--blue">Разместить рекламу</q-btn>
      </div>
    </section>
    <section class="advantages container">
      <h2 class="advantages__title title custom-font">Преимущества NativeLab рекламодателям и агентствам</h2>
      <q-list class="advantages__list">
        <q-item class="advantages__item">
          <p><b>Стоимость</b> размещения ниже, чем на других платформах</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Выгодная закупка с помощью <b>кросс-девайс таргетинга</b>, который позволяет поймать одного пользователя на разных устройствах</p>
        </q-item>
        <q-item class="advantages__item">
          <p><b>Таргетинг 200+:</b> социально- демографический, контекстуальный, <br>по интересам пользователей,  <br>по ключевым словам</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Более <b>2760</b> собственных сайтов <br><b>+ 8050</b> партнерских</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Контроль <b>качества</b> и viewability рекламы</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Принимаем <b>любые</b> верификаторы и трекеры</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Полная <b>прозрачность</b> <br>в работе</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Креативы в <b>подарок</b>, адаптивные форматы</p>
        </q-item>
        <q-item class="advantages__item">
          <p>Форматы <b>закупки</b> срс, срм, vcpm</p>
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import ImgSlider from 'components/ImgSlider.vue';
import GeoSlider from 'components/GeoSlider.vue';
import TargetingSlider from 'components/TargetingSlider.vue';
</script>
