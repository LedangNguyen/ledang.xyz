<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { AppPathItem } from "~/storyblok/app-path/types";

defineProps<{
  blok: AppPathItem;
}>();

function description(blok: AppPathItem) {
  return renderRichText(blok.description);
}

function formatDate(date: string, now: boolean) {
  return now ? "Present" : useDateFormat(date, "YYYY MMM").value;
}

function distanceBetweenDates(start: string, end: string, now: boolean) {
  const startDate = new Date(start);
  const endDate = now ? new Date() : new Date(end);
  const distance = endDate.getTime() - startDate.getTime();
  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

  const yearsText = years === 1 ? "year" : "years";
  const monthsText = months === 1 ? "month" : "months";

  if (years === 0) return `${months} ${monthsText}`;

  return `${years} ${yearsText} ${months} ${monthsText}`;
}
</script>

<template>
  <article class="relative text-white/90" v-editable="blok">
    <h3 class="text-2xl font-medium">{{ blok.title }}</h3>
    <p class="mb-2 text-lg">{{ blok.subtitle }}</p>
    <p class="mb-2.5 text-white/70">
      {{ formatDate(blok.start_date, false) }} - {{ formatDate(blok.end_date, blok.end_date_present) }} ({{
        distanceBetweenDates(blok.start_date, blok.end_date, blok.end_date_present)
      }})
    </p>
    <div class="leading-relaxed" v-html="description(blok)"></div>
    <span
      class="absolute left-[-49px] top-[10px] block h-4 w-4 rounded-full border-2 border-solid border-white bg-white"
      :class="{ last: $attrs.last }"
    ></span>
  </article>
</template>

<style scoped>
@keyframes pulse {
  0% {
    background-color: rgb(255 255 255 / 100);
  }
  100% {
    background-color: rgb(30 41 59 / 100);
  }
}

.last {
  animation: pulse 1s infinite alternate;
}
</style>
