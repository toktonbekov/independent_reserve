<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
export type DialogVariant = 'default' | 'success' | 'danger'

const props = withDefaults(
  defineProps<{
    variant?: DialogVariant
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    :content-class="{
      'rounded-xl border border-gray-200 bg-white dark:bg-black p-4': true,
      'border-2 border-green-500 text-green-500': props.variant === 'success',
      'border-2 border-red-500 text-red-500': props.variant === 'danger',
      'border border-gray-200': props.variant === 'default',
    }"
  >
    <slot />
  </VueFinalModal>
</template>
