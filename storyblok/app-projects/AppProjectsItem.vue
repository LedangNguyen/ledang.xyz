<script setup lang="ts">
import { AppProjectsItem } from "~/storyblok/app-projects/types";

const props = defineProps<{
  blok: AppProjectsItem;
}>();

const description = computed(() => renderRichText(props.blok.description));

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

const formattedLink = computed(() => {
  const link = props.blok.url.url;

  // remove http/https prefix
  const linkWithoutPrefix = link.replace(/(^\w+:|^)\/\//, "");

  // remove trailing slash
  return linkWithoutPrefix.replace(/\/$/, "");
});
</script>

<template>
  <article class="group relative" v-editable="blok">
    <div>
      <nuxt-img
        class="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        :src="blok.image.filename"
        width="580"
        :alt="blok.image.alt"
        loading="lazy"
      />
    </div>
    <div class="pt-3 pt-4">
      <h3
        class="mb-1 text-2xl font-semibold leading-none text-white/90 transition-colors duration-300 group-hover:text-white"
      >
        {{ blok.title }}
      </h3>
      <p class="text-white/90 transition-colors duration-300 group-hover:text-white">{{ blok.short_description }}</p>
    </div>
    <button class="absolute inset-0 cursor-pointer" @click="openModal" type="button">
      <span class="sr-only">Learn more about {{ blok.title }} project</span>
    </button>
  </article>

  <AppModal :is-modal-open="isModalOpen" :close-modal="closeModal">
    <div class="rounded-xl bg-slate-900 shadow-lg">
      <div class="aspect-w-4 aspect-h-3">
        <nuxt-img
          class="w-full rounded-xl"
          :src="blok.image.filename"
          width="1532"
          :alt="blok.image.alt"
          :placeholder="[20, 15, 25]"
        />
      </div>
      <div class="p-5">
        <p class="mb-1 text-3xl font-semibold leading-none text-white/90">{{ blok.title }}</p>
        <a class="text-sm text-white/90" :href="blok.url.url" :rel="blok.url.rel" :target="blok.url.target">{{
          formattedLink
        }}</a>
        <div class="mt-4 mb-4 flex flex-wrap gap-2">
          <p class="rounded-md bg-white/90 py-0.5 px-1 text-sm text-slate-900" v-for="tech in blok.techs" :key="tech">
            {{ tech }}
          </p>
        </div>
        <div class="text-white/90" v-html="description"></div>
      </div>
    </div>
  </AppModal>
</template>
