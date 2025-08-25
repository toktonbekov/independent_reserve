<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    appearance?: 'orange' | 'green' | 'gray' | 'white' | 'blue'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean
  }>(),
  {
    appearance: 'orange',
    size: 'md',
  },
)
</script>

<template>
  <button
    v-bind="$attrs"
    class="button w-full border text-opacity-85"
    :class="{
      [size]: Boolean(props.size),
      [appearance]: Boolean(props.appearance),
      disabled: props.disabled,
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  @apply rounded-md text-sm font-semibold text-white transition-opacity;

  &:disabled {
    @apply opacity-60;
  }

  &:not(:disabled):active {
    @apply opacity-85;
  }

  &.xs {
    @apply px-2 py-1 text-xs;
  }

  &.sm {
    @apply px-3 py-1.5 text-sm;
  }

  &.md {
    @apply px-4 py-2 text-base;
  }

  &.lg {
    @apply px-5 py-2.5 text-lg;
  }

  &.xl {
    @apply px-6 py-3 text-xl;
  }
}

.white {
  @apply border border-orange-600 bg-white text-black;
}

.blue {
  @apply border bg-blue-500 text-white;
}

.orange {
  background: linear-gradient(90deg, #fea41f 0%, #e05c1d 100%);
}

.green {
  background: linear-gradient(to top, #3d8a40 0%, #6af06f 100%);
}

.gray {
  @apply border border-gray-600 bg-gray-500;

  &:disabled {
    @apply pointer-events-none bg-gray-500;
  }
}

.disabled {
  @apply pointer-events-none opacity-60;
}
</style>
