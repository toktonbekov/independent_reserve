<script setup lang="ts">
import { useField } from 'vee-validate'

interface IOptions {
  value: string | number
  title: string
  hide?: boolean
  component?: any
  count?: number
  isLoading?: boolean
}

export interface SelectRadioProps {
  options: IOptions[]
  name: string
  modelValue?: string | number
}

const props = defineProps<SelectRadioProps>()

const { value } = useField(toRef(props.name), undefined, {
  validateOnValueUpdate: false,
  syncVModel: true,
})

const selectedTitle = computed(() => {
  const option = props.options.find((v) => v.value === unref(value))
  return option?.title ?? props.options[0]?.title
})
</script>

<template>
  <div
    class="flex w-full justify-start gap-[4px] rounded-[8px] bg-transparent duration-[50ms]"
  >
    <div
      v-for="item in options"
      class="flex w-auto justify-center [flex:none]"
      :class="{
        'border-ir-primary border': selectedTitle === item.title,
      }"
    >
      <input
        type="radio"
        v-model="value"
        class="hidden"
        :value="item.value"
        :id="item.value.toString()"
        :name="props.name"
      />
      <label v-if="!item.hide" class="cursor-pointer" :for="item.value.toString()">
        <div
          class="flex items-center gap-2 px-2 py-2 transition-colors duration-[50ms] md:px-4"
        >
          <component :is="item.component" :fontControlled="false" filled />
          <p
            :class="{
              '!text-ir-primary': selectedTitle === item.title,
            }"
            class="text-landing-16 hover:text-ir-primary flex shrink-0 items-center gap-[3px] text-nowrap lg:text-[20px] lg:font-bold"
          >
            <span>{{ item.title }}</span>
            <Skeleton v-if="item.isLoading" class="h-[20px] w-[20px] rounded-[22px]" />
            <span
              v-else-if="!item.isLoading && item.count"
              class="text-green text-sm"
              :class="{
                '!text-ir-primary': selectedTitle === item.title,
              }"
            >
              ({{ item.count }})
            </span>
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
