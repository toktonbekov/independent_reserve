<script setup lang="ts">
import { useUserStore } from '~/stores/user'
const props = defineProps<{ searchText?: string }>()

const userStore = useUserStore()

const currencyList = computed(() => {
  const search = props.searchText?.toLowerCase().trim()
  if (!search) return userStore.currencies

  return userStore.currencies.filter(
    (currency) =>
      currency.ticker.toLowerCase().includes(search) ||
      currency.code.toLowerCase().includes(search),
  )
})

const onNavigate = (code: string) => {
  navigateTo({ name: 'code', params: { code } })
}
</script>

<template>
  <div>
    <h2 class="mb-4 text-xl font-bold">Currencies</h2>
    <Loader v-if="userStore.loadingCurrencies" />

    <ul v-else class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <li
        v-for="currency in currencyList"
        :key="currency.code"
        @click="onNavigate(currency.code)"
        class="flex cursor-pointer items-center gap-4 rounded border p-3 shadow transition hover:scale-[1.02] hover:shadow-md"
        :class="{
          'pointer-events-none cursor-not-allowed opacity-50':
            currency.type === 'Secondary' && currency.code !== NATIVE_CURRENCY,
        }"
      >
        <img
          :src="`data:image/svg+xml;base64,${currency.icon}`"
          :alt="currency.code"
          class="h-10 w-10"
        />
        <div class="flex w-full flex-col gap-2">
          <span class="font-semibold">{{ currency.ticker }}</span>
          <div class="flex justify-between text-sm text-gray-500">
            <div>Code: {{ currency.code }}</div>
            <div>Decimals: {{ currency.decimals_places }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
