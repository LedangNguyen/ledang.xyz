<script setup lang="ts">
import { useElementBounding, useScroll, useTemplateRefsList } from "@vueuse/core";
import { SbBlokData } from "@storyblok/js";

const props = defineProps<{
  blok: {
    body: SbBlokData[];
  };
}>();

const refs = useTemplateRefsList<HTMLDivElement>();
const scrollSection = useScrollSection();

watch(scrollSection, (section) => {
  props.blok.body.forEach((component, index) => {
    if (component.component !== section) return;

    const { top } = useElementBounding(refs.value[index]);
    const { y } = useScroll(window, { behavior: "smooth" });

    y.value = top.value + window.scrollY - 100;

    scrollSection.value = "";
  });
});
</script>

<template>
  <main>
    <StoryblokComponent
      v-if="blok"
      v-for="component in blok.body"
      :key="component._uid"
      :blok="component"
      :ref="refs.set"
    />
  </main>
</template>
