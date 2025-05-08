import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projectRes = await fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/projects/individual`);
    if (!projectRes.ok) {
      throw new Error(`개인프로젝트 API 호출 실패: ${projectRes.status}`);
    }
    const projects = await projectRes.json();

    return NextResponse.json(projects);
  } catch (error) {
    console.error("외부 API 호출 중 에러:", error);
    return NextResponse.json({
      projects: null,
    });
  }
}
