<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: (val: boolean) => {
    colorMode.preference = val ? 'dark' : 'light'
  },
})
</script>

<template>
  <div
    class="flex cursor-pointer items-center rounded-full border border-[#FFFFFF1A] bg-[#585654] p-1 transition-all duration-300 ease-in"
    :class="{
      'w-[52px]': true,
      'bg-landing-brand-primary': isDark,
    }"
    @click="isDark = !isDark"
  >
    <div
      class="relative flex items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-300 ease-out"
      :class="{
        'h-6 w-6': true,
        'translate-x-[20px]': isDark,
      }"
    >
      <Icon
        :name="isDark ? 'fa6-solid:moon' : 'fa6-solid:sun'"
        :fill="isDark ? 'black' : 'orange'"
        class="h-4 w-4"
      />
    </div>
  </div>
</template>
