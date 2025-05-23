import Backbutton from "@/components/buttons/Backbutton";
import type { Project } from "@/types/project";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ProjectsView from "@/components/projects/ProjectsView";

async function GetProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/projects/individual`, {
      next: { revalidate: 3600 }, // 1시간마다 재검증
    });

    if (!res.ok) {
      throw new Error("개인 프로젝트를 불러오지 못하였습니다.");
    }

    return res.json();
  } catch (error) {
    console.error("개인 프로젝트 호출 error:", error);
    return [];
  }
}

export const metadata = {
  title: "프로젝트 | Portfolio",
  description: "개발자 포트폴리오의 프로젝트 페이지입니다.",
};

export default async function ProjectPage() {
  const projects = await GetProjects();

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Backbutton href="/">홈으로 돌아가기</Backbutton>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">개인 프로젝트</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                개발하며 진행했던 프로젝트들을 소개합니다.
              </p>
            </div>

            <ProjectsView projects={projects} />
          </div>
        </main>
      </div>
    </Suspense>
  );
}
