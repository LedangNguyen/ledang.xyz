<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";

defineProps<{
  blok: {
    body: SbBlokData[];
  };
}>();
</script>

<template>
  <div>
    <StoryblokComponent v-if="blok" v-for="component in blok.body" :key="component._uid" :blok="component" />
  </div>
</template>
