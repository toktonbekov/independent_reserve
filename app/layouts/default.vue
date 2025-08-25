<script setup lang="ts">
import Menu from '@/components/nav/Menu.vue'
import { ModalsContainer } from 'vue-final-modal'
</script>

<template>
  <div
    class="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden px-4 pb-5 pt-4"
  >
    <Menu />
    <main class="flex h-full w-full max-w-[1200px] flex-grow overflow-y-auto pt-[70px]">
      <slot />
    </main>

    <ModalsContainer />
  </div>
</template>
