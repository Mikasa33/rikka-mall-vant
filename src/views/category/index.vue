<script setup lang="ts">
const router = useRouter()

const active = ref(0)

const categorys = [
  {
    title: '相机',
    children: [
      {
        title: '索尼',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/411de1a8-0a09-474f-b551-5b57750abcfc.jpg',
      },
    ],
  },
  {
    title: '手表',
    children: [
      {
        title: '美度',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/eb372870-0ae0-44a1-8eb5-4273fd47ce35.png',
      },
      {
        title: '欧米茄',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/94ebd70b-1f8a-4c1a-a4b1-c21cc5d93f07.jpeg',
      },
      {
        title: '阿玛尼',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/5278a6d8-af71-42ef-96d7-00103a4e6154.jpeg',
      },
    ],
  },
  {
    title: '家居',
    children: [
      {
        title: '按摩',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/20517061-329b-4c02-9532-5bf8139c4df1.jpg',
      },
      {
        title: '收纳',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/984f152c-4835-4559-90c5-7fe557585fbd.jpg',
      },
      {
        title: '牙刷',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/319330c1-1dfd-44e4-aff5-2db53d67bc02.jpg',
      },
      {
        title: '扫地机器人',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/8113a36b-54df-4b10-a7a3-ae547cedae4b.jpg',
      },
      {
        title: '台灯',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/cf6c7e6e-b900-4990-917d-070e3c21bbef.png',
      },
    ],
  },
  {
    title: '电视',
    children: [
      {
        title: '曲面屏',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/36fce04d-756f-4a0f-bbea-6359c278d13e.jpg',
      },
      {
        title: '全面屏',
        pic: 'https://cool-mall.oss-cn-shanghai.aliyuncs.com/app/5f45d100-ec46-43fa-bb52-2eccb6835df2.jpg',
      },
    ],
  },
]

function handleClickSidebarItem(index: number) {
  const anchor: any = document.querySelector(`#anchor-${index}`)
  if (anchor)
    window.scrollTo({ top: anchor.offsetTop - 62, behavior: 'smooth' })
}

function handleClickItem(record: any) {
  router.push({
    path: '/search',
    query: {
      keyword: record.title,
    },
  })
}
</script>

<template>
  <div>
    <div class="flex">
      <div class="fixed w-full">
        <VanSidebar v-model="active">
          <VanSidebarItem
            v-for="(item, index) in categorys"
            :key="index"
            :title="item.title"
            @click="handleClickSidebarItem(index)"
          />
        </VanSidebar>
      </div>

      <div class="ml-80px min-h-[calc(100vh-46px-50px)] w-full bg-white px-16px">
        <div
          v-for="(item, index) in categorys"
          :key="index"
        >
          <VanDivider
            :id="`anchor-${index}`"
            class="!mb-0 !text-#323233"
          >
            {{ item.title }}
          </VanDivider>
          <VanGrid
            :column-num="3"
            :border="false"
          >
            <VanGridItem
              v-for="(child, index2) in item.children"
              :key="`${index}-${index2}`"
              @click="handleClickItem(child)"
            >
              <VanImage
                :src="child.pic"
                fit="contain"
                class="h-80px w-full p-4px"
              />
              <div class="text-14px">
                {{ child.title }}
              </div>
            </VanGridItem>
          </VanGrid>
        </div>
      </div>
    </div>
  </div>
</template>
