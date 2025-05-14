"use client";

import React, { useEffect } from "react";
import ProjectList from "@/components/projects/ProjectList";
import ProjectModal from "@/components/ProjectModal";
import useProjectModal from "@/store";
import { Project } from "@/types/project";

const ProjectsView = ({ projects }: { projects: Project[] }) => {
  const { project, isOpen, onClose, onOpen } = useProjectModal();

  useEffect(() => {
    return () => {
      onClose();
    };
  }, []);

  return (
    <>
      <ProjectList projects={projects} />
      <ProjectModal project={project} isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};

export default ProjectsView;
