import { NextResponse } from 'next/server';
import { Project } from '@/types/project';

// 임시 데이터 - 실제로는 데이터베이스에서 가져와야 합니다
const projects: Project[] = [
  {
    id: 1,
    title: "프로젝트 1",
    description: "프로젝트 1에 대한 상세 설명입니다. 주요 기능과 성과를 기술합니다.",
    period: "2023.01 - 2023.06",
    role: "프론트엔드 개발자",
    techStack: ["React", "TypeScript", "Next.js"],
    imageUrl: "/project1.jpg",
    link: "https://project1.com",
    content: "프로젝트 1의 상세 내용입니다.\n\n- 주요 기능 1\n- 주요 기능 2\n- 주요 기능 3"
  },
  {
    id: 2,
    title: "프로젝트 2",
    description: "프로젝트 2에 대한 상세 설명입니다. 주요 기능과 성과를 기술합니다.",
    period: "2023.07 - 2023.12",
    role: "풀스택 개발자",
    techStack: ["Node.js", "Express", "MongoDB", "React"],
    imageUrl: "/project2.jpg",
    content: "프로젝트 2의 상세 내용입니다.\n\n- 주요 기능 1\n- 주요 기능 2\n- 주요 기능 3"
  },
];

export async function GET() {
  // 실제 구현에서는 데이터베이스에서 데이터를 가져와야 합니다
  return NextResponse.json(projects);
} 