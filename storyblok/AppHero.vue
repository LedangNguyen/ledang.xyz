<script setup lang="ts">
import { ISbRichtext } from "storyblok-js-client";

const props = defineProps<{
  blok: {
    name: string;
    title: string;
    photo: {
      filename: string;
      alt: string;
    };
    text: ISbRichtext;
  };
}>();

const heroText = computed(() => renderRichText(props.blok.text));
</script>

<template>
  <section class="py-10 sm:py-20" v-editable="blok">
    <div class="container max-w-[640px] text-white/90">
      <div class="mb-5 flex items-center gap-5 sm:mb-8 sm:gap-8">
        <div v-if="blok.photo" class="shrink-0">
          <nuxt-img
            class="h-[90px] w-[90px] rounded-full border-[5px] border-solid border-white/90 sm:h-[105px] sm:w-[105px]"
            :src="blok.photo.filename"
            width="190"
            height="190"
            provider="storyblok"
            :modifiers="{ smart: true }"
            :alt="blok.photo.alt"
            :placeholder="21"
          />
        </div>
        <div>
          <h1 v-if="blok.name" class="font-inter mb-2 text-[28px] font-semibold leading-none sm:text-4xl">
            {{ blok.name }}
          </h1>
          <p v-if="blok.title" class="text-lg sm:text-xl">{{ blok.title }}</p>
        </div>
      </div>
      <div v-if="blok.text" class="leading-relaxed [&>p]:mb-5 last:[&>p]:mb-0" v-html="heroText"></div>
    </div>
  </section>
</template>
