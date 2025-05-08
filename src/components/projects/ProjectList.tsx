"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import useProjectModal from "@/store";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const { onOpen } = useProjectModal();

  return (
    <div className="space-y-4">
      {projects?.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
          onClick={() => onOpen(project)}
        >
          <div className="flex flex-col md:flex-row items-center p-4 gap-4">
            <div className="flex flex-row md:flex-col gap-2 w-full md:w-32 md:h-32 justify-center items-center">
              {project.media && project.media.length > 0 ? (
                project.media.map((media, idx) => (
                  <div key={idx} className="relative w-24 h-24">
                    {media.media_type === "image" ? (
                      <Image
                        src={media.media_url.replace(/[`\s]/g, "")}
                        alt={project.title + " 이미지"}
                        fill
                        className="object-cover rounded-lg"
                        loading="lazy"
                      />
                    ) : null}
                  </div>
                ))
              ) : (
                <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">이미지 없음</span>
                </div>
              )}
            </div>
            <div className="flex-1 w-full">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
