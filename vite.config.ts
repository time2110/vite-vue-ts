import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer(),
    ViteRestart({
      restart: [
        'vite.config.ts',
      ]
    })
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
