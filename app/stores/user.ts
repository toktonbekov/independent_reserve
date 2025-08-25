import { defineStore } from 'pinia'
import type { CurrencyType, MarketType } from '~/type'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const USERNAME = import.meta.env.VITE_USERNAME

export const useUserStore = defineStore('user', {
  state: () => ({
    currencies: [] as CurrencyType[],
    markets: [] as MarketType[],

    loadingCurrencies: false,
    loadingMarkets: false,
  }),

  actions: {
    async fetchCurrency() {
      this.loadingCurrencies = true
      try {
        this.currencies = await $fetch(
          BACKEND_URL + '/currency' + '?username=' + USERNAME,
        )
      } finally {
        this.loadingCurrencies = false
      }
    },

    async fetchMarket() {
      this.loadingMarkets = true
      try {
        this.markets = await $fetch(BACKEND_URL + '/market' + '?username=' + USERNAME)
      } finally {
        this.loadingMarkets = false
      }
    },
  },
})
