import Link from "next/link";
import { ResumeData } from "@/types/resume";
import CareerSection from "@/components/resume/CareerSection";
import SkillsSection from "@/components/resume/SkillsSection";
import EducationSection from "@/components/resume/EducationSection";
import CertificationSection from "@/components/resume/CertificationSection";

async function fetchResumeData(): Promise<ResumeData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/resume`, { 
    cache: "default",
    next: { revalidate: 0 }
  });
  
  if (!res.ok) {
    throw new Error('프로파일 데이터를 불러오는데 실패했습니다.');
  }

  return res.json();
}

export default async function Resume() {
  const { career, skills, education, certifications } = await fetchResumeData();
  
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

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">이력서</h1>

        <CareerSection career={career} />
        <SkillsSection skills={skills} />
        <EducationSection education={education} />
        <CertificationSection certifications={certifications} />
      </main>
    </div>
  );
}