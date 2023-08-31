import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
    ViteRestart({
      restart: [
        'vite.config.ts',
      ]
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      // 配置选项
      importStyle: 'sass', // 设置导入样式，默认是 'css'
      useSource: true, // 设置是否使用源代码，默认是 false
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

  ],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve('./src')
    },
    // 类型： string[] 导入时想要省略的扩展名列表。
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: false, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})
