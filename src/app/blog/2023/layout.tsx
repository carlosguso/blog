import Link from "next/link";
import MainLayout from "@/components/MainLayout";
import BlogPostLayout from "@/components/BlogPostLayout";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlogPostLayout>
      <main>{children}</main>
    </BlogPostLayout>
  );
}
