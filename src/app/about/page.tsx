import { ResumeData } from "@/types/resume";
import CareerSection from "@/components/resume/CareerSection";
import SkillsSection from "@/components/resume/SkillsSection";
import EducationSection from "@/components/resume/EducationSection";
import CertificationSection from "@/components/resume/CertificationSection";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function fetchResumeData(): Promise<ResumeData> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_INTERNAL_DOMAIN}/api/resume`, {
      cache: "default",
    });

    if (!res.ok) {
      throw new Error("프로파일 데이터를 불러오는데 실패했습니다.");
    }

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // 에러를 다시 던져서 호출한 곳에서 처리할 수 있도록 함
  }
}

export default async function Resume() {
  const { career, skills, education, certifications } = await fetchResumeData();

  return (
    <Suspense fallback={<Loading />}>
      <div className="bg-background text-foreground">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <CareerSection career={career} />
          <SkillsSection skills={skills} />
          <EducationSection education={education} />
          <CertificationSection certifications={certifications} />
        </main>
      </div>
    </Suspense>
  );
}
