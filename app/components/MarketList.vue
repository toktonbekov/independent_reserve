<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import type { MarketType } from '~/type'
const userStore = useUserStore()
const props = defineProps<{ markets?: MarketType[] }>()
</script>

<template>
  <div class="w-full">
    <Loader v-if="userStore.loadingMarkets" />

    <table v-else class="w-full border-collapse">
      <thead>
        <tr class="bg-gray-100 text-left dark:bg-gray-600">
          <th class="border p-2">Pair</th>
          <th class="border p-2">Last Price</th>
          <th class="border p-2">Best Bid</th>
          <th class="border p-2">Best Offer</th>
          <th class="border p-2">Change</th>
          <th class="border p-2">Volume</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="market in props.markets"
          :key="market.pair.primary + market.pair.secondary"
          class="hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <td class="border p-2">
            {{ market.pair.primary }}/{{ market.pair.secondary }}
          </td>
          <td class="border p-2">{{ market.price.last }}$</td>
          <td class="border p-2">{{ market.price.bestBid }}$</td>
          <td class="border p-2">{{ market.price.bestOffer }}$</td>
          <td
            class="border p-2"
            :class="
              market.price.change.direction === 'Up' ? 'text-green-600' : 'text-red-600'
            "
          >
            {{ market.price.change.percent }}% ({{
              market.price.change.direction === 'Up' ? '+' : '-'
            }}{{ market.price.change.amount }}$)
          </td>
          <td class="border p-2">
            {{ market.volume.primary }} {{ market.pair.primary }} /
            {{ market.volume.secondary }}
            {{ market.pair.secondary }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
