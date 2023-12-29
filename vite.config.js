import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  // server: {
  //   proxy: {
  //   'http://localhost:8080/api': {
  //     target: 'http://beassistant-001-site1.etempurl.com/api/Productos?idEmpresa=11',
  //     changeOrigin: true,
  //     secure: false,
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   },
  //   cors:true
  //   },
  // }

})
