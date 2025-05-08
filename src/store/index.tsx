import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProjectModalProps } from "@/types/project";

const useProjectModal = create<ProjectModalProps>()(
  devtools(
    persist(
      (set) => ({
        project: null,
        isOpen: false,
        onOpen: (project) => set({ project, isOpen: true }),
        onClose: () => set({ project: null, isOpen: false }),
      }),
      { name: "project-modal-store" }
    )
  )
);

export default useProjectModal;
