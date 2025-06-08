import { ProfileData } from "@/types/project";
import AnimatedContent from "@/components/home/AnimatedContent";
import Link from "next/link";
import Image from "next/image";

async function getProjects(): Promise<ProfileData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/profile`, { 
    cache: "default",
  });

  if (!res.ok) {
    throw new Error('프로파일 데이터를 불러오는데 실패했습니다.');
  }

  return res.json();
}

export default async function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-background to-background/60 px-4">
        <Image src="https://photos.kasumil.co.kr/myProfile.png" alt="송수호" width={160} height={160} className="rounded-full shadow-lg" priority />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold">
          Song Suho <br /><span className="text-primary">Front-End Engineer</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground whitespace-wrap">
          유저의 편리성은 개발자가 고민하고 노력할 수록 높아집니다.<br />
          함께 일하고 싶은 개발자.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/work" className="btn btn-primary">
            <h1 className="text-2xl font-bold">
              대표 프로젝트 보기
            </h1>
          </Link>
        </div>
      </section>
    </>
  );
}
