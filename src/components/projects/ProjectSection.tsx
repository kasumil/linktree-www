import React from 'react'
import Image from 'next/image'

type Project = {
    id: number,
    imageUrl: string,
    title: string,
    description: string,
    domain: string
}

const ProjectSection = (project: Project) => {
  return (
    <div
        key={project.id}
        className="bg-background text-foreground rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all duration-300 transform hover:scale-105"
        >
        <div className="flex items-center p-4">
            <div className="relative w-24 h-24 flex-shrink-0">
            {project.imageUrl ? (
                <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
                />
            ) : (
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">이미지 없음</span>
                </div>
            )}
            </div>
            <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                </h3>
                <p className="text-sm text-foreground/80 line-clamp-2">
                    {project.description}
                </p>
                {project.domain && (
                    <a
                    href={project.domain}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-2 inline-block"
                    >
                    프로젝트 보기
                    </a>
                )}
            </div>
        </div>
        </div>
  )
}

export default ProjectSection