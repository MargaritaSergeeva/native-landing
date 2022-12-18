<template>
  <q-page class="contacts-page">
    <section class="main-contacts-section container">
      <div class="main-contacts-section__item">
        <h1 class="custom-font main-contacts-section__title main-title">Контакты</h1>
        <div class="main-contacts-section__map map-block">
          <div class="map-block__map">
            <img src="~assets/contacts/map.jpg" srcset="~assets/contacts/map.jpg 1x, ~assets/contacts/map-2x.jpg 2x" alt="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1165981024583!2d38.94657153982445!3d45.053133946636656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04f68294faaab%3A0x54163e19aa6a107f!2z0JrRgNCw0YHQvdGL0YUg0J_QsNGA0YLQuNC30LDQvSwzNjc!5e0!3m2!1sru!2sru!4v1670957331848!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <p>350049, г. Краснодар,<br> ул. Красных Партизан, д. 367, пом. 613</p>
        </div>
      </div>
      <div class="main-contacts-section__item main-contacts-section__item--big">
        <h2>Остались вопросы? Мы поможем.</h2>
        <p>Чтобы получить презентацию, кейсы или у Вас есть вопросы, заполните форму:</p>
        <q-form class="main-contacts-section__form contacts-form" @submit="submit">
          <div class="contacts-form__group">
            <label for="name" class="contacts-form__label label">Имя и фамилия</label>
            <q-input
              ref="nameInputRef"
              v-model="contactsFormData.name"
              id="name"
              class="contacts-form__input input"
              square
              borderless
              :rules="[rules.required, rules.minLen(3), rules.maxLen(50)]"
            ></q-input>
          </div>
          <div class="contacts-form__group-wrapper">
            <div class="contacts-form__group contacts-form__group--big">
              <label for="email" class="contacts-form__label label">Email</label>
              <q-input
                ref="emailInputRef"
                v-model="contactsFormData.email"
                id="email"
                class="contacts-form__input input"
                square
                borderless
                :rules="[rules.required, rules.email]"
              ></q-input>
            </div>
            <div class="contacts-form__group">
              <label for="phone" class="contacts-form__label label">Телефон</label>
              <q-input
                ref="phoneInputRef"
                v-model="contactsFormData.phone"
                id="phone"
                class="contacts-form__input input"
                square
                borderless
                type="number"
                :rules="[rules.required]"
              ></q-input>
            </div>
          </div>
          <div class="contacts-form__group">
            <label for="company" class="contacts-form__label label">Название компании</label>
            <q-input
              ref="nameCompanyInputRef"
              v-model="contactsFormData.company"
              id="company"
              class="contacts-form__input input"
              square
              borderless
              :rules="[rules.required, rules.minLen(3), rules.maxLen(50)]"
            ></q-input>
          </div>
          <div class="contacts-form__group">
            <label for="text" class="contacts-form__label label">Ваше сообщение</label>
            <q-input
              v-model="contactsFormData.text"
              id="text"
              class="contacts-form__input input input--textarea"
              square
              borderless
              type="textarea"
            ></q-input>
          </div>
          <q-btn class="contacts-form__main-btn main-btn main-btn--blue main-btn--wide" type="submit">Отправить</q-btn>
        </q-form>
      </div>
    </section>
    <section class="our-contacts-section container">
      <q-list class="our-contacts-section__list">
        <q-item
          v-for="contact in contactsData"
          :key="contact.name"
          class="our-contacts-section__item">
          <img class="our-contacts-section__img" :src="'img/' + contact.photo + '.png'" :srcset="'img/' + contact.photo + '.png 1x, img/' + contact.photo +'-2x.png 2x'" alt="photo">
          <div class="our-contacts-section__name-block">
            <p class="our-contacts-section__name"><b>{{contact.name}}</b></p>
            <p>{{contact.job}}</p>
          </div>
          <div class="our-contacts-section__contact-block">
            <a :href="'mailto:'+ contact.email">Email: {{contact.email}}</a>
            <a :href="'https://t.me/'+ contact.telegram">Телеграм: @{{contact.telegram}}</a>
            <a :href="'tel:'+ contact.tel2">Телефон: {{contact.tel}}</a>
          </div>
        </q-item>
      </q-list>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';

interface contactsFormData {
  name: string,
  email: string,
  phone: string,
  company: string,
  text: string,
}

const contactsFormData = ref<contactsFormData>({
  name: '',
  email: '',
  phone: '',
  company: '',
  text: '',
});

const contactsData = [
  {
    name: 'Черная Наталья',
    job: 'Руководитель по привлечению рекламодателей',
    email: 'n.ch@nativelab.ru',
    tel: '+7 985 0733393',
    tel2: '89850733393',
    telegram: 'Nata_chernayaa',
    photo: 'photo1',
  },
  {
    name: 'Душин Виктор',
    job: 'CEO',
    email: 'ceo@nativelab.ru',
    tel: '+7 964 8921672',
    tel2: '89648921672',
    telegram: 'sgrlive',
    photo: 'photo2',
  },
];

const nameInputRef = ref();
const emailInputRef = ref();
const phoneInputRef = ref();
const nameCompanyInputRef = ref();

const submit = () => {
  if (!checkValidate.value) {
    return;
  }
};

const checkValidate = computed(() => {
  const formInputs = [
    nameInputRef.value,
    emailInputRef.value,
    phoneInputRef.value,
    nameCompanyInputRef.value,
  ];

  return formInputs.reduce((isValid = true, input) => {
    const isValidInput = input.validate();
    if (!isValidInput) isValid = isValidInput;
    return isValid;
  }, []);
});

const rules = {
  required: (v: boolean | undefined) => !!v || 'Поле обязательно для заполнения',
  minLen: (minLen: number) => (v: string) => {
    return v.length >= minLen || `Минимум ${minLen} символов`;
  },
  maxLen: (maxLen: number) => (v: string) => {
    return v.length <= maxLen || `Максимум ${maxLen} символов`;
  },
  email: (v: string) => {
    const emailPattern = /.+@.+\..+$/;
    return emailPattern.test(v) || 'Неверный формат email';
  },
};
</script>
