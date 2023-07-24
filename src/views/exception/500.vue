<script setup lang="ts">
const router = useRouter()

function handleClick() {
  router.replace('/')
}
</script>

<template>
  <div class="mt-10% flex-center flex-col">
    <VanEmpty
      image="/svg/系统出错了.svg"
      :image-size="250"
      description="糟糕，出了点问题"
    >
      <VanButton
        type="primary"
        size="small"
        round
        @click="handleClick"
      >
        &nbsp;返回首页&nbsp;
      </VanButton>
    </VanEmpty>
  </div>
</template>
