<script setup lang="ts">
const userStore = useUserStore()
const { params } = useRoute('code')

onMounted(() => {
  if (userStore.markets.length === 0) userStore.fetchMarket()
})

const markets = computed(() =>
  userStore.markets.filter(
    (market) =>
      market.pair.primary === params.code || market.pair.secondary === params.code,
  ),
)
const { open, close } = useInvestDialog({
  attrs: {
    title: computed(() => `Invest in ${params.code}`),
    cancelText: 'Sell',
    submitText: 'Buy',
    onConfirm: () => close(),
    onCancel: () => close(),
  },
})
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div>
      <h2 class="mb-4 text-xl font-bold">{{ params.code }}</h2>
      <Button size="md" class="max-w-[200px]" @click="open">Invest</Button>
    </div>
    <MarketList :markets="markets" />
    <Chart v-if="markets[0]?.priceHistory" :priceHistory="markets[0]?.priceHistory" />
  </div>
</template>
