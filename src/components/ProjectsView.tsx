import { Project } from "@/types/project";
import Link from "next/link";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/work/${project.id}`}
          className="group block p-6 bg-background text-foreground rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-bold mb-2 group-hover:text-primary text-foreground">{project.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {project?.technologies?.map((tech) => (
              <span key={tech} className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-foreground/80 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="text-sm text-foreground/60">
            <p>{project.role}</p>
            <p>{project.period}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
