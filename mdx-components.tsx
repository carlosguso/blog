import type { MDXComponents } from "mdx/types";
import p from "./src/components/p";
import h1 from "./src/components/h1";
import h2 from "./src/components/h2";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    p,
    h1,
    h2,
  };
}
