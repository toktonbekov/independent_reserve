<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { CurrencyType } from '~/type'

export interface DropdownProps {
  modelValue: string
  options: CurrencyType[]
}

const props = defineProps<DropdownProps>()
const emit = defineEmits(['update:modelValue', 'click'])

const selector = ref(null)
const opened = ref(false)

onClickOutside(selector, () => {
  opened.value = false
})

const onSelected = (item: CurrencyType) => {
  opened.value = false
  emit('update:modelValue', item.code)
  emit('click', item)
}

const chosenOption = computed(() =>
  props.options.find((i) => i.code === props.modelValue),
)
</script>

<template>
  <div v-if="!!options" class="flex flex-col gap-2">
    <div ref="selector" class="relative flex h-[40px] items-center">
      <button
        class="flex w-[150px] items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-1 shadow-sm transition hover:border-gray-400"
        @click="opened = !opened"
      >
        <img
          v-if="chosenOption?.icon"
          :src="`data:image/svg+xml;base64,${chosenOption?.icon}`"
          class="h-6 w-6"
        />
        <span class="font-medium text-gray-800">
          {{ chosenOption?.ticker }}
        </span>
      </button>

      <Transition name="from-top">
        <div
          v-if="opened"
          class="z-5 absolute left-0 top-10 flex w-[150px] flex-col rounded-md border border-gray-200 bg-white shadow-lg"
        >
          <div
            v-for="(item, idx) in options"
            :key="item.code"
            @click="onSelected(item)"
            class="flex cursor-pointer items-center gap-2 px-2 py-2 transition hover:bg-gray-100"
            :class="{
              'bg-blue-50 font-medium text-blue-600': props.modelValue === item.code,
            }"
          >
            <img
              v-if="item.icon"
              :src="`data:image/svg+xml;base64,${item.icon}`"
              class="h-6 w-6"
            />
            <span>{{ item.ticker }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
