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
      <div
        class="relative grid gap-8 pl-10 after:absolute after:top-2.5 after:right-full after:isolate after:z-[-1] after:h-[calc(100%-10px)] after:border-l after:border-dashed after:border-white/50"
      >
        <StoryblokComponent v-if="blok.items" v-for="item in blok.items" :key="item._uid" :blok="item" />
      </div>
    </div>
  </section>
</template>
