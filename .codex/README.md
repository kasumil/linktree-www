# Codex 안내 훅과 저장소 스킬

`.agents/skills/verify-linktree/SKILL.md`를 `$verify-linktree`로 호출합니다. 독립 업무 병렬 처리, 공유 변경 직렬 처리, 화면 확인과 프로젝트 검증 명령을 안내합니다.

`hooks.json`은 Codex lifecycle **SessionStart** 훅이며 Git 훅이 아닙니다. Python 3와 Git이 필요합니다. 명령은 고정 안내 JSON만 출력하며 입력·환경 비밀정보를 읽지 않습니다. 자동 테스트, 승인, 파일 변경, 커밋, 푸시, 배포, 네트워크 호출을 하지 않습니다. 제한시간은 5초입니다. 기존 Git hooksPath는 변경하지 않습니다.

## 검증과 활성화 구분

`python3 -B .codex/check.py`는 hooks.json의 실제 명령을 저장소 루트와 하위 폴더에서 실행하고 출력/메타데이터를 검증합니다. 앱 테스트와 실제 SessionStart 발동은 별도입니다.

지원되는 로컬 Codex에서 프로젝트 및 정확한 훅 정의를 검토·신뢰한 뒤 `/hooks` 또는 Settings → Hooks에서 상태를 확인하고 새 세션/resume으로 검증해야 합니다. 이 변경은 신뢰 설정을 바꾸지 않으며 실제 발동 검증은 아직 하지 않았습니다. cloud dot은 연결된 Mac이 있어도 로컬 command 훅을 실행하지 않습니다. 훅은 보안 경계나 병렬 실행 강제 장치가 아닌 안내입니다.

이번 작업은 feature 브랜치/draft PR까지만 진행하며 main 병합·운영 배포·workflow_dispatch를 하지 않습니다. 앱/의존성/기존 CI는 변경하지 않습니다.

공식 문서:
- https://learn.chatgpt.com/docs/hooks
- https://learn.chatgpt.com/docs/build-skills
