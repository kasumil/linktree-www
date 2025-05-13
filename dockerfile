# 1) 빌드 스테이지
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) 런타임 스테이지
FROM node:18-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
RUN npm install pm2 -g
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/ecosystem.config.js ./

EXPOSE 3100
ENV NODE_ENV=production

# PM2-runtime 으로 프로세스 관리
CMD ["pm2-runtime", "ecosystem.config.js"]