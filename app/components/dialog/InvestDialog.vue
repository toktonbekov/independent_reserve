<script setup lang="ts">
import { Dialog } from '#components'
import type { DialogVariant } from '~/components/base/Dialog.vue'

const props = withDefaults(
  defineProps<{
    title: ComputedRef<string>
    text?: string
    variant?: DialogVariant
    cancelText?: string
    submitText?: string
  }>(),
  {
    cancelText: 'Close',
    submitText: 'Confirm',
  },
)

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()
</script>

<template>
  <Dialog :variant="variant">
    <h2 class="text-24-bold mb-4 text-center">
      {{ title }}
    </h2>

    <div v-if="text" class="text-16 mb-4 text-center text-black dark:text-white">
      {{ text }}
    </div>

    <div class="flex justify-center gap-4">
      <Button @click="emit('cancel')" appearance="gray">{{ cancelText }}</Button>
      <Button @click="emit('confirm')">{{ submitText }}</Button>
    </div>
  </Dialog>
</template>
