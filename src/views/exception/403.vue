<script setup lang="ts">
const router = useRouter()

function handleClick() {
  router.replace('/')
}
</script>

<template>
  <div class="mt-10% flex-center flex-col">
    <VanEmpty
      image="/svg/暂无权限.svg"
      :image-size="250"
      description="您无权访问此页面"
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
