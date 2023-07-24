import { URL, fileURLToPath } from 'node:url'

import { type ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'

import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import Unocss from 'unocss/vite'

export default ({ command, mode }: ConfigEnv) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return defineConfig({
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./src/types', import.meta.url)),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          {
            vant: [
              'closeDialog',
              'closeNotify',
              'closeToast',
              'showConfirmDialog',
              'showDialog',
              'showFailToast',
              'showImagePreview',
              'showLoadingToast',
              'showNotify',
              'showSuccessToast',
              'showToast',
            ],
          },
        ],
        dts: 'src/types/auto-imports.d.ts',
        dirs: ['src/composables', 'src/hooks', 'src/stores'],
        vueTemplate: true,
      }),
      Components({
        dts: 'src/types/components.d.ts',
        resolvers: [VantResolver()],
      }),
      Unocss(),
      createHtmlPlugin({
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
          },
        },
      }),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
    server: {
      proxy: {
        '/dev/': {
          target: 'http://localhost:9103',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/dev/, ''),
        },
      },
    },
  })
}
