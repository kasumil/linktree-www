# 링크트리 클론 프로젝트

## 프로젝트 소개

이 프로젝트는 링크트리의 기능을 클론하고 개인적으로 커스터마이징한 웹 애플리케이션입니다. 사용자가 자신만의 링크 모음 페이지를 쉽게 만들고 관리할 수 있는 플랫폼을 제공합니다.

## 주요 기능

- 개인화된 링크 프로필 페이지 생성
- 다양한 소셜 미디어 및 웹사이트 링크 추가 기능
- 사용자 프로필 커스터마이징 (프로필 사진, 배경색, 디자인 테마 등)
- 실시간 데이터베이스 연동을 통한 즉각적인 업데이트
- 모바일 친화적 반응형 디자인

## 기술 스택

### 프론트엔드

- Next.js (React 기반 프레임워크)
- CSS 모듈 / Styled Components
- 반응형 웹 디자인

### 백엔드

- Node.js
- Next.js API 라우트
- RESTful API 설계

### 데이터베이스

- MariaDB
- phpMyAdmin (데이터베이스 관리 도구)

## 시스템 아키텍처

이 프로젝트는 다음과 같은 시스템 아키텍처로 구성되어 있습니다:

![시스템 아키텍처 다이어그램](/public/system_architecture.svg)

위 다이어그램에서 볼 수 있듯이:

- 프론트엔드는 사용자 인터페이스(유저단)와 API 요청을 처리하는 부분으로 구성됩니다.
- Node.js 서버는 비즈니스 로직을 처리하고 데이터베이스와 상호작용합니다.
- 모든 데이터는 MariaDB에 저장되고 phpMyAdmin을 통해 관리됩니다.

## 설치 및 실행 방법

### 사전 요구사항

- Node.js (v14 이상)
- MariaDB
- phpMyAdmin

### 설치 단계

1. 저장소 클론

```bash
git clone https://github.com/kasumil/linktree-www.git
cd linktree-www
```

2. 필요한 패키지 설치

```bash
npm install
```

3. 환경 변수 설정
   프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:

```
NEXT_PUBLIC_NODE_DOMAIN // 외부통신용
NEXT_PUBLIC_INTERNAL_DOMAIN // 내부통신용
```

4. 개발 서버 실행

```bash
npm run dev
```

5. 브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션 확인

## 프로젝트 구조

```
linktree-clone/
├── components/         # 재사용 가능한 React 컴포넌트
├── pages/              # Next.js 페이지 및 API 라우트
│   ├── api/           # 백엔드 API 엔드포인트
│   └── [username].js  # 동적 사용자 프로필 페이지
├── public/             # 정적 파일 (이미지, SVG 등)
├── styles/             # 전역 및 컴포넌트별 스타일
├── lib/                # 유틸리티 함수 및 데이터베이스 연결
├── .env.local          # 환경 변수 (git에서 제외됨)
└── README.md           # 프로젝트 문서
```

## 배포 방법

이 프로젝트는 다음과 같은 방법으로 배포할 수 있습니다:

1. Vercel (권장)

```bash
npm install -g vercel
vercel
```

2. 사용자 정의 서버

```bash
npm run build
npm start
```

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 기능 브랜치를 생성합니다: `git checkout -b feature/amazing-feature`
3. 변경 사항을 커밋합니다: `git commit -m 'Add amazing feature'`
4. 브랜치에 푸시합니다: `git push origin feature/amazing-feature`
5. Pull Request를 제출합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

프로젝트 관리자 - [@your-username](https://github.com/kasumil/linktree-www.git)

프로젝트 링크: [https://github.com/kasumil/linktree-www.git](https://github.com/kasumil/linktree-www.git)
