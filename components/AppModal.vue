<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  isModalOpen: boolean;
  closeModal: () => void;
}>();

const modal = ref(null);

onClickOutside(modal, props.closeModal);

onUpdated(() => {
  document.body.classList.toggle("overflow-hidden", props.isModalOpen);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isModalOpen"
        class="scrollbar-hide fixed top-0 left-1/2 z-30 grid h-full w-full max-w-screen-sm -translate-x-1/2 overflow-auto"
      >
        <div class="relative my-auto p-5 pt-12" ref="modal">
          <slot />

          <button class="absolute top-0 right-2" @click="closeModal">
            <span class="sr-only">Close modal</span>
            <span class="flex h-12 w-12 flex-col items-center justify-center">
              <span class="my-1 h-1 w-6 translate-y-3 rotate-45 transform rounded-full bg-white/90"></span>
              <span class="my-1 h-1 w-6"></span>
              <span class="my-1 h-1 w-6 -translate-y-3 -rotate-45 transform rounded-full bg-white/90"></span>
            </span>
          </button>
        </div>
      </div>
    </Transition>
    <Transition name="overlay">
      <div v-if="isModalOpen" class="fixed top-0 left-0 z-20 h-full w-full backdrop-blur-lg"></div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-enter-active,
.modal-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  transform: translateY(-10%) translateX(-50%);
  opacity: 0;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.5s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
