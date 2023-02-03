<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";

const props = defineProps<{
  blok: {
    heading: string;
    items: SbBlokData[];
  };
}>();

const lastItem = computed(() => props.blok.items[props.blok.items.length - 1]);
</script>

<template>
  <section class="py-10 sm:py-20" v-editable="blok">
    <div class="container max-w-[640px]">
      <h2 class="font-inter mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">{{ blok.heading }}</h2>
      <div class="grid gap-8 border-l border-dashed border-white/50 pl-10">
        <StoryblokComponent
          v-if="blok.items"
          v-for="item in blok.items"
          :key="item._uid"
          :blok="item"
          :last="item === lastItem"
        />
      </div>
    </div>
  </section>
</template>
