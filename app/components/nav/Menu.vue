<script setup lang="ts"></script>

<template>
  <nav
    class="fixed top-0 z-10 box-border flex w-full items-center justify-between gap-4 rounded-b-md bg-ir-secondary px-8 py-4"
  >
    <NuxtLink to="/">
      <img src="/images/logo.svg" class="w-[150px]" />
    </NuxtLink>
    <ThemeSwitcher />
  </nav>
</template>
