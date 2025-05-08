import { Project } from "@/types/project";
import Backbutton from "@/components/buttons/Backbutton";
import ProjectList from "@/components/projects/ProjectList";
import ProjectModal from "@/components/ProjectModal";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/projects/company`, {
      cache: "default",
      next: { revalidate: 0 },
    });
    if (!response.ok) {
      throw new Error("프로젝트 데이터를 불러오는데 실패했습니다.");
    }
    return response.json();
  } catch (error) {
    console.log("컴퍼니 프로젝트 호출 error : " + error);
    return [];
  }
}

export default async function Page() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Backbutton href={"/"}>홈으로 돌아가기</Backbutton>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">사내 프로젝트</h1>

        {projects.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400">프로젝트가 없습니다.</div>
        ) : (
          <>
            <ProjectList projects={projects} />
            {/* <ProjectModal project={}, isOpen={}, onClose={} /> */}
          </>
        )}
      </main>
    </div>
  );
}
