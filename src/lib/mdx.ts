import { bundleMDX } from 'mdx-bundler';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ROOT_PATH = process.cwd();
const WORK_PATH = path.join(ROOT_PATH, 'content/work');

export interface WorkMeta {
  title: string;
  tech: string[];
  role: string;
  date: string;
  slug: string;
}

export async function getWorkBySlug(slug: string) {
  const source = fs.readFileSync(path.join(WORK_PATH, `${slug}.mdx`), 'utf8');
  const { content, data } = matter(source);
  
  const { code } = await bundleMDX({
    source: content,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];
      return options;
    },
  });

  return {
    code,
    meta: data as WorkMeta,
  };
}

export async function getAllWorks(): Promise<WorkMeta[]> {
  const files = fs.readdirSync(WORK_PATH);
  
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(WORK_PATH, file), 'utf8');
      const { data } = matter(source);
      return {
        ...data,
        slug: file.replace(/\.mdx$/, ''),
      } as WorkMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 