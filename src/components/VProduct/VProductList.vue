<script setup lang="ts">
withDefaults(defineProps<{
  products?: any[]
}>(), {
  products: () => [],
})
</script>

<template>
  <VanGrid
    :column-num="2"
    :gutter="8"
    :border="false"
    class="v-product-list -mx-8px"
  >
    <VanGridItem
      v-for="(item, index) in products"
      :key="index"
    >
      <VProduct
        :id="item.id"
        :title="item.title"
        :image="item.pic"
        :price="item.price"
        :sales="item.sales"
        :activity="item.activity"
      />
    </VanGridItem>
  </VanGrid>
</template>

<style lang="less" scoped>
.v-product-list {
  :deep(.van-grid-item__content) {
    padding: 0;
    background-color: transparent;
  }
}
</style>
