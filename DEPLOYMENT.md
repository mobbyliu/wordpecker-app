# Railway 部署指南

## 概述

本项目包含两个服务：
- **Backend**: Node.js + Express + TypeScript API服务
- **Frontend**: React + Vite 前端应用

## 修复的问题

### 原始Dockerfile问题：
1. ❌ 缺少源代码复制
2. ❌ 缺少构建步骤
3. ❌ 使用开发模式启动
4. ❌ 包含不必要的devDependencies
5. ❌ 开发和生产环境混用

### 修复后的改进：
1. ✅ 正确的多阶段构建
2. ✅ 生产环境优化
3. ✅ 健康检查端点
4. ✅ Railway配置文件
5. ✅ 分离开发和生产环境Dockerfile

## 部署步骤

### 1. Backend 部署

1. 在Railway创建新项目
2. 连接GitHub仓库
3. 设置根目录为 `backend/`
4. 配置环境变量：
   ```
   NODE_ENV=production
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   ```

### 2. Frontend 部署

1. 在Railway创建新项目
2. 连接GitHub仓库
3. 设置根目录为 `frontend/`
4. 配置环境变量：
   ```
   VITE_API_BASE_URL=https://your-backend-url.railway.app
   ```

## 环境变量

### Backend 必需环境变量：
- `MONGODB_URI`: MongoDB连接字符串
- `OPENAI_API_KEY`: OpenAI API密钥
- `ELEVENLABS_API_KEY`: ElevenLabs API密钥
- `NODE_ENV`: 设置为 `production`
- `PORT`: 端口号（Railway会自动设置）

### Frontend 必需环境变量：
- `VITE_API_BASE_URL`: Backend API的基础URL

## 健康检查

- Backend: `GET /health`
- Frontend: `GET /`

## 构建优化

### Backend:
1. 安装所有依赖（包括devDependencies用于构建）
2. 复制源代码
3. 运行TypeScript编译
4. 移除devDependencies
5. 启动生产服务器

### Frontend:
1. 安装所有依赖（包括devDependencies用于构建）
2. 复制源代码
3. 运行Vite构建
4. 移除devDependencies
5. 使用serve提供静态文件服务

## 本地开发

### 开发环境启动：
```bash
# 使用开发环境Dockerfile
docker-compose up --build
```

### 生产环境测试：
```bash
# 使用生产环境Dockerfile
docker-compose -f docker-compose.prod.yml up --build
```

## 注意事项

1. **端口**: Railway会自动设置`PORT`环境变量
2. **健康检查**: 确保健康检查端点正常工作
3. **环境变量**: 在Railway控制台中正确配置所有必需的环境变量
4. **域名**: Railway会自动分配域名，也可以配置自定义域名
5. **环境分离**: 开发环境使用`Dockerfile.dev`，生产环境使用`Dockerfile`

## 故障排除

### 常见问题：

1. **构建失败**: 检查package.json中的脚本是否正确
2. **启动失败**: 检查环境变量是否配置正确
3. **健康检查失败**: 确保健康检查端点返回200状态码
4. **API连接失败**: 检查CORS配置和API基础URL

### 调试命令：

```bash
# 本地测试构建
cd backend && docker build -t backend .
cd frontend && docker build -t frontend .

# 本地测试运行
docker run -p 3000:3000 backend
docker run -p 3000:3000 frontend
``` 