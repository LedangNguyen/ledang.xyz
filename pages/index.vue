<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const story = await useAsyncStoryblok("home", {
  version: runtimeConfig.public.storyblokVersion,
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
