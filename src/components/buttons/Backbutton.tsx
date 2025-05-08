import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactElement | string;
};

const Backbutton = (props: Props) => {
  return (
    <Link
      href={props.href}
      className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {props.children}
    </Link>
  );
};

export default Backbutton;
