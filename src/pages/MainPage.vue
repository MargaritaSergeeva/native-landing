<template>
  <q-page class="main-page">
    <section class="main-page__main-section main-section ">
      <div class="main-section__container container">
        <div class="main-section__text-block">
          <h1><span class="custom-font main-section__title main-title">NativеLab –</span> платформа нативной рекламы.</h1>
          <p class="main-section__text">Более <b>6 лет</b> опыта на международном рекламном рынке!</p>
          <q-btn class="main-btn main-btn--blue main-btn--desktop" @click="router.push({name: 'contacts'})">получить презентацию и кейсы</q-btn>
        </div>
        <div class="main-section__img-block">
          <ImgSlider/>
        </div>
        <q-btn class="main-btn main-btn--blue main-btn--mob" @click="router.push({name: 'contacts'})">получить презентацию и кейсы</q-btn>
      </div>
    </section>
    <section class="geo-section container">
      <h2 class="geo-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Широкий охват ГЕО</h2>
      <p class="geo-section__intro intro" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Мы предлагаем рекламодателям качественный нативный трафик из более чем 22 стран мира</p>
      <div class="geo-section__slider-block" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
        <GeoSlider/>
      </div>
    </section>
    <section class="targeting-section">
      <div class="targeting-section__container container">
        <h2 class="targeting-section__title title title--white custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Форматы и таргетинги</h2>
        <p class="targeting-section__intro intro intro--white" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">TGB • TGB In-Read • Баннер</p>
        <div class="targeting-section__desktop" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
            <TargetingSlider/>
        </div>
        <div class="targeting-section__mob" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
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
        <p class="targeting-section__intro intro intro--white intro--bold" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Доступные настройки таргетов</p>
        <q-list class="targeting-section__target-list" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <q-item class="targeting-section__target-item"><p>География</p></q-item>
          <q-item class="targeting-section__target-item"><p>Устройства <br>(ПК/моб)</p></q-item>
          <q-item class="targeting-section__target-item"><p>Операционные системы</p></q-item>
          <q-item class="targeting-section__target-item"><p>Операторы связи</p></q-item>
          <q-item class="targeting-section__target-item"><p>Браузеры</p></q-item>
        </q-list>
        <q-list class="targeting-section__target-list-big" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
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
        <q-btn
          class="targeting-section__main-btn main-btn main-btn--blue main-btn--wide"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
          data-aos-once="true"
          @click="router.push({name: 'registration'})"
        >
          Разместить рекламу
        </q-btn>
      </div>
    </section>
    <section class="advantages-section container">
      <h2 class="advantages-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Преимущества NativeLab рекламодателям и агентствам</h2>
      <q-list class="advantages-section__list">
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p><b>Стоимость</b> размещения ниже, чем на других платформах</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Выгодная закупка с помощью <b>кросс-девайс таргетинга</b>, который позволяет поймать одного пользователя на разных устройствах</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p><b>Таргетинг 200+:</b> социально- демографический, контекстуальный, <br>по интересам пользователей,  <br>по ключевым словам</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Более <b>2760</b> собственных сайтов <br><b>+ 8050</b> партнерских</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Контроль <b>качества</b> и viewability рекламы</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Принимаем <b>любые</b> верификаторы и трекеры</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Полная <b>прозрачность</b> <br>в работе</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Креативы в <b>подарок</b>, адаптивные форматы</p>
        </q-item>
        <q-item class="advantages-section__item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <p>Форматы <b>закупки</b> срс, срм, vcpm</p>
        </q-item>
      </q-list>
    </section>
    <section class="faq-section container">
      <h2 class="faq-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">FAQ</h2>
      <q-list class="faq-section__list">
        <q-expansion-item
          expand-separator
          label="Какие форматы есть?"
          class="faq-section__accordion"
          expand-icon="add"
          expanded-icon="remove"
          data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true"
        >
          <q-card>
            <q-card-section>
              На данный момент у нас присутствуют три формата: <b>TGB, TGB In-Read, баннер.</b>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          label="Какие технические требования?"
          class="faq-section__accordion"
          expand-icon="add"
          expanded-icon="remove"
          data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true"
        >
          <q-card>
            <q-card-section>
              <p><b>К TGB</b></p>
              <p>Рекламный формат располагается под статьей или сбоку.</p>
              <p>Заголовок 100 символов.</p>
              <p>Для изображений поддерживаются файлы в JPG и PNG.</p>
              <p>Изображение можно обрезать при создании креатива.</p>
              <p>Максимальный размер квадратного изображения – 367х367px</p>
              <p>Максимальный размер прямоугольного изображения – 539х359px</p>
              <p><b>К TGB In-Read</b></p>
              <p>Рекламный формат располагается внутри текста, автоматически масштабируется под мобильную версию. Может комбинировать в себе следующие элементы: изображение, заголовок, описание и кнопка.</p>
              <p>Допустимые размеры изображений :</p>
              <p>300*300, 400*400, 305*240, 300*250, 300*409, 250*200, 320*270</p>
              <p>345*345, 345*200, 400*400, 400*350, 335*224, 250*300, 250*400, 240*250, 240*300, 500*455, 500*310, 500*240, 345*230, 600*336, 790*520, 376*376</p>
              <p>В текстовых объявлениях не разрешаются злоупотребления Caps-Lock и восклицательными/вопросительными знаками. Каждое предложение должно заканчиваться знаком препинания: точка, восклицательный или вопросительный знаки.</p>
              <p>Текстовое объявление может состоять из следующих элементов:</p>
              <p>Заголовок - Не более 65 символов, рекомендовано 25.</p>
              <p>Описание - Не более 90 символов, рекомендовано 75.</p>
              <p>Главное изображение - размеры см выше, желательно 3-4 размера.</p>
              <p>Call to Action: текст на кнопке, например: Подробнее, Установить, Скачать и др. Не более 15 символов, рекомендовано 10.</p>
              <p><b>К баннерам</b></p>
              <p>Форматы изображений: PNG (.png), GIF (.gif), JPEG (.jpeg).</p>
              <p><b>Основные допустимые размеры:</b></p>
              <p>Для телефонов: 320x50, 320x100, 300x250, 300х300, 300x600, 240x400, 320x480, 480x320, 970x90, 970x250, 336x280, 728x90, 468x60, 160х600</p>
              <p>Для ПК: 728x90, 240x400, 300x250, 468x60, 160x600, 336x280, 300x600, 300х300, 970x250, 1000x120, 970х90</p>
              <p>Для планшетов: 320x50, 320x100, 300x250, 300х300, 300x600, 240x400, 320x480, 480x320, 970x90, 970x250, 336x280, 728x90, 468x60, 160х600</p>
              <p><b>Дополнительные размеры:</b></p>
              <p>Для телефонов: 300x500, 240x600, 300x50, 300x100, 375x50, 200x200, 250x250</p>
              <p>Для ПК: 320x100, 300x500, 120x600, 200х300, 980x120, 980x90</p>
              <p>Для планшетов: 768x1024, 1024x768, 640x360, 360x640</p>
              <p>Рекомендуемые правила для создания HTML баннеров:</p>
              <ul>
                <li>Баннер должен быть представлен архивом из множества файлов: index.html и sprite.png (рекомендуется два и не более 100). В файле index.html допускаются только относительные ссылки на файлы-ресурсы.</li>
                <li>Обязательно уменьшайте размер файлов sprite.png через сервис https://tinypng.com/</li>
                <li>В index.html файле не допускается использование base64 представлений для изображений.</li>
              </ul>
              <p>Обработка в всех клик событий, вызывающих переход на сайт рекламодателя должна быть реализована строго через тег &lt;a href=””&gt;</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          label="Какие таргетинги есть?"
          class="faq-section__accordion"
          expand-icon="add"
          expanded-icon="remove"
          data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true"
        >
          <q-card>
            <q-card-section>
              <p>На данный момент есть возможность таргетироваться по:</p>
              <ul>
                <li>ГЕО</li>
                <li>Устройствам (ПК/моб)</li>
                <li>Браузерам</li>
                <li>Операционным системам</li>
                <li>Операторам связи</li>
                <li>Аудиторным данным:</li>
                <li>Соцдем (пол/возраст)</li>
                <li>Интересы NativeLab - Собственные данные, основанные на потреблении контента</li>
                <li>Сторонние данные: AmberData, Weborama</li>
                <li>Ретаргетинг, Look-alike</li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          expand-separator
          label="Какие счетчики поддерживает платформа?"
          class="faq-section__accordion"
          expand-icon="add"
          expanded-icon="remove"
          data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true"
        >
          <q-card>
            <q-card-section>
              Принимаем любые счетчики разных систем.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-btn
        class="faq-section__main-btn main-btn main-btn--blue main-btn--wide"
        data-aos="fade-up" data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
        data-aos-once="true"
        @click="router.push({name: 'registration'})">
          Разместить рекламу
      </q-btn>
    </section>
    <section class="features-section">
      <div class="features-section__container container">
        <h2 class="features-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Собственный RTB движок и технологии</h2>
        <p class="features-section__intro intro intro--bold" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Особенности DMP</p>
        <q-list class="features-section__list" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <q-item class="features-section__item">
            <p>
              Собственный <b>сквозной идентификатор</b>, позволяющий платить за уникальный охват до 3х раз меньше
            </p>
          </q-item>
          <q-item class="features-section__item">
            <p>
              Доступ к <b>данным Яндекса</b> для уточнения пола, возраста и интересов аудитории
            </p>
          </q-item>
          <q-item class="features-section__item">
            <p>
              Модели <b>машинного обучения</b>, в том числе под СРА клиентов
            </p>
          </q-item>
          <q-item class="features-section__item">
            <p>
              Возможность собрать <b>любой</b> кастомный сегмент
            </p>
          </q-item>
          <q-item class="features-section__item">
            <p>
              <b>Интеграция</b> с другими DMP
            </p>
          </q-item>
          <q-item class="features-section__item features-section__item--big">
            <p>
              Привязка к <b>офлайн данным</b> позволяет
            </p>
            <p>
              а) измерять эффективность каждого показа (влияние на конверсию)
            </p>
            <p>
              б) обучать ML на фактических данных
            </p>
          </q-item>
          <q-item class="features-section__item features-section__item--last">
            <p>
              <b>Автообучаемые ML</b> для многих сфер бизнеса
            </p>
          </q-item>
          <q-item class="features-section__item features-section__item--last">
            <p>
              Проведение <b>опросов и замеров</b> OMI/ Tiboron
            </p>
          </q-item>
        </q-list>
      </div>
    </section>
    <section class="control-section">
      <div class="control-section__container container">
        <h2 class="control-section__title title title--white custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Контроль за размещением рекламы</h2>
        <p class="control-section__intro intro intro--bold intro--white" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Brand safety</p>
        <div class="control-section__block">
          <div class="control-section__block-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
            <h3 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Защита бренда от фрода и ненужного контента</h3>
            <q-list class="control-section__block-list">
              <q-item class="control-section__block-list-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                <p>Стоимость размещения ниже, чем на других платформах</p>
              </q-item>
              <q-item class="control-section__block-list-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                <p>Применение контекстных фильтров</p>
              </q-item>
              <q-item class="control-section__block-list-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                <p>Black lists</p>
              </q-item>
              <q-item class="control-section__block-list-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                <p>Ручная оптимизация каждой рекламной кампании</p>
              </q-item>
              <q-item class="control-section__block-list-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
                <p>Фильтрация по ключевым словам, контенту страницы</p>
              </q-item>
            </q-list>
          </div>
          <div class="control-section__block-item" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
            <h3 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Высокое качество нашего трафика подтверждено</h3>
            <div class="control-section__block-sign" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
              <p>Антифрод А</p>
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Собственная система предотвращения фрода – Антифрод А</p>
            <div class="control-section__block-imgs" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
              <img class="control-section__block-img" src="~assets/main/weborama.jpg" srcset="~assets/main/weborama.jpg 1x, ~assets/main/weborama-2x.jpg 2x" alt="weborama">
              <img class="control-section__block-img" src="~assets/main/adriver.jpg" srcset="~assets/main/adriver.jpg 1x, ~assets/main/adriver-2x.jpg 2x" alt="adriver">
              <img class="control-section__block-img" src="~assets/main/sizmek.jpg" srcset="~assets/main/sizmek.jpg 1x, ~assets/main/sizmek-2x.jpg 2x" alt="sizmek">
            </div>
            <p data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Применение верификаторов третьих сторон Weborama, AdRiver, Sizmek или других</p>
          </div>
        </div>
        <q-btn
          class="control-section__main-btn main-btn main-btn--blue main-btn--wide"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
          data-aos-once="true"
          @click="router.push({name: 'registration'})"
        >
          Разместить рекламу
        </q-btn>
      </div>
    </section>
    <section class="partners-section container">
      <h2 class="partners-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Наши партнеры</h2>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
        <PartnersSlider/>
      </div>
    </section>
    <section class="contacts-section">
      <div class="contacts-section__container container">
        <h2 class="contacts-section__title title custom-font" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">Контакты</h2>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-duration="1000" data-aos-once="true">
          <ContactsSlider/>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import ImgSlider from 'components/ImgSlider.vue';
import GeoSlider from 'components/GeoSlider.vue';
import TargetingSlider from 'components/TargetingSlider.vue';
import PartnersSlider from 'components/PartnersSlider.vue';
import ContactsSlider from 'components/ContactsSlider.vue';
const AOS = require('aos');
import {useRouter} from 'vue-router';

const router = useRouter();

onMounted(() => {
  AOS.init();
})
</script>
