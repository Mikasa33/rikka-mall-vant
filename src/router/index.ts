import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import DefaultLayout from '@/layouts/default/index.vue'
import CustomLayout from '@/layouts/custom/index.vue'
import storage from '@/utils/storage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [
    {
      name: 'Root',
      path: '/',
      redirect: '/index',
      component: DefaultLayout,
      children: [
        {
          name: 'index',
          path: '/index',
          component: () => import('@/views/index/index.vue'),
          meta: {
            title: 'Rikka Mall',
            ignore: true,
          },
        },
        {
          name: 'category',
          path: '/category',
          component: () => import('@/views/category/index.vue'),
          meta: {
            title: '分类',
            ignore: true,
          },
        },
        {
          name: 'shopping',
          path: '/shopping',
          component: () => import('@/views/shopping/index.vue'),
          meta: {
            title: '购物车',
            ignore: true,
          },
        },
        {
          name: 'search',
          path: '/search',
          component: () => import('@/views/search/index.vue'),
          meta: {
            title: '搜索',
            ignore: true,
          },
        },
        {
          name: 'detail',
          path: '/detail',
          component: () => import('@/views/detail/index.vue'),
          meta: {
            title: '商品详情',
            ignore: true,
          },
        },
      ],
    },
    {
      name: 'Custom',
      path: '/',
      component: CustomLayout,
      children: [
        {
          name: 'Login',
          path: '/login',
          component: () => import('@/views/login/index.vue'),
          meta: {
            title: '登录',
            ignore: true,
          },
        },
        {
          name: '403',
          path: '/403',
          component: () => import('@/views/exception/403.vue'),
          meta: {
            title: '403',
            ignore: true,
          },
        },
        {
          name: '500',
          path: '/500',
          component: () => import('@/views/exception/500.vue'),
          meta: {
            title: '500',
            ignore: true,
          },
        },
        {
          name: '502',
          path: '/502',
          component: () => import('@/views/exception/502.vue'),
          meta: {
            title: '502',
            ignore: true,
          },
        },
        {
          name: 'NotFound',
          path: '/:pathMatch(.*)*',
          component: () => import('@/views/exception/404.vue'),
          meta: {
            title: '404',
            ignore: true,
          },
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  if (to.path !== from.path)
    NProgress.start()

  const userStore = useUserStore()

  // 忽略 Token 验证的页面
  if (to.meta.ignore)
    return next()

  // 未登录
  if (!userStore.token)
    return next('/login')

  // 跳转页面为登录页面，并且 Token 未过期
  if (to.path.includes('/login') && !storage.isExpired('token'))
    return next('/')

  // 没有用户信息
  if (!userStore.info)
    await userStore.getInfo()

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
