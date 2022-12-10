<template>
  <q-item
    clickable
    tag="a"
    :href="link"
    class="essential-link"
  >
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
export interface EssentialLinkProps {
  title: string;
  link?: string;
}
withDefaults(defineProps<EssentialLinkProps>(), {
  link: '#',
});
</script>
