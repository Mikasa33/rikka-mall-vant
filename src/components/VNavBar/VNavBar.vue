<script setup lang="ts">
const props = withDefaults(defineProps<{
  back?: boolean
}>(), {
  back: false,
})

const route = useRoute()
const router = useRouter()
const title = computed(() => route.meta.title as string)

function handleClickLeft() {
  if (props.back)
    router.back()
}
</script>

<template>
  <VanNavBar
    :title="title"

    placeholder safe-area-inset-top fixed
    :border="false"
    v-bind="$attrs"
    class="v-nav-bar"
    @click-left="handleClickLeft"
  >
    <template
      v-if="back"
      #left
    >
      <div class="i-icon-park-outline-left text-18px text-white" />
    </template>
  </VanNavBar>
</template>

<style lang="less" scoped>
.v-nav-bar {
  :deep(.van-nav-bar) {
    background-color: #1989fa;

    &__title,
    &__text,
    .van-icon {
      color: #fff;
    }

    &__left,
    &__right {
      padding: 0 8px;
    }
  }
}
</style>
