<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string | number
  title?: string
  image?: string
  price?: number
  sales?: number
  activity?: string
}>(), {
  price: 0,
  sales: 0,
})

const router = useRouter()

function handleClick() {
  router.push({
    path: '/detail',
    query: {
      id: props.id,
    },
  })
}
</script>

<template>
  <div
    class="v-product overflow-hidden rounded-8px bg-white"
    @click="handleClick"
  >
    <div class="rounded-tl-8px rounded-tr-8px text-0">
      <VanImage :src="image" />
    </div>
    <VanTag
      v-if="activity"
      class="left-8px top-8px !absolute !rounded-4px !px-4px !py-2px"
    >
      {{ activity }}
    </VanTag>
    <div class="p-8px">
      <div class="van-multi-ellipsis--l2 mb-8px text-14px">
        {{ title }}
      </div>
      <div class="flex items-end">
        <VPrice :price="price" />
        <div class="ml-8px text-12px text-#969799">
          {{ sales }}件已售
        </div>
      </div>
    </div>
  </div>
</template>
