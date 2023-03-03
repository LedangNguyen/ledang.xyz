<script setup lang="ts">
const isMenuOpen = useMenu();
const scrollSection = useScrollSection();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;

  document.body.classList.toggle("overflow-hidden", isMenuOpen.value);
}

function scrollToSection(id: string) {
  scrollSection.value = id;

  isMenuOpen.value = false;

  document.body.classList.remove("overflow-hidden");
}
</script>

<template>
  <button class="min-[600px]:hidden" @click="toggleMenu" type="button">
    <span class="sr-only">Open Menu</span>
    <span class="group flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-white/90">
      <span
        class="ease my-1 h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? 'translate-y-3 rotate-45  ' : '']"
      ></span>
      <span
        class="ease h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? 'my-1.5 opacity-0' : 'my-1']"
      ></span>
      <span
        class="ease my-1 h-0.5 w-6 transform rounded-full bg-white/90 transition duration-300"
        :class="[isMenuOpen ? '-translate-y-3 -rotate-45 ' : '']"
      ></span>
    </span>
  </button>
  <nav
    class="flex items-center gap-8 transition-transform duration-300 max-[599px]:absolute max-[599px]:top-full max-[599px]:-left-full max-[599px]:h-[calc(100dvh-88px)] max-[599px]:w-full max-[599px]:flex-col max-[599px]:bg-slate-900 max-[599px]:p-10 min-[600px]:gap-5"
    :class="{
      'translate-x-full': isMenuOpen,
    }"
  >
    <button
      @click="scrollToSection('app-path')"
      class="text-2xl text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 min-[600px]:text-base"
      type="button"
      title="My career path"
    >
      Path
    </button>
    <button
      @click="scrollToSection('app-projects')"
      class="text-2xl text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 min-[600px]:text-base"
      type="button"
      title="Some of my projects"
    >
      Projects
    </button>
    <button
      @click="scrollToSection('app-contact')"
      class="text-2xl text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 min-[600px]:text-base"
      type="button"
      title="Get in touch with me"
    >
      Contact
    </button>
    <a
      class="flex items-center gap-1 text-2xl text-white/90 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 min-[600px]:text-base"
      target="_blank"
      href="https://github.com/LedangNguyen/ledang.xyz"
      title="View source code on GitHub"
    >
      <IconCSS name="mdi:github" />
      <span>Source</span>
    </a>
  </nav>
</template>
