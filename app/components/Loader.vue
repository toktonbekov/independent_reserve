<script setup lang="ts">
import SvgoLoader from '@/assets/svg/loader.svg'
defineProps<{ size?: number }>()
</script>
<template>
  <div class="flex w-full justify-center py-5">
    <SvgoLoader
      class="h-15 w-15 animate-spin !text-ir-primary duration-1000"
      :class="`!h-${size} !w-${size}`"
    />
  </div>
</template>
