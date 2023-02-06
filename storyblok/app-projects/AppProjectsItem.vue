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
  <article class="relative overflow-hidden rounded-lg border border-solid border-white/90 shadow-lg" v-editable="blok">
    <div>
      <nuxt-img
        class="w-full"
        width="580"
        height="435"
        :src="blok.image.filename"
        provider="storyblok"
        :alt="blok.image.alt"
        :placeholder="[20, 15, 25]"
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
    <button class="absolute inset-0 cursor-pointer" @click="openModal" type="button">
      <span class="sr-only">Learn more about {{ blok.title }} project</span>
    </button>
  </article>

  <AppModal :is-modal-open="isModalOpen" :close-modal="closeModal">
    <div class="overflow-hidden rounded-xl border border-solid border-white/90 bg-slate-900">
      <div class="aspect-w-4 aspect-h-3">
        <nuxt-img
          class="w-full"
          width="1532"
          height="1148"
          :src="blok.image.filename"
          provider="storyblok"
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
