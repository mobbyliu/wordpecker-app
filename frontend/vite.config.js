import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0', // 这对于在容器内运行很重要
        // 下面的配置是解决问题的关键
        // 它允许来自 Railway 提供的公共域名的请求
        allowedHosts: [
          // RAILWAY_PUBLIC_DOMAIN 是 Railway 在部署时自动提供的环境变量
          process.env.RAILWAY_PUBLIC_DOMAIN
        ],
    }
});
