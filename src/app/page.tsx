import { ProfileData } from "@/types/project";
import AnimatedContent from "@/components/home/AnimatedContent";

async function getProjects(): Promise<ProfileData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/profile`, { 
    cache: "default",
    next: { revalidate: 0 }
  });

  if (!res.ok) {
    throw new Error('프로파일 데이터를 불러오는데 실패했습니다.');
  }

  return res.json();
}

export default async function Home() {
  const data = await getProjects();

  return (
    <div className="flex items-center justify-items-center-safe min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <AnimatedContent data={data} />
    </div>
  );
}
