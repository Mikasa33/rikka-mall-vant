<script setup lang="ts">
const router = useRouter()

const swipes = [
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/b3dea1b7-36f6-4b8e-8ba1-6c16961fd3ff.jpg',
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/904b0750-7f8a-45ba-bf66-1cac874fb59c.jpg',
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/755483ba-017c-4d67-a0d2-6c4688655dfd.jpg',
  'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/add9c6bc-3e2e-45dc-b420-d3cf3a6a9acf.png',
]

const product = {
  id: 1,
  title: '演示商品智能台灯Pro 折叠式LED超亮省点',
  sales: 7,
  price: 10,
  activity: '超级团购低至0元',
}

function handleShopping() {
  router.push('/shopping')
}

function handleBuy() {

}
</script>

<template>
  <div>
    <VanSwipe class="text-0">
      <VanSwipeItem
        v-for="(item, index) in swipes"
        :key="index"
      >
        <VanImage
          :src="item"
          fill="cover"
          class="h-50vh w-full"
        />
      </VanSwipeItem>
    </VanSwipe>

    <div class="bg-white p-16px pb-0">
      <div class="mb-8px text-16px">
        {{ product.title }}
      </div>

      <div class="flex justify-between">
        <div class="flex items-center">
          <VPrice
            :price="product.price"
            class="text-#ee0a24"
          />
          <VanTag
            round
            class="ml-8px"
          >
            {{ product.sales }}件已售
          </VanTag>
        </div>
        <div class="flex items-center text-14px">
          <span>领券</span>
          <div class="i-icon-park-outline-right" />
        </div>
      </div>

      <div class="mb-8px mt-16px flex justify-between border rounded-4px px-16px py-12px text-14px">
        <div class="flex-center">
          <div class="i-icon-park-outline-protect" />
          <span class="ml-4px">正品保证</span>
        </div>
        <div class="flex-center">
          <div class="i-icon-park-outline-shopping-cart-del" />
          <span class="ml-4px">无忧退货</span>
        </div>
        <div class="flex-center">
          <div class="i-icon-park-outline-transporter" />
          <span class="ml-4px">免费包邮</span>
        </div>
      </div>

      <div class="-mx-16px">
        <VanCellGroup :border="false">
          <VanCell title="参与活动">
            <VanTag
              type="primary"
              round
              size="large"
              class="!text-12px"
            >
              {{ product.activity }}
            </VanTag>
          </VanCell>
          <VanCell
            title="选择规格"
            value="未选择"
            is-link
            value-class="text-12px"
          />
        </VanCellGroup>
      </div>
    </div>

    <div class="my-16px">
      <VanCellGroup :border="false">
        <VanCell
          title="商品评论(0)"
          value="好评率100%"
          value-class="text-12px"
          :border="false"
        />
        <div class="flex-center pb-24px pt-16px text-14px text-#969799">
          暂无评论
        </div>
      </VanCellGroup>
    </div>

    <div class="my-16px">
      <VanCellGroup :border="false">
        <VanCell
          title="商品详情"
          :border="false"
        />
        <div class="flex-center pb-24px pt-16px text-14px text-#969799">
          暂无详情
        </div>
      </VanCellGroup>
    </div>

    <VanActionBar placeholder>
      <VanActionBarIcon text="客服">
        <template #icon>
          <div class="i-icon-park-outline-headset" />
        </template>
      </VanActionBarIcon>
      <VanActionBarIcon
        text="购物车"
        @click="handleShopping"
      >
        <template #icon>
          <div class="i-icon-park-outline-shopping" />
        </template>
      </VanActionBarIcon>
      <VanActionBarButton
        color="#82c0ff"
        text="加入购物车"
      />
      <VanActionBarButton
        type="primary"
        text="立即购买"
        @click="handleBuy"
      />
    </VanActionBar>
  </div>
</template>
