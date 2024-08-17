import type { MDXComponents } from "mdx/types";
import p from "./src/components/p";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p,
  };
}
