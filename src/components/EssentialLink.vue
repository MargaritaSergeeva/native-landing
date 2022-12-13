<template>
  <router-link class="essential-link" :class="{'active': route.path === link, 'main': link === '/'}" :to="link">
    <q-item
      clickable
      class="essential-link__item"
    >
      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
      </q-item-section>
    </q-item>
  </router-link>

</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';

interface EssentialLinkProps {
  title: string;
  link?: string;
}

const route = useRoute();

withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});
</script>
