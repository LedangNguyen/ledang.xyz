<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>

<template>
  <div>
    <StoryblokComponent v-if="blok" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
