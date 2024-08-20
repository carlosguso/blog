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
      <div className="lg:w-8/12 md:w-9/12 w-full px-4 sm:px-6 md:px-8 mx-auto">
        <header className="flex justify-between items-center pt-12 mb-8">
          <Link
            href="/blog"
            className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
          >
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
