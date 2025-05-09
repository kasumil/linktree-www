import { NextResponse } from "next/server";

export async function GET() {
  try {
    const profileRes = await fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/profile`);
    if (!profileRes.ok) {
      throw new Error(`프로필 API 호출 실패: ${profileRes.status}`);
    }
    const profile = await profileRes.json();

    const [categoryRes, snsRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/category`),
      fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/sns?id=${profile?.id}`),
    ]);

    if (!categoryRes.ok || !snsRes.ok) {
      throw new Error("카테고리 또는 SNS API 호출 실패");
    }

    const categorys = await categoryRes.json();
    const sns = await snsRes.json();

    return NextResponse.json({
      profile,
      categorys,
      sns,
    });
  } catch (error) {
    console.error("외부 API 호출 중 에러:", error);
    return NextResponse.json({
      profile: null,
      categorys: null,
      sns: null,
    });
  }
}
