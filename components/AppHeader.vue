<script setup lang="ts">
const isMenuOpen = ref(false);
function toggleMenu(isOpen: boolean) {
  isMenuOpen.value = isOpen;
}
</script>

<template>
  <header
    class="sticky top-0 z-10 py-5 backdrop-blur-lg transition-colors duration-300"
    :class="[isMenuOpen ? 'bg-slate-900' : 'bg-transparent']"
  >
    <div class="container flex max-w-screen-sm items-center justify-between">
      <p>
        <a class="font-inter text-2xl font-semibold text-white" href="/">Le Dang Nguyen</a>
      </p>
      <AppMenu @toggle-menu="toggleMenu" />
    </div>
  </header>
</template>
