<script setup lang="ts">
const props = defineProps<{
  title: string;
  url?: string;
  email?: string;
  target?: string;
  icon?: string;
}>();

const href = computed(() => {
  if (props.email) return `mailto:${props.email}`;

  return props.url;
});
</script>

<template>
  <a
    class="inline-flex items-center gap-1.5 text-lg font-medium text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4"
    :href="href"
    :target="target"
  >
    <IconCSS v-if="icon" class="text-xl" :name="icon" />
    <span>{{ title }}</span>
  </a>
</template>
