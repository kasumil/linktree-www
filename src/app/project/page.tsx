import Link from "next/link";
import Image from "next/image";

// 프로젝트 데이터 타입 정의
type Project = {
  id: number;
  title: string;
  description: string;
  period: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
};

// 프로젝트 데이터
const projects: Project[] = [
  {
    id: 1,
    title: "개인 프로젝트 1",
    description: "개인 프로젝트 1에 대한 상세 설명입니다. 주요 기능과 성과를 기술합니다.",
    period: "2023.01 - 2023.03",
    techStack: ["React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/yourusername/project1",
    demoUrl: "https://project1-demo.com",
    imageUrl: "/personal-project1.jpg",
  },
  {
    id: 2,
    title: "개인 프로젝트 2",
    description: "개인 프로젝트 2에 대한 상세 설명입니다. 주요 기능과 성과를 기술합니다.",
    period: "2023.04 - 2023.06",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project2",
    imageUrl: "/personal-project2.jpg",
  },
];

async function GetProjects(): Promise<Project[]> {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_DOMAIN}/api/projcet`);

  // if (!res.ok) {
  //   throw new Error("프로젝트를 불러오지 못하였습니다.");
  // }

  return projects;
}

export default function Project() {
  // const project = await GetProjects();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">개인 프로젝트</h1>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-64">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.period}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      데모 보기
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
