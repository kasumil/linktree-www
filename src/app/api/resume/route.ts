import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resumeRes = await fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/resume?id=1`);
    if (!resumeRes.ok) {
      throw new Error(`이력서 API 호출 실패: ${resumeRes.status}`);
    }
    const resume = await resumeRes.json();

    return NextResponse.json(resume);
  } catch (error) {
    console.error("외부 API 호출 중 에러:", error);
    return NextResponse.json({
      resume: null,
    });
  }
}
