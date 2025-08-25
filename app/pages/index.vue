<script setup lang="ts">
// const chosenCurrency = ref(userStore.currencies[0]?.code || 'Xbt')
const userStore = useUserStore()
const searchText = ref('')

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (userStore.currencies.length === 0) userStore.fetchCurrency()
  if (userStore.markets.length === 0) userStore.fetchMarket()

  intervalId = setInterval(() => {
    userStore.fetchCurrency()
  }, REFETCH_INTERVAL)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="flex w-full flex-1 justify-center">
    <div class="w-full max-w-[1000px] space-y-10 p-6">
      <!-- <Dropdown v-model="chosenCurrency" :options="userStore.currencies" /> -->
      <InputSearch v-model="searchText" />
      <CurrencyList :searchText="searchText" />
      <!-- <MarketList :markets="userStore.markets" /> -->
    </div>
  </div>
</template>
