<script setup lang="ts">
const router = useRouter()

function handleClick() {
  router.push('/')
}
</script>

<template>
  <div>
    <VanEmpty
      image="/svg/购物车空空如也.svg"
      :image-size="250"
      description="暂无商品"
    >
      <VanButton
        type="primary"
        size="small"
        round
        @click="handleClick"
      >
        &nbsp;去逛逛&nbsp;
      </VanButton>
    </VanEmpty>
  </div>
</template>
