import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center pt-8 pb-3 px-4 sm:px-0">
      <Link
        href="/"
        className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx mb-4 sm:mb-0"
      >
        <h1 className="text-2xl font-semibold text-main-accent-light dark:text-main-accent">
          Carlos Gutierrez
        </h1>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          href="/blog"
          className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
        >
          Thoughts
        </Link>
        <Link
          href="/projects"
          className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
        >
          Projects
        </Link>
        <Link
          href="/articles"
          className="transition-colors duration-300 ease-in-out hover:text-main-accent-light dark:hover:text-main-accent rounded-md text-sx"
        >
          Articles
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
