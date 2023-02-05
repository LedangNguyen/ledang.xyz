<script setup lang="ts">
import { AppProjectsItem } from "~/storyblok/app-projects/types";

defineProps<{
  blok: AppProjectsItem;
}>();
</script>

<template>
  <article class="overflow-hidden rounded-lg border border-solid border-white/90 shadow-lg" v-editable="blok">
    <div>
      <nuxt-img
        class="w-full"
        width="580"
        height="435"
        :src="blok.image.filename"
        provider="storyblok"
        :alt="blok.image.alt"
        :placeholder="21"
      />
    </div>
    <div class="px-4 pt-3 pb-4">
      <p class="mb-4 text-xl font-semibold leading-none text-white/90">{{ blok.title }}</p>
      <div class="flex flex-wrap gap-2">
        <p class="rounded-md bg-white/90 py-0.5 px-1 text-sm text-slate-900" v-for="tech in blok.techs" :key="tech">
          {{ tech }}
        </p>
      </div>
    </div>
  </article>
</template>
