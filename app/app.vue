<script setup lang="ts">
import { useUserStore } from './stores/user'

useSeoMeta({
  title: 'Independent Reserve',
  description: 'Licensed, secure, and trusted cryptocurrency exchange.',
  ogTitle: 'Independent Reserve',
  ogDescription: 'Licensed, secure, and trusted cryptocurrency exchange.',
  ogImage: '/images/og/independent-reserve.png',
  ogType: 'website',
  ogUrl: 'https://www.independentreserve.com/',
  ogSiteName: 'Independent Reserve',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Independent Reserve',
  twitterDescription: 'Licensed, secure, and trusted cryptocurrency exchange.',
  twitterImage: '/images/og/independent-reserve.png',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
