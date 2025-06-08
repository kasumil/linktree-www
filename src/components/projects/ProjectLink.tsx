import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  title: string;
  description: string;
};

const ProjectLink = ({ href = "/resume", title, description }: Props) => {
  return (
    <Link
      href={href}
      className="w-full p-6 bg-background text-foreground rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 text-center"
    >
      <h2 className="text-xl font-semibold text-foreground mb-2">{title}</h2>
      <p className="text-foreground/80">{description}</p>
    </Link>
  );
};

export default ProjectLink;
