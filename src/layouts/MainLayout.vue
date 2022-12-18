<template>
  <q-layout class="main-layout" view="lHh Lpr lFf">
    <MainHeader/>
    <q-page-container style="flex: 1 0 auto;">
      <router-view/>
    </q-page-container>
    <MainFooter/>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from 'components/MainHeader.vue';
import MainFooter from 'components/MainFooter.vue';

</script>
