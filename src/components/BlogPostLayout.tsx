import Footer from "./Footer";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-center align-center">
      <div className="lg:w-8/12 md:w-9/12 w-full p-2 mx-auto sm:px-4">
        <header className="flex justify-between items-center pt-12 mb-8">
          <Link href="/blog" className="text-main-accent hover:underline">
            ← Back to Blog
          </Link>
          <ThemeToggle />
        </header>
        <main className="mt-12">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
