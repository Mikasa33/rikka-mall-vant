<script setup lang="ts">
const router = useRouter()

const swipes = [
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/cb4e4f87-401a-4ca8-8074-163984d6d881.png',
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/bb8c7f2a-a3b3-409b-abf2-a6e60593cb78.png',
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/518bcfe2-8839-44d7-8a36-dccc48aacc83.png',
]

const recommends = [
  {
    title: '今日特惠',
    desc: '强势推荐',
    image: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/e0d8d1a2-9c72-4051-a644-04f3bc758d8e.png',
  },
  {
    title: '限时享半价',
    desc: '满300减30',
    image: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/88fff34a-7fcf-40bf-acda-3d53c79d7a44.png',
  },
  {
    title: '发现好货',
    desc: '美好新生活',
    image: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/1b60eb15-6e9d-4abc-bb2a-3303399ff6cb.png',
  },
]

const products = [
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
  {
    id: 1,
    title: '经典系列 托运铝框拉杆箱（24/26/28）',
    pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/add9c6bc-3e2e-45dc-b420-d3cf3a6a9acf.png',
    sales: 77,
    price: 900,
    activity: '',
  },
  {
    id: 1,
    title: '米全面屏电视65英寸 E65X',
    pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/67b31bc3-ebc5-4a4c-b06c-92fc7ba3d9a7.jpg',
    sales: 2,
    price: 428920,
    activity: '百亿补贴',
  },
]

function handleClickSearch() {
  router.push('/search')
}
</script>

<template>
  <div>
    <div @click="handleClickSearch">
      <VanSearch
        placeholder="搜索商品名称"
        shape="round"
        readonly
        class="fixed z-1 w-full"
      >
        <template #left-icon>
          <div class="i-icon-park-outline-search text-14px" />
        </template>
      </VanSearch>
      <div class="h-54px" />
    </div>

    <div class="m-16px rounded-8px">
      <VanSwipe class="text-0">
        <VanSwipeItem
          v-for="(item, index) in swipes"
          :key="index"
        >
          <VanImage
            :src="item"
            fill="cover"
            class="h-160px w-full"
          />
        </VanSwipeItem>
      </VanSwipe>
    </div>

    <div class="m-16px">
      <div class="flex">
        <div
          v-for="(item, index) in recommends"
          :key="index"
          :class="{ 'mr-8px': index !== recommends.length - 1 }"
          class="relative h-120px w-full overflow-hidden rounded-8px bg-white p-12px pb-0"
        >
          <div class="text-14px">
            {{ item.title }}
          </div>
          <div class="text-12px text-#969799">
            {{ item.desc }}
          </div>
          <VanImage
            :src="item.image"
            class="bottom-0 !absolute"
          />
        </div>
      </div>
    </div>

    <div class="products m-16px">
      <div class="my-24px flex-center flex-col">
        <div class="text-16px">
          热门推荐
        </div>
        <div class="text-14px text-#969799">
          TOP PICKS
        </div>
      </div>

      <VProductList :products="products" />
    </div>
  </div>
</template>
