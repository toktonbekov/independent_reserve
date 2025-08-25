export type CurrencyType = {
  code: string
  decimals_places: number
  icon: string
  sort_order: number
  ticker: string
  type: string
}

export type MarketType = {
  pair: {
    primary: string
    secondary: string
  }
  price: {
    last: string
    bestBid: string
    bestOffer: string
    change: {
      direction: string
      percent: string
      amount: string
    }
  }
  volume: {
    primary: string
    secondary: string
  }
  priceHistory: string[]
}
