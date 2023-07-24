<script setup lang="ts">
import currency from 'currency.js'

const props = withDefaults(defineProps<{
  price?: number
}>(), {
  price: 0,
})

const integer = computed(() => props.price ? currency(props.price, { fromCents: true }).toString()?.split('.')?.[0] : '0')
const decimal = computed(() => props.price ? currency(props.price, { fromCents: true }).toString()?.split('.')?.[1] : '00')
</script>

<template>
  <span class="v-product-price">¥<span class="v-product-price-integer">{{ integer }}</span>.{{ decimal }}</span>
</template>

<style lang="less" scoped>
.v-product {
  &-price {
    display: inline-block;
    font-weight: var(--van-font-bold);
    font-size: 12px;
    line-height: 1;

    &-integer {
      display: inline-block;
      font-size: 20px;
      font-family: var(--van-price-font);
      line-height: 1;
    }
  }
}
</style>
