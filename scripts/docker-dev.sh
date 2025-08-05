#!/bin/bash

# 开发环境启动脚本

echo "🚀 启动 WordPecker 开发环境..."

# 检查环境变量文件
if [ ! -f .env ]; then
    echo "⚠️  警告: 未找到 .env 文件，请确保已配置必要的环境变量"
    echo "   必需的变量: OPENAI_API_KEY, ELEVENLABS_API_KEY, PEXELS_API_KEY"
fi

# 停止现有容器
echo "🛑 停止现有容器..."
docker compose down

# 构建并启动开发环境
echo "🔨 构建开发环境..."
docker compose up --build -d

# 等待服务启动
echo "⏳ 等待服务启动..."
sleep 10

# 检查服务状态
echo "📊 检查服务状态..."
docker compose ps

echo "✅ 开发环境启动完成!"
echo "🌐 前端: http://localhost:5173"
echo "🔧 后端: http://localhost:3000"
echo "🗄️  MongoDB: localhost:27017"

echo ""
echo "📝 常用命令:"
echo "  查看日志: docker compose logs -f"
echo "  停止服务: docker compose down"
echo "  重启服务: docker compose restart"