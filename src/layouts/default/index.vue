<script setup lang="ts">
import Tabbar from './components/Tabbar.vue'
import { appReloadKey } from './components/inject'

const route = useRoute()
const themeStore = useThemeStore()

const [isReload, toggle] = useToggle()
async function reloadApp() {
  toggle(true)
  await nextTick()
  toggle(false)
}

provide(appReloadKey, reloadApp)

const list = [
  { name: 'index', icon: 'i-icon-park-outline-home', title: '首页' },
  { name: 'category', icon: 'i-icon-park-outline-category-management', title: '分类' },
  { name: 'shopping', icon: 'i-icon-park-outline-shopping', title: '购物车' },
  { name: 'mine', icon: 'i-icon-park-outline-user', title: '我的' },
]

const isMainPage = computed(() => {
  const find: any = list.find((item: any) => (route.name as string)?.includes(item.name))
  return !!find
})
</script>

<template>
  <div class="min-h-100vh">
    <VNavBar :back="!isMainPage" />

    <RouterView
      v-if="!isReload"
      #="{ Component }"
    >
      <Transition
        :name="themeStore.pageAnimateModeVal"
        mode="out-in"
        appear
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <VanBackTop
      :right="16"
      :bottom="66"
    />

    <Tabbar :list="list" />
  </div>
</template>
