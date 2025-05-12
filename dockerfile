# 1) 빌드 스테이지: 의존성 설치 + Next.js 빌드
FROM node:18-alpine AS builder
WORKDIR /app

# 1-1. package.json 먼저 복사 → 레이어 캐시 최적화
COPY package*.json ./
RUN npm ci               # devDependencies 포함

# 1-2. 소스 전체 복사 + Next.js 빌드
COPY . .
RUN npm run build        # next build 혹은 yarn build

# 2) 런타임 스테이지: 프로덕션 의존성 + PM2
FROM node:18-alpine AS runner
WORKDIR /app

# 2-1. 프로덕션 전용 의존성 설치
COPY package*.json ./
RUN npm ci --omit=dev

# 2-2. PM2 전역 설치
RUN npm install pm2@latest -g

# 2-3. 빌드 산출물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/ecosystem.config.js ./

# 2-4. 앱 포트 오픈
EXPOSE 3000
ENV NODE_ENV=production

# 3) 컨테이너 시작 시 PM2로 앱 실행
#    pm2-runtime은 PM2 전용 entrypoint로, 단일 프로세스 모니터링 최적화됨
CMD ["pm2-runtime", "ecosystem.config.js"]