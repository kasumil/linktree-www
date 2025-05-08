"use client";

import React from "react";
import ProjectList from "@/components/projects/ProjectList";
import ProjectModal from "@/components/ProjectModal";
import useProjectModal from "@/store";
import { Project } from "@/types/project";

const ProjectsView = ({ projects }: Project) => {
  const { project, isOpen, onClose } = useProjectModal();

  return (
    <>
      <ProjectList projects={projects} />
      <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ProjectsView;
