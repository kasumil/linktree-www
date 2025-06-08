"use client";

import { Category } from "@/types/project";
import ProjectLink from "@/components/projects/ProjectLink";
import { motion } from "framer-motion";

const CATEGORY_HREF_MAP = {
  이력서: "/resume",
  "사내 프로젝트": "/work",
  개인프로젝트: "/projects",
} as const;

interface Props {
  categories: Category[];
}

const CategoryNavigation = ({ categories }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {categories?.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="w-full min-w-0 flex-1"
        >
          <div className="w-full h-full flex flex-col items-center justify-center">
            <ProjectLink
              href={CATEGORY_HREF_MAP[category.category_title as keyof typeof CATEGORY_HREF_MAP]}
              title={category.category_title}
              description={category.category_desc}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryNavigation;
