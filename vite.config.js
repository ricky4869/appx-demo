import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"

import VitePluginSass from "vite-plugin-sass"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/appx-demo/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/css/variables.scss";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
