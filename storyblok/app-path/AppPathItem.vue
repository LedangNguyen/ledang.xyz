<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";
import { AppPathItem } from "~/storyblok/app-path/types";

const props = defineProps<{
  blok: AppPathItem;
}>();

const description = computed(() => {
  return renderRichText(props.blok.description);
});

function formatDate(date: string, now: boolean) {
  return now ? "Today" : useDateFormat(date, "YYYY MMM").value;
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
    <p class="text-2xl font-medium">{{ blok.title }}</p>
    <p class="mb-2 text-lg">{{ blok.subtitle }}</p>
    <p class="mb-2.5 text-white/70">
      {{ formatDate(blok.start_date, false) }} - {{ formatDate(blok.end_date, blok.end_date_present) }} ({{
        distanceBetweenDates(blok.start_date, blok.end_date, blok.end_date_present)
      }})
    </p>
    <div class="leading-relaxed" v-html="description"></div>
    <span
      class="absolute left-[-48px] top-[10px] block h-[15px] w-[15px] rounded-full border-2 border-solid border-white bg-white"
    ></span>
  </article>
</template>
