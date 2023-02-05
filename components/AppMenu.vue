<script setup lang="ts">
const isMenuOpen = ref(false);

const emit = defineEmits<{
  (e: "toggle-menu", isOpen: boolean): void;
}>();
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  emit("toggle-menu", isMenuOpen.value);
}
</script>

<template>
  <button class="min-[600px]:hidden" @click="toggleMenu" type="button">
    <span class="sr-only">Open Menu</span>
    <span class="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-white/90">
      <span
        class="ease my-1 h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? 'translate-y-3 rotate-45  ' : ' ']"
      ></span>
      <span
        class="ease h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? 'my-1.5 opacity-0' : 'my-1  ']"
      ></span>
      <span
        class="ease my-1 h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? '-translate-y-3 -rotate-45 ' : ' ']"
      ></span>
    </span>
  </button>
  <nav
    class="flex items-center gap-8 transition-transform duration-300 max-[599px]:absolute max-[599px]:top-full max-[599px]:-left-full max-[599px]:h-[calc(100dvh-88px)] max-[599px]:w-full max-[599px]:flex-col max-[599px]:bg-slate-900 max-[599px]:p-10 min-[600px]:gap-5"
    :class="{
      'translate-x-full': isMenuOpen,
    }"
  >
    <a class="text-2xl text-white/90 min-[600px]:text-base" href="/#path" title="My career path">Path</a>
    <a class="text-2xl text-white/90 min-[600px]:text-base" href="/#projects" title="Some of my projects">Projects</a>
    <a class="text-2xl text-white/90 min-[600px]:text-base" href="/#contact" title="Get in touch with me">Contact</a>
    <a
      class="flex items-center gap-1 text-2xl text-white/90 min-[600px]:text-base"
      target="_blank"
      href="https://github.com/LedangNguyen/ledang.xyz"
      title="View source code on GitHub"
      ><svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
        ></path></svg
      >Source</a
    >
  </nav>
</template>
