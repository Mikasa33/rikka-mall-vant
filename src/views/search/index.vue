<script setup lang="ts">
const route = useRoute()
const router = useRouter()

const [isSearch, toggleSearch] = useToggle()

const keyword = ref<string>('')

const recommends = ['牙刷', '相机', '小米', '台灯', '单反']

const products = ref<any[]>([])

function handleSearch() {
  if (unref(keyword)) {
    products.value = [
      {
        id: 1,
        title: '演示商品智能台灯Pro 折叠式LED超亮省点',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/b3dea1b7-36f6-4b8e-8ba1-6c16961fd3ff.jpg',
        sales: 7,
        price: 10,
        activity: '超级团购低至0元',
      },
      {
        id: 1,
        title: '演示商品全自动波轮洗衣机简洁大方',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/904b0750-7f8a-45ba-bf66-1cac874fb59c.jpg',
        sales: 5,
        price: 10,
        activity: '',
      },
      {
        id: 1,
        title: 'Sony/索尼 Alpha 7C 索尼全画幅微单相机（ILCE-7C/A7C/α7C）',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/755483ba-017c-4d67-a0d2-6c4688655dfd.jpg',
        sales: 0,
        price: 42900,
        activity: '',
      },
    ]
  }
  toggleSearch(true)
}

function handleCancel() {
  router.back()
}

onMounted(() => {
  keyword.value = route.query.keyword as string
  if (unref(keyword))
    handleSearch()
})
</script>

<template>
  <div>
    <div class="search">
      <VanSearch
        v-model="keyword"
        placeholder="搜索商品名称"
        shape="round"
        show-action
        :autofocus="!keyword"
        class="fixed z-1 w-full"
        @search="handleSearch"
        @cancel="handleCancel"
      >
        <template #left-icon>
          <div class="i-icon-park-outline-search text-14px" />
        </template>
      </VanSearch>
      <div class="h-54px" />
    </div>

    <div
      v-if="!isSearch"
      class="recommends m-16px"
    >
      <div class="mb-16px text-14px">
        搜索推荐
      </div>
      <VanGrid
        :column-num="2"
        :border="false"
        :center="false"
      >
        <VanGridItem
          v-for="(item, index) in recommends"
          :key="index"
        >
          <li class="mb-24px text-14px">
            {{ item }}
          </li>
        </VanGridItem>
      </VanGrid>
    </div>

    <div>
      <div
        v-if="isSearch && products.length"
        class="fixed z-99 w-full bg-white"
      >
        <div class="h-40px flex-center text-14px">
          <div class="flex-center flex-1 text-#323233">
            综合
          </div>
          <div class="flex-center flex-1 text-#969799">
            <span>销量</span>
            <div class="i-icon-park-solid-down-one ml-2px text-12px" />
          </div>
          <div class="flex-center flex-1 text-#969799">
            <span>价格</span>
            <div class="i-icon-park-solid-down-one ml-2px text-12px" />
          </div>
          <div class="flex-center flex-1 text-#969799">
            <span>筛选</span>
            <div class="i-icon-park-outline-filter ml-2px text-12px" />
          </div>
        </div>
      </div>
      <div class="h-40px" />
    </div>

    <div
      v-if="isSearch"
      class="products m-16px"
    >
      <VProductList
        v-if="products.length"
        :products="products"
      />
      <VanEmpty
        v-else
        image="/svg/购物车空空如也.svg"
        :image-size="250"
        description="暂无商品"
      />
    </div>

    <VanDivider
      v-if="isSearch && products.length"
      class="!mx-16px"
    >
      没有更多了
    </VanDivider>
  </div>
</template>

<style lang="less" scoped>
.search {
  :deep(.van-search__action) {
    &:active {
      background-color: transparent;
    }
  }
}

.recommends {
  :deep(.van-grid-item__content) {
    padding: 0;
    background-color: transparent;
  }
}
</style>
