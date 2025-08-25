<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { AreaSeries, createChart, type UTCTimestamp } from 'lightweight-charts'

const props = defineProps<{ priceHistory: string[] }>()
const chartContainer = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!chartContainer.value) return

  const chart = createChart(chartContainer.value, {
    width: Math.min(chartContainer.value.clientWidth, 1200),
    height: 400,
    layout: {
      background: { color: '#0f172a' },
      textColor: '#94a3b8',
    },
    grid: {
      vertLines: { color: '#1e293b' },
      horzLines: { color: '#1e293b' },
    },
  })

  const lineSeries = chart.addSeries(AreaSeries)
  lineSeries.setData(
    props.priceHistory.map((price, i) => ({
      time: i as UTCTimestamp,
      value: Number(price),
    })),
  )
})
</script>

<template>
  <div ref="chartContainer" class="w-full max-w-[1200px]" />
</template>
