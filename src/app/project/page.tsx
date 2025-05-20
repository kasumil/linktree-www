import Backbutton from "@/components/buttons/Backbutton";
import type { Project } from "@/types/project";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ProjectsView from "@/components/projects/ProjectsView";

async function GetProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/projects/individual`);

    if (!res.ok) {
      throw new Error("개인 프로젝트를 불러오지 못하였습니다.");
    }

    return res.json();
  } catch (error) {
    console.log("개인 프로젝트 호출 error : " + error);
    return [];
  }
}

export default async function Project() {
  const projects = await GetProjects();

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-8">
            <Backbutton href="/">홈으로 돌아가기</Backbutton>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">개인 프로젝트</h1>

          <ProjectsView projects={projects} />
        </main>
      </div>
    </Suspense>
  );
}
