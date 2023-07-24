<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'

const themeStore = useThemeStore()

const theme = computed<ConfigProviderTheme>(() => themeStore.isDark ? 'dark' : 'light')
const themeVars = reactive({})
</script>

<template>
  <VanConfigProvider
    :theme="theme"
    :theme-vars="themeVars"
  >
    <slot />
  </VanConfigProvider>
</template>
