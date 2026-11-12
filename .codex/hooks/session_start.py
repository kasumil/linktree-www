"""Emit fixed repository context without reading hook input or local secrets."""
import json

print(json.dumps({'hookSpecificOutput': {'hookEventName': 'SessionStart', 'additionalContext': '이 저장소 작업에는 .agents/skills/verify-linktree/SKILL.md를 필요할 때 읽으세요. 기존 AGENTS.md를 우선 확인하세요. 독립 작업은 병렬로, 공유 파일 변경과 배포는 충돌 없이 순서대로 진행하세요. 오류 시 관련 브라우저 화면도 확인하세요. 훅은 안내만 제공하며 테스트 통과나 실행 승인을 뜻하지 않습니다.'}}, ensure_ascii=False))
