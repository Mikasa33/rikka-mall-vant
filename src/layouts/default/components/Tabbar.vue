<script setup lang="ts">
const props = withDefaults(defineProps<{
  list?: any[]
}>(), {
  list: () => [],
})

const route = useRoute()

const active = computed(() => {
  const find: any = props.list.find((item: any) => (route.name as string)?.includes(item.name))
  return find?.name
})

const show = computed(() => unref(active))
</script>

<template>
  <VanTabbar
    v-show="show"
    :model-value="active"

    safe-area-inset-bottom placeholder
  >
    <VanTabbarItem
      v-for="(item, index) in list"
      :key="index"
      :name="item.name"
      :to="`/${item.name}`"
      replace
    >
      {{ item.title }}
      <template #icon>
        <div
          :class="item.icon"
          class="text-16px"
        />
      </template>
    </VanTabbarItem>
  </VanTabbar>
</template>
