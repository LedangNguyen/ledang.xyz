<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";

defineProps<{
  blok: {
    heading: string;
    items: SbBlokData[];
  };
}>();
</script>

<template>
  <section class="pb-16 sm:pb-20" v-editable="blok">
    <div class="container max-w-[640px]">
      <h2 class="font-inter mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">{{ blok.heading }}</h2>
      <div class="grid gap-10 min-[600px]:grid-cols-2 min-[600px]:gap-x-5">
        <StoryblokComponent v-if="blok.items" v-for="item in blok.items" :key="item._uid" :blok="item" />
      </div>
    </div>
  </section>
</template>
