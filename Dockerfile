# 基礎映像檔（針對 arm64 架構）
FROM --platform=$TARGETPLATFORM node:20-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 yarn.lock
COPY package.json ./

# 安裝依賴
RUN yarn install --frozen-lockfile

# 複製所有檔案
COPY . .

# 建立 Next.js 應用程式（standalone 模式）
RUN yarn build

# 建立最終映像檔
FROM --platform=$TARGETPLATFORM node:20-alpine AS runner

# 設定工作目錄
WORKDIR /app

# 複製 build 後的獨立檔案
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public

# ✅ 新增這行來確保靜態檔案也被複製
COPY --from=builder /app/.next/static ./.next/static

# 設定 Port
EXPOSE 3000

# 啟動應用程式
CMD ["node", "server.js"]
