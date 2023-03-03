<script setup lang="ts">
interface Link {
  url: string;
  target?: string;
}

defineProps<{
  blok: {
    heading: string;
    telegram: Link;
    linkedin: Link;
    github: Link;
    instagram: Link;
    resume: {
      filename: string;
    };
  };
}>();
</script>

<template>
  <section class="pb-16 sm:pb-20" v-editable="blok">
    <div class="container max-w-[640px]">
      <h2 class="font-inter mb-8 text-2xl font-semibold text-white/90 sm:text-3xl">{{ blok.heading }}</h2>
      <ul class="grid gap-4">
        <li>
          <AppLink :url="blok.telegram.url" :target="blok.telegram.target" title="Telegram" icon="mdi:telegram" />
        </li>
        <li>
          <AppLink :url="blok.linkedin.url" :target="blok.linkedin.target" title="Linkedin" icon="mdi:linkedin" />
        </li>
        <li>
          <AppLink :url="blok.github.url" :target="blok.github.target" title="Github" icon="mdi:github" />
        </li>
        <li>
          <AppLink :url="blok.instagram.url" :target="blok.instagram.target" title="Instagram" icon="mdi:instagram" />
        </li>
        <li>
          <AppLink :url="blok.resume.filename" target="_blank" title="Download Resume" icon="mdi:text-box" />
        </li>
      </ul>
    </div>
  </section>
</template>
