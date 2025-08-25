<script setup lang="ts">
import { ref, watch } from 'vue'
import SvgoSearch from '@/assets/svg/search.svg'

export interface BaseSearchInputProps {
  modelValue: string
  placeholder?: string
  disabled?: boolean
  autofocus?: boolean
  small?: boolean
}

const props = defineProps<BaseSearchInputProps>()
const emit = defineEmits(['update:modelValue', 'search'])

const text = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    if (val !== text.value) text.value = val
  },
)

watch(text, (val) => {
  emit('update:modelValue', val)
})

const onEnter = () => {
  emit('search', text.value.trim())
}
</script>

<template>
  <div class="border-gray relative w-full rounded-md border">
    <div class="z-5 absolute left-[12px] top-[50%] -translate-y-1/2 cursor-pointer">
      <SvgoSearch class="h-[20px] w-[20px]" />
    </div>
    <input
      type="text"
      v-model="text"
      :placeholder="props.placeholder || 'Search...'"
      :disabled="props.disabled"
      :autofocus="props.autofocus"
      autocomplete="off"
      class="placeholder:text-gray h-12 w-full rounded-[8px] bg-transparent px-10 py-2 text-ir-primary outline-none transition-all duration-300"
      :class="{
        '!h-[32px]': props.small,
        'cursor-not-allowed opacity-50': props.disabled,
        '!bg-landing-brand-input': !props.disabled,
      }"
      @keyup.enter="onEnter"
    />
  </div>
</template>
