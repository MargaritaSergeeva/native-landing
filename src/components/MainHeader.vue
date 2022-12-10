<template>
  <q-dialog
    v-model="isMenuOpen"
    transition-show="slide-left"
    transition-hide="slide-right"
    transition-duration="500"
    class="main-mob-dialog"
  >
    <q-card class="main-mob-dialog__block">
      <q-list class="main-mob-dialog__main-list">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item
          clickable
          class="essential-link"
        >
          <q-item-section>
            <q-item-label>Разместить рекламу</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          class="essential-link"
        >
          <q-item-section>
            <q-item-label>Вход</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
  <q-header class="main-header">
    <q-toolbar class="main-header__block container">
      <div class="main-header__logo">
        <a href="/">
          <img alt="logo" class="logo" src="~assets/logo.svg" clickable/>
        </a>
      </div>
      <div class="main-header__nav">
        <q-list class="main-header__main-list">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
        <q-list class="main-header__user-list">
          <q-btn class="main-btn main-btn--black q-mr-sm">Разместить рекламу</q-btn>
          <q-btn class="main-btn main-btn--simple">Вход</q-btn>
        </q-list>
      </div>

      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        color="black"
        class="main-header__menu-btn"
        @click="isMenuOpen=true"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const isMenuOpen = ref(false);

const essentialLinks = [
  {
    title: 'Рекламодателям и агентствам',
    link: '/'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  },
];

</script>
