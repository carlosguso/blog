import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MDXPost {
  title: string;
  date: string;
  slug: string;
}

export function processMDXFiles(
  files: Array<{ url: string; frontmatter: { title?: string; date?: string } }>
): MDXPost[] {
  return files
    .map((file) => {
      const url = file.url;
      const slug = url.split('/').pop()?.replace('.html', '').replace(/\/$/, '') || '';
      return {
        title: file.frontmatter.title || '',
        date: file.frontmatter.date || '',
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
