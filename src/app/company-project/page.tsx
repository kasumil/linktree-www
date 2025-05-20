import { Project } from "@/types/project";
import Backbutton from "@/components/buttons/Backbutton";
import ProjectsView from "@/components/projects/ProjectsView";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/projects/company`, {
      next: { revalidate: 3600 }, // 1시간마다 재검증
    });
    if (!response.ok) {
      throw new Error("컴퍼니 프로젝트 데이터를 불러오는데 실패했습니다.");
    }
    return response.json();
  } catch (error) {
    console.error("컴퍼니 프로젝트 호출 error:", error);
    return [];
  }
}

export const metadata = {
  title: "사내 프로젝트 | Portfolio",
  description: "개발자 포트폴리오의 사내 프로젝트 페이지입니다.",
};

export default async function CompanyProjectPage() {
  const projects = await getProjects();

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Backbutton href={"/"}>홈으로 돌아가기</Backbutton>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">사내 프로젝트</h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                회사에서 진행했던 프로젝트들을 소개합니다.
              </p>
            </div>

            {projects.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400">프로젝트가 없습니다.</div>
            ) : (
              <ProjectsView projects={projects} />
            )}
          </div>
        </main>
      </div>
    </Suspense>
  );
}
