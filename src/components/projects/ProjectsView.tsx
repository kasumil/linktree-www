"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";
import useProjectModal from "@/store";
import { Project } from "@/types/project";

const ProjectsView = ({ projects }: { projects: Project[] }) => {
  const { project, isOpen, onClose, onOpen } = useProjectModal();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    return () => {
      onClose();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all duration-300 h-full"
            onClick={() => onOpen && onOpen(project)}
          >
            <div className="flex flex-col h-full">
              <div className="relative w-full h-48">
                {project.media && project.media.length > 0 ? (
                  <Image
                    src={project.media[0].media_url.replace(/[`\s]/g, "")}
                    alt={project.title + " 이미지"}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">이미지 없음</span>
                  </div>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-1">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack?.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ProjectsView;
