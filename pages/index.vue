<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();

const version = computed(() => {
  return runtimeConfig.public.storyblokVersion && runtimeConfig.public.storyblokVersion === "draft"
    ? "draft"
    : "published";
});

const story = await useAsyncStoryblok("home", {
  version: version.value,
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
